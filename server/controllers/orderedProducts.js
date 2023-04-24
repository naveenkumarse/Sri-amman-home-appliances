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