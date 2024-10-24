require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const apiRoutes = require('./routes/api.route');
const leadsRoute = require('./routes/leads.route');
const campaignRoute = require('./routes/campaign.route');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/ezycampaign', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('MongoDB connected successfully.');
})
.catch(err => {
  console.error('MongoDB connection error:', err);
});

app.use('/api', apiRoutes);
app.use('/leads', leadsRoute);
app.use('/campaigns', campaignRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
