const express=require('express')
const router=express.Router()
const {ensureAuth} = require('../middleware/auth')

//Home Page
//Route : Get /home
router.get('/',ensureAuth,(req,res)=>
{
  res.render('paytm')
})

module.exports=router