const express = require('express');
const router = new express.Router();
 const Student =require('../models/students')

router.post('/students',async(req,res)=>{
    //console.log(req.body);  for test the postman json file
     // res.send('eska use ham sirf json me dekhte hai  jab data save karte hi mongodb me to delete kardete hi');
    const user = new Student(req.body)
    try{
        const createUser=await user.save();
        res.status(201).send(createUser);
    }catch(e){
        res.status(400).send(e);
    }
     
    })
    
    
    //read the data of registed students
    router.get('/students',async(req,res)=>{
        try{
         const usersData  = await Student.find();
         res.send(usersData);
        }catch(e){
             res.send(e);
        }
    })
    
    //read the indiviual data in student
    
    router.get('/students/:id',async(req,res)=>{
           try{
              const _id = req.params.id;
             const userData  = await Student.findById(_id);
          //   console.log(userData)
             
             if(!userData){
                 return res.status(404).send()
             }else{
                 res.send(userData)
             }
           }catch(e){
                 res.send(e)
           }
    
    })
    
    // update the data of the student
    
    router.patch('/students/:id',async(req,res)=>{
        try{
    
            const _id =req.params.id;
            const updateStudents = await Student.findByIdAndUpdate(_id,req.body,{
               new : true
            });
            res.send(updateStudents);
    
    
        }catch(e){
            res.status(404).send(e)         
    
        }
    
    })
    
        //delete the data from students
    
        router.delete('/students/:id',async(req,res)=>{
            try{
             const _id = req.params.id;
            const  deleteStudent  = await Student.findByIdAndDelete(_id)
            if(!deleteStudent){
                return res.status(400).send();
            }
                res.send(deleteStudent);
            
    
            }catch(e){
                res.status(500).send(e) 
            }
    
       
    })
module.exports = router;                                                                     