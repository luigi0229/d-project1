var mongoose = require('mongoose');
const express = require("express");
const app = express();
const http = require("http");
const socketIo = require("socket.io");
const cors = require('cors')
//
const PORT = 8080;
const server = http.createServer(app);
const io = socketIo(server);

io.on("connection", (socket) => {
  console.log("New client connected");

  const inner = () => {
    console.log("called inner")
    // socket.emit("update")
    Vote.find({}, function (err, votes) {
      // res.send(users);
      console.log("found votes", votes)
      socket.broadcast.emit("update", votes)
    });
  }

  socket.on("disconnect", () => {
  console.log("Client disconnected");
});

  socket.on("fetch", () => {
    console.log("got fetched")
    Vote.find({}, function (err, votes) {
      // res.send(users);
      console.log("found votes", votes)
      socket.emit("update", votes)
    });
  })

  socket.on("vote", (data) => {
    Vote.findOneAndUpdate( {title: data.value},
         {$inc : {'value' : 1}},
         {new: true},
         function(err, response) {
           inner();
         })
  });

});
// make a connection
mongoose.connect('mongodb://mongo:27017/Election');

// get reference to database
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

app.get("/test",  (req, res) => {
  res.send("Hello, got it");
});


app.get("/vote", function (req, res) {


});

server.listen(PORT, () =>{
    var VotesSchema = mongoose.Schema({
      title: {type: String, unique: true},
      value: Number,
      color: String,
    });

    var query1 = {title: "Red", value: 0, color: '#924F55'};
    var query2 = {title: "Blue", value: 0, color: '#4F5992'};
    var update = { expire: new Date() };
    var options = { upsert: true, new: true, setDefaultsOnInsert: true };
    Vote = mongoose.model('Book', VotesSchema, 'Votes');
    Vote.findOneAndUpdate(query1, update, options, (error, result)=> {console.log("Created ", result)});
    Vote.findOneAndUpdate(query2, update, options, (error, result)=> {console.log("Created ", result)});

    console.log(`Listening on ${PORT}`);
});
