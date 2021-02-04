const mongoose = require('mongoose');
const validator = require('validator');

const studentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:3
    },

    email:{
        type:String,
        required:true,
        unique:[true,'email id already used'],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Invalid email');
            }
        }
    },
    phone:{
        type:Number,
        required:true,
        minlength:10,
        maxlength:10,
       
    },
    address:{
        type:String,
        required:true
    }
})

//we will create new collection 

const Student = new mongoose.model('Student',studentSchema);

module.exports =Student;  