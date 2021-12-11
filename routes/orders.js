const express = require("express")
const router = express.Router()
const pool = require("../connection");
const authorize = require("../middlewares/authorize");

// GET orders of customer/manager
router.get("/", authorize, async (req, res) => {
  try {
    if (req.user.type === "consumer") {
      const orders = await pool.query
      (`SELECT * FROM orders WHERE customer_id = ${req.user.id}`);
      res.json(orders.rows);
    }
    else {
      const orders = await pool.query
      (`SELECT * FROM orders WHERE restaurant_id = ${req.user.id}`);
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
    (`SELECT * FROM order_contents, products WHERE order_id = ${req.params.id} `);
    res.json(orderDetails.rows)
  } catch (err) {
    console.error(err)  
  }
})

// Update order status
router.put("/", authorize, async (req, res) => {
  try {
    const { order_id, order_status } = req.body;
    const updatedOrder = await pool.query(
        `UPDATE orders SET order_status = $1 WHERE order_id = $2 RETURNING *`,
        [order_status, order_id]
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
      WHERE order_id = ${req.params.id}
      `);
      res.json(orders.rows);
    } catch (err) {
      console.error(err.message);
    }
})

module.exports = router;

// POST

// Change