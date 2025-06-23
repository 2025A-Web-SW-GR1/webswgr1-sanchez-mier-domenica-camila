-- Tabla de categorías de productos
CREATE TABLE Category (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT
);

-- Tabla de productos
CREATE TABLE Product (
    id SERIAL PRIMARY KEY,
    code VARCHAR(50) UNIQUE NOT NULL,
    name VARCHAR(100) NOT NULL,
    stock INT DEFAULT 0,
    price DECIMAL(10, 2) NOT NULL,
    exp DATE NOT NULL,
    category_id INT REFERENCES Category(id) ON DELETE SET NULL
);

-- Tabla de proveedores
CREATE TABLE Supplier (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    contact_info TEXT,
    phone VARCHAR(20),
    address TEXT
);

-- Tabla de usuarios (para registrar quién realiza los movimientos)
CREATE TABLE UserAccount (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    role VARCHAR(20) DEFAULT 'staff', -- 'admin', 'staff', etc.
    email VARCHAR(100)
);

-- Tabla de entradas y salidas de inventario
CREATE TABLE StockMovement (
    id SERIAL PRIMARY KEY,
    product_id INT REFERENCES Product(id) ON DELETE CASCADE,
    user_id INT REFERENCES UserAccount(id) ON DELETE SET NULL,
    supplier_id INT REFERENCES Supplier(id) ON DELETE SET NULL,
    quantity INT NOT NULL,
    movement_type VARCHAR(10) NOT NULL CHECK (movement_type IN ('IN', 'OUT')),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    notes TEXT
);
