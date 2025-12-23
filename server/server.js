const express = require('express');
const cors = require('cors');
const app = express();

// ==================== MIDDLEWARE ====================
app.use(cors({
    origin: ['http://localhost:3000', 'http://127.0.0.1:3000'],
    credentials: true
}));

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Request logger middleware
app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
    next();
});

// ==================== IN-MEMORY DATABASE ====================
const db = {
    messages: [],
    analytics: {
        pageViews: {},
        totalVisitors: 0
    }
};

// ==================== API ROUTES ====================

// 1. HEALTH CHECK ENDPOINT
app.get('/api/health', (req, res) => {
    const health = {
        status: 'operational',
        timestamp: new Date().toISOString(),
        uptime: process.uptime(),
        memory: process.memoryUsage(),
        database: {
            messages: db.messages.length,
            analytics: Object.keys(db.analytics.pageViews).length
        }
    };
    res.json(health);
});

// 2. PORTFOLIO DATA ENDPOINT
app.get('/api/portfolio', (req, res) => {
    const portfolio = {
        personal: {
            name: "Rohit Vitthal Desai",
            title: "DevOps Engineer | AWS Specialist | Full-Stack Developer",
            email: "rdesai1855@gmail.com",
            phone: "+91-7887706121",
            location: "Pune, Maharashtra, India",
            availability: "Open to Opportunities",
            resume: "https://drive.google.com/file/d/your-resume-id/view?usp=sharing",
            github: "https://github.com/rd1855",
            linkedin: "https://linkedin.com/in/rd1855"
        },
        summary: {
            professional: "Aspiring DevOps Engineer with hands-on experience in building scalable cloud infrastructure, implementing CI/CD pipelines, and automating deployment processes. Passionate about Infrastructure as Code (IaC) and cloud-native technologies.",
            mission: "To leverage cutting-edge technologies in DevOps and Cloud Computing to build scalable, efficient, and automated solutions that drive business success."
        },
        quickStats: {
            projects: 15,
            certifications: 4,
            experience: "6+ months",
            skills: 25,
            hackathons: 1
        },
        education: [
            {
                degree: "B.E. in Artificial Intelligence & Machine Learning",
                institution: "Savitribai Phule Pune University",
                duration: "2023 – 2026",
                status: "Pursuing",
                courses: ["Cloud Computing", "Data Structures", "Machine Learning", "DevOps Principles"]
            },
            {
                degree: "Diploma in Computer Engineering",
                institution: "Government Polytechnic, Pune",
                duration: "2020 – 2023",
                status: "Completed (88.67%)",
                achievements: ["First Class with Distinction", "Hospital Management System Project"]
            }
        ]
    };
    res.json({ success: true, data: portfolio });
});

// 3. SKILLS ENDPOINT WITH DETAILS
app.get('/api/skills', (req, res) => {
    const skills = {
        categories: [
            {
                name: "Cloud & DevOps",
                icon: "☁️",
                skills: [
                    { name: "AWS", level: 85, expertise: ["EC2", "S3", "RDS", "Lambda", "VPC"] },
                    { name: "Docker", level: 80, expertise: ["Containerization", "Docker Compose", "Docker Swarm"] },
                    { name: "Kubernetes", level: 75, expertise: ["Deployments", "Services", "Helm Charts"] },
                    { name: "Jenkins", level: 80, expertise: ["CI/CD Pipelines", "Pipeline as Code", "Blue Ocean"] },
                    { name: "Terraform", level: 70, expertise: ["Infrastructure as Code", "AWS Provisioning"] },
                    { name: "GitHub Actions", level: 75, expertise: ["Workflow Automation", "CI/CD"] }
                ]
            },
            {
                name: "Programming & Scripting",
                icon: "💻",
                skills: [
                    { name: "Python", level: 90, expertise: ["Automation", "Flask", "Scripting", "APIs"] },
                    { name: "JavaScript", level: 85, expertise: ["React", "Node.js", "ES6+", "REST APIs"] },
                    { name: "Bash Scripting", level: 80, expertise: ["Linux Automation", "System Administration"] },
                    { name: "C++", level: 75, expertise: ["OOP", "DSA", "Problem Solving"] }
                ]
            },
            {
                name: "Monitoring & Tools",
                icon: "📊",
                skills: [
                    { name: "Prometheus", level: 70, expertise: ["Metrics Collection", "Alerting"] },
                    { name: "Grafana", level: 65, expertise: ["Dashboard Creation", "Visualization"] },
                    { name: "ELK Stack", level: 60, expertise: ["Log Analysis", "Kibana Dashboards"] },
                    { name: "Git", level: 85, expertise: ["Version Control", "GitHub", "Git Workflows"] }
                ]
            }
        ],
        proficiencyScale: {
            beginner: "0-40%",
            intermediate: "41-70%",
            advanced: "71-90%",
            expert: "91-100%"
        }
    };
    res.json({ success: true, data: skills });
});

