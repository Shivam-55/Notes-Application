const express = require('express');
const router = express.Router();
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../models/User');

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK_URL
}, //passport js ka use krke user ka data dhund rhe hai agr nhi mila to create kr rhe hai db mai uske liye .use() kr rhe jisme first argument object jisme google authentication ke liye google se connect krne ke variables hai and second argument mai fn hai jo execute hoga mongoose ke help se schema bna diya hai iss fn mai pehle user ko create kr rhe hai then search kr rhe hai agr uss id se mil gya tb to thik hai jo bhi login vgera hai vo rhega/hoga nhi to create kr denge db mai and then login vgera reh paega
    async function (accessToken, refreshToken, profile, done) {
        const newUser = {
            googleId: profile.id,
            displayName: profile.displayName,
            firstName: profile.name.givenName,
            lastName: profile.name.familyName,
            profileImage: profile.photos[0].value
        }

        try {
            let user = await User.findOne({ googleId: profile.id });
            if (user) {
                done(null, user);
            } else {
                user = await User.create(newUser);
                done(null, user);
            }
        } catch (error) {
            console.log(error);
        }
    }

));

router.get('/auth/google',
    passport.authenticate('google', { scope: ['email', 'profile'] }));
// isme authentication vala request handle kr rhe hai jiska url '/auth/google' ye hai iske liye pssportjs ka use kr rhe hai jisme .authenticate method ka use krte hai jisme bta rhe hai ki google ka authentication use krenge jisme user ka profile and email ka use krenge jo ki scope mai as object second argument mai pass kiya jata hai jaise hi ye url aayega to authenticate method invoke ho jaega aur seedhe google ke authentication page pr le jaega


router.get('/google/callback',
    passport.authenticate('google', {
        failureRedirect: '/login-failure',
        successRedirect: '/dashboard'
    })
);
// uper vale method ke involve and redirect ke baad user details vgera daal kr authenticate krega then google(passport.authenticate mai first argument mai authentication strategy btate hai jo ki apn google ka use kr rhe hai aur second mai kya kya scope hai kiska use krenge for authentication) usko /google/callback pr redirect krega jis url ko iss get mai hum handle kr rhe hai jisme vapas authenticate method ka use kr rhe hai but isme second mai jo object pass kr rhe hai vo redirect krne ke liye use kr rhe hai agr success hua hai to /dashboard pr bhej do user ko hi to /login-failure url pr bhej do then uss url ko handle kro.......



// Route if something goes wrong
router.get('/login-failure', (req, res) => {
    res.send('something went wrong');
})
// agr login fail ho jata hai to ye url pr redirect kr dega and iss get mai handle kr rhe hai /login-failure url ko jisme as a response something went wrong send ho jaega

router.get('/logout',(req,res)=>{
    req.session.destroy(error => {
        if(error){
            console.log(error);
            res.send('Error loggin out');
        } else{
            res.redirect('/');
        }
    })
})

// Persist user data after successful authentication
passport.serializeUser((user, done) => {
    done(null, user.id);
})
// .serializeuser() user ke data ko serialize(ese format mai convert krna such that usko session mai database mai store kr ske) krke session,database mmai store krne ke liye responsible hai ye ek unique identification key jisko id bolte hai vo return krta hai jiske through user ke data ko access kr pate hai
// saare user ke data ko db mai rkhna is not safe so uss chij ko bho serializeuser() mai handle krte hai nd phir id key return krte hai jisse user ke data ko access kr pate hai
// isme user jisme user ki information hoti hai vo object aur doosara callback fn done pass krte hai phir usme done method call hota hai jisme first argument null and second mai user ki id jo ki unique hoti vo hoti hai


// retrieve user data from session
passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
        done(err, user);
    })
})
// deserialize se user ke id se session mai ya db mai jo user ke data ko save kiya tha usko acces krte hai ya keh lo find krte hai isme id ko pass krte hai with fn done, done ka use signal dene ke liye krte hai deserializeuser process complete hua ya nhi and issme .findbyid method ka use krte hai jisme id aur ek callback fn jisme err aur user ko pass krte hai agr find ho gya tb to done ko as a second argument send krte hai jisme first argument null rehta hai but agr koi error/fail ho jata hai to done ko as first argument bhej dete hai

module.exports = router; 