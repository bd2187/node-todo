var Todos = require('../models/todoModel');

module.exports = function(app) {
  app.get('/api/setupTodos', function(req, res){
    // seed database
    var starterTodos = [
      {
        username: 'test',
        todo: 'exercise',
        isDone: false,
        hasAttachment: false
      },
      {
        username: 'test',
        todo: 'code',
        isDone: false,
        hasAttachment: false
      },
      {
        username: 'test',
        todo: 'lunch',
        isDone: false,
        hasAttachment: false
      }
    ];
    Todos.create(starterTodos, function(err, data){ // data to db
      if (err) throw err;
      res.send(data); //output data to browser
    });
  })
}
