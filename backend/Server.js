const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const UserModel = require('./Insert')

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/student");

app.get("/" , (req,res) =>{
    UserModel.find({})
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.get("/getuser/:id" , (req,res) => {
    const id = req.params.id;
    UserModel.findById({ _id: id }) // Corrected parameter name
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.put("/updateUser/:id" ,(req,res) =>{
    const id = req.params.id;
    UserModel.findByIdAndUpdate({_id:id} , {
        name : req.body.name,
        email : req.body.email,
        city : req.body.city
    })
    .then(user => res.json(user))
    .catch(err => res.json(err))
})

app.delete("/delete/:id" , (req,res) => {
    const id = req.params.id;
    UserModel.findByIdAndDelete({_id:id})
    .then(res => res.json(res))
    .catch(err => res.json(err))
})

app.post("/add", (req, res) => {
    UserModel.create(req.body)
        .then(user => res.json(user))
        .catch(err => res.json(err));
});

app.listen(3001, () => {
    console.log("Listening....");
});
