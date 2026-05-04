// WebGenix - Complete Service Offerings
// Last updated: 2026-05-01

const servicesData = {
    // Portfolio Projects (Only 3 Projects)
    portfolio: [
        {
            id: 1,
            title: "Web File Manager",
            category: "application",
            image: "📂",
            features: [
                "Browser-based file manager with drag-and-drop upload",
                "Create, rename, delete files and folders with ease",
                "File preview for images, PDFs, and text files",
                "Built with React and Node.js with secure authentication"
            ],
            liveUrl: "#",
            liveLabel: "View Demo"
        },
        {
            id: 2,
            title: "Web-Based SSH Portal",
            category: "application",
            image: "🖥️",
            features: [
                "Browser-based SSH terminal access to remote servers",
                "Secure authentication with multi-factor verification",
                "File management and command execution in real-time",
                "Built with Node.js, WebSocket, and SSH2 library"
            ],
            liveUrl: "#",
            liveLabel: "View Demo"
        },
        {
            id: 3,
            title: "MERN Stack SaaS Application",
            category: "application",
            image: "⚡",
            features: [
                "Full-stack SaaS platform built with MERN stack",
                "Multi-tenant architecture with subscription billing",
                "Dashboard analytics with real-time data visualization",
                "Responsive design with React, Node.js, and MongoDB"
            ],
            liveUrl: "#",
            liveLabel: "View Demo"
        }
    ],

    // Service Cards (8 Total)
    services: [
        {
            icon: "🚀",
            title: "Startup Website",
            description: "For local businesses & startups",
            features: ["3-5 Pages", "Mobile Responsive", "Inquiry Form", "Basic SEO", "SSL Setup", "1 Month Support"]
        },
        {
            icon: "📈",
            title: "Business Growth Website",
            description: "For SMEs & service brands",
            features: ["5-10 Custom Pages", "Blog Setup", "Lead Capture Funnel", "Advanced SEO", "Social Integrations", "3 Months Support"]
        },
        {
            icon: "🛒",
            title: "E-Commerce Store",
            description: "For online selling businesses",
            features: ["Product Catalog", "Payment Gateway", "Order Dashboard", "Coupon System", "Inventory Setup", "6 Months Support"]
        },
        {
            icon: "⚡",
            title: "Custom Web Application",
            description: "Premium agency-level solutions",
            features: ["Custom Admin Panel", "Role Based Access", "API Integrations", "Dashboard Analytics", "Backend Database", "Full Deployment"]
        },
        {
            icon: "🛡️",
            title: "Managed Hosting & Maintenance",
            description: "Recurring plan for peace of mind",
            features: ["SSD Hosting", "SSL Certificate", "Daily/Weekly Backups", "Uptime Monitoring", "Security Hardening", "Technical Support"]
        },
        {
            icon: "📊",
            title: "SEO & Growth Retainer",
            description: "Your growth partner for the long haul",
            features: ["Technical SEO", "Monthly Optimization", "Keyword Ranking", "Analytics Reports", "Speed Improvements", "Lead Conversion Fixes"]
        },
        {
            icon: "🏢",
            title: "Enterprise SaaS / Portal",
            description: "For high-ticket enterprise clients",
            features: ["CRM/ERP/Portal", "Subscription Logic", "Automation Workflow", "Multi User Roles", "Scalable Architecture", "Dedicated Team"]
        },
        {
            icon: "👥",
            title: "Dedicated Development Team",
            description: "Highly sought-after by IT firms",
            features: ["MERN Developer", "UI/UX Designer", "Backend Engineer", "Priority Delivery", "Agile Reporting", "Full Team Access"]
        }
    ],

    // Pricing Plans (8 Cards)
    pricing: [
        {
            name: "Startup Website",
            price: "5,999+",
            period: "/starting project",
            featured: false,
            badge: null,
            features: [
                "3-5 Pages",
                "Mobile Responsive",
                "Inquiry Form",
                "Basic SEO Setup",
                "SSL Setup",
                "1 Month Support"
            ]
        },
        {
            name: "Business Growth Website",
            price: "11,999+",
            period: "/starting project",
            featured: false,
            badge: "Popular for SMEs",
            features: [
                "5-10 Custom Pages",
                "Blog Setup",
                "Lead Capture Funnel",
                "Advanced SEO",
                "Social Integrations",
                "3 Months Support"
            ]
        },
        {
            name: "E-Commerce Store",
            price: "17,999+",
            period: "/starting project",
            featured: true,
            badge: "Best for Online Sales",
            features: [
                "Product Catalog",
                "Payment Gateway",
                "Order Dashboard",
                "Coupon System",
                "Inventory Setup",
                "6 Months Support"
            ]
        },
        {
            name: "Custom Web Application",
            price: "49,999+",
            period: "/starting project",
            featured: false,
            badge: "Agency Premium",
            features: [
                "Custom Admin Panel",
                "Role Based Access",
                "API Integrations",
                "Dashboard Analytics",
                "Backend Database",
                "Full Deployment"
            ]
        },
        {
            name: "Managed Hosting",
            price: "499+",
            period: "/month",
            featured: false,
            badge: "Recurring Plan",
            features: [
                "SSD Hosting",
                "SSL Certificate",
                "Daily/Weekly Backups",
                "Uptime Monitoring",
                "Security Hardening",
                "Technical Support"
            ]
        },
        {
            name: "SEO & Growth Retainer",
            price: "2,999+",
            period: "/month",
            featured: false,
            badge: "Growth Partner",
            features: [
                "Technical SEO",
                "Monthly Optimization",
                "Keyword Ranking",
                "Analytics Reports",
                "Speed Improvements",
                "Lead Conversion Fixes"
            ]
        },
        {
            name: "Enterprise SaaS / Portal",
            price: "99,999+",
            period: "/custom quote",
            featured: false,
            badge: "High-Ticket",
            features: [
                "CRM/ERP/Portal",
                "Subscription Logic",
                "Automation Workflow",
                "Multi User Roles",
                "Scalable Architecture",
                "Dedicated Team"
            ]
        },
        {
            name: "Dedicated Dev Team",
            price: "24,999+",
            period: "/month per developer",
            featured: false,
            badge: "IT Firm Favorite",
            features: [
                "MERN Developer",
                "UI/UX Designer",
                "Backend Engineer",
                "Priority Delivery",
                "Agile Reporting",
                "Full Team Access"
            ]
        }
    ],

    // FAQ
    faq: [
        {
            question: "Which service is right for my business?",
            answer: "If you're just starting out, go with Startup Website. For growing businesses with leads to capture, Business Growth is perfect. For selling products online, choose E-Commerce Store. Need something custom? Go with Custom Web Application."
        },
        {
            question: "What's included in the recurring plans?",
            answer: "Managed Hosting covers all technical aspects - hosting, backups, security, and monitoring. SEO & Growth Retainer is for ongoing SEO work, analytics, and conversion optimization. Both are monthly subscriptions."
        },
        {
            question: "Can I upgrade from one service to another?",
            answer: "Absolutely! Many clients start with a Startup Website and upgrade to Business Growth or E-Commerce as they scale. We'll credit your previous investment toward the upgrade."
        },
        {
            question: "How does the Dedicated Development Team work?",
            answer: "Perfect for IT firms needing extra hands. You get a full team (MERN developer, UI/UX designer, backend engineer) at ₹24,999+/month per developer. Agile reporting included. Scale up or down as needed."
        },
        {
            question: "What's Enterprise SaaS / Portal solution?",
            answer: "For high-ticket clients needing complex systems like CRM, ERP, or patient portals. Starts at ₹99,999+ with a dedicated team, scalable architecture, and automation workflows. Custom quote based on requirements."
        }
    ]
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = servicesData;
}
