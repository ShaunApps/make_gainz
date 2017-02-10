const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  name: {
      type: String,
      required: true
  },
  muscleGroup: {
      type: String,
      required: true
  },
  description: {
    type: String,
    required: true
  },
  video: {
    type: String
  }
});


const Exercises = mongoose.model('Exercises', exerciseSchema);

module.exports = Exercises;
