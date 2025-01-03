/**
 * EXPRESS: Used to define routes and handle HTTP requests and responses.

CORS:
Cors is a MIDDLEWAREEEE for enabling Cross-Origin Resource Sharing (CORS).
Allows your server to handle requests from different origins (e.g., a frontend running on a different domain).
 
cookie-parser:
Middleware for parsing cookies sent by clients.
Useful when working with sessions or handling client-side data stored in cookies.

  Configures the server to allow requests from the origin specified in process.env.CORS_ORIGIN.
The credentials: true option allows cookies and authentication headers to be sent across origins. 

*/

import express from "express"
import cors from "cors";
import cookieparser from "cookie-parser";



const app = express();//Creates an instance of an Express application, which is the core object for building APIs.

//use ()methods is usefull when we use middlewares
app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials :true
  })) 

//app.use() applies middleware to the app.
/**
 * NOTEEEE: 
 
What is Middleware?
Middleware is a function in Express.js that has access to the following:

req (Request): The HTTP request object.
res (Response): The HTTP response object.
next: A callback function that tells Express to move to the next middleware function.
Middleware is used to modify the req or res objects, log requests, handle authentication, validate data, and more.
 
Pass control to the next middleware using the next() function.

*/

export {app};
// export default 
/**
 * Default export allows importing without curly braces:
        import app from "./app";
*/
 