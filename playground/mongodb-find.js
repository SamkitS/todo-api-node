
const {MongoClient, ObjectID} = require('mongodb'); //ES6 Object Destructuring 



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err) {
        return console.log('Unable to Connect to mongodb server');
    }
    console.log('connected to MongoDB server');
    const db = client.db('TodoApp');
    
    // db.collection('Todos').find({ 
    //     _id: new ObjectID("5a9bc31a682e923ebfcab5ea")}).toArray().then((docs) => {
    //     console.log('Todos')
    //     console.log(JSON.stringify(docs, undefined, 2));

    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });

    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`Todos count: ${count}`)
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });

    db.collection('Users').find({name: 'Samkit'}).toArray().then((docs) => {
        
        console.log(JSON.stringify(docs, undefined, 2));

    }, (err) => {
        console.log('Unable to fetch todos', err);
    });

   

    // client.close();
})

