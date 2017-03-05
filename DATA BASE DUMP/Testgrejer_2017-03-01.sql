# ************************************************************
# Sequel Pro SQL dump
# Version 4541
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Värd: 127.0.0.1 (MySQL 5.7.16)
# Databas: Testgrejer
# Genereringstid: 2017-03-01 10:49:33 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Tabelldump Questions
# ------------------------------------------------------------

DROP TABLE IF EXISTS `Questions`;

CREATE TABLE `Questions` (
  `idQuestions` int(11) NOT NULL,
  `QuestionText` varchar(180) DEFAULT NULL,
  `CorrectAnswer` tinyint(45) DEFAULT NULL,
  `Tests_idTests` int(11) NOT NULL,
  `choice_no` varchar(11) DEFAULT 'No',
  `choice_yes` varchar(11) DEFAULT 'Yes',
  PRIMARY KEY (`idQuestions`),
  KEY `fk_Questions_Tests1_idx` (`Tests_idTests`),
  CONSTRAINT `fk_Questions_Tests1` FOREIGN KEY (`Tests_idTests`) REFERENCES `Tests` (`idTests`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `Questions` WRITE;
/*!40000 ALTER TABLE `Questions` DISABLE KEYS */;

INSERT INTO `Questions` (`idQuestions`, `QuestionText`, `CorrectAnswer`, `Tests_idTests`, `choice_no`, `choice_yes`)
VALUES
	(1,'Are lizards small?',1,1,'No','Yes'),
	(2,'Are apples red fruit?',1,1,'No','Yes'),
	(3,'Can pigs walk on two feek?',0,1,'No','Yes'),
	(4,'Can you brush your teeth with a shoe?',0,1,'No','Yes'),
	(5,'Can you stretch a rock?',0,1,'No','Yes'),
	(6,'Can you grow a mustache on your foot?',0,2,'No','Yes'),
	(7,'Can a backpack get a cold?',0,2,'No','Yes'),
	(8,'Are Spanish and German different languages?',1,2,'No','Yes'),
	(9,'Can you teach a cat to talk?',0,2,'No','Yes'),
	(10,'Can you ride a camel?',1,2,'No','Yes');

/*!40000 ALTER TABLE `Questions` ENABLE KEYS */;
UNLOCK TABLES;


# Tabelldump Tests
# ------------------------------------------------------------

DROP TABLE IF EXISTS `Tests`;

CREATE TABLE `Tests` (
  `idTests` int(11) NOT NULL,
  PRIMARY KEY (`idTests`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `Tests` WRITE;
/*!40000 ALTER TABLE `Tests` DISABLE KEYS */;

INSERT INTO `Tests` (`idTests`)
VALUES
	(1),
	(2);

/*!40000 ALTER TABLE `Tests` ENABLE KEYS */;
UNLOCK TABLES;


# Tabelldump Tests_has_Users
# ------------------------------------------------------------

DROP TABLE IF EXISTS `Tests_has_Users`;

CREATE TABLE `Tests_has_Users` (
  `Tests_idTests` int(11) NOT NULL,
  `Users_idUsers` int(11) NOT NULL,
  PRIMARY KEY (`Tests_idTests`,`Users_idUsers`),
  KEY `fk_Tests_has_Users_Users1_idx` (`Users_idUsers`),
  KEY `fk_Tests_has_Users_Tests1_idx` (`Tests_idTests`),
  CONSTRAINT `fk_Tests_has_Users_Tests1` FOREIGN KEY (`Tests_idTests`) REFERENCES `Tests` (`idTests`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_Tests_has_Users_Users1` FOREIGN KEY (`Users_idUsers`) REFERENCES `Users` (`idUsers`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Tabelldump Users
# ------------------------------------------------------------

DROP TABLE IF EXISTS `Users`;

CREATE TABLE `Users` (
  `idUsers` int(11) NOT NULL,
  `firstName` varchar(45) DEFAULT NULL,
  `lastName` varchar(45) DEFAULT NULL,
  `emailAddress` varchar(45) DEFAULT NULL,
  `class` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idUsers`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `Users` WRITE;
/*!40000 ALTER TABLE `Users` DISABLE KEYS */;

INSERT INTO `Users` (`idUsers`, `firstName`, `lastName`, `emailAddress`, `class`)
VALUES
	(1,'Louise','Ahokas','louise@gmail.com','Java'),
	(2,'Ali','Faradji','ali@gmail.com','Java'),
	(3,'Dijana','Popovic','dijana@gmail.com','CSS'),
	(4,'Masoud','Haya','masoud@gmail.com','CSS'),
	(5,'Magnus','Norlin','magnus@gmail.com','Java');

/*!40000 ALTER TABLE `Users` ENABLE KEYS */;
UNLOCK TABLES;


# Tabelldump Users_Responses_To_Questions
# ------------------------------------------------------------

DROP TABLE IF EXISTS `Users_Responses_To_Questions`;

CREATE TABLE `Users_Responses_To_Questions` (
  `Users_idUsers` int(11) DEFAULT NULL,
  `Questions_idQuestions` int(11) DEFAULT NULL,
  `user_answer` tinyint(180) DEFAULT NULL,
  `user_choice_no` varchar(11) DEFAULT 'No',
  `user_choice_yes` varchar(11) DEFAULT 'Yes',
  `score` varchar(45) DEFAULT NULL,
  KEY `fk_Users_has_Questions_Questions1_idx` (`Questions_idQuestions`),
  KEY `fk_Users_has_Questions_Users_idx` (`Users_idUsers`),
  CONSTRAINT `fk_Users_has_Questions_Questions1` FOREIGN KEY (`Questions_idQuestions`) REFERENCES `Questions` (`idQuestions`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_Users_has_Questions_Users` FOREIGN KEY (`Users_idUsers`) REFERENCES `Users` (`idUsers`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `Users_Responses_To_Questions` WRITE;
/*!40000 ALTER TABLE `Users_Responses_To_Questions` DISABLE KEYS */;

INSERT INTO `Users_Responses_To_Questions` (`Users_idUsers`, `Questions_idQuestions`, `user_answer`, `user_choice_no`, `user_choice_yes`, `score`)
VALUES
	(1,1,1,'No','Yes','0/10'),
	(1,2,1,'No','Yes','1/10'),
	(1,3,0,'No','Yes','2/10'),
	(1,4,1,'No','Yes','3/10'),
	(1,5,1,'No','Yes','3/10'),
	(1,6,1,'No','Yes','3/10'),
	(1,7,1,'No','Yes','3/10'),
	(1,8,1,'No','Yes','3/10'),
	(1,9,1,'No','Yes','4/10'),
	(1,10,1,'No','Yes','4/10'),
	(1,NULL,NULL,'No','Yes','4/10');

/*!40000 ALTER TABLE `Users_Responses_To_Questions` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
