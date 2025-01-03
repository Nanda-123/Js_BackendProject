//METHOD : 1 : Using promises

const asyncHandle = (requesthandler)=>{
    (req,res,next)=>{
        Promise.resolve(requesthandler(req,res,next)).catch((err) => next(err))
        //ThIS implementation (Promise.resolve(...).catch(next)) forwards errors to 
        // the  Express error-handling middleware.next(err)
    }
}





//METHOD : 2

// Using Try Catch , by passing function as param to another function

//DETAILED:
/*

const asyncHandler =()=>{}//One async function
const asyncHandle=(func)=>{
    ()=>{}
} // whoch accept the func as a  param
const asyncHandle =(func)=> async()=>{}

*/

//BELOW IS ACTUAL TYPE 2 CODE

// const asyncHandle = (func)=>async(requestAnimationFrame,resizeBy,next) =>{
//     try {
//         await async(requestAnimationFrame,resizeBy,next)// Calling async function
//     } catch (error) { //Instead of forwarding errors to the middleware, it catches them and directly sends an error response (res.status(...)).

//         res.status(error.code || 500).json({
//             success : false,
//             message : error.message
//         })
//     }
// }

export {asyncHandle}