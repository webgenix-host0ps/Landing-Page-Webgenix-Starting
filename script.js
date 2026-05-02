// WebGenix - Complete 8 Services Landing Page

document.addEventListener('DOMContentLoaded', function() {
    initializePage();
});

function initializePage() {
    setupThemeToggle();
    renderPortfolio('all');
    renderServices();
    renderPricing();
    renderFAQ();
    setupScrollAnimations();
    setupPortfolioTabs();
    setupFAQToggle();
    setupMobileMenu();
    setupNumberCounters();
    setupQuoteForm();
    setupSmoothScroll();
    setupHeaderScroll();
}

// Theme Toggle
function setupThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    const html = document.documentElement;
    
    // Check for saved theme or default to dark
    const savedTheme = localStorage.getItem('webgenix-theme') || 'dark';
    html.setAttribute('data-theme', savedTheme);
    
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            const currentTheme = html.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            html.setAttribute('data-theme', newTheme);
            localStorage.setItem('webgenix-theme', newTheme);
        });
    }
}

// ===== RENDER FUNCTIONS =====

function renderPortfolio(filter) {
    const container = document.getElementById('portfolioGrid');
    if (!container) return;

    const filtered = filter === 'all' 
        ? servicesData.portfolio 
        : servicesData.portfolio.filter(p => p.category === filter);

    container.innerHTML = filtered.map(project => `
        <div class="portfolio-card animate-on-scroll">
            <div class="portfolio-image">${project.image}</div>
            <div class="portfolio-content">
                <span class="portfolio-category">${project.category === 'website' ? 'Website' : 'App'}</span>
                <h3 class="portfolio-title">${project.title}</h3>
                <ul class="portfolio-features">
                    ${project.features.map((f, i) => `
                        <li>
                            <span class="feature-number">0${i + 1}</span>
                            <span>${f}</span>
                        </li>
                    `).join('')}
                </ul>
                <a href="${project.liveUrl}" class="portfolio-link">
                    ${project.liveLabel} →
                </a>
            </div>
        </div>
    `).join('');

    reobserveElements();
}

function renderServices() {
    const container = document.getElementById('servicesGrid');
    if (!container) return;

    container.innerHTML = servicesData.services.map(service => `
        <div class="service-card animate-on-scroll">
            <div class="service-icon">${service.icon}</div>
            <h3 class="service-title">${service.title}</h3>
            <p class="service-desc">${service.description}</p>
            <ul class="service-features">
                ${service.features.map(f => `<li>${f}</li>`).join('')}
            </ul>
        </div>
    `).join('');

    reobserveElements();
}

function renderPricing() {
    const container = document.getElementById('pricingPlans');
    if (!container) return;

    const servicePages = [
        'services/startup-website.html',
        'services/business-growth.html',
        'services/ecommerce-store.html',
        'services/custom-web-app.html',
        'services/managed-hosting.html',
        'services/seo-growth.html',
        'services/enterprise-saas.html',
        'services/dedicated-team.html'
    ];

    container.innerHTML = servicesData.pricing.map((plan, index) => `
        <div class="pricing-card ${plan.featured ? 'featured' : ''} animate-on-scroll">
            ${plan.badge ? `<div class="pricing-badge">${plan.badge}</div>` : ''}
            <h3 class="pricing-name">${plan.name}</h3>
            <div class="pricing-price">
                <span class="pricing-amount">₹${plan.price}${plan.priceMax ? ' - ₹' + plan.priceMax : ''}</span>
            </div>
            <div class="pricing-period">/${plan.period}</div>
            <ul class="pricing-features">
                ${plan.features.map(f => `<li>${f}</li>`).join('')}
            </ul>
            <a href="${servicePages[index]}" class="btn ${plan.featured ? 'btn-primary' : 'btn-secondary'}" style="width:100%; display:inline-flex; text-align:center; justify-content:center;">
                View Details
            </a>
        </div>
    `).join('');

    reobserveElements();
}

function renderFAQ() {
    const container = document.getElementById('faqList');
    if (!container) return;

    container.innerHTML = servicesData.faq.map((item, index) => `
        <div class="faq-item ${index === 0 ? 'active' : ''}" data-index="${index}">
            <div class="faq-question">
                <span>${item.question}</span>
                <span class="faq-toggle">+</span>
            </div>
            <div class="faq-answer">
                <p>${item.answer}</p>
            </div>
        </div>
    `).join('');
}

// ===== INTERACTIVE FEATURES =====

let observer;

function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });
}

function reobserveElements() {
    setTimeout(() => {
        document.querySelectorAll('.animate-on-scroll:not(.visible)').forEach(el => {
            if (observer) observer.observe(el);
        });
    }, 100);
}

// Number Counter Animation
function setupNumberCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.dataset.target);
                animateCounter(entry.target, target);
                counterObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => counterObserver.observe(counter));
}

function animateCounter(element, target) {
    let current = 0;
    const increment = Math.ceil(target / 60);
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// Portfolio Tabs
function setupPortfolioTabs() {
    const tabs = document.querySelectorAll('.tab-btn');
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            tabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            renderPortfolio(this.dataset.filter);
        });
    });
}

// FAQ Toggle
function setupFAQToggle() {
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', function() {
            const isActive = item.classList.contains('active');
            faqItems.forEach(f => f.classList.remove('active'));
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
}

// Mobile Menu
function setupMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const nav = document.getElementById('nav');

    if (mobileMenuBtn && nav) {
        mobileMenuBtn.addEventListener('click', function() {
            nav.classList.toggle('active');
        });

        nav.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('active');
            });
        });
    }
}

// Quote Form
function setupQuoteForm() {
    const form = document.getElementById('quoteForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const btn = form.querySelector('button[type="submit"]');
            const originalText = btn.innerHTML;
            btn.innerHTML = 'Sent! ✓';
            btn.style.background = 'linear-gradient(135deg, #22c55e, #16a34a)';
            
            setTimeout(() => {
                btn.innerHTML = originalText;
                btn.style.background = '';
                form.reset();
            }, 3000);
        });
    }
}

// Smooth Scroll
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Header Scroll Effect
function setupHeaderScroll() {
    const header = document.getElementById('header');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// Add ripple effect
document.addEventListener('click', function(e) {
    const btn = e.target.closest('.btn, .tab-btn');
    if (!btn) return;

    const ripple = document.createElement('span');
    const rect = btn.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    ripple.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        left: ${x}px;
        top: ${y}px;
        background: rgba(255, 255, 255, 0.3);
        border-radius: 50%;
        transform: scale(0);
        animation: ripple 0.6s ease-out;
        pointer-events: none;
    `;

    btn.style.position = 'relative';
    btn.style.overflow = 'hidden';
    btn.appendChild(ripple);

    setTimeout(() => ripple.remove(), 600);
});

// Add ripple animation
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
