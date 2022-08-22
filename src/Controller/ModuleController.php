<?php

namespace App\Controller;

use App\Entity\Module;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\ModuleRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\String\Slugger\SluggerInterface;
use App\Entity\User;
use App\Entity\UserModule;
use App\Form\ModuleType;
use App\Repository\UserModuleRepository;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;



#[
Route('/modules', name: 'modules_'),
IsGranted("ROLE_ADMIN")
]
class ModuleController extends AbstractController
{

    public function __construct(ModuleRepository $moduleRepository, EntityManagerInterface $em)
    {
        $this->moduleRepository = $moduleRepository;
        $this->em = $em;
    }
    
    #[Route('/', name: '')]
    public function index(): Response
    {

        $modules = $this->moduleRepository->findAll();


        return $this->render('modules/index.html.twig', compact('modules'));;
    }

    #[Route('/{id}/modifications', name: 'edit')]
    public function edit(Module $module, Request $request, SluggerInterface $slugger): Response
    {
        // $this->denyAccessUnlessGranted('ROLE_ADMIN');
        
        $form = $this->createForm(ModuleType::class, $module);
        $form->remove('slug');
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            
            $module->setSlug($slugger->slug($module->getName())->lower());
            $this->em->persist($module);
            $this->em->flush();
            return $this->redirectToRoute('modules_');
        }

        return $this->renderForm('modules/edit.html.twig',
          [
            'current_menu' => 'partner',
            'module' => $module,
            'form' => $form
        ]);
    }

    #[Route('/ajouter-un-module', name: 'add')]
    public function add(Request $request, SluggerInterface $slugger): Response
    {
        // $this->denyAccessUnlessGranted('ROLE_ADMIN');

        $module = new Module();
        
        $form = $this->createForm(ModuleType::class, $module);
        $form->remove('slug');
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            
            $module->setSlug($slugger->slug($module->getName())->lower());
            $this->em->persist($module);
            $this->em->flush();
            return $this->redirectToRoute('modules_');
        }

        return $this->renderForm('modules/add.html.twig',  [
            'current_menu' => 'partner',
            'form' => $form
        ]);
    }

    #[Route('/{slug}/{id}', name: 'delete')]
    public function delete(Module $module)
    {
        // $this->denyAccessUnlessGranted('ROLE_ADMIN');
        
        $this->em->remove($module);
        $this->em->flush();

        return $this->redirectToRoute('modules_');
    }
}
