--Se crea usuario prueba que es el que se tiene puesto configurado para acceder a ella solo acceso a consultas

CREATE DATABASE prueba;
USE prueba;

CREATE TABLE persona(
    id INT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    edad INT NOT NULL
);

INSERT INTO persona(id, nombre, edad) VALUES
    (1, 'Juan', 25),
    (2, 'Maria', 28),
    (3, 'Carlos', 30),
    (4, 'Ana', 35),
    (5, 'Luis', 20);