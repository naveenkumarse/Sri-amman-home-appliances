const Product = require('../model/productModel');

exports.CreateProduct = async (req, res) => {
    console.log(req.body)
    const { image, name, description, price ,pid,stocks} = req.body;

    const product = new Product({
        image,
        name,
        pid,
        description,
        price,
        stocks

    })
    product.save();
    res.send({ message: "Successfull Register" })
}


exports.ListProduct = async (req, res) => {
    const data = await Product.find({});
    if (data) {
        console.log(data);
        res.send(data);
    } else {
        res.send(err);
    }
}


exports.DeleteProduct = async (req, res) => {
    try {
        console.log(req.body)
        
        
        await Product.findByIdAndDelete(req.body.pid);
        res.status(200).json({
            msg: 'deleted'
        })
        console.log("deleted");
    } catch (err) {
        res.status(500).json({
            msg: 'server internal error'
        })
    }
}


exports.UpdateProduct = async (req, res) => {
    try {
        const {uname:name,uprice:price,udesc:description,image} =req.body;
        const value ={name,price,description,image};
        console.log(value)
        await Product.findByIdAndUpdate(req.body.pid,value);
        res.status(200).json({
            msg: 'updated'
        })
    } catch (err) {
        res.status(500).json({
            msg: 'Server internal error'
        })
    }
}