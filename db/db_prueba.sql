--Se crea usuario prueba que es el que se tiene puesto configurado para acceder a ella solo acceso a consultas

CREATE DATABASE prueba;
USE prueba;

CREATE TABLE persona(
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  telefono VARCHAR(20),
  extension VARCHAR(20),
  email VARCHAR(100),
  lugar VARCHAR(50),
  area VARCHAR(50),
  departamento VARCHAR(50)
);

INSERT INTO persona (nombre, telefono, extension, email, lugar, area, departamento) VALUES
('Juan Pérez', '+34 600 123 456', '2020', 'juan.perez@email.com', 'Gran Canaria', 'Técnico de Soporte', 'IT'),
('Antonio Luján', '+34 700 789 012', '2021','antonio.lujan@email.com', 'Tenerife', 'Compras', 'Operaciones'),
('Pepe Guerra', '+34 800 345 678', '2022','pepe.guerra@email.com', 'Gran Canaria', 'Ciruguias', 'Comercial'),
('Pedro Olivares', '+34 600 123 456', '2023', 'juan.perez@email.com', 'Barcelona', 'Concursos', 'Administracion'),
('David Lopez', '+34 700 789 012', '2024','antonio.lujan@email.com', 'Tenerife', 'Almacen', 'Operaciones'),
('Maria Ramos', '+34 800 345 678', '2025','pepe.guerra@email.com', 'Gran Canaria', 'Ténico de SAT', 'SAT'),
('Cesar Alvarez', '+34 700 789 012', '2026','antonio.lujan@email.com', 'Tenerife', 'Clientes', 'Operaciones'),
('Alvaro Santana', '+34 800 345 678', '2027','pepe.guerra@email.com', 'Gran Canaria', 'Comercial', 'Comercial');
