const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();

app.get("/",(req,res)=>{
    res.send("Hello");
});

//routes
// app.use(express.json());

//db connection
const uri=process.env.MONGO_URI
const conn = async (req,res)=>{
    await mongoose.connect(uri).then(()=>{
        console.log("DB connected");
    })
}
conn();

//server 
const port = process.env.PORT || 1000
const server = app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});