<?php

namespace App\Controller;

use App\Entity\Module;
use App\Entity\User;
use App\Entity\UserModule;
use App\Form\RegisterPartnerType;
use App\Form\RegisterStructureType;
use App\Form\RegistrationType;
use App\Repository\UserModuleRepository;
use App\Repository\UserRepository;
use App\Service\JWTService;
use App\Service\SendMailService;
use Doctrine\ORM\EntityManagerInterface;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\PasswordHasher\PasswordHasherInterface;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\String\Slugger\SluggerInterface;

#[
Route('/partenaires', name: 'partners_')
]
// #[
// Route('/partenaires', name: 'partners_'),
// IsGranted("ROLE_USER")
// ]
class PartnerController extends AbstractController
{
    
    public function __construct(UserRepository $userRepository,EntityManagerInterface $em, UserModuleRepository $userModuleRepository){
    {
        $this->userRepository = $userRepository;
        $this->userModuleRepository = $userModuleRepository;
        $this->em = $em;
    }}    
    
    
    #[Route('/', name: '')]
    public function index(Request $request): Response
    {
        // dd($data);

        $role = "ROLE_PARTNER";
        $this->denyAccessUnlessGranted('ROLE_ADMIN');
        
        $partners = $this->userRepository->findAllPartners();

        if ($this->isGranted('ROLE_ADMIN')) {
            $role = "admin";
        } else {
            $role = "";
        }

        if($request->isXmlHttpRequest()){
            return new JsonResponse([
                "content" => $this->renderView("partner/_content.html.twig", [
                    "current_menu" => "partner",
                    "partners" => $partners,
                    "role" => $role,
                ])
            ]);
        }
       
        
        return $this->render('partner/index.html.twig', [
            'current_menu' => 'partner',
            'partners' => $partners,
            'role' => $role,
        ]);
    }
    

    #[Route('/all', name: 'all')]
    public function all(): Response
    {
        $partners = $this->userRepository->findAllPartners();

        if ($this->isGranted('ROLE_ADMIN')) {
            $role = "admin";
        } else {
            $role = "";
        }

        return $this->render('partner/_content.html.twig', [
            'current_menu' => 'partner',
            'partners' => $partners,
            'role' => $role,
        ]);
    }
    #[Route('/actives', name: 'activated')]
    public function activated(): Response
    {

        $partners = $this->userRepository->findAllPartnersActivated();

        if ($this->isGranted('ROLE_ADMIN')) {
            $role = "admin";
        } else {
            $role = "";
        }

        return $this->render('partner/_content.html.twig', [
            'current_menu' => 'partner',
            'partners' => $partners,
            'role' => $role,
        ]);
    }

    #[Route('/desactives', name: 'disabled')]
    public function diasble(): Response
    {
        
        $partners = $this->userRepository->findAllPartnersDisabled();

        if ($this->isGranted('ROLE_ADMIN')) {
            $role = "admin";
        } else {
            $role = "";
        }

        return $this->render('partner/_content.html.twig', [
            'current_menu' => 'partner',
            'partners' => $partners,
            'role' => $role,
        ]);
    }
    
    
    #[Route('/{slug}', name: 'details')]
    public function show(User $partner, UserInterface $user): Response
    {
        $this->denyAccessUnlessGranted('ROLE_PARTNER');
        
        if($user->getUserIdentifier() === $partner->getEmail() || $this->isGranted('ROLE_ADMIN')){

            // dd($partner->getRoles()[0] === 'ROLE_ADMIN');


            $userId = $partner->getId();
            $structures = $this->userRepository->findAllStructuresByPartner($userId);
            $modules = $this->userModuleRepository->findModulesByUser($userId);
            
            if ($this->isGranted('ROLE_ADMIN')) {
                $role = "admin";
            } else {
                $role = "";
            }        
            
            return $this->render('partner/details.html.twig',  [
                'current_menu' => 'partner',
                'partner' => $partner,
                'structures' => $structures,
                'modules' => $modules,
                'role' => $role,
            ]);
        } else {
            return $this->render('bundles/TwigBundle/Exception/error404.html.twig');
        }
    }        

