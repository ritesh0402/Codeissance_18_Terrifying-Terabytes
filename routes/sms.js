const express=require('express')
const router=express.Router()
const {ensureAuth} = require('../middleware/auth')
const send_sms=require('../controllers/sms')

//SMS Page
//Route : Get /test
router.get('/',ensureAuth,send_sms)

module.exports=router;