const mongoose = require('mongoose');

const Product = require('./models/alert')

mongoose.connect('', {useNewUrlParser: true})
.then(()=>{
    console.log("Connection established");
})
.catch(err=>{
    console.log("error hi bhai ");
    console.log(err);
})

const seedProducts = [
    {
        alertId: '1',
          address: "bandra east" ,
          location: {
            type: ,
            coordinates: ,
          }

    }
]

Product.insertMany(seedProducts)
.then(res=>{
    console.log(res);
})
.catch(e=>{
    console.log(e);
})