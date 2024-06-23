import pool from "../src/db.config.js";

export const getAll= async (req, res) => {
    try {
      const feedback = await pool.query("SELECT * FROM products");
      res.status(200).json({ success: true, data: feedback.rows });
    } catch (err) {
      res.status(500).json({ success: false, message: err.message });
    }
  };
  export  const getSingle= async (req, res) => {
    const id = req.params.id;
    try {
      const feedback = await pool.query("SELECT * FROM products WHERE id=$1", [
        id,
      ]);
      if (feedback.rowCount == 0) {
        res.status(404).json({ success: false, message: "Product not found" });
      } else {
        res.status(200).json({ success: true, data: feedback.rows[0] });
      }
    } catch (err) {
      res.status(500).json({ success: false, message: err.message });
    }
  }

  export const createProduct= async (req, res) => {
    try {
      const {
        productThumbnail,
        productTitle,
        productDescription,
        productCost,
        onOffer,
      } = req.body;
  
      const feed = await pool.query(
        "INSERT INTO products (productThumbnail, productTitle, productDescription, productCost, onOffer) VALUES ($1, $2, $3, $4, $5) RETURNING *",
        [productThumbnail, productTitle, productDescription, productCost, onOffer]
      );
  
      if (feed.rowCount === 1) {
        res.status(201).json({ success: true, message: "Product created successfully", data: feed.rows[0] });
      } else {
        res.status(400).json({ success: false, message: "Failed to create product" });
      }
    } catch (err) {
      res.status(500).json({ success: false, message: err.message });
    }
  }

  export const updateAproduct= async (req, res) => {
 
    const {
      productThumbnail,
      productTitle,
      productDescription,
      productCost,
      onOffer,
    } = req.body;
    
    const id = req.params.id;
    try {
      let updateTool;
  
      if (productThumbnail) {
        updateTool = await pool.query("UPDATE products SET productThumbnail=$1 WHERE id=$2", [productThumbnail, id]);
      }
      if (productTitle) {
        updateTool = await pool.query("UPDATE products SET productTitle=$1 WHERE id=$2", [productTitle, id]);
      }
      if (productDescription) {
        updateTool = await pool.query("UPDATE products SET productDescription=$1 WHERE id=$2", [productDescription, id]);
      }
      if (productCost) {
        updateTool = await pool.query("UPDATE products SET productCost=$1 WHERE id=$2", [productCost, id]);
      }
      if (onOffer) {
        updateTool = await pool.query("UPDATE products SET onOffer=$1 WHERE id=$2", [onOffer, id]);
      }
      if(updateTool.rowCount===1){
         res.status(200).json({ success: true, message: "Product updated successfully"});
      } else {
        res.status(404).json({ success: false, message: "Product failed to update" });
      }
      
    } catch (err) {
      res.status(500).json({ success: false, message: err.message });
    }
  };

 export const deleteProduct=async (req, res) => {
    const id = req.params.id;
    try {
      const deleteTool = await pool.query("DELETE FROM products WHERE id=$1 RETURNING *", [id]);
      if (deleteTool.rowCount === 1) {
        res.status(200).json({ success: true, message: "Product deleted successfully", data: deleteTool.rows[0] });
      } else {
        res.status(404).json({ success: false, message: "Product not found" });
      }
    } catch (err) {
      res.status(500).json({ success: false, message: err.message });
    }
  }
  

  