import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

// console.log("Connecting to:", process.env.MONGODB_URL);

const connectDB = async()=>{
    try {
        // console.log("Connecting to MongoDB at:", `${process.env.MONGODB_URL}/${DB_NAME}`);
      const connectionInstance =  await mongoose.connect(`${process.env.MONGODB_URL}/${ DB_NAME } `); //While await pauses the execution of the function it's in, it doesn't block the entire program. Other parts of your application can continue to run.
      console.log(`\n MongoDB Connected!!! DB Host :${connectionInstance.connection.host}`);     
    } 
    catch (error) {
        console.log("mongodb Connection ERROR:", error);
        process.exit(1);//process is terminated, meaning the program stops running entirely.
    }
}

export default connectDB