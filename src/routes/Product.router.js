import { Router } from "express";
import { validateProduct } from "./middleware/middleware.js";
import { getAll,getSingle,createProduct,updateAproduct,deleteProduct } from "../../manager/manager.js";

const router = Router();

router.get("/", getAll);

router.get("/:id",getSingle );

router.post("/",createProduct );

router.patch("/:id",updateAproduct,validateProduct )
router.delete("/:id",deleteProduct );

export default router;
