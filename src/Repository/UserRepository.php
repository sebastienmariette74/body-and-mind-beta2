<?php

namespace App\Repository;

use App\Entity\User;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\QueryBuilder;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\Security\Core\Exception\UnsupportedUserException;
use Symfony\Component\Security\Core\User\PasswordAuthenticatedUserInterface;
use Symfony\Component\Security\Core\User\PasswordUpgraderInterface;

/**
 * @extends ServiceEntityRepository<User>
 *
 * @method User|null find($id, $lockMode = null, $lockVersion = null)
 * @method User|null findOneBy(array $criteria, array $orderBy = null)
 * @method User[]    findAll()
 * @method User[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UserRepository extends ServiceEntityRepository implements PasswordUpgraderInterface
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, User::class);
    }

    public function add(User $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(User $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    /**
     * Used to upgrade (rehash) the user's password automatically over time.
     */
    public function upgradePassword(PasswordAuthenticatedUserInterface $user, string $newHashedPassword): void
    {
        if (!$user instanceof User) {
            throw new UnsupportedUserException(sprintf('Instances of "%s" are not supported.', \get_class($user)));
        }

        $user->setPassword($newHashedPassword);

        $this->add($user, true);
    }

    public function findAllActivatedPartners(): array
    {
        return $this->createQueryBuilder('u')
            ->where('u.isActivated = true')
            ->getQuery()
            ->getResult();
    }

    public function findAllPartners(): array
    {
        return $this->createQueryBuilder('u')
            ->where('u.roles LIKE :role')
            ->setParameter('role', '%"' . 'ROLE_PARTNER' . '"%')
            ->getQuery()
            ->getResult();
    }
    public function findAllPartnersByRole($role): array
    {
        return $this->createQueryBuilder('u')
            //    ->where('u.partner is null ')   
            ->where('u.roles = :role ')
            //    ->andWhere('u.address is not null')
            ->setParameter('role', $role)
            ->getQuery()
            ->getResult();
    }
    public function findAllPartnersActivated(): array
    {
        return $this->createQueryBuilder('u')
            ->where('u.isActivated = true')
            ->andWhere('u.roles LIKE :role')
            ->setParameter('role', '%"' . 'ROLE_PARTNER' . '"%')
            ->getQuery()
            ->getResult();
    }
    public function findAllPartnersDisabled(): array
    {
        return $this->createQueryBuilder('u')
            ->where('u.isActivated = false')
            ->andWhere('u.roles LIKE :role')
            ->setParameter('role', '%"' . 'ROLE_PARTNER' . '"%')
            ->getQuery()
            ->getResult();
    }

    public function findAllStructures(): array
    {
        return $this->createQueryBuilder('u')
            ->where('u.roles LIKE :role')
            ->setParameter('role', '%"' . 'ROLE_STRUCTURE' . '"%')
            ->getQuery()
            ->getResult();
    }
    public function findAllStructuresActivated(): array
    {
        return $this->createQueryBuilder('u')
            ->where('u.isActivated = true')
            ->andWhere('u.roles LIKE :role')
            ->setParameter('role', '%"' . 'ROLE_STRUCTURE' . '"%')
            ->getQuery()
            ->getResult();
    }
    public function findAllStructuresDisabled(): array
    {
        return $this->createQueryBuilder('u')
            ->where('u.isActivated = false')
            ->andWhere('u.roles LIKE :role')
            ->setParameter('role', '%"' . 'ROLE_STRUCTURE' . '"%')
            ->getQuery()
            ->getResult();
    }

    public function findAllStructuresByPartner($id): array
    {
        return $this->createQueryBuilder('u')
            ->where('u.partner = :id')
            ->setParameter('id', $id)
            ->getQuery()
            ->getResult();
    }





    //    public function findOneBySomeField($value): ?User
    //    {
    //        return $this->createQueryBuilder('u')
    //            ->andWhere('u.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->getQuery()
    //            ->getOneOrNullResult()
    //        ;
    //    }
}
