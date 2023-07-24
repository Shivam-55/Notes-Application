const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');

// App Routes
router.get('/',mainController.homepage);
router.get('/about',mainController.about);

module.exports = router;



// routes ko handle kr rhe hai iss file ka call app.js se hua hai vaha pr middle ware ke through caal kiya hai
// yaha pr 2 request ko handle kr rhe hai '/' request aur '/about' request 
// route ko handle krne ke liye alag se file bna liya hai taaki code redeable and handlable rhe
// sbse pehle express ko import router ko initialise krna pdega ye syntax jaisa smjh lo agr aapko use krna hai 
// to import to file ko krna pdega and express mai hi router bhi import ho gya phir router ka object bna liya
// jisse router.get krke url ko handle kr ske .get() se hi request ko handle kiya jata hai isme first argument
// url and second mai usko handle krne ke liye fn hota hai jisme handle krte hai ab yha jo method ko use krna hai 
// hai usko controller mke maincontroller.js file mai likha usko use krne ke liye vo file ko pehle import krna pdega
// then file ko ek variable mai import krke uske method ko use kr rhe hai yha se control maincontroller.js pr bhej 
// rhe hai and aage ke chije vahi se handle hogi aur ha iss module ko doosare module se excess kr ske uske liye isko
// export krna pdega to uske liye .export yha ek hi hai to direct agr aur bht saare hote to object mai bhejna pdta
// like module.exports = { varible1,varible2,......}