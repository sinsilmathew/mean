const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const DprSchema = new Schema({
    task_id:String,
    task_name:String,
    date :Date,
    time_spent:String,
    time_remaining:String,
    remarks:String
});

const Dpr = mongoose.model('dpr',DprSchema);

module.exports = Dpr;