DROP DATABASE IF EXISTS cartilla;

CREATE DATABASE IF NOT EXISTS cartilla;

USE cartilla;

CREATE TABLE
    IF NOT EXISTS raza(
        RAZ_NUMCTRL INTEGER(9) PRIMARY KEY AUTO_INCREMENT,
        RAZ_NOMBRE VARCHAR(20)
    );

USE cartilla;

INSERT INTO raza (RAZ_NOMBRE)
values ('Perro'), ('Gato'), ('Tortuga'), ('Pez'), ('Perrico');

CREATE TABLE
    IF NOT EXISTS tipousu(
        TIU_NUMCTRL INTEGER(9) PRIMARY KEY AUTO_INCREMENT,
        TIU_NOMBRE VARCHAR(50) NOT NULL unique
    );

USE cartilla;

INSERT INTO
    tipousu (TIU_NOMBRE)
VALUES ("Proveedor"), ("Propietario"), ("Supervisor");

CREATE TABLE
    IF NOT EXISTS programa(
        PRG_NUMCTRL INTEGER(9) PRIMARY KEY AUTO_INCREMENT,
        PRG_CLAVE VARCHAR(12) NOT NULL unique,
        PRG_NOMBRE VARCHAR(40) NOT NULL,
        PRG_RUTA VARCHAR(100),
        PRG_DESC text
    );

USE cartilla;

INSERT INTO
    programa (
        PRG_CLAVE,
        PRG_NOMBRE,
        PRG_RUTA
    )
VALUES
(
        "PRG10000",
        "Cartilla",
        "cartilla"
    ), (
        "PRG20000",
        "Mascotas",
        "mascotas"
    ), (
        "PRG30000",
        "Vacunas",
        "vacunas"
    ), ("PRG40000", "Fotos", "fotos"), (
        "PRG50000",
        "Proveedores",
        "proveedor"
    ), ("PRG60000", "Citas", "citas"), ("PRG70000", "Perfil", "perfil"), (
        "PRG80000",
        "Tipo Usuarios",
        "tipo_usuario"
    ), (
        "PRG90000",
        "Programas",
        "programas"
    ), (
        "PRG100000",
        "Programas por Menú",
        "programas_menu"
    ), (
        "PRG110000",
        "Programas por Tipo",
        "programas_tipo"
    ), (
        "PRG120000",
        "Sucursales",
        "sucursales"
    ), (
        "PRG130000",
        "Servicios por Sucursal",
        "servicios_por_sucursal"
    ), (
        "PRG140000",
        "Horario por Sucursal",
        "horario_por_sucursal"
    ), (
        "PRG150000",
        "Agenda de Citas",
        "agenda_de_citas"
    ), (
        "PRG160000",
        "Veterinarias",
        "veterinarias"
    ), (
        "PRG170000",
        "Tiendas",
        "tiendas"
    ), (
        "PRG180000",
        "Criptas",
        "criptas"
    ), (
        "PRG190000",
        "Paseo de Mascotas",
        "paseo_de_mascotas"
    );

CREATE TABLE
    IF NOT EXISTS submenu(
        SUM_NUMCTRL INTEGER(9) PRIMARY KEY AUTO_INCREMENT,
        SUM_ETIQUETA VARCHAR(100)
    );

USE cartilla;

INSERT INTO
    submenu (SUM_ETIQUETA)
values ("Menu de Proveedor"), ("Menu de Propietario"), ("Menu de Supervisor");

CREATE TABLE
    IF NOT EXISTS menu(
        MEN_NUMCTRL INTEGER(9) PRIMARY KEY AUTO_INCREMENT,
        MEN_CLAVE VARCHAR(10) NOT NULL unique,
        MEN_NOMBRE VARCHAR(40) NOT NULL,
        MEN_ICON TEXT,
        MEN_DESC TEXT,
        MEN_ORDEN INTEGER(5),
        SUM_NUMCTRL INTEGER(9),
        CONSTRAINT menu1 FOREIGN KEY (SUM_NUMCTRL) REFERENCES submenu(SUM_NUMCTRL) ON DELETE CASCADE ON UPDATE CASCADE
    );

