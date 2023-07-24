const express = require('express');
const router = express.Router();
const { isLoggedIn } = require('../middleware/checkAuth')
const dashboardcontroller = require('../controllers/dashboardcontroller');

router.get('/dashboard',dashboardcontroller.dashboard)

module.exports = router; 

// iss fime mai '/dashboard' url ko handle kr rhe hai .get mai first argument url aur second mai handle krne ke liye method jo ki controller mai dashboardcontroller.js file mai isliye usko import kr rhe hai and then yha se ctrl dashboardcontroller.js pr jaega then vaha se dashboard ke index.ejs pr bheja hai ctrl ko then rendering kr rhe hai page ka