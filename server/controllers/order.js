const Order = require('../model/OrderModel');

exports.AddOrder = async (req, res) => {
    console.log(req.body)
    const { image, pid, name, description, price } = req.body;

    const addToCart = new Order({
        image,
        pid,
        name,
        description,
        price
    })
    addToCart.save();
    res.send({ message: "Successfull added to cart" })
}


exports.ListMycart = async (req, res) => {
    const data = await Order.find({});
    if (data) {
        console.log(data);
        res.send(data);
    } else {
        res.send(err);
    }
}