USE cartilla;

INSERT INTO
    menu(
        MEN_CLAVE,
        MEN_NOMBRE,
        MEN_ICON,
        MEN_DESC,
        MEN_ORDEN,
        SUM_NUMCTRL
    )
values (
        "men001",
        "Mascotas",
        "icon-Mascotas",
        "Menu de mascotas",
        1,
        2
    ), (
        "men002",
        "Proveedores",
        "icon-Proveedores",
        "Menú de Proveedores",
        2,
        2
    ), (
        "men003",
        "Favoritos",
        "icon-Favoritos",
        "Menú de Favoritos",
        3,
        2
    ), (
        "men004",
        "Menus",
        "icon-Menus",
        "Menú de Menus",
        3,
        3
    ), (
        "men005",
        "Favoritos",
        "icon-Favoritos",
        "Menú de Favoritos Proveedor",
        2,
        1
    ), (
        "men006",
        "Favoritos",
        "icon-Favoritos",
        "Menú de Favoritos Supervisor",
        2,
        3
    ), (
        "men007",
        "Proveedor",
        "icon-Proveedor",
        "Menú de Proveedor",
        1,
        1
    ), (
        "men008",
        "Mascotas",
        "icon-Mascotas",
        "Menu de mascotas Supervisor",
        1,
        3
    );

CREATE TABLE
    IF NOT EXISTS especialidad(
        ESP_NUMCTRL INTEGER(9) PRIMARY KEY AUTO_INCREMENT,
        ESP_NOMBRE VARCHAR(50) NOT NULL,
        ESP_DESC TEXT
    );

USE cartilla;

INSERT INTO
    especialidad (ESP_NOMBRE, ESP_DESC)
values (
        "Veterinaria",
        "Inyeeciones y Tratamiento"
    ), (
        "Farmacia",
        "Consultas y medicacion"
    ), (
        "Clinica",
        "Operaciones y tratamiento"
    );

CREATE TABLE
    IF NOT EXISTS vacuna(
        VAC_NUMCTRL INTEGER(9) PRIMARY KEY AUTO_INCREMENT,
        RAZ_NUMCTRL INTEGER(9),
        VAC_NOMBRE VARCHAR(60) NOT NULL,
        VAC_DESC TEXT,
        CONSTRAINT vacuna1 FOREIGN KEY (RAZ_NUMCTRL) REFERENCES raza(RAZ_NUMCTRL) ON DELETE CASCADE ON UPDATE CASCADE
    );

USE cartilla;

INSERT INTO
    vacuna(
        RAZ_NUMCTRL,
        VAC_NOMBRE,
        VAC_DESC
    )
values (
        1,
        "Sextuple",
        "Vacuna cada año"
    ), (
        1,
        "Rabia",
        "Vacuna contra rabia cada año"
    ), (
        2,
        "Sextuple",
        "Vacuna cada año"
    ), (
        2,
        "Rabia",
        "Vacuna anual contra la rabia"
    );

CREATE TABLE
    IF NOT EXISTS proveedor(
        PRV_NUMCTRL INTEGER(9) PRIMARY KEY AUTO_INCREMENT,
        PRV_NOMBRE VARCHAR(70) NOT NULL,
        PRV_PROPIETARIO VARCHAR(70) NOT NULL,
        PRV_CELULAR BIGINT(10) NOT NULL UNIQUE,
        PRV_TELOFICINA BIGINT(10) NOT NULL UNIQUE,
        PRV_CORREO VARCHAR(60) NOT NULL UNIQUE,
        PRV_CONTRA VARCHAR(100) NOT NULL,
        TIU_NUMCTRL INTEGER(9) DEFAULT 1,
        CONSTRAINT proveedor1 FOREIGN KEY (TIU_NUMCTRL) REFERENCES tipousu(TIU_NUMCTRL) ON DELETE CASCADE ON UPDATE CASCADE
    );

