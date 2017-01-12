const Exercises = require('../models/exerciseModel');

module.exports = function(app) {

  app.get('/api/setupExercises', function(req, res) {

    let starterExercises = [
      {
        name: 'bench press',
        type: 'free weight lift',
        muscleGroup: 'chest',
        video: 'http://www.bodybuilding.com/exercises/detail/view/name/wide-grip-barbell-bench-press'
      },
      {
        name: 'barbell squat',
        type: 'free weight lift',
        muscleGroup: 'legs',
        video: 'http://www.bodybuilding.com/exercises/detail/view/name/barbell-squat'
      }
    ];
    Exercises.create(starterExercises, function(err, results) {
      res.send(results);
    });
  });
}
