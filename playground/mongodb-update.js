
const {MongoClient, ObjectID} = require('mongodb'); //ES6 Object Destructuring 



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err) {
        return console.log('Unable to Connect to mongodb server');
    }
    console.log('connected to MongoDB server');
    const db = client.db('TodoApp');
    
    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5aa2855357641de0d1cc2390')
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // })

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5a9bc475aee6c13ed0080ae9')
    }, {
        $set: {
            name: 'Samkit'
        },

        $inc : {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    })

    // client.close();
});

