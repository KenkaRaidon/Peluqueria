-- MariaDB dump 10.17  Distrib 10.4.14-MariaDB, for Win64 (AMD64)
--
-- Host: localhost    Database: peluqueria
-- ------------------------------------------------------
-- Server version	10.4.14-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `cita`
--

DROP TABLE IF EXISTS `cita`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cita` (
  `id_cita` int(11) NOT NULL AUTO_INCREMENT,
  `id_cliente` int(11) NOT NULL,
  `id_mascota` int(11) NOT NULL,
  `servicio` varchar(50) NOT NULL,
  `fecha_cita` date NOT NULL,
  `hora_cita` time NOT NULL,
  `status` varchar(45) DEFAULT 'EN PROCESO',
  PRIMARY KEY (`id_cita`),
  KEY `servicio` (`servicio`),
  KEY `cita_ibfk_1` (`id_cliente`),
  KEY `cita_ibfk_2` (`id_mascota`),
  KEY `status` (`status`),
  CONSTRAINT `cita_ibfk_1` FOREIGN KEY (`id_cliente`) REFERENCES `cliente_mascotas` (`id_cliente`) ON DELETE CASCADE,
  CONSTRAINT `cita_ibfk_2` FOREIGN KEY (`id_mascota`) REFERENCES `cliente_mascotas` (`id_mascota`) ON DELETE CASCADE,
  CONSTRAINT `servicio` FOREIGN KEY (`servicio`) REFERENCES `servicio_cita` (`servicio`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `status` FOREIGN KEY (`status`) REFERENCES `status_cita` (`status`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cita`
--

