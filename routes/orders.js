const express = require("express")
const router = express.Router()
const pool = require("../connection");
const authorize = require("../middlewares/authorize");

// GET orders of customer/manager
router.get("/", authorize, async (req, res) => {
  try {
    if (req.user.type === "consumer") {
      const orders = await pool.query
      (`SELECT * FROM "order" WHERE customer_id = ${req.user.id}`);
      res.json(orders.rows);
    }
    else {
      const orders = await pool.query
      (`SELECT * FROM "order", restaurant WHERE restaurant_id = ${req.user.id}`);
      res.json(orders.rows);
    }
  } catch (err) {
    console.error(err.message);
  }
})

// GET order details
router.get("/:id", async (req, res) => {
  try {
    const orderDetails = await pool.query
    (`SELECT * FROM order_contents, product WHERE order_id = ${req.params.id} `);
    res.json(orderDetails.rows)
  } catch (err) {
    console.error(err)  
  }
})

router.put("/", authorize, async (req, res) => {
  try {
    const { order_id } = req.body;
    const updatedOrder = await pool.query(
        `UPDATE "order" SET status = 'Delivered' WHERE order_id = $1 RETURNING *`,
        [order_id]
    );
    res.json(updatedOrder.rows[0]);
  } catch (err) {
    console.error(err);        
  }
})

// DELETE an order
router.delete("/id/:id", async (req, res) => {
    try {
      const orders = await pool.query
      (`
      DELETE FROM orders
      WHERE orders_id = ${req.params.id}
      `);
      res.json(orders.rows);
    } catch (err) {
      console.error(err.message);
    }
})

module.exports = router;

// POST

// Change