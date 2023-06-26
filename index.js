import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";


const app = express();
dotenv.config();

const port = process.env.PORT || 5000;



//mongo connections

async function main() {
    try{
        await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to mongoDB');
    } catch (error) {
        throw error;
    }
  }


app.listen(port, ()=> {
    main()
    console.log("app running on port:",port);
})