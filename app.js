require('dotenv').config();

const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const connectDB = require('./server/config/db')
const session = require('express-session');
const passport = require('passport');
const MongoStore = require('connect-mongo');

const app = express();
const port = 8080 || process.env.PORT ; 

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
        mongoUrl: process.env.MONGODB_URI
    })
    // cookie:{ maxAge: new Date ( Date.now()+(24*60*60*1000))}
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(express.urlencoded({extended: true}));
app.use(express.json());


// connect to database
connectDB();

// static file 
app.use(express.static('public'));


// Templating Engine
app.use(expressLayouts);
app.set('layout','./layouts/main');
app.set('view engine','ejs'); //view define krna jruri hota hai ki view file konsi hai dynamic page generate krne ke liye ya web page pr kaisi file ka use kr rhe hai content dikhane ke liye to uske liye view engine ka set krna jruri hota hai jaise yha ejs ka use kra hai vaise .pug , .handlebars vgera bhi view file type hote hai iska use aage jb render ka use krenge to usko btane ke liye bhi hota hai ki .ejs file hai view engine to uss file ko dhundti hai and then render vgera krti hai


//Routes

app.use('/',require('./server/routes/auth'));
app.use('/',require('./server/routes/index'));
app.use('/',require('./server/routes/dashboard'));
// yaha basically middleware ko same route pr set kr diya hai jis order mai likhe hai ussi order mai execute hoga and uss path mai jaa kr jaisa http method hai jo url hai uss acc request handle ko jaegi aur bhi chije jaise authentication, error handling data generation vgera kr skte hai .use() ke through

// handle 404
app.get('*',(req,res)=>{
    res.status(404).render('404')
})

app.listen(port,()=>{
    console.log(`App listening on port ${port}`);
});






