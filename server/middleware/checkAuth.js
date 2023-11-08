exports.isLoggedIn = function (req,res,next) {
    if(req.user){
        next();
    }else{
        return res.render('../views/layouts/chauth',{
            layout: '../views/layouts/chauth'
        });
    }
} 