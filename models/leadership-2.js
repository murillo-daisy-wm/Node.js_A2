var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var leaderSchema = new Schema({
   name: {
       type: String,
       required: true,
       unique: true
   },
   image: {
     type: String,
     required: true,
     unique: true
   },
   designation:{
     type: String,
     requiried: true,
     unique: false
   },
   abbr: {
     type: String,
     requiried: true,
     unique: false
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
var Leadership = mongoose.model('Leader', leaderSchema);
// make this available to our Node applications
module.exports = Leadership;
