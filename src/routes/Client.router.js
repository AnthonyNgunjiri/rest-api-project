import { Router } from "express";

const router = Router();

router.get(" ", (req, res) => {
  res.send("get all clients");
});
router.post("/ id:",(req, res) => {
  res.send("add a client");
});
router.patch(" /id:", (req, res) => {
  res.send("update a client ");
});
router.delete("/id:", (req, res) => {
  res.send("delete  a client");
});

export default router;