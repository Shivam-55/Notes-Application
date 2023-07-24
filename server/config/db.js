// iss file mai database se connect kr rhe hai 
const mongoose = require('mongoose');
mongoose.set('strictQuery',false);  
//mongoose mai jo hum schema bnatee hai uske restriction ko htane ke liye 
// strictQuery ko false kr diya hai by default ye true rehta hai


const connectDB = async() =>{
    try{
        const conn = await mongoose.connect(process.env.MONGODB_URI);
        // env file mai connect krne ke liye mongo db se jo uri hai usko rkha hai uske through yha mongoose db se 
        // connect kr rhe hai
        console.log(`Database Connected:${conn.connection.host}`);
    }catch(error){
        console.log(error);
    }
}
// async await fn ka use kiya hai ....
// connection bna rhe hai to may be kbhi connect na ho paye to usko handle krne ke liye try catch ka use kr rhe hai

module.exports = connectDB ;
// connectDB ka doosare file mai access kr ske nd use kr ske uske liye export krna pdega