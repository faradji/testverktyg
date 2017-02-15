# ************************************************************
# Sequel Pro SQL dump
# Version 4541
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Värd: 127.0.0.1 (MySQL 5.7.16)
# Databas: Testgrejer
# Genereringstid: 2017-02-15 14:29:20 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Tabelldump answers
# ------------------------------------------------------------

DROP TABLE IF EXISTS `answers`;

CREATE TABLE `answers` (
  `idAnswers` int(11) NOT NULL COMMENT 'Yes=True\nNo=False',
  `studentAnswer` tinyint(1) NOT NULL,
  PRIMARY KEY (`idAnswers`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Tabelldump answers_has_Users
# ------------------------------------------------------------

DROP TABLE IF EXISTS `answers_has_Users`;

CREATE TABLE `answers_has_Users` (
  `answers_idAnswers` int(11) NOT NULL,
  `users_idUsers` int(11) NOT NULL,
  PRIMARY KEY (`answers_idAnswers`,`users_idUsers`),
  KEY `fk_Answers_has_Users_Users1_idx` (`users_idUsers`),
  KEY `fk_Answers_has_Users_Answers1_idx` (`answers_idAnswers`),
  CONSTRAINT `fk_Answers_has_Users_Answers1` FOREIGN KEY (`answers_idAnswers`) REFERENCES `answers` (`idAnswers`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_Answers_has_Users_Users1` FOREIGN KEY (`users_idUsers`) REFERENCES `users` (`idUsers`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Tabelldump questions
# ------------------------------------------------------------

DROP TABLE IF EXISTS `questions`;

CREATE TABLE `questions` (
  `idQuestions` int(11) NOT NULL AUTO_INCREMENT,
  `questionText` varchar(150) NOT NULL,
  `correctAnswer` tinyint(1) NOT NULL COMMENT 'Yes=true\nNo=false',
  PRIMARY KEY (`idQuestions`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `questions` WRITE;
/*!40000 ALTER TABLE `questions` DISABLE KEYS */;

INSERT INTO `questions` (`idQuestions`, `questionText`, `correctAnswer`)
VALUES
	(1,'Är ödlor små?',1),
	(2,'Behöver du muskler för att kunna röra dig?',1),
	(3,'Kan du borsta tänderna med en sko?',0),
	(4,'Kan en ryggsäck bli förkyld?',0),
	(5,'Kan papegojor prata?',1),
	(6,'Är chips salta?',1),
	(7,'Kan du tina mat i en frys?',0),
	(8,'Går det 60 minuter på en timme?',1),
	(9,'Kan en fisk leva på land?',0),
	(10,'Är grönsaker hälsosamma?',1),
	(11,'Kan du kratta löv med en hammare?',0),
	(12,'Kan du köpa ett dussin ägg?',1),
	(13,'Kan du skriva på en whiteboard med blyertspenna?',0);

/*!40000 ALTER TABLE `questions` ENABLE KEYS */;
UNLOCK TABLES;


# Tabelldump questions_has_Users
# ------------------------------------------------------------

DROP TABLE IF EXISTS `questions_has_Users`;

CREATE TABLE `questions_has_Users` (
  `questions_idQuestions` int(11) NOT NULL,
  `users_idUsers` int(11) NOT NULL,
  PRIMARY KEY (`questions_idQuestions`,`users_idUsers`),
  KEY `fk_Questions_has_Users_Users1_idx` (`users_idUsers`),
  KEY `fk_Questions_has_Users_Questions_idx` (`questions_idQuestions`),
  CONSTRAINT `fk_Questions_has_Users_Questions` FOREIGN KEY (`questions_idQuestions`) REFERENCES `questions` (`idQuestions`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_Questions_has_Users_Users1` FOREIGN KEY (`users_idUsers`) REFERENCES `users` (`idUsers`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Tabelldump users
# ------------------------------------------------------------

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `idUsers` int(11) NOT NULL AUTO_INCREMENT COMMENT 'userType:\nStudent=0\nTeacher=1\nAdmin=2',
  `firstName` varchar(80) NOT NULL,
  `lastName` varchar(80) NOT NULL,
  `email` varchar(80) NOT NULL,
  `class` varchar(80) DEFAULT NULL,
  `userType` int(11) DEFAULT NULL,
  PRIMARY KEY (`idUsers`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;

INSERT INTO `users` (`idUsers`, `firstName`, `lastName`, `email`, `class`, `userType`)
VALUES
	(1,'Ali','Faradji','ali@gmail.com','Java',0),
	(2,'Louise','Ahokas','louise@gmail.com','Java',0),
	(3,'Dijana','Popovic','dijana@gmail.com','C#',0),
	(4,'Magnus','Norlin','magnus@gmail.com',NULL,1),
	(5,'Masoud','Haya','masoud@gmail.com',NULL,1),
	(6,'Henrik','Rosqvist','henrik@gmail.com','Java',0);

/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