// 4. EXPERIENCE & PROJECTS ENDPOINT
app.get('/api/experience', (req, res) => {
    const experience = {
        internships: [
            {
                role: "DevOps Intern",
                company: "iStudio Technologies",
                duration: "Nov 2025 – Dec 2025",
                location: "Remote",
                description: "Implemented and optimized CI/CD pipelines for microservices architecture.",
                achievements: [
                    "Reduced build time by 40% through pipeline optimization",
                    "Implemented automated testing in CI pipeline",
                    "Managed Maven build configurations"
                ],
                technologies: ["Jenkins", "Docker", "Maven", "Git", "Linux"]
            },
            {
                role: "Python Developer Intern",
                company: "Mellable Software Solutions",
                duration: "Oct 2025 – Nov 2025",
                location: "Remote",
                description: "Developed Weather Forecasting and Prediction System.",
                achievements: [
                    "Built weather prediction model with 85% accuracy",
                    "Reduced API response time by optimizing data processing"
                ],
                technologies: ["Python", "Flask", "APIs", "Matplotlib"]
            }
        ],
        projects: [
            {
                title: "Automated Microservices CI/CD Pipeline",
                description: "End-to-end automation pipeline using Jenkins, Docker, and Kubernetes",
                duration: "3 months",
                status: "Completed",
                features: [
                    "Multi-stage Jenkins pipeline",
                    "Docker containerization",
                    "Kubernetes deployment",
                    "GitHub Actions integration",
                    "Security scanning"
                ],
                technologies: ["Jenkins", "Docker", "K8s", "GitHub Actions"],
                github: "https://github.com/rd1855/90DaysOfDevOps",
                impact: "Reduced deployment time from hours to minutes"
            },
            {
                title: "AWS Infrastructure Automation",
                description: "Infrastructure as Code implementation using Terraform",
                duration: "2 months",
                status: "Completed",
                features: [
                    "VPC with public/private subnets",
                    "Auto-scaling EC2 instances",
                    "RDS PostgreSQL database",
                    "S3 for static assets",
                    "Application Load Balancer"
                ],
                technologies: ["Terraform", "AWS", "EC2", "S3", "RDS"],
                github: "https://github.com/rd1855/aws-zero-to-hero",
                impact: "Infrastructure provisioning in 15 minutes"
            },
            {
                title: "Production Kubernetes Cluster",
                description: "Kubernetes cluster with monitoring and logging",
                duration: "2 months",
                status: "Completed",
                features: [
                    "High-availability K8s cluster",
                    "Prometheus monitoring",
                    "Grafana dashboards",
                    "ELK Stack logging",
                    "Auto-scaling"
                ],
                technologies: ["Kubernetes", "Prometheus", "Grafana", "ELK"],
                github: "https://github.com/rd1855/flask-app-ecs",
                impact: "99.9% uptime, 60% faster troubleshooting"
            }
        ]
    };
    res.json({ success: true, data: experience });
});

// 5. CERTIFICATIONS ENDPOINT
app.get('/api/certifications', (req, res) => {
    const certifications = [
        {
            name: "Front-End Development Hackathon Runner-Up",
            issuer: "SSPM College",
            date: "2025",
            description: "Awarded for innovative front-end solution in college hackathon",
            skills: ["HTML/CSS", "JavaScript", "UI/UX"]
        },
        {
            name: "Advanced Database & SQL",
            issuer: "Infosys Springboard",
            date: "2025",
            description: "Comprehensive database management and SQL optimization",
            skills: ["SQL", "Database Design", "Query Optimization"]
        },
        {
            name: "Full-Stack Web Development",
            issuer: "YHills (IIT Bombay Approved)",
            date: "2024",
            description: "MERN stack development with best practices",
            skills: ["React", "Node.js", "MongoDB", "Express"]
        },
        {
            name: "Advanced C++ Programming",
            issuer: "Programming Hub",
            date: "2024",
            description: "Object-oriented programming and data structures",
            skills: ["C++", "OOP", "Data Structures", "Algorithms"]
        }
    ];
    res.json({ success: true, data: certifications });
});

