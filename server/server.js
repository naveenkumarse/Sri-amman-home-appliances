const express = require("express")
const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
const cors = require("cors")
app.use(cors())

const AddToCartModel = require("./model/AddToCartModel");
const ProductModel = require("./model/productModel");
// const CounterModel = require("./model/counterModel");
// connecting with mongodb

const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const {  SignUp, Login, ListUser } = require("./controllers/user");
const { AddProduct, ListProduct } = require("./controllers/product");
mongoose.connect("mongodb+srv://shwethachandran:saha@cluster0.u2ae1kb.mongodb.net/sahadb?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Connection Successfull")
}).catch((err) => {
    console.log(err)
})

// sign up API
app.post("/signup",SignUp)


//Login API
app.post("/login",Login);

// Get all user 

app.get("/admin/listuser",ListUser);



// Add Products
app.post("/addproducts", AddProduct);


//list product
app.get("/listproducts", ListProduct);


//Add to cart

app.post("/addtocart",AddProduct )

app.get("/mycart", ListProduct);


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

