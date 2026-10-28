const express = require('express');
const path = require('path');

// Import Centralized Data Modules
const jobsData = require('./data/jobsData');
const companiesData = require('./data/companiesData');
const dsaData = require('./data/dsaData');
const prepData = require('./data/prepData');

const app = express();
const PORT = process.env.PORT || 3000;

// Setup Template Engine (EJS)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// ==========================================
//              PAGE ROUTES (SSR)
// ==========================================

// 1. Home / Landing Page
app.get('/', (req, res) => {
  res.render('index', {
    title: 'Job Portal — Career & Interview Preparation Platform',
    activePage: 'home',
    featuredJobs: jobsData.slice(0, 6),
    companies: companiesData
  });
});

// 2. Jobs Portal Page
app.get('/jobs', (req, res) => {
  res.render('jobs', {
    title: 'Find Jobs — Job Portal',
    activePage: 'jobs',
    jobs: jobsData
  });
});

// 3. Interview Preparation Hub Page
app.get('/preparation', (req, res) => {
  res.render('preparation', {
    title: 'Interview Preparation — Job Portal',
    activePage: 'preparation',
    prepData: prepData
  });
});

// 4. Companies Hiring Process Page
app.get('/companies', (req, res) => {
  res.render('companies', {
    title: 'Companies Hiring Process — Job Portal',
    activePage: 'companies',
    companies: companiesData
  });
});

// 5. Topic-Wise DSA Sheet Page
app.get('/dsa-sheet', (req, res) => {
  res.render('dsa-sheet', {
    title: 'Topic-wise DSA Sheet — Job Portal',
    activePage: 'dsa-sheet',
    dsaSheet: dsaData
  });
});

// ==========================================
//              REST API ENDPOINTS
// ==========================================

// GET all jobs with optional query filtering
app.get('/api/jobs', (req, res) => {
  const { type, location, search } = req.query;
  let results = [...jobsData];

  if (type && type !== 'all') {
    results = results.filter(j => j.type.toLowerCase() === type.toLowerCase());
  }
  if (location) {
    results = results.filter(j => j.location.toLowerCase().includes(location.toLowerCase()));
  }
  if (search) {
    const q = search.toLowerCase();
    results = results.filter(j =>
      j.title.toLowerCase().includes(q) ||
      j.company.toLowerCase().includes(q) ||
      j.tags.some(t => t.toLowerCase().includes(q))
    );
  }

  res.json({ success: true, count: results.length, jobs: results });
});

// GET specific job by ID
app.get('/api/jobs/:id', (req, res) => {
  const job = jobsData.find(j => j.id === parseInt(req.params.id));
  if (!job) {
    return res.status(404).json({ success: false, message: 'Job not found' });
  }
  res.json({ success: true, job });
});

// GET all companies
app.get('/api/companies', (req, res) => {
  res.json({ success: true, count: companiesData.length, companies: companiesData });
});

// GET specific company by ID
app.get('/api/companies/:id', (req, res) => {
  const company = companiesData.find(c => c.id.toLowerCase() === req.params.id.toLowerCase());
  if (!company) {
    return res.status(404).json({ success: false, message: 'Company not found' });
  }
  res.json({ success: true, company });
});

// GET DSA sheet data
app.get('/api/dsa', (req, res) => {
  res.json({ success: true, dsaSheet: dsaData });
});

// GET Interview Prep data
app.get('/api/prep', (req, res) => {
  res.json({ success: true, prepData });
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'online',
    app: 'Job Portal Node.js Platform',
    uptimeSeconds: Math.floor(process.uptime()),
    timestamp: new Date().toISOString()
  });
});

// 404 Fallback
app.use((req, res) => {
  res.status(404).render('index', {
    title: '404 - Page Not Found — Job Portal',
    activePage: 'home',
    featuredJobs: jobsData.slice(0, 6),
    companies: companiesData
  });
});

// Start Server (only when running locally, not on Vercel)
if (!process.env.VERCEL) {
  app.listen(PORT, () => {
    console.log(`\n======================================================`);
    console.log(`🚀 Job Portal Node.js Server is running!`);
    console.log(`📡 Local URL: http://localhost:${PORT}`);
    console.log(`🔌 REST API:  http://localhost:${PORT}/api/jobs`);
    console.log(`======================================================\n`);
  });
}

// Export Express app for Vercel serverless deployment
module.exports = app;
