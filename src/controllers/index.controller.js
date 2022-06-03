const { Pool } = require('pg');
const {json, response} = require("express");

const pool = new Pool({
 host: 'localhost',
    user: 'postgres',
    password: 'daniel',
    database: 'firstapi',
    port: '5432'
});

const getUsers = async (req, res) => {
    const response = await pool.query('SELECT * FROM usersi');
    res.status(200).json(response.rows);
}

const getUserById= async (req, res) => {
    const id = req.params.id;
    const response = await pool.query('SELECT * FROM usersi WHERE id = $1', [id]);
    res.json(response.rows);
}

const createUsers = async (req, res) => {
    const { name, email } = req.body;

    const response = await pool.query('INSERT INTO usersi (name, email) VALUES ($1, $2)', [name, email]);
    console.log(response);
    res.json({
        message: 'User Added Succesfully',
        body: {
            user: {name, email}
        }
    })
};

const updateUser = async (req, res) => {
    const id = req.params.id;
    const { name, email} = req.body;
    const response = await pool.query('UPDATE usersi SET name = $1, email = $2 WHERE id= $3', [
        name,
        email,
        id
    ])
    console.log(response);
    res.json('User Update Successfully');
}

const deleteUser = async (req, res) => {
    const id = req.params.id;
    const response = await pool.query('DELETE FROM usersi Where id = $1', [id])
    console.log(response)
    res.json(`User ${id} delete succesfully`);
}

    module.exports = {
    getUsers,
    createUsers,
    getUserById,
    deleteUser,
    updateUser,
    }