USE cartilla;

INSERT INTO
    PROVEEDOR (
        PRV_NOMBRE,
        PRV_PROPIETARIO,
        PRV_CELULAR,
        PRV_TELOFICINA,
        PRV_CORREO,
        PRV_CONTRA
    )
VALUES (
        "Vet1",
        "Prov1",
        1234567890,
        1234567891,
        "prov1@gmail.com",
        "prov1"
    ), (
        "Vet2",
        "Prov2",
        1234567892,
        1234567893,
        "prov2@gmail.com",
        "prov2"
    );

CREATE TABLE
    IF NOT EXISTS propietario (
        PRO_NUMCTRL INTEGER(9) PRIMARY KEY AUTO_INCREMENT,
        PRO_NOMBRE VARCHAR(50) NOT NULL UNIQUE,
        PRO_CELULAR BIGINT(10) NOT NULL UNIQUE,
        PRO_CORREO VARCHAR(60) NOT NULL UNIQUE,
        PRO_CONTRA VARCHAR(100) NOT NULL,
        TIU_NUMCTRL INTEGER(9) DEFAULT 2,
        CONSTRAINT propietario1 FOREIGN KEY (TIU_NUMCTRL) REFERENCES tipousu (TIU_NUMCTRL) ON DELETE CASCADE ON UPDATE CASCADE
    );

USE cartilla;

INSERT INTO
    propietario (
        PRO_NOMBRE,
        PRO_CELULAR,
        PRO_CORREO,
        PRO_CONTRA
    )
VALUES (
        "Prop1",
        1234567891,
        "prop1@gmail.com",
        "prop1"
    ), (
        "Prop2",
        1234567893,
        "prop2@gmail.com",
        "prop2"
    );

CREATE TABLE
    IF NOT EXISTS supervisor(
        SUP_NUMCTRL INTEGER(9) PRIMARY KEY AUTO_INCREMENT,
        SUP_NOMBRE VARCHAR(40) NOT NULL,
        SUP_CORREO VARCHAR(60) NOT NULL UNIQUE,
        SUP_CONTRA VARCHAR(100) NOT NULL,
        TIU_NUMCTRL INTEGER(9) DEFAULT 3,
        CONSTRAINT supervisor1 FOREIGN KEY (TIU_NUMCTRL) REFERENCES tipousu (TIU_NUMCTRL) ON DELETE CASCADE ON UPDATE CASCADE
    );

USE cartilla;

INSERT INTO
    supervisor (
        SUP_NOMBRE,
        SUP_CORREO,
        SUP_CONTRA
    )
VALUES (
        "Sup1",
        "sup1@gmail.com",
        "sup1"
    );

CREATE TABLE
    IF NOT EXISTS mascota(
        MAS_NUMCTRL INTEGER(9) PRIMARY KEY AUTO_INCREMENT,
        PRO_NUMCTRL INTEGER(9),
        MAS_NOMBRE VARCHAR(40) NOT NULL,
        MAS_FECHANAC date,
        MAS_RAZA VARCHAR(50) NOT NULL,
        RAZ_NUMCTRL INTEGER(9),
        MAS_SEXO SET("Macho", "Hembra") NOT NULL,
        MAS_SENPAR text,
        CONSTRAINT mascota1 FOREIGN KEY (PRO_NUMCTRL) REFERENCES propietario(PRO_NUMCTRL) ON DELETE CASCADE ON UPDATE CASCADE,
        CONSTRAINT mascota2 FOREIGN KEY (RAZ_NUMCTRL) REFERENCES raza(RAZ_NUMCTRL) ON DELETE CASCADE ON UPDATE CASCADE
    );

USE cartilla;

INSERT INTO
    mascota (
        PRO_NUMCTRL,
        MAS_NOMBRE,
        MAS_FECHANAC,
        MAS_RAZA,
        RAZ_NUMCTRL,
        MAS_SEXO
    )
