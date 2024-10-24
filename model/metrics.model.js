const mongoose = require('mongoose');

const metricsSchema = new mongoose.Schema({
  totalLeads: {
    type: Number,
    required: true
  },
  leadsBySource: {
    type: Map,
    of: Number
  },
  leadsByStatus: {
    type: Map,
    of: Number
  },
  activeCampaignsCount: {
    type: Number,
    required: true
  },
  campaignsDuration: {
    type: Map,
    of: Number
  },
  conversionRate: {
    type: Number,
    required: true
  },
  lastUpdated: {
    type: Date,
    default: Date.now
  }
}, { timestamps: true });

module.exports = mongoose.model('Metrics', metricsSchema);
