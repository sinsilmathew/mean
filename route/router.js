const express = require('express');
var bodyParser = require('body-parser');
const router= express.Router();
const app = express();

//Creating a router middleware
const logger=function(req,res,next){
    console.log("Loggingg ...");
    next();
}
//using the created middleware
router.use(logger);
//
//using the parser for parsing json 
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended:false}));
//
var person=[{
    name:"JonDoe",
    age:30
},
{
    name:"johnSmith",
    age:12,
    place:"Banglore"
}]

router.get('/',function(req,res){
    res.json(person);
    res.send("Router Started");
});
router.listen(3000);
module.exports = router;