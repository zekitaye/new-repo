import dotenv from 'dotenv';

import express from 'express';

import mongoose from 'mongoose';
import useroute from './routes/users.js';
import cors from 'cors'

const app=express();

dotenv.config();
app.use(express.json());
app.use(cors({
    origin:"https://new-repo-static.onrender.com",
    credentials:"true"
})
)

app.use('/api/users',useroute);

mongoose.connect(process.env.MONGO_URI).then(() => {
    app.listen(process.env.PORT,() => {
        console.log('listening on port',process.env.PORT)
    })
}
).catch((error) => {
    console.log(error)
})



