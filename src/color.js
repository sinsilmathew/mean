const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ColorSchema = new Schema({
    color:String,
    code:String
});

const Color = mongoose.model('color',ColorSchema);

module.exports = Color;