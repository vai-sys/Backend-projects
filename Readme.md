# Campaign Metrics API

This project provides a Node.js API to manage and track campaign metrics and lead data. It includes functionality for calculating and reporting on metrics such as lead sources, lead status, active campaigns, and conversion rates. Reports can be generated in both PDF and CSV formats and sent via email.

## Table of Contents
- [Features](#features)
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

## Usage

Use Postman, curl, or any other API client to interact with the API using the endpoints described below.

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


 
