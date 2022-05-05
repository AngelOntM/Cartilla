CREATE DATABASE IF NOT EXISTS cartilla;
USE cartilla;

CREATE TABLE IF NOT EXISTS vacuna(
    VAC_NUMCTRL INTEGER(9) PRIMARY KEY AUTO_INCREMENT,
    VAC_NOMBRE VARCHAR(60) NOT NULL,
    VAC_DESC TEXT NOT NULL
);
CREATE TABLE IF NOT EXISTS usuario(
    USU_NUMCTRL INTEGER(9) PRIMARY KEY AUTO_INCREMENT,
    USU_CORREO VARCHAR(50) NOT NULL unique,
    USU_CLAVE VARCHAR(100) NOT NULL
);
CREATE TABLE IF NOT EXISTS tipo(
    TIP_NUMCTRL INTEGER(9) PRIMARY KEY AUTO_INCREMENT,
    TIP_NOMBRE VARCHAR(20) NOT NULL
);
CREATE TABLE IF NOT EXISTS proveedor(
    PRV_NUMCTRL INTEGER(9) PRIMARY KEY AUTO_INCREMENT,
    PRV_NOMBRE VARCHAR(70) NOT NULL,
    PRV_PROPIETARIO VARCHAR(70) NOT NULL,
    PRV_CELULAR bigint(10) NOT NULL unique,
    PRV_TELOFICINA bigint(10) NOT NULL unique,
    PRV_CORREO VARCHAR(60) NOT NULL,
    PRV_CONTRA VARCHAR(100) NOT NULL
);
CREATE TABLE IF NOT EXISTS programa(
    PRG_NUMCTRL INTEGER(9) PRIMARY KEY AUTO_INCREMENT,
    PRG_CLAVE VARCHAR(12) NOT NULL unique,
    PRG_NOMBRE VARCHAR(40) NOT NULL
);
CREATE TABLE IF NOT EXISTS propietario(
    PRO_NUMCTRL INTEGER(9) PRIMARY KEY AUTO_INCREMENT,
    PRO_NOMBRE VARCHAR(50) NOT NULL unique,
    PRO_CELULAR VARCHAR(10) NOT NULL,
    PRO_CORREO VARCHAR(60) NOT NULL,
    PRO_CONTRA VARCHAR(100) NOT NULL
);
CREATE TABLE IF NOT EXISTS menu(
    MEN_NUMCTRL INTEGER(9) PRIMARY KEY AUTO_INCREMENT,
    MEN_CLAVE VARCHAR(10) NOT NULL unique,
    MEN_NOMBRE VARCHAR(40) NOT NULL
);
CREATE TABLE IF NOT EXISTS mascota(
    MAS_NUMCTRL INTEGER(9) PRIMARY KEY AUTO_INCREMENT,
    PRO_NUMCTRL INTEGER(9),
    MAS_NOMBRE VARCHAR(40) NOT NULL,
    MAS_FECHANAC date,
    MAS_RAZA VARCHAR(50) NOT NULL,
    TIP_NUMCTRL INTEGER(9),
    CONSTRAINT mascota1 FOREIGN KEY (PRO_NUMCTRL) REFERENCES propietario(PRO_NUMCTRL),
    CONSTRAINT mascota2 FOREIGN KEY (TIP_NUMCTRL) REFERENCES tipo(TIP_NUMCTRL)
);
CREATE TABLE IF NOT EXISTS serxpro(
    SXP_NUMCTRL INTEGER(9) PRIMARY KEY AUTO_INCREMENT,
    PRV_NUMCTRL INTEGER(9),
    SXP_NOMBRE VARCHAR(70) NOT NULL,
    SXP_DESCRIPCION text,
    SXP_PRECIO float(10,2)  NOT NULL,
	CONSTRAINT serxpro1 FOREIGN KEY (PRV_NUMCTRL) REFERENCES proveedor(PRV_NUMCTRL)
);
CREATE TABLE IF NOT EXISTS serxmas(
    SXM_NUMCTRL INTEGER(9) PRIMARY KEY AUTO_INCREMENT,
    MAS_NUMCTRL INTEGER(9),
    SXM_FECHA date,
    SXM_PRECIO float(10,2)  NOT NULL,
	CONSTRAINT serxmas1 FOREIGN KEY (MAS_NUMCTRL) REFERENCES mascota(MAS_NUMCTRL)
);
CREATE TABLE IF NOT EXISTS caldia(
    PRV_NUMCTRL INTEGER(9),
    CAD_DIA INT(1) NOT NULL,
	CONSTRAINT caldia1 FOREIGN KEY (PRV_NUMCTRL) REFERENCES proveedor(PRV_NUMCTRL)
);
CREATE TABLE IF NOT EXISTS calfecha(
    PRV_NUMCTRL INTEGER(9),
    CAF_FECHA date,
	CONSTRAINT calfecha1 FOREIGN KEY (PRV_NUMCTRL) REFERENCES proveedor(PRV_NUMCTRL)
);
CREATE TABLE IF NOT EXISTS horario(
    HOR_NUMCTRL INTEGER(9) PRIMARY KEY AUTO_INCREMENT,
    PRV_NUMCTRL INTEGER(9) ,
    HOR_HORAINI time NOT NULL,
    HOR_HORAFIN time NOT NULL,
    HOR_TIPO time NOT NULL,
    HOR_DIA INT(1) NOT NULL,
	CONSTRAINT horario1 FOREIGN KEY (PRV_NUMCTRL) REFERENCES proveedor(PRV_NUMCTRL)
);
CREATE TABLE IF NOT EXISTS masfoto(
    MAF_NUMCTRL INTEGER(9) PRIMARY KEY AUTO_INCREMENT,
    MAS_NUMCTRL INTEGER(9),
    MAF_FOTO VARCHAR(50),
	CONSTRAINT masfoto1 FOREIGN KEY (MAS_NUMCTRL) REFERENCES mascota(MAS_NUMCTRL)
);
CREATE TABLE IF NOT EXISTS proxmen(
    PXM_NUMCTRL INTEGER(9) PRIMARY KEY AUTO_INCREMENT,
    PRG_NUMCTRL INTEGER(9),
    MEN_NUMCTRL INTEGER(9),
	CONSTRAINT proxmen1 FOREIGN KEY (PRG_NUMCTRL) REFERENCES programa(PRG_NUMCTRL),
	CONSTRAINT proxmen2 FOREIGN KEY (MEN_NUMCTRL) REFERENCES menu(MEN_NUMCTRL)
);
CREATE TABLE IF NOT EXISTS proxusu(
    USU_NUMCTRL INTEGER(9),
    PRG_NUMCTRL INTEGER(9),
	CONSTRAINT proxusu1 FOREIGN KEY (USU_NUMCTRL) REFERENCES usuario(USU_NUMCTRL),
	CONSTRAINT proxusu2 FOREIGN KEY (PRG_NUMCTRL) REFERENCES programa(PRG_NUMCTRL)
);
CREATE TABLE IF NOT EXISTS vacxmas(
    VXM_NUMCTRL INTEGER(9) PRIMARY KEY AUTO_INCREMENT,
    MAS_NUMCTRL INTEGER(9),
    VAC_NUMCTRL INTEGER(9),
    PRV_NUMCTRL INTEGER(9),
    VXM_FECHA date,
	CONSTRAINT vacxmas1 FOREIGN KEY (MAS_NUMCTRL) REFERENCES mascota(MAS_NUMCTRL),
	CONSTRAINT vacxmas2 FOREIGN KEY (VAC_NUMCTRL) REFERENCES vacuna(VAC_NUMCTRL),
	CONSTRAINT vacxmas3 FOREIGN KEY (PRV_NUMCTRL) REFERENCES proveedor(PRV_NUMCTRL)
);
CREATE TABLE IF NOT EXISTS agenda(
    AGE_NUMCTRL INTEGER(9) PRIMARY KEY AUTO_INCREMENT,
    PRV_NUMCTRL INTEGER(9),
    HOR_NUMCTRL INTEGER(9),
    MAS_NUMCTRL INTEGER(9),
    AGE_FECHA date,
	CONSTRAINT agenda1 FOREIGN KEY (PRV_NUMCTRL) REFERENCES proveedor(PRV_NUMCTRL),
	CONSTRAINT agenda2 FOREIGN KEY (HOR_NUMCTRL) REFERENCES horario(HOR_NUMCTRL),
	CONSTRAINT agenda3 FOREIGN KEY (MAS_NUMCTRL) REFERENCES mascota(MAS_NUMCTRL)
);