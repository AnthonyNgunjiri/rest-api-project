import { Router } from "express";

const router = Router();
//products
router.get(" ", (req, res) => {
  res.send("get all product");
});
router.get(" id:", (req, res) => {
  res.send("get a product");
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
