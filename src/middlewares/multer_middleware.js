/***
 * It takes the file from the user and store it in the specified local path
 */

import multer from "multer";



//Usng diskStorage
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/temp')
    },
    filename: function (req, file, cb) {
    //   const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.originalname)
    }
  })
  
  export const upload = multer({ storage })

//   export {storage}
//   export {storage as upload}




