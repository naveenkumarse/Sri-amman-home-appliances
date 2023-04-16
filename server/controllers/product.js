const Product = require('../model/productModel');

exports.AddProduct = async(req,res)=>{
    console.log(req.body)
    const { image, pid, name, description, price } = req.body;

    const product = new Product({
        image,
        uid,
        pid,
        name,
        description,
        price,
        placeorder
    })
    product.save();
    res.send({ message: "Successfull Register" })
}


exports.ListProduct= async(req,res)=>{
    const data = await Product.find({});
    if (data) {
        console.log(data);
        res.send(data);
    } else {
        res.send(err);
    }
}

