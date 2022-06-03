CREATE DATABASE firstapi;

CREATE TABLE usersi(
    id SERIAL PRIMARY KEY,
    name VARCHAR(40),
    email TEXT
);

INSERT INTO usersi (name, email) VALUES
                                    ('daniel', 'Joe@ibm.com'),
                                    ('perez', 'Ryan@faztweb.com');
