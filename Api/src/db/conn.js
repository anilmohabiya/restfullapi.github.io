const mongoose = require('mongoose');

const connect= async ()=>{

 try{
     
 await mongoose.connect("mongodb://localhost:27017/students-api",{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:false
})
console.log('connection sucessful');

 }catch(e){
 console.log('no connection');
 }

}

module.exports = connect;

//then. use

// mongoose.connect("mongodb://localhost:27017/students-api",{
  //  useCreateIndex:true,
  //  useNewUrlParser:true,
  //  useUnifiedTopology:true
 //}).then(()=>{
   // console.log('connection sucessful');

//}).catch((e)=>{
     
//})

 //}