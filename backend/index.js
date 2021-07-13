var mongoose = require('mongoose');

//


// make a connection
mongoose.connect('mongodb://localhost:27017/Election');

// get reference to database
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
    console.log("Connection Successful!");

    // define Schema
    var VotesSchema = mongoose.Schema({
      name: String,
      number: Number,
    });

    // compile schema to model
    var Book = mongoose.model('Book', VotesSchema, 'Votes');

    // a document instance
    // var book1 = new Book({ name: 'Introduction to Mongoose22', price: 10, quantity: 25 });

    // save model to database
    book1.save(function (err, book) {
      if (err) return console.error(err);
      console.log(book.name + " saved to bookstore collection.");
    });
});
