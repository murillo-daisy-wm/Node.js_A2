var mongoose = require('mongoose'),
   assert = require('assert');
var Dishes = require('./models/dishes-3');
// Connection URL
var url = 'mongodb://localhost:27017/confusion1';mongoose.connect(url);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
   // we're connected!
   console.log("Connected correctly to server");
   // create a new dish
   Dishes.create({
       name: ' Mac & Cheese ',
       image: ' ',
       category: ' Cheesy Foods',
       label: 'cheesy',
       price: '$2.00',
       description: 'Creamy, Toasty, Cheesy cheesy cheesy Macaroni',
       comments: [
           {
               rating: 10,
               comment: 'Best Mac & Cheese',
               author: 'Matt Daemon'
           }, {
               rating: 10,
               comment: ' LOVE IT!',
               author: 'Angel Iniquez'
           }
       ]
   }, function (err, dish) {
       if (err) throw err;
       console.log('Dish created!');
       console.log(dish);
       var id = dish._id;
       // get all the dishes
       setTimeout(function () {
           Dishes.findByIdAndUpdate(id, {
                   $set: {
                       description: 'Updated Test'
                   }
               }, {
                   new: true
               })
               .exec(function (err, dish) {
                   if (err) throw err;
                   console.log('Updated Dish!');
                   console.log(dish);
                   dish.comments.push({
                       rating: 10,
                       comment: "ITS AMAZING!" ,
                       author: 'Leonardo di Carpaccio'
                   });
                   dish.save(function (err, dish) {
                       console.log('Updated Comments!');
                       console.log(dish);
                       db.collection('dishes').drop(function () {
                           db.close();
                       });
                   });
               });
       }, 3000);
   });
});
