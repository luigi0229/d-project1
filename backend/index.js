var mongoose = require('mongoose');
const express = require("express");
const app = express();
//

const PORT = 8080;
// make a connection
mongoose.connect('mongodb://localhost:27017/Election');

// get reference to database
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

app.get("/results", (req, res) => {
 // res.send(“Get users”);
  // res.send("hi");

});

app.get("/vote", function (req, res) {

  console.log("1", req.query)
  console.log("2", req.body)
  console.log("3", req.params)
  // console.log("2", req.data)
  Vote.findOneAndUpdate( {Name: req.query.color},
       {$inc : {'Poll' : 1}},
       {new: true},
       function(err, response) {
            // do something
       });
});

// Meme.findOneAndUpdate( {_id: res._id},
//      {$inc : {'UID' : 1}},
//      {new: true},
//      function(err, response) {
//           // do something
//      });



app.listen(PORT, function() {
  var VotesSchema = mongoose.Schema({
    Name: {type: String, unique: true},
    Poll: Number,
  });

  var query1 = {Name: "Red", Poll: 0};
  var query2 = {Name: "Blue", Poll: 0};
  var update = { expire: new Date() };
  var options = { upsert: true, new: true, setDefaultsOnInsert: true };
  Vote = mongoose.model('Book', VotesSchema, 'Votes');
  Vote.findOneAndUpdate(query1, update, options, (error, result)=> {console.log("Created ", result)});
  Vote.findOneAndUpdate(query2, update, options, (error, result)=> {console.log("Created ", result)});

  console.log(`Listening on ${PORT}`);
});
