import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
const app= express();
dotenv.config();
mongoose.connect(process.env.MONGO)
.then(()=>{
    console.log("Connected to MongoDb");
}).catch((err)=>{
   console.log(err);
})

app.listen(3000,()=>{
    console.log('Server is Running on Port 3000');
})