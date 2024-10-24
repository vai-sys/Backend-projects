const express = require('express');
const router = express.Router();
const MetricsService = require('../services/metrics.services');
const { generatePDF, generateCSV } = require('../reports/reportGenerater');
const { sendEmail } = require('../utils/emailService');

router.get('/metrics', async (req, res) => {
  try {
    const metrics = await MetricsService.getLatestMetrics();
    if (!metrics) {
      return res.status(404).json({ message: 'No metrics found' });
    }
    res.json(metrics);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching metrics', error: error.message });
  }
});

router.get('/metrics/history', async (req, res) => {
  try {
    const days = parseInt(req.query.days) || 30;
    const metrics = await MetricsService.getMetricsHistory(days);
    res.json(metrics);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching metrics history', error: error.message });
  }
});

router.post('/reports', async (req, res) => {
  try {
    const metrics = await MetricsService.calculateMetrics();
    const pdfPath = await generatePDF(metrics);
    const csvPath = await generateCSV(metrics);
    
    await sendEmail([pdfPath, csvPath]);
    
    res.json({ 
      message: 'Reports generated and sent successfully',
      metricsId: metrics._id 
    });
  } catch (error) {
    res.status(500).json({ 
      message: 'Error generating reports', 
      error: error.message 
    });
  }
});

router.post('/metrics/calculate', async (req, res) => {
  try {
    const metrics = await MetricsService.calculateMetrics();
    res.json(metrics);
  } catch (error) {
    res.status(500).json({ 
      message: 'Error calculating metrics', 
      error: error.message 
    });
  }
});

module.exports = router;
