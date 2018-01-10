const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const expressValidator = require('express-validator');
const mongoose = require('./db/db_connnect');
const mongojs = require('mongojs');
const db = mongojs('dprapp',['dprs']);

const Dpr = require('./src/dpr');

const app = express();
//view engine middleware
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname,'public')));
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

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.get('/',function(req,res){
res.render('dpr',{
    title:'Daily Progress Report',
   
});
});

app.post('/dpr/add',function(req,res){
//console.log("Form Submitted");
req.checkBody('task_id','DPR is required').notEmpty();
const errors = req.validationErrors();
if(errors)
    {
        //console.log('Error');
        res.render('dpr',{
            title:'Daily Progress Report',
            errors:errors
        });
    }
else
    {
         const dpr_input = new Dpr(req.body);
         dpr_input.save();
         Dpr.find(function(err,docs){
          // console.log(docs);
          //res.json(docs);
          res.render('dpr_list',{
            title:'DPR ENTRIES',
            dpr_list:docs
            
        });
       });
        // console.log(req.body);
    }
});

//app.listen(3002);
app.listen(process.env.PORT || 3002);