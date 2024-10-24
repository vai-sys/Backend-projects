const express = require('express');
const router = express.Router();
const Campaign = require('../model/campaigns.model');
const { campaigns: mockCampaigns } = require('../mockdata');

router.get('/', async (req, res) => {
    try {
        for (const campaign of mockCampaigns) {
            await Campaign.findOneAndUpdate(
                { name: campaign.name },
                { $set: campaign },
                { upsert: true, new: true }
            );
        }

        const allCampaigns = await Campaign.find({});
        res.status(200).json(allCampaigns);
    } catch (error) {
        console.error('Error fetching campaigns:', error);
        res.status(500).json({ error: 'Failed to fetch campaigns' });
    }
});

module.exports = router;
