var config = require('./config');

module.exports = {
  getDbConnectionString() {
    return `mongodb://${config.uname}:${config.pwd}@ds161121.mlab.com:61121/bd_todo`
  }
}

// encrypt / decrypt json with new uname and password later
