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

router.post("/"), async (req, res) => {
    try {
        const { name, location, img, operatingHours, type, pricelvl  } = req.body;
        const newRestaurant = await pool.query(
            "INSERT INTO restaurant (name, location, image_url, operating_hours, type, price_level) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
            [name, location, img, operatingHours, type, pricelvl]
        );
        res.json(newRestaurant.rows[0]);
        
    } catch (err) {
        console.error(err);        
    }
}

module.exports = router;