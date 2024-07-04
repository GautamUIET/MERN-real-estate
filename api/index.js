import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import authRouter from './routes/auth.route.js';
import userRouter from './routes/user.route.js';
import listeningRouter from './routes/listing.route.js';
import cookieParser from 'cookie-parser';
import path from 'path';
const app= express();
dotenv.config();
mongoose.connect(process.env.MONGO)
.then(()=>{
    console.log("Connected to MongoDb");
}).catch((err)=>{
   console.log(err);
})

const __dirname = path.resolve();

app.listen(3000,()=>{
    console.log('Server is Running on Port 3000');
})
app.use(express.json());
app.use(cookieParser());
app.use("/api/user",userRouter);
app.use('/api/auth',authRouter);
app.use('/api/listing',listeningRouter);

app.use(express.static(path.join(__dirname,'/client/dist')));

app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,'client','dist','index.html'));
})
app.use((err,req,res,next) =>{
   const statusCode = err.statusCode || 500;
   const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
   });
});