const Product = require('../model/productModel');

exports.CreateProduct = async(req,res)=>{
    console.log(req.body)
    const { image, pid, name, description, price } = req.body;

    const product = new Product({
        image,
        
        name,
        description,
        price,
        
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


exports.DeleteProduct = async (req,res)=>{
    try {
        await Product.deleteOne(req.body.id);
        res.status(200).json({
            msg: 'deleted'
        })
    } catch (err) {
        res.status(500).json({
            msg: 'server internal error'
        })
    }
}


exports.UpdateProduct =async(req,res)=>{
    try {
        const myquery = req.body._id;    
        const value = req.body;
        console.log(myquery)
        console.log(value)
        await Product.updateOne({"_id":myquery}, value);
        res.status(200).json({
            msg: 'updated'
        })
    } catch (err) {
        res.status(500).json({
            msg: 'Server internal error'
        })
    }
}