VALUES (
        1,
        "Chikis",
        "2020-08-10",
        "pitbull",
        1,
        "hembra"
    ), (
        2,
        "Manchas",
        "2021-09-10",
        "chihuahua",
        1,
        "Macho"
    ), (
        2,
        "Manchas1",
        "2021-11-09",
        "chihuahua",
        1,
        "Macho"
    ), (
        2,
        "Manchas2",
        "2021-11-10",
        "chihuahua",
        1,
        "Macho"
    ), (
        2,
        "Manchas3",
        "2021-11-11",
        "chihuahua",
        1,
        "Macho"
    ), (
        2,
        "Manchas4",
        "2021-11-12",
        "chihuahua",
        1,
        "Macho"
    );

CREATE TABLE
    IF NOT EXISTS sucxprv(
        SXP_NUMCTRL INTEGER(9) PRIMARY KEY AUTO_INCREMENT,
        PRV_NUMCTRL INTEGER(9),
        SXP_NOMBRE VARCHAR(50) NOT NULL,
        SXP_DIRECCION VARCHAR(70) NOT NULL,
        SXP_COLONIA VARCHAR(40) NOT NULL,
        SXP_CP VARCHAR(5) NOT NULL,
        SXP_ENCARGADO VARCHAR(50),
        SXP_TELEFONO BIGINT(10) NOT NULL,
        SXP_LAT VARCHAR(10),
        SXP_LON VARCHAR(10),
        SXP_CORREO VARCHAR(60) NOT NULL,
        SXP_CONTRA VARCHAR(100) NOT NULL,
        CONSTRAINT sucxprv1 FOREIGN KEY (PRV_NUMCTRL) REFERENCES proveedor(PRV_NUMCTRL) ON DELETE CASCADE ON UPDATE CASCADE
    );

USE cartilla;

INSERT INTO
    sucxprv (
        PRV_NUMCTRL,
        SXP_NOMBRE,
        SXP_DIRECCION,
        SXP_COLONIA,
        SXP_CP,
        SXP_ENCARGADO,
        SXP_TELEFONO,
        SXP_LAT,
        SXP_LON
    )
VALUES (
        1,
        "Vet1",
        "Bravo #123",
        "Bravo",
        "27000",
        "pepe",
        1234567890,
        "",
        ""
    ), (
        2,
        "Vet2",
        "Bravo #124",
        "Brava",
        "27001",
        "pepe1",
        1234567891,
        "",
        ""
    );

CREATE TABLE
    IF NOT EXISTS serxmas(
        SXM_NUMCTRL INTEGER(9) PRIMARY KEY AUTO_INCREMENT,
        MAS_NUMCTRL INTEGER(9),
        SXM_FECHA date,
        SXM_PRECIO float(10, 2) NOT NULL,
        CONSTRAINT serxmas1 FOREIGN KEY (MAS_NUMCTRL) REFERENCES mascota(MAS_NUMCTRL) ON DELETE CASCADE ON UPDATE CASCADE
    );

USE cartilla;

INSERT INTO
    serxmas (
        MAS_NUMCTRL,
        SXM_FECHA,
        SXM_PRECIO
    )
values (1, "2021-06-14", 100.00), (2, "2022-06-15", 100.50);

CREATE TABLE
    IF NOT EXISTS caldia(
        SXP_NUMCTRL INTEGER(9),
        CAD_DIA SET('1', '2', '3', '4', '5', '6', '7'),
        CONSTRAINT caldia1 FOREIGN KEY (SXP_NUMCTRL) REFERENCES sucxprv(SXP_NUMCTRL) ON DELETE CASCADE ON UPDATE CASCADE
    );

USE cartilla;

INSERT INTO
    caldia (SXP_NUMCTRL, CAD_DIA)
values
(1, 7), (1, 6), (2, 7), (2, 6);

