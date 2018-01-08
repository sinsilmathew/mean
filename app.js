const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const expressValidator = require('express-validator');
const mongoose = require('./db/db_connnect');
const Color = require('./src/color');

const app = express();
//view engine middleware
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
//Global variable Declaration
app.use(function(req,res,next){
    res.locals.errors=null;
    next();
})

app.use(expressValidator({errorFormatter:function(param, msg, value){
    var namespace = param.split('.')
    ,root =namespace.shift()
    ,formParam = root;
    while(namespace.length){
        formParam+='['+namespace.shift()+']';
    }
    return{
        param:formParam,
        msg:msg,
        value:value
    };
    }
}));
var colors = [{
    color:"Red",
    code :"#0123"
},
{
    color:"Yellow",
    code :"#0123"
},
{
    color:"Green",
    code :"#0123"
},{
    color:"Orange",
    code :"#0123"
}
];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.get('/',function(req,res){
res.render('index',{
    title:'First EJS Template',
    colors:colors
});
});

app.post('/colors/add',function(req,res){
//console.log("Form Submitted");
req.checkBody('color','Color is required').notEmpty();
const errors = req.validationErrors();
if(errors)
    {
        //console.log('Error');
        res.render('index',{
            title:'First EJS',
            colors:colors,
            errors:errors
        });
    }
else
    {
         const color_input = new Color(req.body);
         color_input.save();
        // console.log(req.body);
        res.json(req.body);
       
    }
});

app.listen(3005);
