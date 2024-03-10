CREATE DATABASE SRIG;

USE SRIG;

CREATE TABLE users (
    idUser INT AUTO_INCREMENT PRIMARY KEY,
    Nombre VARCHAR(25) NOT NULL,
    Apellido VARCHAR(25) NOT NULL,
    Cedula VARCHAR(25) NOT NULL,
    email VARCHAR(25) UNIQUE NOT NULL,
    password VARCHAR(25) NOT NULL,
    Estado VARCHAR(25) NOT NULL
);

CREATE TABLE Cedula (
    idCedula INT AUTO_INCREMENT PRIMARY KEY,
    Nombre VARCHAR(25) NOT NULL,
    Apellido VARCHAR(25) NOT NULL,
    CedulaN VARCHAR(25) NOT NULL,
    Estado VARCHAR(25) NOT NULL,
    Municipio VARCHAR(55) NOT NULL,
    Sector VARCHAR(55) NOT NULL,
    Residencia VARCHAR(55) NOT NULL,
    ColegioE VARCHAR(55) NOT NULL,
    DColegioE VARCHAR (70) NOT NULL,
    user_id INT NOT NULL,
    FOREIGN KEY (user_id) references users(idUser) ON DELETE CASCADE
);

CREATE TABLE Licencia (
    idLicencia INT PRIMARY KEY AUTO_INCREMENT,
    idCedulaL INT NOT NULL,
    Direccion VARCHAR(200) NOT NULL,
    Categoria VARCHAR(50) NOT NULL,
    Restricciones VARCHAR(200) NOT NULL,
    FechaNacimiento date NOT NULL,
    Sexo VARCHAR(8) NOT NULL,
    Estatura decimal NOT NULL,
    Peso NCHAR NOT NULL,
    FOREIGN KEY (idCedulaL) references Cedula(idCedula) ON DELETE CASCADE
);

CREATE TABLE Seguro (
    idSeguro INT PRIMARY KEY AUTO_INCREMENT,
    idCedula INT NOT NULL,
    SeguroAF VARCHAR(100) NOT NULL,
    Estado VARCHAR(10) NOT NULL,
    FOREIGN KEY (idCedula) references Cedula(idCedula) ON DELETE CASCADE
);