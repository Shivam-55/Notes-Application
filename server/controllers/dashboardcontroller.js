// const Notes = require('../models/Notes');
// const mongoose =  require('mongoose');


exports.dashboard = async(req,res) => {
    const locals={
        title:'Nodejs Notes',
        description:'free node js notes app'
    }
    res.render('dashboard/index',{
        locals,
        layout: '../views/layouts/dashboard'
    });
}
// dashboard naam ka ek async fn bnaya hai async bnaya hai taaki asyncronously operation such that rendering aur 
// database se data access bina doosare method ko block kiye kr ske

// yha pr hum dashboard page ko handle kr rhe hai locals naam ka object bnaya hai jisme title and discriptiion hai
// jisko hum use kr skte hai and render ka use kya dikhana hai aapko page pr uske liye krte hai
// web development mai render fn ka use dynamic web page generate krne ke liye kiya jata hai
// render mai hum path nd second variable mai object pass krte hai agr ek object hua to uska naam nhi mutiple hue to
// { object1,object2,.....} iss format mai bhejte hai render ek time taking method hai ye may be time jyada le skta 
// hai so iske chakkar mai doosare operation block na ho jaye isliye important hai ki jiss fn mai aap render ka use
// kr rhe ho uss fn ko async bna le taaki baaki keoperation aur doosare fn execute hos ke without any wait

// yaha pr render ke liye humne ek path di hai jo ki dashboard directory ke index pr ja rha hai vaha pr ek ejs file
// hogi (embedded js isme html+js type code rehta hai nd ye ek view engine hai view format keh skte ho) vaha jo bhi
// content hoga usko utha kr main.ejs file ke body mai daal kr dikhayega jb hum iss file ke set kiye hue path ko
// access krenge jo ki /dashboard hai nd ye file call hui hai routes ke dashboard.js se nd aage ka path bta hi diya

const Note = require('../models/Notes');
const mongoose = require('mongoose');