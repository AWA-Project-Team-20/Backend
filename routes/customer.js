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
router.get("/all", (req, res) => {
    pool
  .query('SELECT * FROM customer')
  .then(res => console.log(res.rows))
  .catch(err =>
    setImmediate(() => {
      throw err
    })
  )
})

// GET a single customer with the requested customer_id
router.get("/id/:id", (req, res) => {
    pool
  .query(`SELECT * FROM customer WHERE customer_id = ${req.params.id}`)
  .then(res => console.log(res.rows))
  .catch(err =>
    setImmediate(() => {
      throw err
    })
  )
})


// DELETE a customer with the requested customer_id
router.delete("/id/:id", (req, res) => {
    pool
  .query(`DELETE FROM customer WHERE customer_id = ${req.params.id}`)
  .then()
  .catch(err =>
    setImmediate(() => {
      throw err
    })
  )
})

// POST a single customer with the requested login and password
router.post("/new/:login/:password", (req, res) => {
    pool
  .query(`INSERT INTO customer(login, password) VALUES ('${req.params.login}', '${req.params.password}');`)
  .then()
  .catch(err =>
    setImmediate(() => {
      throw err
    })
  )
})