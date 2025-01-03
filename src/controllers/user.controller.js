import { asyncHandler } from "../utils/asyncHandler.js";

const registeruser = asyncHandler(async(req,res)=>{ // this is a higher order function
    res.status(200).json({
        message:"Successfully Connected and Running"
    })
})

export {registeruser}