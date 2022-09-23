const express=require('express')
const router=express.Router()
const {ensureAuth} = require('../middleware/auth')


//Profile Page
//Route : Get /profile
router.get('/',ensureAuth,(req,res)=>{
  res.render('c_profile')
})

module.exports=router;