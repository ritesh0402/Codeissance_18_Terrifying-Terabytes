const express=require('express')
const dotenv=require('dotenv')
const connectDB=require('./config/db')
const path=require('path')
const app=express();
const passport=require('passport')
const session=require('express-session')
const Mongoalert = require('connect-mongo')
const cors = require('cors');
const bodyParser=require('body-parser')
const {ensureAuth} = require('../Codeissance_18_Terrifying-Terabytes/middleware/auth')
// const User = require('')
const User=require('./models/User')
app.use(express.json());

// Enable cors
app.use(cors());

//Load Config
dotenv.config({path:'./config/.env'})

//Passport Config
require('./config/passport')(passport)
//passport is passed as a arguement

//Ejs
app.set('views',path.join(__dirname,'/views'))
app.set('view engine','ejs')

//Express Session
app.use(session({
  secret: 'harsh',
  resave: false,
  saveUninitialized: true,
  alert: Mongoalert.create({
    mongoUrl: process.env.MONGO_URI,
  })
}))

//Passport Middleware
app.use(passport.initialize())
app.use(passport.session())


//Static Files
app.use(express.static('public'))

//Connect to DB
connectDB()

app.use(bodyParser.urlencoded({
  extended: true
}));

//Routes
app.get('/card',(req,res)=>{
  res.render('card')
})

app.get('/profile/dash',(req,res)=>{
  res.send("Ritesh Gandu")
})
app.use('/',require('./routes/index'))
app.use('/auth',require('./routes/auth'))
app.use('/test',require('./routes/sms'))
app.use('/payment',require('./routes/paytm'))
app.use('/alert',require('./routes/alert'))
app.get('/profile',async (req,res)=>{
  const user=await User.find({firstName:'Sumanta'})
  console.log(user)
  res.render('c_profile',{user})
})


app.post('/profile',ensureAuth,async (req,res)=>{
  // const exist=new User(req.body);
  // const newUser=await User.findByIdAndUpdate(exist.googleId, req.body , {runValidators: true, new: true})
  //const newUser = await User.findByIdAndUpdate(exist.googleId, req.body , {runValidators: true, new: true})
  // await exist.save()
  cons
  console.log(exist)
  res.redirect(`/home/${exist._id}`)
  
})

app.get('/path',(req,res)=>{
  res.render('directions')
})

app.put('/profile/:id' ,async (req,res) =>{
  const { googleId } = req.params;
  const product = await Product.findByIdAndUpdate(googleId, req.body , {runValidators: true, new: true})
  res.redirect(`/profile/${profile._id}`)
})

//Start Server
const PORT=process.env.PORT || 5000;
app.listen(PORT,()=>
{
  console.log("Server up and running")
})