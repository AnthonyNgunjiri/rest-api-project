 export const validateProduct=(req,res,next)=>{
    const {
      productThumbnail,
      productTitle,
      productDescription,
      productCost,
      onOffer,
    } = req.body;
    if (!productThumbnail) {
      return res.status(404).json({ success: false, message: "Product thumbnail not found" });
    }
    if (!productTitle) {
      res.status(404).json({ success: false, message: "Product title not found" });
    }
    if (!productDescription) {
      res.status(404).json({ success: false, message: "Product description not found" });
      }
    if (!productCost) {
      res.status(404).json({ success: false, message: "Product cost not found" });
      }
    if (!onOffer) {
      res.status(404).json({ success: false, message: "Product offer unrecognized" });
      }
      next();
  }