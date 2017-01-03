var db = require('./index.js');
var Sequelize = require('sequelize');

var sequelize = db.sequelize;

var Lift = sequelize.define('lift', {
  name: {
    type: Sequelize.STRING,
    field: 'name' // Will result in an attribute that is firstName when user facing but first_name in the database
    unique: true,
    allownull: false
  },
  muscleGroup: {
    type: Sequelize.STRING
  }
}, {
  freezeTableName: true // Model tableName will be the same as the model name
});

sequelize
  .sync({
    force: true
  })
  .then(function() {
  // Table created
    var liftInstance = Lift.build({
      name: 'Chest Press',
      muscleGroup: 'Chest'
    })
    liftInstance.save();
});
