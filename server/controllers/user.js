const User = require('../model/UserModel')
const Counter = require('../model/counterModel')

exports.SignUp = async (req, res) => {
    let userid;
    const value = await Counter.findOneAndUpdate(
        { id: "autoval" },
        { "$inc": { "seq": 1 } },
        { new: true })


    if (value == null) {
        const newval = new Counter({ id: "autoval", seq: 1 })
        newval.save();
        userid = 1;

    } else {
        userid = value.seq;
        console.log(value.seq);
    }
    console.log(req.body)
    const { firstname, lastname, email, phoneno, password, streetname, city, state, pincode } = req.body;

    const user = new User({
        userid,
        firstname,
        lastname,
        email,
        phoneno,
        password,
        streetname,
        city,
        state,
        pincode
    })
    user.save();
    res.send({ message: "Successfull Register" })

}

exports.Login = async (req, res) => {
    console.log(req.body)
    const { email, password } = req.body;
    // jwt.sign({id},"jwtwebtoken",{expiresIn: 300})
    const data = await User.findOne({ email: email });
    if (data) {

        if (data) {
            if (password == data.password) {
                console.log(data.id)
                res.send(data)
            }
            else {
                res.send({ message: "Password didn't match" })
            }
        }

        else {
            res.send("This email id is not register")
        }

    }
}

exports.ListUser=async(req,res)=>{
    try {
        const expense = await User.find();
        // console.log(expenses);
        return res.status(200).json({
            data: expense,
            length: expense.length
        })
    } catch (error) {
        return res.send(error);
    }
}


exports.ListMyUser=async(req,res)=>{
    try {
        const {uid} = req.body;
        const expense = await User.findById(uid);
        // console.log(expenses);
        return res.status(200).json({
            data: expense,
            length: expense.length
        })
    } catch (error) {
        return res.send(error);
    }
}