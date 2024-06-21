import { Router } from "express";
import pool from "../db.config";

const router = Router();
//products
router.get(" ", async (req, res) => {
  try {
    const feedback = await pool.query("SELECT * FROM products");
    res.status(200).json({ sucess: true, data: feedback.rows });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});
router.get(" id:", async (req, res) => {
  const id = req.params.id;
  try {
    const feedback = await pool.query("SELECT * FROM products WHERE id=$1"[id]);
    if (feedback.rowCount == 0) {
      res.status(404).json({ success: false, message: "product not found" });
    } else {
      res.status(200).json({ sucess: true, data: feedback.rows[0] });
    }
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});
router.post("/ id:", (req, res) => {
  res.send("add a product");
});

router.patch(" id:", (req, res) => {
  res.send("update all a product resource");
});
router.delete(" id:", (req, res) => {
  res.send("delete  a product");
});

export default router;
