const express = require("express")
const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
const cors = require("cors")
app.use(cors())
const UserModel = require("./model/model");
const AddToCartModel = require("./model/AddToCartModel");
const ProductModel = require("./model/productModel");
const CounterModel = require("./model/counterModel");
// connecting with mongodb

const mongoose = require("mongoose");
// const jwt = require("jsonwebtoken");
mongoose.connect("mongodb+srv://shwethachandran:saha@cluster0.u2ae1kb.mongodb.net/sahadb?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Connection Successfull")
}).catch((err) => {
    console.log(err)
})

// sign up API
app.post("/signup", async (req, res) => {
    let userid;
    const value = await CounterModel.findOneAndUpdate(
        { id: "autoval" },
        { "$inc": { "seq": 1 } },
        { new: true })
            
                
                if (value == null) {
                    const newval = new CounterModel({ id: "autoval", seq: 1 })
                    newval.save();
                    userid = 1;
                    
                } else {
                    userid = value.seq;
                    console.log(value.seq);
                }
            
        
   



    console.log(req.body)
    const { firstname, lastname, email, phoneno, password, streetname, city, state, pincode } = req.body;

    const user = new UserModel({
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

})


//Login API
app.post("/login", async (req, res) => {

    console.log(req.body)
    const { email, password } = req.body;
    // jwt.sign({id},"jwtwebtoken",{expiresIn: 300})
    const data = await UserModel.findOne({ email: email });
    if (data) {

        if (data) {
            if (password == data.password) {
                console.log(data)
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
});

// Add Products
app.post("/addproducts", (req, res) => {
    console.log(req.body)
    const { image, pid, name, description, price } = req.body;

    const product = new ProductModel({
        image,
        pid,
        name,
        description,
        price
    })
    product.save();
    res.send({ message: "Successfull Register" })

})


//list product
app.get("/listproducts", async (req, res) => {

    const data = await ProductModel.find({});
    if (data) {
        console.log(data);
        res.send(data);
    } else {
        res.send(err);
    }
});


//Add to cart

app.post("/addtocart", (req, res) => {
    console.log(req.body)
    const { image, pid, name, description, price } = req.body;

    const addToCart = new AddToCartModel({
        image,
        pid,
        name,
        description,
        price
    })
    addToCart.save();
    res.send({ message: "Successfull added to cart" })
})

app.get("/mycart", async (req, res) => {

    const data = await AddToCartModel.find({});
    if (data) {
        console.log(data);
        res.send(data);
    } else {
        res.send(err);
    }
});


//
// const verifyJwt = (req,res,next) =>{
//     const token = req.headers["access-token"];
//     if(!token){
//         return res.json("We need token please provide it for next time")
//     }else{
//         jwt.verify(token,"jwtSecretKey",(err,decoded)=>{
//             if(err){
//                 res.json("Not Authenticated");
//             }else{
//                 res.userId = decoded.id;
//                 next();
//             }
//         })
//     }
// }

/// localstorage.setItem("token",res.data.token);
/// headers: {'access-token': localStorage.getItem("token");} // app.get 
app.listen(8080, () => {
    console.log("Server is runing at port 8080")
})


// jwt.sign({ id }, "jwtwebtoken", { expiresIn: 300 })

// return res.json({Login:true, token,data});

