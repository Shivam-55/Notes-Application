// get /   homepage
exports.homepage = async(req,res) => {
    const locals={
        title:'Nodejs Notes',
        description:'free node js notes app'
    }
    res.render('index',{
        locals,
        layout: '../views/layouts/front-page' //layout define kr diya ki index.ejs file ke content ko konse file mai rkhna hai uska path layout mai daal diya hai then yahi page jo layouts mai path hai jiske isme index jo ki render mai first argument mai as path pass krte uska content vaha layouts vale file mai dalega then uss url pr show krne lgega 
    });
}

// get /   about
exports.about = async(req,res) => {
    const locals={
        title:'About - Nodejs Notes',
        description:'free node js notes app'
    }
    res.render('about',locals);  //yha pr layout alg se nhi btaya hai to by default main.ejs file ka layout uthayega ye
}

// homepage nd about 2 func hai jisme render ka use kr rhe hai nd path ko control kr rhe hai 
// index.js file se call hui hai jo ki route directory mai jisme hum path ko handle krne ke liye code likh rhe hai
// index.js se 2 path handle kr rhe hai / for homepage uske liye homepage naam ka async fn bnaya hai and iske 
// through jo homepage pr dikhana chahte vo dikha rhe hai by rendering na d usme index.ejs file ka naam dala hai jo
// ki view directory mai hai vaha se phir control ja rha hai main.ejs mai ja rha hai main.ejs ke body ka content index.ejs se uthaya and usko '/' path pr dikha dega
// ese hi about mai hai yha se render mai view ke about.ejs file pr bhej rhe vaha ka content utha kr main.ejs ke
// body mai daal kr /about pr dikha diya jaega 
// / aur /about path index.js route directory mai jo hai vha pr path declare hai yha bs control kr rhe hai vaha se 
// aaye hue call ko aur kya dikhana hai uske liye render kr rhe hai