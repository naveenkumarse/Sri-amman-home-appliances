const mongoose = require("mongoose");
const AddToCartSchema = new mongoose.Schema({
    image: {
      type: String,
      required: true,
    },
    pid: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: true,
    },
    price: {
      type: Number,
      required: 0,
    },
    
  });
  
  const AddToCart = mongoose.model("AddToCart", AddToCartSchema);
  
  module.exports = AddToCart;