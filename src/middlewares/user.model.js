import mongoose, {Schema} from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"

const userSchema = new Schema(
    {
    username :{
        type : String,
        required : true,
        unique : true,
        lowercase : true,
        trim : true,
        index : true //If index is true seaching is eacy
    },
    email :{
        type : String,
        required : true,
        unique : true,
        lowercase : true,
        trim : true,
    },
    fullname :{
        type : String,
        required : true,
        trim : true,
        index : true //If index is true seaching is eacy
    },
    avatar :{
        type : String,// cloudinary url
        required : true,
        
    },
    coverImage :{
        type : String,
       },
       watchHistory :[{ // history will be an array
        type : mongoose.Schema.Types.ObjectId,
        ref : "Vedio" 
       }],
       password :{
        type : String,
        required : [true," Password is Required"]
     },
     refreshToken:{
        type:String
     }

}, 
{timestamps:true}
);

//below code does the PWD ENcrption

userSchema.pre("save", async function(next){
    //I dont want to encrypt the pwd when use change other field do encryp only when any change in pwd
    if(!this.isModified("password")) return next();

    this.password=await bcrypt.hash(this.password,10)
    next()
})

// To check the Pwd using the methods
userSchema.methods.isPassCorrect =async function(password){
    return await  bcrypt.compare(password,this.password) // this.password: is encrypted pwd
    //this is encryption part so will takes time so we have to wait 
}

userSchema.methods.generateAccessToken = function(){
    jwt.sign( //sign methods generates the token
        {
            _id: this._id, //_id : payload variable , this._id : is from DB
            email : this.email,
            username : this.username,
            fullname  : this.fullname
        },
        process.env.ACCESS_TOKEN_SECRET,{
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}
userSchema.methods.generateRefreshToken = function(){
    jwt.sign( //sign methods generates the token
        {
            _id: this._id, //_id : payload variable , this._id : is from DB            
        },
        process.env.REFRESH_TOKEN_SECRET,{
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}

export const User = mongoose.model("User", userSchema)