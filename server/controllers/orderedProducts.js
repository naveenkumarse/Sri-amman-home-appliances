
const Ordered = require('../model/OrderedModel');

exports.CreateOrder = async (req, res) => {
    console.log(req.body)
    const {date,uid,total } = req.body;

    const order = new Ordered({
        date,
        uid,
        total
    })
    order.save();
    res.send({ message: "Successfull Register" })
}


exports.ListMyOrders= async (req, res) => {
    console.log(req);
    
    console.log("--->uid"+req.body.uid);
    const data = await Ordered.findById(req.body.uid);
    if (data) {
        console.log(data);
        res.send(data);
    } else {
        res.send(err);
    }
}


exports.OrderList=async(req,res)=>{
    try {
        const expense = await Ordered.find();
        // console.log(expenses);
        return res.status(200).json({
            data: expense,
            length: expense.length
        })
    } catch (error) {
        return res.send(error);
    }
}