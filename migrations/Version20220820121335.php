<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220820121335 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE module DROP FOREIGN KEY FK_C242628AF223875');
        $this->addSql('DROP INDEX IDX_C242628AF223875 ON module');
        $this->addSql('ALTER TABLE module DROP user_module_id');
        $this->addSql('ALTER TABLE user DROP FOREIGN KEY FK_8D93D649AF223875');
        $this->addSql('DROP INDEX IDX_8D93D649AF223875 ON user');
        $this->addSql('ALTER TABLE user DROP user_module_id, CHANGE name name VARCHAR(50) DEFAULT NULL, CHANGE reset_token reset_token VARCHAR(100) NOT NULL');
        $this->addSql('ALTER TABLE user_module MODIFY id INT NOT NULL');
        $this->addSql('DROP INDEX `primary` ON user_module');
        $this->addSql('ALTER TABLE user_module ADD user_id INT NOT NULL, ADD module_id INT NOT NULL, DROP id');
        $this->addSql('ALTER TABLE user_module ADD CONSTRAINT FK_69763D15A76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE user_module ADD CONSTRAINT FK_69763D15AFC2B591 FOREIGN KEY (module_id) REFERENCES module (id)');
        $this->addSql('CREATE INDEX IDX_69763D15A76ED395 ON user_module (user_id)');
        $this->addSql('CREATE INDEX IDX_69763D15AFC2B591 ON user_module (module_id)');
        $this->addSql('ALTER TABLE user_module ADD PRIMARY KEY (user_id, module_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE module ADD user_module_id INT NOT NULL');
        $this->addSql('ALTER TABLE module ADD CONSTRAINT FK_C242628AF223875 FOREIGN KEY (user_module_id) REFERENCES user_module (id) ON UPDATE NO ACTION ON DELETE NO ACTION');
        $this->addSql('CREATE INDEX IDX_C242628AF223875 ON module (user_module_id)');
        $this->addSql('ALTER TABLE user ADD user_module_id INT NOT NULL, CHANGE name name VARCHAR(255) NOT NULL, CHANGE reset_token reset_token VARCHAR(100) DEFAULT NULL');
        $this->addSql('ALTER TABLE user ADD CONSTRAINT FK_8D93D649AF223875 FOREIGN KEY (user_module_id) REFERENCES user_module (id) ON UPDATE NO ACTION ON DELETE NO ACTION');
        $this->addSql('CREATE INDEX IDX_8D93D649AF223875 ON user (user_module_id)');
        $this->addSql('ALTER TABLE user_module DROP FOREIGN KEY FK_69763D15A76ED395');
        $this->addSql('ALTER TABLE user_module DROP FOREIGN KEY FK_69763D15AFC2B591');
        $this->addSql('DROP INDEX IDX_69763D15A76ED395 ON user_module');
        $this->addSql('DROP INDEX IDX_69763D15AFC2B591 ON user_module');
        $this->addSql('ALTER TABLE user_module ADD id INT AUTO_INCREMENT NOT NULL, DROP user_id, DROP module_id, DROP PRIMARY KEY, ADD PRIMARY KEY (id)');
    }
}
