const express = require("express")
const router = express.Router()
module.exports = router;

const pool = require("../connection");

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
    const restaurants = await pool.query
    (`
    SELECT * FROM customer 
    WHERE customer_id = ${req.params.id}
    `);
    res.json(restaurants.rows);
  } catch (err) {
    console.error(err.message);
  }
})


// DELETE a customer with the requested customer_id
router.delete("/id/:id", async (req, res) => {
  try {
    const restaurants = await pool.query
    (`
    DELETE FROM customer 
    WHERE customer_id = ${req.params.id}
    `);
    res.json(restaurants.rows);
  } catch (err) {
    console.error(err.message);
  }
})

// POST a single customer with the requested login and password
router.post("/new/:login/:password", async (req, res) => {
  try {
    const restaurants = await pool.query
    (`
    INSERT INTO customer(login, password)
     VALUES ('${req.params.login}', '${req.params.password}');
    `);
    res.json(restaurants.rows);
  } catch (err) {
    console.error(err.message);
  }
})

// Changing customer password (questionable if needed)
router.post("/new_password/:id/:new_password", async (req, res) => {
  try {
    const restaurants = await pool.query
    (`
    UPDATE customer
    SET password = '${req.params.new_password}'
    WHERE customer_id = ${req.params.id};
    `);
    res.json(restaurants.rows);
  } catch (err) {
    console.error(err.message);
  }
})