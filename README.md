📁 Rohit Desai - Professional DevOps Portfolio
https://img.shields.io/badge/Status-Live-brightgreen https://img.shields.io/badge/Version-2.0-blue https://img.shields.io/badge/React-18.2-blue https://img.shields.io/badge/Node.js-18-green https://img.shields.io/badge/License-MIT-yellow

A modern, professional portfolio website built with MERN stack showcasing DevOps, Cloud Engineering, and Full-Stack Development expertise. Features responsive design, real-time analytics, and interactive UI components.

🚀 Live Demo
Frontend: http://localhost:3000

Backend API: http://localhost:5000

API Documentation: http://localhost:5000/api/v1/health

📋 Table of Contents
Features

Tech Stack

Project Structure

Installation

API Endpoints

Deployment

Development

Contributing

License

Contact

✨ Features
🎨 Frontend Features
Modern UI/UX: Responsive design with dark/light themes

Interactive Animations: Framer Motion animations and transitions

Real-time Typing Effect: Animated role display

Progress Visualizations: Skill proficiency with animated bars

Dynamic Analytics: Page view tracking and contact form analytics

Mobile-First: Fully responsive across all devices

SEO Optimized: Meta tags and semantic HTML

⚙️ Backend Features
RESTful API: Clean, documented endpoints

Real-time Analytics: Track page views and submissions

Contact Management: Ticket system with validation

Rate Limiting: Protect against abuse (100 req/15min)

Security: Helmet.js, CORS, input sanitization

Error Handling: Structured error responses

Health Monitoring: System status and performance metrics

📊 Professional Features
Portfolio Showcase: Skills, projects, experience, certifications

Contact System: Form with validation and email notifications

Resume Integration: Download tracking and analytics

Admin Dashboard: View analytics and messages (planned)

Performance Optimized: Lazy loading, image optimization

Accessibility: WCAG 2.1 compliant

🛠️ Tech Stack
Frontend
React 18 - UI Library

TypeScript - Type safety

Material-UI - Component library

Framer Motion - Animations

Axios - HTTP client

Chart.js - Data visualization

React Router - Navigation

Backend
Node.js - Runtime

Express.js - Web framework

MongoDB - Database (optional)

Helmet.js - Security headers

CORS - Cross-origin requests

Winston - Logging

Joi - Validation

DevOps & Tools
Git - Version control

Docker - Containerization

GitHub Actions - CI/CD

AWS - Deployment target

Terraform - Infrastructure as Code

Prometheus - Monitoring

Grafana - Visualization

📁 Project Structure
text
portfolio/
├── client/                    # React frontend
│   ├── src/
│   │   ├── components/       # React components
│   │   │   ├── layout/      # Header, Footer, Navigation
│   │   │   ├── sections/    # Hero, Skills, Projects, etc.
│   │   │   └── ui/          # Reusable UI components
│   │   ├── hooks/           # Custom React hooks
│   │   ├── services/        # API services
│   │   ├── styles/          # Global styles
│   │   └── utils/           # Helper functions
│   ├── public/              # Static assets
│   └── package.json         # Frontend dependencies
│
├── server/                   # Node.js backend
│   ├── src/
│   │   ├── controllers/     # Route controllers
│   │   ├── routes/          # API routes
│   │   ├── models/          # Database models
│   │   ├── middleware/      # Custom middleware
│   │   └── utils/           # Helper functions
│   ├── server.js           # Entry point
│   └── package.json        # Backend dependencies
│
├── docker/                  # Docker configurations
├── terraform/              # Infrastructure as Code
├── .github/workflows/      # CI/CD pipelines
├── .env.example           # Environment variables template
└── README.md              # This file
📦 Installation
Prerequisites
Node.js >= 16.x

npm >= 8.x

Git

MongoDB (optional, runs in memory by default)

Step 1: Clone Repository
bash
git clone https://github.com/rd1855/portfolio-website.git
cd portfolio-website
Step 2: Backend Setup
bash
cd server
npm install
cp .env.example .env
npm run dev
Step 3: Frontend Setup
bash
cd client
npm install
npm start
Step 4: Access Application
Frontend: http://localhost:3000

Backend API: http://localhost:5000

Health Check: http://localhost:5000/api/v1/health

