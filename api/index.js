//import dependencies
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const postroute = require("./post/post.route");
const userroute=require("./user/user.route")

//use the dependencies
dotenv.config();
app.use(express.json());
app.use(cors({
  origin: 'https://unishare-sigma.vercel.app',
  credentials: true
}));
app.use(express.urlencoded({ extended: true }));

// specify the main routes
app.use("/api/user",userroute)
// app.use("/user/userlogin", userroute);

app.use("/api/post/add", postroute);
app.use("/api/post/get",postroute)

//connect to database
mongoose
  .connect(process.env.MONGO_URL)
  .then(console.log("connected to mongoDB"))
  .catch((err) => console.log(err));

  //listening 
app.listen(5000, () => { 
  console.log("server is successfully running on port 5000");
});
