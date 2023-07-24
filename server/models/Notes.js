const mongoose = require('mongoose');

const Schema = mongoose.Schema ;
const NotesSchema = new Schema({
    user:{
        type:Schema.ObjectId,
        ref:'User'
    },
    title:{
        type:String,
        required : true
    },
    body:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }
});

module.export = mongoose.model('Note',NotesSchema);
// hum mongoose.model() mai teen argument pass krte hai pehla argument mai model ka naam ye basically reference ke 

// doubt hai bc
// liye kaam aata hai iske through hi hum iss collection mai crud operation perform kr payenge aur ye compulsory hota hai pass krna vrna aap reference hi nhi de paoge ki kis collection mai document create update delete vgera kr rhe ho so ye pehla argument refernce ke liye hota hai 


// aur phir second argument se hum collection ke schema ko define krte hai ki collection mai jo document honge vo kis schema ko follow krenge aur third argument optional hota hai jisme hum btate hai ki hum kis collection se connect kr rhe hai jiska reference first argument jo diya hai vo hoga uske through iss collection ko access krenge aur jiska schema second argument mai jo pass kiya hai vo hoga ab agr ye third argument nhi diya to jo reference ke liye naam kiya hai uska hi plural naam lekr collection bna dega jaise yha Notes naam se collection bna dega aur agr third argument mai kisi ka naam de rhe collection ka to make sure ki uska jo schema already pehle define kiya hoga aur abhi vala schema hai vo match ho vrna error dene ke chance honge aur agr third argument mai ese collection ka naam diya jo present hi nhi hai db mai to vo create ho jayega

// abhi humne dekha ki .model mai pehla argument jo dete hai vo reference ke liye use hota hai model ka naam keh skte nd collection ko refer krta hai ab iska ek instance bnalo and then usko easily use krte jaao
// jaise ki 
// ex: const Note = mongoose.model('Note',Noteschema) isme Note model ka ek instance bnaya nd usko Note variable mai daal diya ab jo Notes collection bna hoga db mai jo Noteshema ko follow kr rha hai usko hum iss variable se access krke usme crud operation lga skte hai