// import Connection from "./database/db";
// const Connection = require("./database/db");
// const express = require("express");
// const mongoose = require("mongoose");
// const mongoose = require("mongoose");
// const express = require("express");

import express from 'express';
const app = express();
import Routes from './routes/route.js'
import mongoose from "mongoose";
import cors from 'cors'
import bodyParser from 'body-parser';

const PORT = 8000;

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/Crud_app');
}
main()
.then(()=>{
    console.log("connected.....")
})
.catch((err)=>{
    console.log(err);
})

app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.use('/', Routes);

app.listen(PORT, () => {
  console.log(`server listen on ${PORT}`);
});
