var mongoose = require('mongoose');
var Schema = mongoose.Schema;
require('mongoose-currency').loadType(mongoose);
var Currency = mongoose.Types.Currency;
var commentSchema = new Schema({
   rating:  {
       type: Number,
       min: 1,
       max: 10,
       required: true
   },
   comment:  {
       type: String,
       required: true
   },
   author:  {
       type: String,
       required: true
   }
}, {
   timestamps: true
});
// create a schema
var dishSchema = new Schema({
   name: {
       type: String,
       required: true,
       unique: true
   },
   image: {
     type: String,
     required: false,
     unique: true
   },
   category: {
     type: String,
     required: true,
     unique: false
   },
   label: {
     type: String,
     requiried: true,
     unique: false
   },
   price: {
     type: String,
     required: true,
     unique: true
   },
   description: {
       type: String,
       required: true
   },
   comments:[commentSchema]
}, {
   timestamps: true
});
// the schema is useless so far
// we need to create a model using it
var Dishes = mongoose.model('Dish', dishSchema);
// make this available to our Node applications
module.exports = Dishes;
