const express= require('express');
const bodyParser= require('body-parser');
const ejs= require('ejs');
const path = require('path');
const encrypt = require('mongoose-encryption');

var app= express();
app.set("view engine","ejs");
app.use(express.urlencoded({extended : true}));
app.use(express.json());
app.use(express.static(path.join(__dirname,'public')));


const mongoose = require("mongoose");
//const { error } = require('console');
mongoose.connect("mongodb://localhost:27017/secrets");
const trySchema = new mongoose.Schema({
    email: String,
    password: String

});

const secret = "thisislittlesecret.";
trySchema.plugin(encrypt, {
    secret: secret,
    encryptedFields: ["password"]
});


const item= mongoose.model("second",trySchema);



app.get("/",function(req,res){
    res.render("home");
});

app.post("/register",async function(req,res){
    const username = req.body.username;
    const passcode = req.body.password;
    const newUser = new item({
        email: username,
        password: passcode
    });
    newUser.save()
    .then(() => {
        const check = await User.findOne({ email: req.body.username });
        console.log("Saved user with decrypted password:", check);
        res.render("secrets");
    });

});
app.post("/login",async function(req,res){
    const username = req.body.username;
    const passcode = req.body.password;
    const foundUser = await  item.findOne({email:username});
    if(foundUser.password === passcode){
        res.render("secrets");
    }
    else{
        console.log("error");
    }
});
app.get("/login",function(req,res){
    res.render("login");
});
app.get("/register",function(req,res){
    res.render("register");
});


app.listen(8000,function(){
    console.log(" Server start");
});