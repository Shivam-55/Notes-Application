exports.isLoggedIn = function (req,res,next) {
    if(req.user){
        next();
    }else{
        return res.status(401).send('You must have to sign in for redirecting to dashboard page');
    }
} 