CREATE TABLE
    IF NOT EXISTS calfecha(
        SXP_NUMCTRL INTEGER(9),
        CAF_FECHA date,
        CONSTRAINT calfecha1 FOREIGN KEY (SXP_NUMCTRL) REFERENCES sucxprv(SXP_NUMCTRL) ON DELETE CASCADE ON UPDATE CASCADE
    );

USE cartilla;

INSERT INTO
    calfecha (SXP_NUMCTRL, CAF_FECHA)
values (1, "2022-05-09"), (1, "2022-05-10");

CREATE TABLE
    IF NOT EXISTS horario(
        HOR_NUMCTRL INTEGER(9) PRIMARY KEY AUTO_INCREMENT,
        SXP_NUMCTRL INTEGER(9),
        HOR_TURNO SET('M', 'V', 'C'),
        HOR_HORAINI time NOT NULL,
        HOR_HORAFIN time NOT NULL,
        HOR_TIPO time NOT NULL,
        HOR_DIA SET('1', '2', '3', '4', '5', '6', '7'),
        CONSTRAINT horario1 FOREIGN KEY (SXP_NUMCTRL) REFERENCES sucxprv(SXP_NUMCTRL) ON DELETE CASCADE ON UPDATE CASCADE
    );

USE cartilla;

CREATE TABLE
    IF NOT EXISTS masfoto(
        MAF_NUMCTRL INTEGER(9) PRIMARY KEY AUTO_INCREMENT,
        MAS_NUMCTRL INTEGER(9),
        MAF_FOTO VARCHAR(50),
        CONSTRAINT masfoto1 FOREIGN KEY (MAS_NUMCTRL) REFERENCES mascota(MAS_NUMCTRL) ON DELETE CASCADE ON UPDATE CASCADE
    );

USE cartilla;

CREATE TABLE
    IF NOT EXISTS proxmen(
        PXM_NUMCTRL INTEGER(9) PRIMARY KEY AUTO_INCREMENT,
        PRG_NUMCTRL INTEGER(9),
        MEN_NUMCTRL INTEGER(9),
        PXM_ORDEN INTEGER(5),
        CONSTRAINT proxmen1 FOREIGN KEY (PRG_NUMCTRL) REFERENCES programa(PRG_NUMCTRL) ON DELETE CASCADE ON UPDATE CASCADE,
        CONSTRAINT proxmen2 FOREIGN KEY (MEN_NUMCTRL) REFERENCES menu(MEN_NUMCTRL) ON DELETE CASCADE ON UPDATE CASCADE
    );

USE cartilla;

INSERT INTO
    proxmen(
        PRG_NUMCTRL,
        MEN_NUMCTRL,
        PXM_ORDEN
    )
VALUES (1, 1, 1), (2, 1, 2), (3, 1, 3), (4, 1, 4), (16, 2, 1), (17, 2, 2), (18, 2, 3), (19, 2, 4), (6, 3, 1), (7, 3, 2), (8, 4, 1), (9, 4, 2), (10, 4, 3), (11, 4, 4), (6, 5, 1), (7, 5, 2), (6, 6, 1), (7, 6, 2), (7, 7, 1), (12, 7, 2), (13, 7, 3), (14, 7, 4), (15, 7, 5), (1, 8, 1), (2, 8, 2), (3, 8, 3), (4, 8, 4), (5, 8, 5);

CREATE TABLE
    IF NOT EXISTS proxusu(
        PXU_NUMCTRL INTEGER(9) PRIMARY KEY AUTO_INCREMENT,
        TIU_NUMCTRL INTEGER(9),
        PRG_NUMCTRL INTEGER(9),
        CONSTRAINT proxusu1 FOREIGN KEY (TIU_NUMCTRL) REFERENCES tipousu(TIU_NUMCTRL) ON DELETE CASCADE ON UPDATE CASCADE,
        CONSTRAINT proxusu2 FOREIGN KEY (PRG_NUMCTRL) REFERENCES programa(PRG_NUMCTRL) ON DELETE CASCADE ON UPDATE CASCADE
    );

