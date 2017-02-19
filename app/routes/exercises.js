const express = require('express');
const router = express.Router();
const Exercise = require('../models/exerciseModel');

// routes for retrieving all exercises and creating a new one
router.route('/exercises')
  .get(function(req, res) {
    Exercise.find(function(err, exercises) {
      if (err) {
        return res.send(err);
      }

      res.json(exercises);
    });
  })

  .post(function(req, res) {
    let exercise = new Exercise(req.body);

    exercise.save(function(err) {
      if (err) {
        return res.send(err);
      }

      res.send({ message: 'Exercise added to database' });
    });
  });



// routes for a specific exercise
router.route('/exercises/:id')
  .put(function(req, res) {
    Exercise.findOne({ _id: req.params.id }, function(err, exercise) {
      if (err) {
        return res.send(err);
      }

      for (prop in req.body) {
        exercise[prop] = req.body[prop];
      }

      exercise.save(function(err) {
        if (err) {
          return res.send(err);
        }

        res.json({ message: 'Exercise updated'});
      });
    });
  })

  .get(function(req, res) {
    Exercise.findOne({ _id: req.params.id }, function(err, exercise) {
      if (err) {
        return res.send(err);
      }

      res.json(exercise)
    });
  })

  .delete(function(req, res) {
    Exercise.remove({ _id: req.params.id }, function(err, movie) {
      if (err) {
        return res.send(err);
      }

      res.json({ message: 'Successfully deleted' });
    });
  });

  // get exercises by muscleGroup
  router.route('/exercise/:muscleGroup')
    .get(function(req, res) {
      Exercise.find({ muscleGroup: req.params.muscleGroup }, function(err, exercise) {
        if (err) {
          return res.send(err);
        }

        res.json(exercise)
      });
    });
  // get random exercise in a muscleGroup
    router.route('/exercise/:muscleGroup/random')
      .get(function(req, res) {
        Exercise.find({ muscleGroup: req.params.muscleGroup }, function(err, exercise) {
          if (err) {
            return res.send(err);
          }
          // var rand = myArray[Math.floor(Math.random() * myArray.length)];
          const rand_exercise = exercise[Math.floor(Math.random() * exercise.length)]

          res.json(rand_exercise)
        });
      });




  module.exports = router;
