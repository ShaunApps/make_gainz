const Exercises = require('../models/exerciseModel');

module.exports = (req, res) => {



  app.get('/api/setupExercises', function(req, res) {


    Exercises.create(starterExercises, function(err, results) {
      res.send(results);
    });
  });






}
