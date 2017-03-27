CREATE TABLE `Interactive`.`howmany_QUIZSLUG` ( `id` INT NOT NULL AUTO_INCREMENT ,
 `ip` VARCHAR(20) NOT NULL ,
 `datetime` TIMESTAMP on update CURRENT_TIMESTAMP() NOT NULL ,
 `correct` INT NOT NULL DEFAULT '0' ,
 UNIQUE `id` (`id`)) ENGINE = InnoDB;
