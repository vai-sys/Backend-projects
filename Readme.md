# Campaign Metrics API

This project provides a Node.js API to manage and track campaign metrics and lead data. It includes functionality for calculating and reporting on metrics such as lead sources, lead status, active campaigns, and conversion rates. Reports can be generated in both PDF and CSV formats and sent via email.

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Models](#models)
- [Services](#services)
- [Reports](#reports)
- [Environment Variables](#environment-variables)
- [License](#license)

## Features
- Create and manage **Campaigns** and **Leads**.
- Automatically calculate metrics like:
  - Total leads
  - Leads by source
  - Leads by status
  - Active campaigns
  - Conversion rates
- Generate and send PDF and CSV reports via email.
- Fetch historical metrics data.

## Installation

1. Clone this repository:
    ```bash
    git clone https://github.com/your-repository-url.git
    cd your-project-folder
    ```

2. Install dependencies:
    ```bash
    npm install
    ```



4. Start the server:
    ```bash
    npm start
    ```

## Usage


- Use Postman, curl, or any other API client to interact with the API using the endpoints described below.

## API Endpoints

### Metrics Endpoints
- **GET `/api/metrics`**: Fetch the latest metrics.
- **GET `/api/metrics/history?days=30`**: Get metrics history for the last 30 days (customizable by query).
- **POST `/api/metrics/calculate`**: Recalculate and return the latest metrics.

### Report Generation Endpoints
- **POST `/api/reports`**: Generate and send PDF and CSV reports via email.

### Campaign Endpoints
- **GET `/campaigns`**: Fetch all campaigns.
  
### Lead Endpoints
- **GET `/leads`**: Fetch all leads.

## Models

### Campaign Schema
```javascript
const campaignSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  status: { type: String, enum: ['active', 'inactive', 'completed'], default: 'active' }
}, { timestamps: true });



## Lead Schema
```javascript
const leadSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  source: { type: String, required: true },
  status: { type: String, enum: ['new', 'contacted', 'qualified', 'converted'], default: 'new' }
}, { timestamps: true });




## Metrics Schema

```javascript
const metricsSchema = new mongoose.Schema({
  totalLeads: { type: Number, required: true },
  leadsBySource: { type: Map, of: Number },
  leadsByStatus: { type: Map, of: Number },
  activeCampaignsCount: { type: Number, required: true },
  campaignsDuration: { type: Map, of: Number },
  conversionRate: { type: Number, required: true },
  lastUpdated: { type: Date, default: Date.now }
}, { timestamps: true });





## Services

### Metrics Calculation
The `MetricsService` calculates metrics based on the current campaign and lead data:

- **Total leads**
- **Leads by source** (website, social media, referral, etc.)
- **Leads by status** (new, contacted, qualified, converted)
- **Active campaigns count**
- **Campaign duration**
- **Conversion rate** (percentage of leads converted)

### Example of Metrics Calculation

```javascript
const metrics = new Metrics({
  totalLeads: leads.length,
  leadsBySource: Object.fromEntries(leadsBySource),
  leadsByStatus: Object.fromEntries(leadsByStatus),
  activeCampaignsCount: activeCampaigns.length,
  campaignsDuration: Object.fromEntries(campaignsDuration),
  conversionRate: parseFloat(conversionRate.toFixed(2)),
});




## Reports

### PDF Generation
The `generatePDF` function uses the `pdf-lib` library to create a PDF document of the metrics. It ensures:

- Proper formatting of the content.
- Handling of text overflow, ensuring the document remains clean and readable.
#   B a c k e n d - p r o j e c t s  
 