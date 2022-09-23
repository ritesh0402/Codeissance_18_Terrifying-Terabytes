const express=require('express')
const router=express.Router()
const {ensureAuth,enseureGuest, ensureGuest} = require('../middleware/auth')

//Login Page
//Route : Get /
router.get('/',ensureGuest,(req,res)=>
{
  res.render('login')
})

//Home Page
//Route : Get /home
router.get('/home',ensureAuth,(req,res)=>
{
  res.render('home',{
    name:req.user.firstName
  })
})

module.exports=router