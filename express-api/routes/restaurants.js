const express = require("express")
const router = express.Router()
module.exports = router;

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

router.get("/", (req, res) => {
  
    pool.query('SELECT * FROM restaurant', (error, results) => {
      if (error) {
        throw error
      }
      res.status(200).json(results.rows)
    })
})