var mongoose = require('mongoose');
assert = require('assert');
var Promotion = require('./models/promotion-1');

var url = 'mongodb://localhost:27017/confusion1';
mongoose.connect(url);
var db = mongoose.connection;
db.on('error', console.error.bind(console, "connection error:"));
db.once('open', function(){
  console.log("connected correctly to server");

  var newPromo = Promotion({
    name:" The Cereal ",
    image: " ",
    label: "new",
    price: "$2.00",
    description: " Fruit Loops for $2.00"
  });
  newPromo.save(function(err){
    if(err) throw err;
    console.log('Promo created!');

    Promotion.find({}, function (err, promotion){
      if(err) throw err;
      console.log(promotion);
      db.collection('promotions').drop(function () {
        db.close();
      });
    });
  });
});
