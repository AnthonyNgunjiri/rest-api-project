
import ProductRouter from "./routes/Product.router.js";
import express from "express";
           
const app = express();

 app.use("/product", ProductRouter);

app.listen(3000, () => {
  console.log(" router  running on port 3000....");
});
