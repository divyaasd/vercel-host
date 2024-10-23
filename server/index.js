const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const empModel=require('./model/employeeModel')
const employeeModel = require('./model/employeeModel')

const app=express()

app.use(express.json())

app.use(cors(
    {
        origin: 'https://your-frontend-domain.vercel.app', // Replace with your React app's Vercel URL
        methods: ['GET', 'POST', 'PUT', 'DELETE'],         
        credentials: true                                  
      }
))

mongoose.connect('mongodb+srv://divyaas340:WBLJq67LxK9UIpdj@cluster0.tfngn.mongodb.net/')

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