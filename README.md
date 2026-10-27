# 💼 Job Portal & Interview Preparation Platform (Node.js & Express)

A comprehensive, state-of-the-art career preparation platform and job board built with **Node.js**, **Express.js**, and **EJS templates**. Featuring live job listings, company hiring guides, structured round-wise preparation (Aptitude, DSA, Technical CS, HR), topic-wise DSA practice sheets, REST APIs, and dynamic Dark / Light mode.

---

## 🌟 Architecture & Features

- **🚀 Node.js & Express Backend**:
  - Full server-side routing (`/`, `/jobs`, `/preparation`, `/companies`, `/dsa-sheet`).
  - **REST API Endpoints** for jobs, companies, preparation tracks, and DSA problems (`/api/jobs`, `/api/companies`, `/api/dsa`, `/api/prep`).
  - Server-side rendering (SSR) with **EJS templates** and reusable partials (clean header/footer architecture).
- **💼 Job Portal**:
  - Curated job listings with dynamic search, filters (experience, company type, mode), and detail modals.
- **📚 Interview Preparation Hub**:
  - Structured modules for **Aptitude**, **Technical Core CS** (OS, DBMS, CN, OOP), and **HR rounds** with answering frameworks.
- **🏢 Companies Hiring Process**:
  - Detailed hiring process, exam patterns, eligibility criteria, and syllabus breakdown for top tech MNCs.
- **🧩 Topic-Wise DSA Sheet**:
  - 450+ curated problems across core topics with local progress persistence and interactive progress circle ring.
- **🌓 Dark & Light Mode**:
  - One-click instant theme toggle in the header and mobile menu with `localStorage` persistence.

---

## 📁 Project Structure

```text
job-prep-portal/
├── data/
│   ├── jobsData.js         # Jobs dataset & metadata
│   ├── companiesData.js    # Company profiles & hiring processes
│   ├── dsaData.js          # 450+ topic-wise DSA problem sheet
│   └── prepData.js         # Aptitude, Technical & HR modules
├── views/
│   ├── partials/
│   │   ├── header.ejs      # Shared navbar, branding & theme toggle
│   │   └── footer.ejs      # Shared footer, stats & scripts
│   ├── index.ejs           # Landing page template
│   ├── jobs.ejs            # Jobs portal template
│   ├── preparation.ejs     # Interview preparation hub template
│   ├── companies.ejs       # Company hiring guides template
│   └── dsa-sheet.ejs       # DSA practice tracker template
├── public/
│   ├── css/                # Styling design system (Dark & Light themes)
│   │   ├── styles.css
│   │   ├── index.css
│   │   ├── jobs.css
│   │   ├── prep.css
│   │   ├── companies.css
│   │   └── dsa.css
│   └── js/                 # Client-side scripts
│       ├── app.js          # Theme toggle, toast, navbar logic
│       ├── jobs.js         # Search & filter client handlers
│       ├── prep.js         # Tab switching logic
│       ├── companies.js    # Company search & modal handlers
│       └── dsa.js          # Problem solve tracker & progress ring
├── package.json            # Node.js dependencies & scripts
├── server.js               # Express application server & REST APIs
├── Jenkinsfile             # CI/CD pipeline automation
└── vercel.json             # Vercel deployment configuration
```

---

## 🚀 Getting Started Locally

### Prerequisites
Make sure you have **Node.js (v18 or higher)** installed on your computer. Check with:
```bash
node -v
```

### Installation & Run

1. Open your terminal in the project directory:
   ```bash
   cd job-prep-portal
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the Node.js server:
   ```bash
   npm start
   ```
   *(Or for auto-reload during development: `npm run dev`)*

4. Open your browser and navigate to:
   👉 **http://localhost:3000**

---

## 📡 REST API Documentation

| Endpoint | Method | Description |
|---|---|---|
| `/api/jobs` | `GET` | Get all jobs (supports `?search=...&type=...`) |
| `/api/jobs/:id` | `GET` | Get single job details by ID |
| `/api/companies` | `GET` | Get all company profiles & hiring guides |
| `/api/companies/:id` | `GET` | Get specific company hiring roadmap |
| `/api/dsa` | `GET` | Get topic-wise DSA problems list |
| `/api/prep` | `GET` | Get Aptitude, Technical & HR study materials |
| `/api/health` | `GET` | Backend server health & uptime status |
