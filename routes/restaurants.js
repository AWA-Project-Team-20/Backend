const express = require("express");
const router = express.Router();
const pool = require("../connection");

router.get("/", async (req, res) => {
  try {
    const restaurants = await pool.query("SELECT * FROM restaurant");
    res.json(restaurants.rows);
  } catch (err) {
    console.error(err.message);
  }
})

module.exports = router;