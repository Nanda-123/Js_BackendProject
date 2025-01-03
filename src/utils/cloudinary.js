//USED FOR FILE / IMAGE / VEDIO ECT UPLOADS

import { v2 as cloudinary } from "cloudinary";
import fs from "fs"; //File System : using this we can do CRED operation on files

 // Configuration
 cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET // Click 'View API Keys' above to copy your API secret
});

const uploadOnCloudinary = async (localFilePath)=>{
    try {
        if (!localFilePath) return null;

        //upload the file on cloudinary '
        const response = await cloudinary.uploader.upload(localFilePath,{resource_type : "auto"})

        //file has been uploaded successfully
        console.log("FIle is uploaded on Cloudinary", response.url);
        return response;
        
    } catch (error) {
        fs.unlinkSync(localFilePath)//Remove the locally saved temporary file when upload operation got failed
        //unlink deletes the file from localpath
        return null
        
    }
}

export {uploadOnCloudinary}



