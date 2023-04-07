const express = require("express")
const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
const cors = require("cors")
app.use(cors())
const UserModel = require("./model");
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
    const { firstname, lastname, email, phoneno, password, streetname, city, state, pincode } = req.body;

    const user = new UserModel({
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

})


//Login API
app.post("/login", async(req, res) => {
    console.log(req.body)
    const { email, password } = req.body;
    
        try {
            // check if the user exists
            const user = await User.findOne({ email: email });
            if (user) {
              //check if password matches
              const result = req.body.password === user.password;
              if (result) {
                res.render("secret");
              } else {
                res.status(400).json({ error: "password doesn't match" });
              }
            } else {
              res.status(400).json({ error: "User doesn't exist" });
            }
          } catch (error) {
            res.status(400).json({ error });
          }
    });
})


app.listen(8080, () => {
    console.log("Server is runing at port 8080")
})
