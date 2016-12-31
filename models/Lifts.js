var db = require('./index.js');

var Lift = db.sequelize.define('lift', {
  name: {
    type: Sequelize.STRING,
    field: 'name' // Will result in an attribute that is firstName when user facing but first_name in the database
  },
  muscleGroup: {
    type: Sequelize.STRING
  }
}, {
  freezeTableName: true // Model tableName will be the same as the model name
});

Lift.sync({force: true}).then(function () {
  // Table created
  return Lift.create({
    name: 'Chest Press',
    muscleGroup: 'Chest'
  });
});
