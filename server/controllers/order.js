const Order = require('../model/OrderModel');

exports.AddOrder = async (req, res) => {
    console.log(req.body)
    const { image,uid, pid, name, description, price,success } = req.body;

    const addToCart = new Order({
        image,
        uid,
        pid,
        name,
        description,
        price,
        success
    })
    addToCart.save();
    res.send({ message: "Successfull added to cart" })
}


exports.ListMycart = async (req, res) => {
    const uid = req.body.uid;
    console.log("uid"+uid);
    const data = await Order.find({
        "uid": {"$in": uid},
        "success" : {"$in":"false"}
    });
    if (data) {
        console.log(data);
        res.send(data);
    } else {
        res.send(err);
    }
}

exports.ListAllOrder = async (req,res)=>{
    try {
        const expense = await Order.find();
        // console.log(expenses);
        return res.status(200).json({
            data: expense,
            length: expense.length
        })
    } catch (error) {
        return res.send(error);
    }
}

exports.ListMyOrder = async (req, res) => {
    const uid = req.body.uid;
    console.log("uid"+uid);
    const data = await Order.find({
        "uid": {"$in": uid},
        "success" : {"$in":"true"}
    });
    if (data) {
        console.log(data);
        res.send(data);
    } else {
        res.send(err);
    }
}
