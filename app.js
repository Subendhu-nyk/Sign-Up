const express=require('express')
const server=express()
const path=require('path')
const bodyParser=require('body-parser')
const sequelize=require('./util/signup')
const Sequelize = require('./models/signup')
server.use(express.json());
const cors=require('cors');
const signup = require('./models/signup');
server.use(cors())
server.use(bodyParser.urlencoded({extended:false}))

server.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'views','signup.html'))
})
server.post('/user', async (req, res) => {
    try {
      const name = req.body.name;
      const email = req.body.email;
      const phone = req.body.phone;
      const password=req.body.password
   
      const data = await signup.create({
        name: name,
        email:email,
        phone:phone,
        password: password,
       
      }); 
          
      res.status(201).json({ newUserdata: data });
    } catch (err) {       
    res.status(500).json({ error:"some error", err }) 
    }
  });


Sequelize.sync().then((result)=>{
    console.log(result)
})




server.listen(3000,()=>{
    console.log('server is running')
})
