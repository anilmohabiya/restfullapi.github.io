const express = require('express');
const connect =require('./db/conn');
const Student =require('./models/students')
const router = require('./router/stud');
const app = express();
const port =process.env.PORT  ||  7000;
// to get the api data which in json fromat in postman u need to call middleware json
app.use(router);
app.use(express.json());
connect();  //simply call the dbconnection

// create a new student with using .then function
//app.post ('/students',(req,res)=>{
//console.log(req.body);  for test the postman json file
//const user = new Student(req.body)
  //user.save().then(()=>{
    //  res.status(201).send(user);
 // }).catch((e)=>{
   //  res.status(400).send(e);
 // })
 // res.send('eska use ham sirf json me dekhte hai  jab data save karte hi mongodb me to delete kardete hi');
// })
//create using async await function
//now let get started

app.listen(port,()=>{
    console.log(`connection is sucessfull at ${port}`);
})

                                                                                                                                                            