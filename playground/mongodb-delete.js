
const {MongoClient, ObjectID} = require('mongodb'); //ES6 Object Destructuring 



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err) {
        return console.log('Unable to Connect to mongodb server');
    }
    console.log('connected to MongoDB server');
    const db = client.db('TodoApp');
    
    //deleteMany
    // db.collection('Users').deleteMany({name: 'Samkit'}).then((result) => {
    //     console.log(result);

    // });

    //deleteOne
    // db.collection('Users').deleteOne({_id: new ObjectID("5a9bc4a60cec2c3ed5358eae") }).then((result) => {
    //     console.log(result);
    // });
   
    //findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result);
    // });


    // client.close();
})

