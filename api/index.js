import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import { exit } from 'process';
import userRouter from './routes/user.route.js'
import authRouter from './routes/auth.route.js'

dotenv.config();

 
mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log('mongo running ok')
}).catch((e)=>{
    console.log('some error occue closing the backend!!!')
    process.exit(1);
})

const app = express();

app.use(express.json())

app.use('/api/user',userRouter)
app.use('/api/auth',authRouter)

app.listen(3000,()=>{
    console.log('sever is runing on PORT 3000')
})