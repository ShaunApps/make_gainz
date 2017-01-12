const configValues = require('./config');


module.exports = {

  getDbConnectionString: function() {
    return 'mongodb://' + configValues.path + "/" +
    configValues.username;

  }

}
