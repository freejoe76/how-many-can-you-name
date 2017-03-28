CREATE TABLE `howmany` (
  `quiz_id` int(10) NOT NULL AUTO_INCREMENT,
  `count` int(10) NOT NULL,
  `max` FLOAT NOT NULL,
  `median` FLOAT NOT NULL,
  `mode` FLOAT NOT NULL,
  `mean` FLOAT NOT NULL,
UNIQUE `INDEX` (`quiz_id`)) ENGINE=InnoDB;
