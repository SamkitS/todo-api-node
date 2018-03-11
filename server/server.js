var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req,res) => {
   var todo = new Todo ({
       text: req.body.text
   });
   todo.save().then((doc)=> {
        res.send(doc);
   }, (e) => {
        res.status(400).send(e);
   });
});

app.get('/todos', (req,res) => {
    Todo.find().then((todos) => {
        res.send({todos})
    }, (e) => {
        res.status(400).send(e);
    });

});

app.listen(3000, () => {
    console.log('Started on port 3000');
});

module.exports = {app};























// var newTodo = new Todo ({
//     text: 'Hat ja Tau',
//     completed: false,
//     completedAt: 123

// });

// newTodo.save().then((doc) => {
//     console.log('Saved todo', doc);
// }, (e) => {
//     console.log('Unable to save todo');
// });

// var otherTodo = new Todo ({
//     text: '    New Song   ',
// });

// otherTodo.save().then((doc) => {
//     console.log(JSON.stringify(doc, undefined, 2));
// }, (e) => {
//     console.log('Unable to Save todo');
// }
// );



// var userDetails = new User ({
//     email: 'hii@.com'
// })

// userDetails.save().then((doc) => {
//     console.log(JSON.stringify(doc, undefined, 2));
// }, (e) => {
//     console.log('Unable to save User');
// });