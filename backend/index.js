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

// db.once('open', function() {
//     console.log("Connection Successful!");
//
//     // define Schema
//     var VotesSchema = mongoose.Schema({
//       name: String,
//       number: Number,
//     });
//
//     // compile schema to model
//     var Book = mongoose.model('Book', VotesSchema, 'Votes');
//
//     // a document instance
//     // var book1 = new Book({ name: 'Introduction to Mongoose22', price: 10, quantity: 25 });
//
//     // save model to database
//     book1.save(function (err, book) {
//       if (err) return console.error(err);
//       console.log(book.name + " saved to bookstore collection.");
//     });
// });

app.get("/test", (req, res) => {
 // res.send(“Get users”);
  res.send("hi");
});

app.get("/vote", (req, res) => {

      var VotesSchema = mongoose.Schema({
        Name: String,
        Age: Number,
      });
 // res.send(“Get users”);
 var query = {Name: "Eli", Age: 22},
    update = { expire: new Date() },
    options = { upsert: true, new: true, setDefaultsOnInsert: true };
    Vote = mongoose.model('Book', VotesSchema, 'Votes');
    Vote.findOneAndUpdate(query, update, options, function(error, result) {
      if (error) return;

      console.log("RESuuLT IS -", result)
      // do something with the document
  });
  // res.send("hi");
});

// Meme.findOneAndUpdate( {_id: res._id},
//      {$inc : {'UID' : 1}},
//      {new: true},
//      function(err, response) {
//           // do something
//      });



app.listen(PORT, function() {
 console.log(`Listening on ${PORT}`);
});
