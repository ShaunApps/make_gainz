const express = require('express');
const router = express.Router();
const Exercise = requre('../models/exerciseModel');

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
