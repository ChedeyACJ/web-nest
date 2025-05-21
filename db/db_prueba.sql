--Se crea usuario prueba que es el que se tiene puesto configurado para acceder a ella solo acceso a consultas

CREATE DATABASE prueba;
USE prueba;

CREATE TABLE persona(
    id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  telefono VARCHAR(20),
  email VARCHAR(100),
  lugar VARCHAR(50),
  puesto VARCHAR(50),
  departamento VARCHAR(50)
);

INSERT INTO persona (nombre, telefono, email, lugar, puesto, departamento) VALUES
('Juan Pérez', '+34 600 123 456', 'juan.perez@email.com', 'Gran Canaria', 'Técnico de Soporte', 'IT'),
('Antonio Luján', '+34 700 789 012', 'antonio.lujan@email.com', 'Tenerife', 'Compras', 'Operaciones'),
('Pepe Guerra', '+34 800 345 678', 'pepe.guerra@email.com', 'Gran Canaria', 'Comercial', 'Comercial');
