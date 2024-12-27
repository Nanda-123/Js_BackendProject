// whenever we run the application need to add dotenv 
// require('dotenv').config({path:'./env'})

//OR 

import dotenv from "dotenv"; // if we import dotenv then we need to config
import connectDB from "./db/index.js"



dotenv.config({
    path:'./env'
});

//1st approach 

connectDB();


// 2nd approch


/*

import mongoose from "mongoose";

import { DB_NAME } from "./constants.js"; // used for step 2

*/

/*
import express from "express";

const app = express();



(async()=>{
    try {

        // mongoose.connect(`${process.env.MONGODB_URL}`) //It's just a DB URL we need to give DB name 
       await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`) ;   

        //IF WE ARE USING EXPRESS THEN BELOW CODE 

      app.on("error",(error)=>{
            console.log("ERROR :", error);
            throw error;           
        })
          app.listen(process.env.PORT, ()=>{
            console.log(`App is listening on port : ${process.env.PORT}`);            

        })
    } 

    catch (error) {
        console.error("ERROR :", error);
        throw error;
    }
})

    */