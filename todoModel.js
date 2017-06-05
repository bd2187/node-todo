var mongoose = require('mongoose');
var config = require('../config/index.js');

var Schema = mongoose.Schema;

var todoSchema = new Schema({
  username: String,
  todo: String,
  isDone: Boolean,
  hasAttachment: Boolean
});

// create model based on todoSchema
var Todos = mongoose.model('Todos', todoSchema);

// export model
module.exports = Todos;
