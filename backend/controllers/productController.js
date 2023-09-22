import asyncHandler from "../middleware/asyncHandler.js";
import Product from "../models/productModel.js";

//@desc Fetch all products
//@route GET/api/products
//@Access Public 
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});


//@desc Fetch a products
//@route GET/api/products/:id
//@Access Public 
const getProductbyId = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    return res.json(product);
  } else {
    res.status(400);
    throw new Error("Resource Not Found");
  }
});


export {getProducts, getProductbyId}