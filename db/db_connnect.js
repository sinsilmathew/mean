const mongoose=require('mongoose');
//mongoose.connect('mongodb://localhost:27017/mean1');
mongoose.connect('mongodb://localhost/users_test', { useMongoClient: true });
// var db = mongoose.connection;
// db.on('error',console.log("Cannot Connect"));
// db.once('open',function(){
//     console.log("Connection Established");
// });
mongoose.connection
.once('open',()=>console.log('Connection Established'))
.on('error',(error)=>
{
    console.warn('Warning',error);
});
// var schema1 = mongoose.Schema({
//     name:String
// });
