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

