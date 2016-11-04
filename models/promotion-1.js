var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var promoSchema = new Schema({
   name: {
       type: String,
       required: true,
       unique: true
   },
   image: {
     type: String,
     required: false
   },
   label : {
     type: String,
     requried: true,
     unique: false
   },
   price: {
     type: String,
     required: true,
     unique:false
   },
   description: {
       type: String,
       required: true
   },
   
}, {
   timestamps: true
});
// the schema is useless so far
// we need to create a model using it
var Promotion = mongoose.model('Promo', promoSchema);
// make this available to our Node applications
module.exports = Promotion;
