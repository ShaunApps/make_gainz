const express = require('express');
const router = express.Router();


module.exports = router;


router.get('/', mainControlller.showHome);



router.route('/exercises').get(function(req, res) {

})


app.get('/api/setupExercises', function(req, res) {


  Exercises.create(starterExercises, function(err, results) {
    res.send(results);
  });
});
