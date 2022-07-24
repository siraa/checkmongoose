const mongoose = require("mongoose");
//Create and save a person with this prototype :- Person Prototype 
const person = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: Number,
  favoriteFood: [String],
});



 
module.exports = mongoose.model("user", person);



