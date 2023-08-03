const Sequelize=require('sequelize')
const sequelize=require('../util/signup')
const signup=sequelize.define('signup',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true,
        unique:true
    },
    name:{
        type:Sequelize.STRING,    
        allowNull:false,       
       
    }, 
    email:{
        type:Sequelize.STRING,    
        allowNull:false,       
       
    },    
    
    phone:{
        type:Sequelize.INTEGER,      
        allowNull:false,

    },
    password:{
        type:Sequelize.STRING,   
        allowNull:false,
    }  

})

module.exports=signup;