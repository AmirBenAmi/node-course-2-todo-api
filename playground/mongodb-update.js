 //const MongoClient = require('mongodb').MongoClient;
 const {MongoClient, ObjectID} = require('mongodb');


 MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db) => {
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    //findOneAndUpdate
    // db.collection('Todos').findOneAndUpdate({_id: new ObjectID('5a429b531f9c2c11ca86c734')},{
    //     $set:{
    //         completed: true
    //     }
    // },{
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // }); 


    //using $inc mongodb update operators
    db.collection('Users').findOneAndUpdate({_id: new ObjectID('5a4297bdfe9e1f18c6a42197')},
    {
        $inc: {age: 1}
    },{
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });

    db.close();
 });
