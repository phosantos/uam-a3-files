CREATE DATABASE blog;

CREATE TABLE posts (
id INT AUTO_INCREMENT,
title VARCHAR(100) NOT NULL,
body TEXT NOT NULL,
created_at TIMESTAMP NOT NULL DEFAULT current_timestamp,
primary key(id)
);

CREATE TABLE newsletter (
email VARCHAR(50) NOT NULL,
name VARCHAR(100) NOT NULL,
primary key(email)
);