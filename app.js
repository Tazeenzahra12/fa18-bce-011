const express = require("express");
const cookieParser = require("cookie-parser");
const Product = require("./router/productrouter");
const Info = require("./router/infoRouter");
const MenuList = require("./router/menuListRouter");
const User = require("./router/Userrouter");
const {MONGOURI} = require('./config/keys')


const app = express();
app.use(cookieParser());

app.use(express.json());

app.use("/Data", Product);
app.use("/info", Info);
app.use("/menuList", MenuList);
app.use("/user", User);

if(process.env.NODE_ENV=="production"){
    app.use(express.static('client/build'))
    const path = require('path')
    app.get("*",(req,res)=>{
        res.sendFile(path.resolve(__dirname,'client','build','index.html'))
    })
}


module.exports = app;
