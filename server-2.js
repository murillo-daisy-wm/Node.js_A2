var mongoose = require('mongoose'),
  assert =require('assert');

var Leadership = require('./models/leadership-2');

//Connection URL
var url = 'mongodb://localhost:27017/confusion1';

mongoose.connect(url);

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("connected correctly to server");

    Leadership.create({
      name: 'Daisy',
      image: ' ',
      designation: ' Chief Executive Officer',
      abbr: 'CEO',
      description: 'The best leader ever'
    }, function(err, leader){
      if(err) throw err;
      console.log('Leader created!');
      console.log(leader);

      var id = leader._id;
      setTimeout(function(){
        Leadership.findByIdAndUpdate(id,{
          $set: {
            description: 'Updated Test'
          }
        },{
            new: true
          })
          .exec(function(err, leader){
            if(err) throw err;
            console.log('Update Leader!');
            console.log(leader);

            db.collection('leadership').drop(function(){
              db.close();
            });
          });}, 3000);
        });
      });
