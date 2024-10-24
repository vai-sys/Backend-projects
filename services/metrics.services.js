const Lead = require('../model/leads.model');
const Campaign = require('../model/campaigns.model');
const Metrics = require('../model/metrics.model');

class MetricsService {
  static async calculateMetrics() {
    try {
      const leads = await Lead.find();
      const campaigns = await Campaign.find();

      const leadsBySource = leads.reduce((acc, lead) => {
        acc.set(lead.source, (acc.get(lead.source) || 0) + 1);
        return acc;
      }, new Map());

      const leadsByStatus = leads.reduce((acc, lead) => {
        acc.set(lead.status, (acc.get(lead.status) || 0) + 1);
        return acc;
      }, new Map());

      const currentDate = new Date();
      const activeCampaigns = campaigns.filter(camp => 
        currentDate >= camp.startDate && 
        currentDate <= camp.endDate &&
        camp.status === 'active'
      );

      const campaignsDuration = campaigns.reduce((acc, camp) => {
        const duration = Math.ceil(
          (camp.endDate - camp.startDate) / (1000 * 60 * 60 * 24)
        );
        acc.set(camp.name, duration);
        return acc;
      }, new Map());

      const convertedLeads = leads.filter(lead => lead.status === 'converted').length;
      const conversionRate = (convertedLeads / leads.length) * 100 || 0;

      const metrics = new Metrics({
        totalLeads: leads.length,
        leadsBySource: Object.fromEntries(leadsBySource),
        leadsByStatus: Object.fromEntries(leadsByStatus),
        activeCampaignsCount: activeCampaigns.length,
        campaignsDuration: Object.fromEntries(campaignsDuration),
        conversionRate: parseFloat(conversionRate.toFixed(2)),
        lastUpdated: new Date()
      });

      await metrics.save();
      return metrics;
    } catch (error) {
      console.error('Error calculating metrics:', error);
      throw error;
    }
  }

  static async getLatestMetrics() {
    return await Metrics.findOne().sort({ createdAt: -1 });
  }

  static async getMetricsHistory(days = 30) {
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - days);
    
    return await Metrics.find({
      createdAt: { $gte: startDate }
    }).sort({ createdAt: 1 });
  }
}

module.exports = MetricsService;
