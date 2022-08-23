<?php

namespace App\Controller;

use App\Entity\Module;
use App\Entity\User;
use App\Form\RegisterStructureType;
use App\Form\RegistrationType;
use App\Repository\UserModuleRepository;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\User\UserInterface;

#[Route('/structures', name: 'structures_')]
class StructureController extends AbstractController
{
    public function __construct(UserRepository $userRepository, UserModuleRepository $userModuleRepository, private EntityManagerInterface $em)
    {
        $this->userRepository = $userRepository;
        $this->userModuleRepository = $userModuleRepository;
    }
    
    #[Route('/', name: '')]
    public function index(Request $request): Response
    {
        $this->denyAccessUnlessGranted('ROLE_ADMIN');

        $structures = $this->userRepository->findAllStructures();
        // dd($structures);

        if ($this->isGranted('ROLE_ADMIN')) {
            $role = "admin";
        } else {
            $role = "";
        }        

        if($request->isXmlHttpRequest()){
            return new JsonResponse([
                "content" => $this->renderView("structure/_content.html.twig", [
                    'current_menu' => 'partner',
                    'structures' => $structures,
                    'role' => $role,
                ])
            ]);
        }
        
        return $this->render('structure/index.html.twig', [
            'current_menu' => 'structure',
            'structures' => $structures,
            'role' => $role,
        ]);
    }

    #[Route('/all', name: 'all')]
    public function all(): Response
    {
        $structures = $this->userRepository->findAllStructures();

        if ($this->isGranted('ROLE_ADMIN')) {
            $role = "admin";
        } else {
            $role = "";
        }

        return $this->render('structure/_content.html.twig', [
            'current_menu' => 'partner',
            'structures' => $structures,
            'role' => $role,
        ]);
    }

    #[Route('/actives', name: 'activated')]
    public function activated(): Response
    {
        $structures = $this->userRepository->findAllStructuresActivated();

        if ($this->isGranted('ROLE_ADMIN')) {
            $role = "admin";
        } else {
            $role = "";
        }

        return $this->render('structure/_content.html.twig', [
            'current_menu' => 'partner',
            'structures' => $structures,
            'role' => $role,
        ]);
    }

    #[Route('/desactives', name: 'disabled')]
    public function diasble(): Response
    {
        $structures = $this->userRepository->findAllStructuresDisabled();

        if ($this->isGranted('ROLE_ADMIN')) {
            $role = "admin";
        } else {
            $role = "";
        }

        return $this->render('structure/_content.html.twig', [
            'current_menu' => 'partner',
            'structures' => $structures,
            'role' => $role,
        ]);
    }

    #[Route('/{slug}', name: 'details')]
    public function show(User $structure, UserInterface $user): Response    
    {

        if($user->getUserIdentifier() === $structure->getEmail() || $user === $structure->getPartner() || $this->isGranted('ROLE_PARTNER')){
            $structureId = $structure->getId();
            $modules = $this->userModuleRepository->findModulesByUser($structureId);
    
            if ($this->isGranted('ROLE_ADMIN')) {
                $role = "admin";
            } else {
                $role = "";
            }
            $partner = $structure->getPartner();
            // dd($structure);

            return $this->render('structure/details.html.twig',  [
                'current_menu' => 'partner',
                'structure' => $structure,
                'modules' => $modules,
                'role' => $role,
                'partner' => $partner,
            ]);
        } else {
            return $this->render('bundles/TwigBundle/Exception/error404.html.twig');
        }
        
    }

    #[Route('/{slug}/active-user', name: 'activate_user')]
    public function activateUser (User $partner): Response
    {
        $this->denyAccessUnlessGranted('ROLE_ADMIN');

        $partner->setIsActivated(($partner->isIsActivated()) ? false:true);
        $this->em->persist($partner);
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

    #[Route('/{slug}/active', name: 'activate')]
    public function activer (User $partner): Response
    {
        $partner->setIsActivated(($partner->isIsActivated()) ? false:true);
        $this->em->persist($partner);
        $this->em->flush();

        return new Response ('true');
    }

    #[Route('/{slug}/modifications', name: 'edit')]
    public function edit(User $partner, Request $request): Response
    {
        $form = $this->createForm(RegistrationType::class, $partner);
        $form->remove('plainPassword');
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->em->flush();
            return $this->redirectToRoute('structures_');
        }

        return $this->renderForm('structure/edit.html.twig',  [
            'current_menu' => 'partner',
            'partner' => $partner,
            'form' => $form
        ]);
    }

    #[Route('/{slug}/{id}', name: 'delete')]
    public function delete(User $partner)
    {
        $this->em->remove($partner);
        $this->em->flush();

        return $this->redirectToRoute('structures_');
    }
}
