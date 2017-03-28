CREATE TABLE `Interactive`.`howmany_QUIZSLUG` ( `id` INT NOT NULL AUTO_INCREMENT ,
 `ip` VARCHAR(20) NULL ,
 `datetime` TIMESTAMP on update CURRENT_TIMESTAMP() NOT NULL ,
 `correct` INT NULL DEFAULT '0',
 `answer_times` VARCHAR(150) NULL,
 UNIQUE `id` (`id`)) ENGINE = InnoDB;
