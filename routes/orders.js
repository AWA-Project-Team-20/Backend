const express = require("express")
const router = express.Router()
module.exports = router;

const pool = require("../connection");

// GET all orders
router.get("/all", async (req, res) => {
    try {
      const restaurants = await pool.query("SELECT * FROM orders");
      res.json(restaurants.rows);
    } catch (err) {
      console.error(err.message);
    }
})

// GET a single order by own id
router.get("/id/:id", async (req, res) => {
  try {
    const restaurants = await pool.query
    (`
    SELECT * FROM orders 
    WHERE orders_id = ${req.params.id}
    `);
    res.json(restaurants.rows);
  } catch (err) {
    console.error(err.message);
  }
})

// DELETE an order
router.delete("/id/:id", async (req, res) => {
    try {
      const restaurants = await pool.query
      (`
      DELETE FROM orders
      WHERE orders_id = ${req.params.id}
      `);
      res.json(restaurants.rows);
    } catch (err) {
      console.error(err.message);
    }
})

// POST

// Change

// how are we going to manage the menu positions inside an order?
// I am so fucking lost at this point..