📡 API Endpoints
Method	Endpoint	Description
GET	/api/v1/health	System health and analytics
GET	/api/v1/portfolio	Complete portfolio data
GET	/api/v1/skills	Skills and technologies
GET	/api/v1/experience	Work experience and projects
GET	/api/v1/certifications	Certifications and achievements
POST	/api/v1/contact	Submit contact form
GET	/api/v1/resume	Resume information
POST	/api/v1/analytics/pageview	Track page views
Example API Response
json
{
  "success": true,
  "data": {
    "personal": {
      "name": "Rohit Vitthal Desai",
      "title": "DevOps Engineer | AWS Specialist",
      "email": "rdesai1855@gmail.com"
    }
  },
  "meta": {
    "timestamp": "2025-12-24T10:30:00.000Z",
    "version": "1.0.0"
  }
}
🚀 Deployment
Option 1: Vercel (Recommended for Frontend)
bash
# Install Vercel CLI
npm i -g vercel

# Deploy frontend
cd client && vercel

# Deploy backend
cd ../server && vercel
Option 2: Docker Compose
bash
# Build and run with Docker
docker-compose up -d

# Access at http://localhost:3000
Option 3: AWS ECS
Build Docker images

Push to ECR

Create ECS cluster

Configure load balancer

Option 4: Kubernetes
bash
# Deploy to Kubernetes
kubectl apply -f k8s/

# Access service
kubectl get svc portfolio-service
🔧 Development
Development Scripts
bash
# Backend
cd server
npm run dev      # Development mode
npm start        # Production mode
npm test         # Run tests

# Frontend
cd client
npm start        # Development server
npm build        # Production build
npm test         # Run tests
Environment Variables
Create .env files with these variables:

Server (.env)

env
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/portfolio
CORS_ORIGIN=http://localhost:3000
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100
Client (.env)

env
REACT_APP_API_URL=http://localhost:5000
REACT_APP_GA_TRACKING_ID=UA-XXXXX-Y
REACT_APP_VERSION=2.0.0
Code Standards
bash
# Format code
npm run format

# Lint code
npm run lint

# Type checking (TypeScript)
npm run type-check
📈 DevOps Integration
CI/CD Pipeline (.github/workflows/deploy.yml)
yaml
name: Deploy Portfolio
on: [push]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - run: npm test
  deploy:
    needs: test
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - run: npm run build
      - uses: vercel/action@v20
Monitoring Setup
Prometheus - Metrics collection

Grafana - Visualization dashboards

AWS CloudWatch - Log aggregation

Sentry - Error tracking

Infrastructure as Code (Terraform)
hcl
# AWS resources for portfolio
resource "aws_s3_bucket" "portfolio" {
  bucket = "rohit-desai-portfolio"
}

resource "aws_cloudfront_distribution" "cdn" {
  origin {
    domain_name = aws_s3_bucket.portfolio.bucket_regional_domain_name
  }
}
🤝 Contributing
Contributions are welcome! Here's how to contribute:

Fork the repository

Create a feature branch (git checkout -b feature/amazing-feature)

Commit your changes (git commit -m 'Add amazing feature')

Push to the branch (git push origin feature/amazing-feature)

Open a Pull Request

Development Guidelines
Follow ESLint configuration

Write TypeScript for type safety

Add tests for new features

Update documentation

Use meaningful commit messages

📄 License
This project is licensed under the MIT License - see the LICENSE file for details.

👤 Author
Rohit Vitthal Desai

DevOps Engineer | AWS Specialist | Full-Stack Developer

📧 Email: rdesai1855@gmail.com

📱 Phone: +91-7887706121

💼 LinkedIn: linkedin.com/in/rd1855

💻 GitHub: github.com/rd1855

🙏 Acknowledgments
Material-UI for component library

Framer Motion for animations

Chart.js for data visualization

All contributors and reviewers

📊 Project Status
Component	Status	Version
Frontend	✅ Production Ready	2.0.0
Backend API	✅ Production Ready	2.0.0
Database	⚠️ In-memory (MongoDB planned)	1.0.0
CI/CD	✅ GitHub Actions	1.0.0
Monitoring	🔄 In Progress	0.5.0
Documentation	✅ Complete	2.0.0
⭐ Support
If you find this project helpful, please give it a star on GitHub!

🔄 Changelog
See CHANGELOG.md for version history and updates.

🐛 Issues
Report bugs and feature requests here.

💡 Roadmap
Add blog functionality

Implement dark/light mode toggle

Add project case studies

Integrate with GitHub API

Add resume download analytics

Implement 3D portfolio elements

Add internationalization (i18n)

<div align="center"> <sub>Built with ❤️ by Rohit Desai</sub><br> <sub>Last updated: December 2025</sub> </div>
🔗 Quick Links
Live Demo

API Documentation

Contributing Guide

Issue Tracker

License

📞 Support & Contact
For support, email rdesai1855@gmail.com or open an issue on GitHub.