LOCK TABLES `cita` WRITE;
/*!40000 ALTER TABLE `cita` DISABLE KEYS */;
INSERT INTO `cita` VALUES (1,2,5,'BAÑO','2020-12-27','22:31:00','FINALIZADO'),(3,31,29,'CORTE DE UÑAS','2020-03-13','14:37:00','EN PROCESO'),(7,26,12,'CEPILLADO DE PELO','2020-12-30','13:39:00','EN PROCESO'),(8,2,19,'CORTE DE UÑAS','2020-12-29','14:05:00','EN PROCESO'),(9,26,12,'CORTE DE UÑAS','2021-02-10','04:05:00','EN PROCESO'),(12,2,19,'CEPILLADO DE PELO','2020-12-28','16:52:00','FINALIZADO'),(13,9,14,'CORTE DE PELO','2020-12-29','16:53:00','EN PROCESO'),(16,2,18,'CORTE DE UÑAS','2020-12-29','00:39:00','EN PROCESO'),(18,33,25,'BAÑO','2020-12-31','15:54:00','EN PROCESO');
/*!40000 ALTER TABLE `cita` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cliente`
--

DROP TABLE IF EXISTS `cliente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cliente` (
  `id_cliente` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  `apellido_paterno` varchar(45) NOT NULL,
  `apellido_materno` varchar(45) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `telefono` varchar(45) DEFAULT NULL,
  `colonia` varchar(45) DEFAULT NULL,
  `calle` varchar(45) DEFAULT NULL,
  `numero` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_cliente`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cliente`
--

LOCK TABLES `cliente` WRITE;
/*!40000 ALTER TABLE `cliente` DISABLE KEYS */;
INSERT INTO `cliente` VALUES (2,'Juans','Lopez','Maria','m@gmail.com','6161908988','ALTA MAR','Lco',12),(4,'Juan','Posada','','','','ALTA MAR','',0),(6,'Izamar','Posada','','','','0','',0),(9,'Lia','As','','','','0','',0),(14,'Izamar','Lopez','','','','0','',0),(24,'Maria','Rocio','','Rosy@hotmail.com','66615423','MODERNA','Catriles',12),(26,'Cleo','Soros','','soronita@lovecraft.com','6156278831','AZTECA','Jota',44),(29,'Susana','Lopez','','','6161908988','ALTA MAR','Casa',12),(30,'Joana ','Dark','','rare@gmail.com','616123093','MODERNA','Plop',12),(31,'Nadia','Nascar','Noe','nn@hotmail.com','616778243','AZTECA','Catriles',12),(33,'Jugo','Susana','','jumex@lofi.com','616827312','BOSQUE DE OLIVOS','Koko',23);
/*!40000 ALTER TABLE `cliente` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cliente_mascotas`
--

DROP TABLE IF EXISTS `cliente_mascotas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cliente_mascotas` (
  `id_cliente` int(11) NOT NULL,
  `id_mascota` int(11) NOT NULL,
  PRIMARY KEY (`id_cliente`,`id_mascota`),
  KEY `id_mascota` (`id_mascota`),
  CONSTRAINT `id_cliente` FOREIGN KEY (`id_cliente`) REFERENCES `cliente` (`id_cliente`) ON DELETE CASCADE ON UPDATE NO ACTION,
  CONSTRAINT `id_mascota` FOREIGN KEY (`id_mascota`) REFERENCES `mascota` (`id_mascota`) ON DELETE CASCADE ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cliente_mascotas`
--

LOCK TABLES `cliente_mascotas` WRITE;
/*!40000 ALTER TABLE `cliente_mascotas` DISABLE KEYS */;
INSERT INTO `cliente_mascotas` VALUES (2,5),(2,18),(2,19),(2,24),(2,33),(2,35),(6,36),(9,14),(26,12),(31,29),(33,25);
/*!40000 ALTER TABLE `cliente_mascotas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `colonia_cliente`
--

DROP TABLE IF EXISTS `colonia_cliente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `colonia_cliente` (
  `colonia` varchar(45) NOT NULL,
  PRIMARY KEY (`colonia`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `colonia_cliente`
--

LOCK TABLES `colonia_cliente` WRITE;
/*!40000 ALTER TABLE `colonia_cliente` DISABLE KEYS */;
INSERT INTO `colonia_cliente` VALUES ('ALTA MAR'),('AMPLIACION 89'),('AZTECA'),('BAHIA'),('BOSQUE DE OLIVOS'),('MODERNA');
/*!40000 ALTER TABLE `colonia_cliente` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `empleado`
--

DROP TABLE IF EXISTS `empleado`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `empleado` (
  `id_empleado` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  `apellido_paterno` varchar(45) NOT NULL,
  `apellido_materno` varchar(45) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `telefono` varchar(45) DEFAULT NULL,
  `fecha_empleo` date DEFAULT NULL,
  PRIMARY KEY (`id_empleado`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `empleado`
--

LOCK TABLES `empleado` WRITE;
/*!40000 ALTER TABLE `empleado` DISABLE KEYS */;
INSERT INTO `empleado` VALUES (4,'Courtney Jane','Barnett',NULL,'cb@uabc.edu.mx','616567289',NULL),(5,'Mario','Lopez','Lopez','mariobros@gmail.com',NULL,NULL),(6,'Kurt','Cobain',NULL,NULL,'6661234567',NULL),(7,'Platon','Keifer',NULL,'plata@gmail.com',NULL,NULL),(8,'Charles','Weston',NULL,'charlesManson@gmail.com',NULL,NULL),(9,'Maria','Candelaria',NULL,'candy@gmail.com','612366728',NULL),(10,'Laura','Mendrano','Moriz',NULL,NULL,NULL),(11,'Lindsey','Jordan',NULL,'snailmail@gmail.com',NULL,NULL),(12,'Karolina','Herrera','Lopez','KC@gmail.com','','0000-00-00'),(13,'Kiko','Vega','','','','1999-02-15'),(14,'Paco','El Chato','','','','2000-11-12'),(15,'Frodo','Bolson','Cerrado','frodo@mordor.com','65690190','2001-11-15'),(16,'Luis','Mesa','','','','1999-02-12'),(17,'Pablo','Wear','','','','2220-11-12'),(20,'Maria','Colosa','Vega','Mary@gmail.com','6161762233','1999-02-11'),(21,'Jose','Juan','Lopez','h3h3@gmail.com','6167289933','2020-07-09'),(22,'Candy','Crush','Martinez','ccm@gmail.com','616123456','2020-10-03');
/*!40000 ALTER TABLE `empleado` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `historial`
--

DROP TABLE IF EXISTS `historial`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `historial` (
  `id_cita` int(11) NOT NULL,
  `id_empleado` int(11) NOT NULL,
  `correa` tinyint(4) DEFAULT NULL,
  `collar` tinyint(4) DEFAULT NULL,
  `hora_finalizacion` time NOT NULL,
  `precio` decimal(10,2) NOT NULL,
  PRIMARY KEY (`id_cita`),
  KEY `historial_ibfk_2` (`id_empleado`),
  CONSTRAINT `historial_ibfk_1` FOREIGN KEY (`id_cita`) REFERENCES `cita` (`id_cita`) ON DELETE CASCADE,
  CONSTRAINT `historial_ibfk_2` FOREIGN KEY (`id_empleado`) REFERENCES `empleado` (`id_empleado`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `historial`
--

LOCK TABLES `historial` WRITE;
/*!40000 ALTER TABLE `historial` DISABLE KEYS */;
INSERT INTO `historial` VALUES (12,11,1,1,'18:56:00',34.34);
/*!40000 ALTER TABLE `historial` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mascota`
--

DROP TABLE IF EXISTS `mascota`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mascota` (
  `id_mascota` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(30) NOT NULL,
  `edad` int(11) NOT NULL,
  `tipo_pelo` varchar(30) NOT NULL,
  `raza_mascota` varchar(30) NOT NULL,
  `sexo` varchar(30) NOT NULL,
  PRIMARY KEY (`id_mascota`),
  KEY `tipo_pelo` (`tipo_pelo`),
  KEY `raza_mascota` (`raza_mascota`),
  KEY `sexo` (`sexo`),
  CONSTRAINT `mascota_ibfk_1` FOREIGN KEY (`tipo_pelo`) REFERENCES `pelo_mascota` (`tipo_pelo`),
  CONSTRAINT `mascota_ibfk_2` FOREIGN KEY (`raza_mascota`) REFERENCES `raza_mascota` (`raza_mascota`),
  CONSTRAINT `mascota_ibfk_3` FOREIGN KEY (`sexo`) REFERENCES `sexo_mascota` (`sexo`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mascota`
--

LOCK TABLES `mascota` WRITE;
/*!40000 ALTER TABLE `mascota` DISABLE KEYS */;
INSERT INTO `mascota` VALUES (5,'Lola',12,'LARGO','BEAGLE','FEMENINO'),(7,'Maria',12,'CORTO','BEAGLE','FEMENINO'),(11,'Jenni',1,'LARGO','BULLDOG','FEMENINO'),(12,'Gerard',20,'CORTO','POODLE','MASCULINO'),(13,'Sisi',2,'LARGO','BEAGLE','FEMENINO'),(14,'Chucha',12,'CORTO','BULLDOG','FEMENINO'),(15,'Lala',11,'CORTO','BEAGLE','FEMENINO'),(16,'momo',2,'LARGO','BEAGLE','MASCULINO'),(17,'Kiki',1,'CORTO','BEAGLE','FEMENINO'),(18,'Soso',1,'CORTO','BEAGLE','FEMENINO'),(19,'Jin',1,'CORTO','BEAGLE','FEMENINO'),(20,'No',2,'CORTO','BULLDOG','FEMENINO'),(21,'Moni',5,'CORTO','BEAGLE','FEMENINO'),(22,'Lolo',2,'CORTO','BULLDOG','MASCULINO'),(24,'Uwu',1,'CORTO','BULLDOG','FEMENINO'),(25,'Epona',22,'CORTO','BEAGLE','FEMENINO'),(26,'Sirius',1,'CORTO','BULLDOG','FEMENINO'),(27,'Luli',2,'CORTO','BULLDOG','MASCULINO'),(28,'Lujan',2,'CORTO','BULLDOG','FEMENINO'),(29,'Foca',2,'CORTO','BEAGLE','FEMENINO'),(30,'Lulu',1,'CORTO','POODLE','FEMENINO'),(31,'Pogo',12,'CORTO','BEAGLE','FEMENINO'),(32,'Pig',7,'CORTO','BEAGLE','FEMENINO'),(33,'Crash',11,'CORTO','GOLDEN RETRIEVER','FEMENINO'),(35,'Jack',6,'LARGO','BULLDOG','MASCULINO'),(36,'Sujey',12,'CORTO','CHIHUAHUA','FEMENINO');
/*!40000 ALTER TABLE `mascota` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pelo_mascota`
--

DROP TABLE IF EXISTS `pelo_mascota`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `pelo_mascota` (
  `tipo_pelo` varchar(30) NOT NULL,
  PRIMARY KEY (`tipo_pelo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pelo_mascota`
--

LOCK TABLES `pelo_mascota` WRITE;
/*!40000 ALTER TABLE `pelo_mascota` DISABLE KEYS */;
INSERT INTO `pelo_mascota` VALUES ('CORTO'),('LARGO'),('MEDIO');
/*!40000 ALTER TABLE `pelo_mascota` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `raza_mascota`
--

DROP TABLE IF EXISTS `raza_mascota`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `raza_mascota` (
  `raza_mascota` varchar(30) NOT NULL,
  PRIMARY KEY (`raza_mascota`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `raza_mascota`
--

LOCK TABLES `raza_mascota` WRITE;
/*!40000 ALTER TABLE `raza_mascota` DISABLE KEYS */;
INSERT INTO `raza_mascota` VALUES ('BEAGLE'),('BULLDOG'),('CHIHUAHUA'),('GOLDEN RETRIEVER'),('HUSKY SIBERIANO'),('PASTOR ALEMAN'),('POODLE'),('ROTTWEILER');
/*!40000 ALTER TABLE `raza_mascota` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `servicio_cita`
--

DROP TABLE IF EXISTS `servicio_cita`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `servicio_cita` (
  `servicio` varchar(50) NOT NULL,
  PRIMARY KEY (`servicio`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `servicio_cita`
--

LOCK TABLES `servicio_cita` WRITE;
/*!40000 ALTER TABLE `servicio_cita` DISABLE KEYS */;
INSERT INTO `servicio_cita` VALUES ('BAÑO'),('CEPILLADO DE PELO'),('CEPILLADO DENTAL'),('CORTE DE PELO'),('CORTE DE UÑAS'),('DESLANADO'),('DRENADO DE GLANDULAS ANALES'),('LIMPIEZA DE COJINETES'),('LIMPIEZA Y DEPILADO DE OIDOS');
/*!40000 ALTER TABLE `servicio_cita` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sexo_mascota`
--

DROP TABLE IF EXISTS `sexo_mascota`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sexo_mascota` (
  `sexo` varchar(30) NOT NULL,
  PRIMARY KEY (`sexo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sexo_mascota`
--

LOCK TABLES `sexo_mascota` WRITE;
/*!40000 ALTER TABLE `sexo_mascota` DISABLE KEYS */;
INSERT INTO `sexo_mascota` VALUES ('FEMENINO'),('MASCULINO');
/*!40000 ALTER TABLE `sexo_mascota` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `status_cita`
--

DROP TABLE IF EXISTS `status_cita`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `status_cita` (
  `status` varchar(50) NOT NULL,
  PRIMARY KEY (`status`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `status_cita`
--

LOCK TABLES `status_cita` WRITE;
/*!40000 ALTER TABLE `status_cita` DISABLE KEYS */;
INSERT INTO `status_cita` VALUES ('CANCELADO'),('EN PROCESO'),('FINALIZADO');
/*!40000 ALTER TABLE `status_cita` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tipo_usuario`
--

DROP TABLE IF EXISTS `tipo_usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tipo_usuario` (
  `tipo_usuario` varchar(30) NOT NULL,
  PRIMARY KEY (`tipo_usuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipo_usuario`
--

LOCK TABLES `tipo_usuario` WRITE;
/*!40000 ALTER TABLE `tipo_usuario` DISABLE KEYS */;
INSERT INTO `tipo_usuario` VALUES ('ADMIN'),('PEON');
/*!40000 ALTER TABLE `tipo_usuario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuario` (
  `id_usuario` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_usuario` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `tipo_usuario` varchar(30) NOT NULL,
  `id_empleado` int(11) NOT NULL,
  PRIMARY KEY (`id_usuario`),
  UNIQUE KEY `nombre_usuario` (`nombre_usuario`),
  KEY `tipo_usuario` (`tipo_usuario`),
  KEY `usuario_ibfk_2` (`id_empleado`),
  CONSTRAINT `usuario_ibfk_1` FOREIGN KEY (`tipo_usuario`) REFERENCES `tipo_usuario` (`tipo_usuario`),
  CONSTRAINT `usuario_ibfk_2` FOREIGN KEY (`id_empleado`) REFERENCES `empleado` (`id_empleado`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES (1,'courtney1998','12345','ADMIN',4);
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-12-31  2:18:36
