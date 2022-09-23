const Alert = require('../models/Alert');

// @desc  Get all alerts
// @route GET /alert
// @access Public
exports.getAlerts = async (req, res, next) => {
  try {
    const alerts = await Alert.find();

    return res.status(200).json({
      success: true,
      count: alerts.length,
      data: alerts
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

// @desc  Create a alert
// @route POST /alert
// @access Public
exports.addAlert = async (req, res, next) => {
  try {
    const alert = await Alert.create(req.body);
    return res.status(201).json({
      success: true,
      data: alert
    });
  } catch (err) {
    console.error(err);
    if (err.code === 11000) {
      return res.status(400).json({ error: 'This alert already exists' });
    }
    res.status(500).json({ error: 'Server error' });
  }
};