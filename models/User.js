const mongoose=require('mongoose')

const UserSchema=new mongoose.Schema({
  googleId:{
    type:String,
    required:true
  },
  email:String,
  displayName:{
    type:String,
    required:true
  },
  firstName:{
    type:String,
    required:true
  },
  lastName:{
    type:String,
    required:true
  },
  image:{
    type:String
  },


  phone:String,
  address:String,
  city:String,
  emergency:String,
  State:String,
  Zip:String,

  createdAt:{
    type:Date,
    default:Date.now
  }
})

module.exports=mongoose.model('User',UserSchema)