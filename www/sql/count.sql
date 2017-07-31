DROP TABLE IF EXISTS `howmany_count`;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `howmany_count` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `games` int(11) NOT NULL DEFAULT '0',
  `plays` int(11) NOT NULL DEFAULT '0',
  `date_created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=0 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
