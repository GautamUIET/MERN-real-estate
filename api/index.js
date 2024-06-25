import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import authRouter from './routes/auth.route.js';
import userRouter from './routes/user.route.js';
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
app.use(express.json());
app.use("/api/user",userRouter);
app.use('/api/auth',authRouter);