import { Router } from "express";
import pool from "../db.config.js";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const feedback = await pool.query("SELECT * FROM products");
    res.status(200).json({ sucess: true, data: feedback.rows });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});
router.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const feedback = await pool.query("SELECT * FROM products WHERE id=$1", [
      id,
    ]);
    if (feedback.rowCount == 0) {
      res.status(404).json({ success: false, message: "product not found" });
    } else {
      res.status(200).json({ success: true, data: feedback.rows[0] });
    }
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});


router.post("/", async (req, res) => {
  try {
    const {
      productThumbnail,
      productTitle,
      productDescription,
      productCost,
      onOffer,
    } = req.body;

    const feed = await pool.query(
      "INSERT INTO products(productThumbnail, productTitle, productDescription,productCost,onOffer) VALUES ($1,$2,$3,$4,$5) ",
      [productThumbnail, productTitle, productDescription, productCost, onOffer]
    );

    if (feed.rowCount === 1) {
      res
        .status(201)
        .json({ success: true, message: "product created successfully" });
    } else {
      res
        .status(400)
        .json({ success: false, message: "Failed to create product" });
    }
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

router.patch(" /:id", (req, res) => {
  res.send("update all a product resource");
});
router.delete(" /id", (req, res) => {
  res.send("delete  a product");
});

export default router;
