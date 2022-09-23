const express = require('express');
const Alert = require('../models/Alert');
const router = express.Router();

router.get('/get',
async (req, res, next) => 
    {
      try 
      {
        const alerts = await Alert.find();
        return res.status(200).json({
          success: true,
          count: alerts.length,
          data: alerts
        });
      } 
      catch (err) 
      {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
      }
})

router.post('/post',
  async (req, res, next) => {
    // try {
    //   const alert = await Alert.create(req.body);
    //   return res.status(201).json({
    //     success: true,
    //     data: alert
    //   });
    // } catch (err) {
    //   console.error(err);
    //   if (err.code === 11000) {
    //     return res.status(400).json({ error: 'This alert already exists' });
    //   }
    //   res.status(500).json({ error: 'Server error' });
    
    // }
    console.log(req.body)
})

module.exports = router;