USE cartilla;

INSERT INTO
    proxusu(TIU_NUMCTRL, PRG_NUMCTRL)
VALUES (3, 1), (3, 2), (3, 3), (3, 4), (3, 5), (3, 6), (3, 7), (3, 8), (3, 9), (3, 10), (3, 11), (2, 1), (2, 2), (2, 3), (2, 4), (2, 6), (2, 7), (2, 16), (2, 17), (2, 18), (2, 19), (1, 7), (1, 12), (1, 13), (1, 14), (1, 15);

CREATE TABLE
    IF NOT EXISTS vacxmas(
        VXM_NUMCTRL INTEGER(9) PRIMARY KEY AUTO_INCREMENT,
        MAS_NUMCTRL INTEGER(9),
        PRV_NUMCTRL INTEGER(9) default null,
        VAC_NUMCTRL INTEGER(9),
        VXM_PESO FLOAT(5, 2),
        VXM_FECHA date,
        VXM_FECHAAPLICA date,
        CONSTRAINT vacxmas1 FOREIGN KEY (MAS_NUMCTRL) REFERENCES mascota(MAS_NUMCTRL) ON DELETE CASCADE ON UPDATE CASCADE,
        CONSTRAINT vacxmas2 FOREIGN KEY (VAC_NUMCTRL) REFERENCES vacuna(VAC_NUMCTRL) ON DELETE CASCADE ON UPDATE CASCADE,
        CONSTRAINT vacxmas3 FOREIGN KEY (PRV_NUMCTRL) REFERENCES proveedor(PRV_NUMCTRL) ON DELETE CASCADE ON UPDATE CASCADE
    );

USE cartilla;

CREATE TABLE
    IF NOT EXISTS agenda(
        AGE_NUMCTRL INTEGER(9) PRIMARY KEY AUTO_INCREMENT,
        SXP_NUMCTRL INTEGER(9),
        HOR_NUMCTRL INTEGER(9),
        MAS_NUMCTRL INTEGER(9),
        AGE_FECHA date,
        AGE_ESTATUS SET('1', '2'),
        CONSTRAINT agenda1 FOREIGN KEY (SXP_NUMCTRL) REFERENCES sucxprv(SXP_NUMCTRL) ON DELETE CASCADE ON UPDATE CASCADE,
        CONSTRAINT agenda2 FOREIGN KEY (HOR_NUMCTRL) REFERENCES horario(HOR_NUMCTRL) ON DELETE CASCADE ON UPDATE CASCADE,
        CONSTRAINT agenda3 FOREIGN KEY (MAS_NUMCTRL) REFERENCES mascota(MAS_NUMCTRL) ON DELETE CASCADE ON UPDATE CASCADE
    );

USE cartilla;

CREATE TABLE
    IF NOT EXISTS serxsuc(
        SXS_NUMCTRL INTEGER(9) PRIMARY KEY AUTO_INCREMENT,
        SXP_NUMCTRL INTEGER(9),
        SXS_NOMBRE VARCHAR(70) NOT NULL,
        SXS_DESCRIPTION TEXT,
        SXS_PRECIO FLOAT(11, 2),
        CONSTRAINT serxsuc FOREIGN KEY (SXP_NUMCTRL) REFERENCES sucxprv(SXP_NUMCTRL) ON DELETE CASCADE ON UPDATE CASCADE
    );

USE cartilla;

CREATE TABLE
    IF NOT EXISTS espxsuc(
        ESP_NUMCTRL INTEGER(9) PRIMARY KEY AUTO_INCREMENT,
        SXP_NUMCTRL INTEGER(9),
        CONSTRAINT espxsuc FOREIGN KEY (SXP_NUMCTRL) REFERENCES sucxprv(SXP_NUMCTRL) ON DELETE CASCADE ON UPDATE CASCADE
    );

USE cartilla;