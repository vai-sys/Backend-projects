const express = require('express');
const router = express.Router();
const Lead = require('../model/leads.model');  
const { leads: mockLeads } = require('../mockdata');

router.get('/', async (req, res) => {
    try {
        for (const lead of mockLeads) {
            await Lead.findOneAndUpdate(
                { email: lead.email },
                { $set: lead },
                { upsert: true, new: true }
            );
        }

        const allLeads = await Lead.find({});
        res.status(200).json(allLeads);
    } catch (error) {
        console.error('Error fetching leads:', error);
        res.status(500).json({ error: 'Failed to fetch leads' });
    }
});

module.exports = router;