// 6. CONTACT FORM ENDPOINT (ENHANCED)
app.post('/api/contact', (req, res) => {
    const { name, email, subject, message } = req.body;
    
    // Validation
    if (!name || !email || !message) {
        return res.status(400).json({
            success: false,
            error: "Missing required fields",
            required: ["name", "email", "message"]
        });
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({
            success: false,
            error: "Invalid email format"
        });
    }
    
    // Create message object
    const newMessage = {
        id: Date.now(),
        name,
        email,
        subject: subject || "General Inquiry",
        message,
        timestamp: new Date().toISOString(),
        status: "new",
        ticketNumber: `TKT-${Date.now().toString().slice(-8)}`
    };
    
    // Store in database
    db.messages.push(newMessage);
    
    // Log for now (in production, send email)
    console.log("\n" + "=".repeat(50));
    console.log("📧 NEW CONTACT FORM SUBMISSION");
    console.log("=".repeat(50));
    console.log(`Ticket: ${newMessage.ticketNumber}`);
    console.log(`From: ${name} <${email}>`);
    console.log(`Subject: ${newMessage.subject}`);
    console.log(`Message: ${message.substring(0, 100)}...`);
    console.log(`Time: ${new Date().toLocaleString()}`);
    console.log("=".repeat(50) + "\n");
    
    res.status(201).json({
        success: true,
        message: "Thank you for your message! I'll get back to you within 24 hours.",
        data: {
            ticketNumber: newMessage.ticketNumber,
            submittedAt: newMessage.timestamp,
            nextSteps: [
                "You'll receive a confirmation email",
                "I typically respond within 24 hours",
                "For urgent matters, call +91-7887706121"
            ]
        }
    });
});

// 7. ANALYTICS ENDPOINT (Simple version)
app.post('/api/analytics/pageview', (req, res) => {
    const { page } = req.body;
    
    if (!page) {
        return res.status(400).json({ success: false, error: "Page name required" });
    }
    
    // Track page view
    db.analytics.pageViews[page] = (db.analytics.pageViews[page] || 0) + 1;
    db.analytics.totalVisitors++;
    
    res.json({ 
        success: true, 
        data: { 
            page, 
            views: db.analytics.pageViews[page],
            totalVisitors: db.analytics.totalVisitors
        } 
    });
});

// 8. RESUME DOWNLOAD ENDPOINT
app.get('/api/resume', (req, res) => {
    const resume = {
        downloadUrl: "https://drive.google.com/uc?export=download&id=your-resume-id",
        viewUrl: "https://drive.google.com/file/d/your-resume-id/view",
        lastUpdated: "December 2025",
        details: {
            format: "PDF",
            size: "1.2 MB",
            pages: 2,
            sections: ["Summary", "Skills", "Experience", "Projects", "Education", "Certifications"]
        },
        tips: [
            "Best viewed in Chrome/Firefox",
            "Click 'Download' to save copy",
            "Contact for references"
        ]
    };
    res.json({ success: true, data: resume });
});

// 9. GET ALL MESSAGES (For admin view)
app.get('/api/messages', (req, res) => {
    res.json({
        success: true,
        data: {
            total: db.messages.length,
            new: db.messages.filter(m => m.status === "new").length,
            messages: db.messages
        }
    });
});

// ==================== ERROR HANDLING ====================
app.use((req, res, next) => {
    res.status(404).json({
        success: false,
        error: "Endpoint not found",
        availableEndpoints: [
            "GET  /api/health",
            "GET  /api/portfolio",
            "GET  /api/skills",
            "GET  /api/experience",
            "GET  /api/certifications",
            "POST /api/contact",
            "GET  /api/resume",
            "POST /api/analytics/pageview"
        ]
    });
});

app.use((err, req, res, next) => {
    console.error('Server Error:', err);
    res.status(500).json({
        success: false,
        error: "Internal server error",
        requestId: Date.now().toString(36)
    });
});

// ==================== START SERVER ====================
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`
    ╔═══════════════════════════════════════════════════╗
    ║          🚀 PORTFOLIO BACKEND RUNNING           ║
    ║          Professional Edition v2.0              ║
    ╠═══════════════════════════════════════════════════╣
    ║                                                   ║
    ║  📍 Local: http://localhost:${PORT}              ║
    ║  🕒 Time: ${new Date().toLocaleTimeString()}      ║
    ║                                                   ║
    ║  📊 ENDPOINTS:                                   ║
    ║  • /api/health          - System status          ║
    ║  • /api/portfolio       - Complete profile       ║
    ║  • /api/skills          - Technical skills       ║
    ║  • /api/experience      - Work & projects        ║
    ║  • /api/certifications  - Certificates           ║
    ║  • /api/contact         - Contact form           ║
    ║  • /api/resume          - Resume info            ║
    ║                                                   ║
    ║  🔧 FEATURES:                                     ║
    ║  • Request Logging                               ║
    ║  • Input Validation                              ║
    ║  • Analytics Tracking                            ║
    ║  • Ticket System                                 ║
    ║  • Error Handling                                ║
    ║                                                   ║
    ╚═══════════════════════════════════════════════════╝
    `);
});