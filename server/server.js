const express = require("express")
const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
const cors = require("cors")
app.use(cors())

// connecting with mongodb

const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://Naveenkumar:darksoul@cluster0.d0joefb.mongodb.net/sahadb?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Connection Successfull")
}).catch((err) => {
    console.log(err)
})

// sign up API
app.post("/signup", (req, res) => {
    console.log(req.body)
    const { name, phone, email, password } = req.body;
    UserModel.findOne({ email: email }, (err, user) => {
        if (user) {
            res.send({ message: "This email id already Register" })
        }
        else {
            const user = new UserModel({
                name,
                phone,
                email,
                password,
            })
            user.save();
            res.send({ message: "Successfull Register" })
        }
    })
})


//Login API
app.post("/login", (req, res) => {
    console.log(req.body)
    const { email, password } = req.body
    UserModel.findOne({ email: email }, (err, user) => {
        if (user) {
            if (password == user.password) {
                res.send(user)
            }
            else {
                res.send({ message: "Password didn't match" })
            }
        }

        else {
            res.send("This email id is not register")
        }

    }
    )
})

