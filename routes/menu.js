const express = require("express")
const router = express.Router()
module.exports = router;

const pool = require("../connection");

// GET all menu positions
router.get("/all", async (req, res) => {
    try {
      const restaurants = await pool.query("SELECT * FROM menu");
      res.json(restaurants.rows);
    } catch (err) {
      console.error(err.message);
    }
  })

// GET a single menu position
router.get("/id/:id", async (req, res) => {
    try {
      const restaurants = await pool.query(`SELECT * FROM menu WHERE menu_id = ${req.params.id}`);
      res.json(restaurants.rows);
    } catch (err) {
      console.error(err.message);
    }
  })

// DELETE a menu position by its ID
router.delete("/id/:id", async (req, res) => {
    try {
      const restaurants = await pool.query(`DELETE FROM menu WHERE menu_id = ${req.params.id}`);
      res.json(restaurants.rows);
    } catch (err) {
      console.error(err.message);
    }
  })

// POST 
// WAITING FOR PROPER ROUTING TO BE DISCUSSED!
// router.post("/new/:restaurant_key/:", async (req, res) => {
//   try {
//     const restaurants = await pool.query(`INSERT INTO menu (restaurant_key, title, description, image, price) VALUES (??)`);
//     res.json(restaurants.rows);
//   } catch (err) {
//     console.error(err.message);
//   }
// })

// Renaming menu position by its ID
router.post("/rename/:id/:new_title", async (req, res) => {
    try {
      const restaurants = await pool.query
      (`
      UPDATE menu
      SET title = '${req.params.new_title}'
      WHERE menu_id = ${req.params.id};
      `);
      res.json(restaurants.rows);
    } catch (err) {
      console.error(err.message);
    }
  })

// Changing description of menu postion by its ID
router.post("/new_description/:id/:new_description", async (req, res) => {
    try {
      const restaurants = await pool.query
      (`
      UPDATE menu
      SET description = '${req.params.new_description}'
      WHERE menu_id = ${req.params.id};
      `);
      res.json(restaurants.rows);
    } catch (err) {
      console.error(err.message);
    }
  })

// Changing image link of menu position by id
router.post("/new_img/:id/:new_img", async (req, res) => {
    try {
      const restaurants = await pool.query
      (`
      UPDATE menu
      SET image = '${req.params.new_img}'
      WHERE menu_id = ${req.params.id};
      `);
      res.json(restaurants.rows);
    } catch (err) {
      console.error(err.message);
    }
  })

// Changing price
router.post("/new_price/:id/:new_price", async (req, res) => {
    try {
      const restaurants = await pool.query
      (`
      UPDATE menu
      SET price = '${req.params.new_price}'
      WHERE menu_id = ${req.params.id};
      `);
      res.json(restaurants.rows);
    } catch (err) {
      console.error(err.message);
    }
  })