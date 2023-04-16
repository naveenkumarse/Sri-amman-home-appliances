const express = require("express")
const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
const cors = require("cors")
app.use(cors())

// connecting with mongodb

const mongoose = require("mongoose");
// const jwt = require("jsonwebtoken");
const {  SignUp, Login, ListUser } = require("./controllers/user");
const {  ListProduct, UpdateProduct, DeleteProduct, CreateProduct } = require("./controllers/product");
const { ListAllOrder, ListMyOrder, ListMycart, AddOrder } = require("./controllers/order");
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
app.post("/addproducts", CreateProduct);

//list product
app.get("/listproducts", ListProduct);

//Add to cart

app.post("/addtocart",AddOrder )

//List all products



//update product

app.put("/product/updateone",UpdateProduct);

// delete product 

app.delete("/product/deleteone",DeleteProduct);

// Order products

app.post("/admin/listOrder",ListAllOrder);

app.get("/user/listmycart",ListMycart);

app.get("/user/listmyorder",ListMyOrder);


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