    #[Route('/{slug}/ajouter-une-structure', name: 'add_structure')]
    public function addStructure(
        User $partner, 
        Request $request,
        UserPasswordHasherInterface $userPasswordHasher,
        SluggerInterface $slugger,
        EntityManagerInterface $entityManager,
        string $slug,
        JWTService $jwt,
        SendMailService $mail,
        UserModuleRepository $userModuleRepository
    ): Response
    {
        $this->denyAccessUnlessGranted('ROLE_ADMIN');

        $structure = new User();
        $form = $this->createForm(RegistrationType::class, $structure);          
        $form->remove('slug');
        $form->remove('partner');
        $form->remove('isActivated');

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $structure->setRoles(['ROLE_STRUCTURE']);
            $structure->setSlug($slugger->slug($structure->getName())->lower());
            $structure->setPassword(
                $userPasswordHasher->hashPassword(
                    $structure,
                    $form->get('plainPassword')->getData()
                )
            );
            $structure->setPartner($partner);

            $structure->setIsActivated($partner->isIsActivated() ? true:false);

            $modules = $userModuleRepository->findUserModulesByUser($partner->getid());
            $tableUserModule = [];
            foreach($modules as $module){
                $userModule = new UserModule();
                $userModule->setIsActivated($module->isIsActivated());
                $userModule->setUser($structure);
                $userModule->setModule($module->getModule());
                $tableUserModule[] = $userModule;
            }

            $entityManager->persist($structure);
            foreach($tableUserModule as $userModule){
                $entityManager->persist($userModule);
            }
            $entityManager->flush();

            // On génère le JWT de l'utilisateur
            // On crée le Header
            $header = [
                'typ' => 'JWT',
                'alg' => 'HS256'
            ];

            // On crée le Payload
            $payload = [
                'user_id' => $structure->getId()
            ];

            // On génère le token
            $token = $jwt->generate($header, $payload, $this->getParameter('app.jwtsecret'));

            $mail->send(
                'noreply@bodyandmind.fr',
                $partner->getEmail(),
                'Activation de votre compte sur le site Body & Mind',
                'register',
                compact('structure', 'token')
            );

            $structureName = $structure->getName();
            $subject = `Activation du compte de la salle de sport : ${structureName}`;
            $slug = $structure->getSlug();
            $url = $this->generateUrl('structures_details', ['slug' => $slug], UrlGeneratorInterface::ABSOLUTE_URL);

            $mail->send(
                'noreply@bodyandmind.fr',
                $partner->getEmail(),
                'Activation du compte de votre salle de sport',
                'info_partner',
                compact('structure', 'url', 'partner')
            );

            $this->addFlash('success', 'Emails envoyés avec succès');

            return $this->redirectToRoute('partners_details', ['slug' => $partner->getSlug()]);
              
        }        
        return $this->renderForm('partner/add_structure.html.twig',  [
            'current_menu' => 'partner',
            'structure' => $structure,
            'partner' => $partner,
            'form' => $form
        ]);
    }

    #[Route('/{slug}/active-user', name: 'activate_user')]
    public function activateUser (User $partner, UserRepository $userRepository): Response
    {
        $this->denyAccessUnlessGranted('ROLE_ADMIN');

        $partner->setIsActivated(($partner->isIsActivated()) ? false:true);
        $structures = $userRepository->findAllStructuresByPartner($partner->getId());
        $tableStructures = [];
        foreach($structures as $structure){
            $structure->setIsActivated(false);
            $tableStructures[] = $structure;
        }

        $this->em->persist($partner);
        foreach($tableStructures as $structure){
            $this->em->persist($structure);
        }
        $this->em->flush();

        return new Response ('<html><body>true</body></html>');
    }

    
    #[Route('/{slug}/{id}/active-module', name: 'activate_module')]
    public function activateModule (Module $module, string $slug, string $id) : Response
    {

        $module = $this->userModuleRepository->findModule($slug, $id);
        $module->setIsActivated(($module->isIsActivated()) ? false:true);
        $this->em->persist($module);
        $this->em->flush();

        return new Response ('true');
    }  

    #[Route('/{slug}/modifications', name: 'edit')]
    public function edit(
        User $partner, 
        Request $request, 
        SluggerInterface $slugger
    ): Response
    {
        $this->denyAccessUnlessGranted('ROLE_ADMIN');

        $form = $this->createForm(RegistrationType::class, $partner);
        $form->remove('plainPassword');
        $form->remove('partner');
        $form->remove('isActivated');
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            
            $partner->setSlug($slugger->slug($partner->getName())->lower());
            $this->em->persist($partner);
            $this->em->flush();
            return $this->redirectToRoute('partners_');
        }

        return $this->renderForm('partner/edit.html.twig',  [
            'current_menu' => 'partner',
            'partner' => $partner,
            'form' => $form
        ]);
    }

    #[Route('/{slug}/{id}', name: 'delete')]
    public function delete(User $partner)
    {
        $this->denyAccessUnlessGranted('ROLE_ADMIN');
        
        $this->em->remove($partner);
        $this->em->flush();

        return $this->redirectToRoute('partners_');
    }

    #[Route('/verif/{token}', name: 'verify_user')]
    public function verifyUser($token, JWTService $jwt, UserRepository $userRepository, EntityManagerInterface $em): Response
    {
        dd($token);
        //On vérifie si le token est valide, n'a pas expiré et n'a pas été modifié
        if($jwt->isValid($token) && !$jwt->isExpired($token) && $jwt->check($token, $this->getParameter('app.jwtsecret'))){
            // On récupère le payload
            $payload = $jwt->getPayload($token);

            // On récupère le user du token
            $user = $userRepository->find($payload['user_id']);

            //On vérifie que l'utilisateur existe et n'a pas encore activé son compte
            if($user && !$user->isVerified()){
                $user->setIsVerified(true);
                $em->flush($user);
                $this->addFlash('success', 'Utilisateur activé');
                return $this->redirectToRoute("structures_details", ['slug' => $user->getSlug()]);
            }
        }
        // Ici un problème se pose dans le token
        $this->addFlash('danger', 'Le token est invalide ou a expiré');
        return $this->redirectToRoute('app_login');
    }

    #[Route('/renvoiverif', name: 'resend_verif')]
    public function resendVerif(JWTService $jwt, SendMailService $mail, UserRepository $userRepository): Response
    {
        $user = $this->getUser();

        if(!$user){
            $this->addFlash('danger', 'Vous devez être connecté pour accéder à cette page');
            return $this->redirectToRoute('app_login');    
        }

        if($user->isVerified()){
            $this->addFlash('warning', 'Cet utilisateur est déjà activé');
            return $this->redirectToRoute("structures_details", ['slug' => $user->getSlug()]);    
        }

        // On génère le JWT de l'utilisateur
        // On crée le Header
        $header = [
            'typ' => 'JWT',
            'alg' => 'HS256'
        ];

        // On crée le Payload
        $payload = [
            'user_id' => $user->getId()
        ];

        // On génère le token
        $token = $jwt->generate($header, $payload, $this->getParameter('app.jwtsecret'));

        // On envoie un mail
        $mail->send(
            'no-reply@monsite.net',
            $user->getEmail(),
            'Activation de votre compte sur le site e-commerce',
            'register',
            compact('user', 'token')
        );
        $this->addFlash('success', 'Email de vérification envoyé');
        if ($this->isGranted('ROLE_PARTNER')) {
            return $this->redirectToRoute('partners_details', ['slug' => $user->getSlug()]);
        } else if($this->isGranted('ROLE_STRUCTURE')) {
            return $this->redirectToRoute('structures_details', ['slug' => $user->getSlug()]);
        };
    }
    
}
