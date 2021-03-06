CREATE TABLE `Interactive`.`howmany_answers` ( `id` INT NOT NULL AUTO_INCREMENT ,
 `quiz_id` INT NOT NULL,
 `ip` VARCHAR(20) NULL ,
 `datetime` TIMESTAMP on update CURRENT_TIMESTAMP() NOT NULL ,
 `correct` INT NULL DEFAULT '0',
 `answer_times` VARCHAR(150) NULL,
 INDEX `QUIZ` (`quiz_id`),
 UNIQUE `INDEX` (`id`)) ENGINE = InnoDB;
