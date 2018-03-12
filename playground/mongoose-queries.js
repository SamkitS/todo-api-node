const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('../server/models/user');

var uid = '5aa3ce6495f0b56455cc7a14';

// var id = '5aa522607854376e0b3fb114';

// if(!ObjectID.isValid(id)){
//     console.log('ID not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if(!todo) {
//         console.log('Id not found');
//     }
//     console.log('Todo by id', todo);
// }).catch((e)=> console.log(e));

User.findById(uid).then((user) => {
    if(!user) {
        console.log('User with this id not found');
    }
    console.log('User by id', user);
}).catch((e) => console.log(e));

