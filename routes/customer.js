const express = require("express")
const router = express.Router()
module.exports = router;

// router.use(logger)

const { Pool, Client } = require('pg')
const pool = new Pool({
    user: 'valer',
    password: 'LMori1011S',
    server: 'localhost',
    database: 'DS',
    port: 5432
})

const client = new Client({
    user: 'valer',
    password: 'LMori1011S',
    server: 'localhost',
    database: 'DS',
    port: 5432
})
client.connect();

// GET all customers
router.get("/all", async (req, res) => {
  try {
    const restaurants = await pool.query("SELECT * FROM customer");
    res.json(restaurants.rows);
  } catch (err) {
    console.error(err.message);
  }
})

// GET a single customer with the requested customer_id
router.get("/id/:id", async (req, res) => {
  try {
    const restaurants = await pool.query(`SELECT * FROM customer WHERE customer_id = ${req.params.id}`);
    res.json(restaurants.rows);
  } catch (err) {
    console.error(err.message);
  }
})


// DELETE a customer with the requested customer_id
router.delete("/id/:id", async (req, res) => {
  try {
    const restaurants = await pool.query(`DELETE FROM customer WHERE customer_id = ${req.params.id}`);
    res.json(restaurants.rows);
  } catch (err) {
    console.error(err.message);
  }
})

// POST a single customer with the requested login and password
router.post("/new/:login/:password", async (req, res) => {
  try {
    const restaurants = await pool.query(`INSERT INTO customer(login, password) VALUES ('${req.params.login}', '${req.params.password}');`);
    res.json(restaurants.rows);
  } catch (err) {
    console.error(err.message);
  }
})