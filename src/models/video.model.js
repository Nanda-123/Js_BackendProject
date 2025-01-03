import mongoose, {Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const vedioSchema = new Schema(
    {
       vedioFile :{
        type: String, //cloudinary Url
        required : true
       },
       thumbnail:{
        type : String, //cloudinary Url
        required:true
       },
       title:{
        type : String,
        required:true
       },
       description:{
        type : String,
        required:true
       },
       duration:{
        type : Number, //cloudinary Url
        required:true
       },
       duration:{
        type : Number,
        default:0
       },
       isPublic:{
        type : Boolean, 
        default:true
       },
       vedio_Owner:{
        type : mongoose.Schema.Types.ObjectId0,
        ref: User      
       },
    }
    ,{timestamps:true} );

    vedioSchema.plugin(mongooseAggregatePaginate);
export const Vedio = mongoose.model("Vedio",vedioSchema);