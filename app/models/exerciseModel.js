const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  name: String,
  type: String,
  muscleGroup: String,
  video: String
})


const Exercises = mongoose.model('Exercises', exerciseSchema);

module.exports = Exercises;
