const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const empModel=require('./model/employeeModel')
const employeeModel = require('./model/employeeModel')

const app=express()

app.use(express.json())

app.use(cors())

mongoose.connect('mongodb://localhost:27017/registration')

app.post('/register',(req,res)=>{
    empModel.create(req.body)
    .then(employees=>res.json(employees))
    .catch(err=>console.log(err))

})

app.post('/login',(req,res)=>{
    const{email,password}=req.body;
    employeeModel.findOne({email:email})
    .then(user=>{
        if(user){
            if(user.password===password){
                res.json('success')
            }
            else{
                res.json('password is incorrect')
            }
        }
        else{
            res.json('no records')
        }
    })
})

app.listen(3001,()=>{
    console.log('server is running');
    
})