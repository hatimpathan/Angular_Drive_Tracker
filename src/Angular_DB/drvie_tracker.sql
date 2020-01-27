-- MySQL dump 10.13  Distrib 8.0.15, for Win64 (x86_64)
--
-- Host: localhost    Database: driver_tracker
-- ------------------------------------------------------
-- Server version	8.0.15

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `drive`
--

DROP TABLE IF EXISTS `drive`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `drive` (
  `DID` int(11) NOT NULL AUTO_INCREMENT,
  `COMPANY_NAME` varchar(45) DEFAULT NULL,
  `NO_OF_RSRCS` int(11) DEFAULT NULL,
  `EXP_REQ` tinyint(4) DEFAULT NULL,
  `CTC` float DEFAULT NULL,
  `JOIN_CRT` tinyint(4) DEFAULT NULL,
  `BOND` float DEFAULT NULL,
  `POSITION` tinyint(4) DEFAULT NULL,
  `FOLLOWUP` date DEFAULT NULL,
  `EDU_CRT` tinyint(4) DEFAULT NULL,
  `CUR_STATUS` tinyint(4) DEFAULT NULL,
  `NXT_ACT` tinyint(4) DEFAULT NULL,
  `NXT_DATE` timestamp NULL DEFAULT NULL,
  `PS_YR_REQ` int(11) DEFAULT NULL,
  `GAP_REQ` tinyint(4) DEFAULT NULL,
  `CREATION_DATE` date DEFAULT NULL,
  `TPOID` int(11) DEFAULT NULL,
  PRIMARY KEY (`DID`),
  KEY `TPOID_key_idx` (`TPOID`),
  CONSTRAINT `TPOID_key` FOREIGN KEY (`TPOID`) REFERENCES `tpo` (`TPOID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `drive`
--

LOCK TABLES `drive` WRITE;
/*!40000 ALTER TABLE `drive` DISABLE KEYS */;
/*!40000 ALTER TABLE `drive` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `drive_stud`
--

DROP TABLE IF EXISTS `drive_stud`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `drive_stud` (
  `DSID` int(11) NOT NULL AUTO_INCREMENT,
  `DID` int(11) DEFAULT NULL,
  `ST_ID` int(11) DEFAULT NULL,
  `CREATION_DATE` timestamp NULL DEFAULT NULL,
  `TPOID` int(11) DEFAULT NULL,
  PRIMARY KEY (`DSID`),
  KEY `DID_key_idx` (`DID`),
  KEY `TPOID_key_idx` (`TPOID`),
  KEY `TPOID_FR_key_idx` (`TPOID`),
  CONSTRAINT `DID_key` FOREIGN KEY (`DID`) REFERENCES `drive` (`DID`),
  CONSTRAINT `TPOID_FR_key` FOREIGN KEY (`TPOID`) REFERENCES `tpo` (`TPOID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `drive_stud`
--

LOCK TABLES `drive_stud` WRITE;
/*!40000 ALTER TABLE `drive_stud` DISABLE KEYS */;
/*!40000 ALTER TABLE `drive_stud` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `drive_stud_track`
--

DROP TABLE IF EXISTS `drive_stud_track`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `drive_stud_track` (
  `DSR_ID` int(11) NOT NULL AUTO_INCREMENT,
  `DID` int(11) DEFAULT NULL,
  `STID` int(11) DEFAULT NULL,
  `TPOID` int(11) DEFAULT NULL,
  `SURVIVED_STATUS` tinyint(4) DEFAULT NULL,
  `CREATION_DATE` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`DSR_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `drive_stud_track`
--

LOCK TABLES `drive_stud_track` WRITE;
/*!40000 ALTER TABLE `drive_stud_track` DISABLE KEYS */;
/*!40000 ALTER TABLE `drive_stud_track` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `drive_track`
--

DROP TABLE IF EXISTS `drive_track`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `drive_track` (
  `TR_ID` int(11) NOT NULL AUTO_INCREMENT,
  `DID` int(11) DEFAULT NULL,
  `Status` tinyint(4) DEFAULT NULL,
  `CREATION_DATE` timestamp NULL DEFAULT NULL,
  `TPOID` int(11) DEFAULT NULL,
  `REMARK` varchar(45) DEFAULT NULL,
  `No OF STUDENTS` int(11) DEFAULT NULL,
  PRIMARY KEY (`TR_ID`),
  KEY `TPOIDFR_KEY_idx` (`TPOID`),
  CONSTRAINT `TPOIDFR_KEY` FOREIGN KEY (`TPOID`) REFERENCES `tpo` (`TPOID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `drive_track`
--

LOCK TABLES `drive_track` WRITE;
/*!40000 ALTER TABLE `drive_track` DISABLE KEYS */;
/*!40000 ALTER TABLE `drive_track` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tpo`
--

DROP TABLE IF EXISTS `tpo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `tpo` (
  `TPOID` int(11) NOT NULL AUTO_INCREMENT,
  `TPO_NAME` varchar(45) DEFAULT NULL,
  `TPO_EMAIL` varchar(45) DEFAULT NULL,
  `TPO_USERNAME` varchar(45) DEFAULT NULL,
  `TPO_PASSWORD` varchar(45) DEFAULT NULL,
  `CREATION_DATE` timestamp NULL DEFAULT NULL,
  `ROLE` tinyint(4) DEFAULT NULL,
  PRIMARY KEY (`TPOID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tpo`
--

LOCK TABLES `tpo` WRITE;
/*!40000 ALTER TABLE `tpo` DISABLE KEYS */;
/*!40000 ALTER TABLE `tpo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'driver_tracker'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-01-02 14:59:07
