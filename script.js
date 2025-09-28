// Enhanced Sentinelle Bot Scripts - Version corrigée et optimisée
document.addEventListener('DOMContentLoaded', function() {
    console.log('Sentinelle Bot Discord - Enhanced Version Loading...');
    
    // Initialize all enhanced features
    initNavigation();
    initScrollEffects();
    initDiscordEffects();
    initParticleSystem();
    initAdvancedAnimations();
    
    console.log('Sentinelle Bot Discord - Enhanced Version Loaded!');
});

// Enhanced Navigation with smooth transitions - Version corrigée
function initNavigation() {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    let lastScrollY = 0;
    let ticking = false;
    
    // Advanced navbar scroll effects - Version optimisée
    function updateNavbar() {
        const currentScroll = window.pageYOffset;
        
        // Parallax effect for navbar sans conflit CSS
        if (currentScroll > 100) {
            navbar.style.setProperty('background', 'rgba(54, 57, 63, 0.98)', 'important');
            navbar.style.setProperty('box-shadow', '0 8px 32px rgba(88, 101, 242, 0.3)', 'important');
            navbar.style.setProperty('backdrop-filter', 'blur(20px)', 'important');
            navbar.style.setProperty('border-bottom', '1px solid rgba(88, 101, 242, 0.3)', 'important');
        } else {
            navbar.style.setProperty('background', 'rgba(54, 57, 63, 0.9)', 'important');
            navbar.style.setProperty('box-shadow', '0 8px 32px rgba(88, 101, 242, 0.15)', 'important');
            navbar.style.setProperty('border-bottom', '1px solid rgba(88, 101, 242, 0.2)', 'important');
        }
        
        // Hide/show navbar on scroll
        if (currentScroll > lastScrollY && currentScroll > 100) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }
        
        lastScrollY = currentScroll;
        ticking = false;
    }
    
    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(updateNavbar);
            ticking = true;
        }
    });
    
    // Enhanced active link highlighting
    function updateActiveLinks() {
        const sections = document.querySelectorAll('.section, .hero');
        const scrollPos = window.scrollY + 200;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', throttle(updateActiveLinks, 100));
    
    // Mobile menu with enhanced animations
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }
    
    // Smooth scroll with easing
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                
                // Enhanced smooth scroll
                smoothScrollTo(offsetTop, 1000);
                
                // Close mobile menu
                if (navMenu.classList.contains('active')) {
                    hamburger.classList.remove('active');
                    navMenu.classList.remove('active');
                }
            }
        });
    });
}

// Smooth scroll function with custom easing
function smoothScrollTo(target, duration) {
    const start = window.pageYOffset;
    const distance = target - start;
    let startTime = null;
    
    function ease(t, b, c, d) {
        t /= d/2;
        if (t < 1) return c/2*t*t + b;
        t--;
        return -c/2 * (t*(t-2) - 1) + b;
    }
    
    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, start, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }
    
    requestAnimationFrame(animation);
}

// Enhanced scroll effects with Intersection Observer
function initScrollEffects() {
    const observerOptions = {
        threshold: [0.1, 0.3, 0.5],
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0) scale(1)';
                
                if (entry.target.querySelector('.fa-unicorn')) {
                    addUnicornMagic(entry.target.querySelector('.fa-unicorn'));
                }
            }
        });
    }, observerOptions);
    
    // Observe all animated elements
    const animatedElements = document.querySelectorAll(
        '.content-item, .analysis-card, .sincerity-item, .conclusion-card, .section-header'
    );
    
    animatedElements.forEach(el => {
        observer.observe(el);
    });
    
    // Enhanced progress indicator
    addEnhancedProgressBar();
    
    // Parallax scrolling for hero elements
    initParallaxEffects();
}

// Enhanced progress bar
function addEnhancedProgressBar() {
    const progressContainer = document.createElement('div');
    progressContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 4px;
        background: rgba(54, 57, 63, 0.3);
        z-index: 1001;
        backdrop-filter: blur(10px);
    `;
    
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        width: 0%;
        height: 100%;
        background: linear-gradient(90deg, #5865f2, #7289da, #43b581);
        background-size: 300% 100%;
        transition: width 0.1s ease-out;
        position: relative;
        overflow: hidden;
    `;
    
    progressContainer.appendChild(progressBar);
    document.body.appendChild(progressContainer);
    
    let ticking = false;
    
    function updateProgress() {
        const scrollTop = window.pageYOffset;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = Math.min((scrollTop / docHeight) * 100, 100);
        
        progressBar.style.width = scrollPercent + '%';
        
        // Dynamic color based on progress
        if (scrollPercent > 80) {
            progressBar.style.background = 'linear-gradient(90deg, #43b581, #57f287)';
        } else if (scrollPercent > 50) {
            progressBar.style.background = 'linear-gradient(90deg, #7289da, #43b581)';
        }
        
        ticking = false;
    }
    
    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(updateProgress);
            ticking = true;
        }
    });
}

// Parallax effects for hero section
function initParallaxEffects() {
    const heroElements = {
        title: document.querySelector('.hero-title'),
        subtitle: document.querySelector('.hero-subtitle'),
        description: document.querySelector('.hero-description'),
        image: document.querySelector('.image-placeholder')
    };
    
    let ticking = false;
    
    function updateParallax() {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        const rate2 = scrolled * -0.3;
        const rate3 = scrolled * 0.2;
        
        if (heroElements.title) {
            heroElements.title.style.transform = `translateY(${rate}px)`;
        }
        
        if (heroElements.subtitle) {
            heroElements.subtitle.style.transform = `translateY(${rate2}px)`;
        }
        
        if (heroElements.image) {
            heroElements.image.style.transform = `translateY(${rate3}px) rotateY(${scrolled * 0.05}deg)`;
        }
        
        ticking = false;
    }
    
    window.addEventListener('scroll', () => {
        if (!ticking && window.pageYOffset < window.innerHeight) {
            requestAnimationFrame(updateParallax);
            ticking = true;
        }
    });
}

// Enhanced Discord effects
function initDiscordEffects() {
    addAdvancedTypingEffect();
    initEnhancedUnicornGuardian();
    addDiscordNotifications();
}

// Advanced typing effect
function addAdvancedTypingEffect() {
    const heroTitle = document.querySelector('.hero-title');
    if (!heroTitle) return;
    
    const originalText = heroTitle.textContent;
    const texts = [
        'Sentinelle',
        'Votre Gardien Discord',
        'Protection Intelligente',
        originalText
    ];
    
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    function typeEffect() {
        const currentText = texts[textIndex];
        
        if (!isDeleting && charIndex <= currentText.length) {
            heroTitle.textContent = currentText.slice(0, charIndex);
            charIndex++;
            setTimeout(typeEffect, 150);
        } else if (isDeleting && charIndex >= 0) {
            heroTitle.textContent = currentText.slice(0, charIndex);
            charIndex--;
            setTimeout(typeEffect, 100);
        } else if (!isDeleting && charIndex > currentText.length) {
            if (textIndex < texts.length - 1) {
                isDeleting = true;
                setTimeout(typeEffect, 2000);
            }
        } else if (isDeleting && charIndex < 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            setTimeout(typeEffect, 500);
        }
    }
    
    // Start typing effect after delay
    setTimeout(() => {
        if (textIndex === 0) typeEffect();
    }, 2000);
}

// Enhanced unicorn guardian
function initEnhancedUnicornGuardian() {
    const unicornIcon = document.querySelector('.fa-unicorn');
    if (!unicornIcon) return;
    
    setTimeout(() => {
        addUnicornMagic(unicornIcon);
        createAdvancedParticleSystem(unicornIcon);
    }, 3000);
}

// Advanced particle system
function createAdvancedParticleSystem(element) {
    const container = element.closest('.image-placeholder');
    if (!container) return;
    
    const particleContainer = document.createElement('div');
    particleContainer.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        overflow: hidden;
        border-radius: 25px;
        z-index: 1;
    `;
    
    container.appendChild(particleContainer);
    
    function createParticle() {
        const particle = document.createElement('div');
        const size = Math.random() * 4 + 2;
        const color = Math.random() > 0.5 ? '#5865f2' : '#7289da';
        
        particle.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            background: radial-gradient(circle, ${color}, transparent);
            border-radius: 50%;
            pointer-events: none;
            z-index: 10;
        `;
        
        // Random starting position
        const angle = Math.random() * Math.PI * 2;
        const distance = 50 + Math.random() * 100;
        const startX = 50 + Math.cos(angle) * (distance / container.offsetWidth * 100);
        const startY = 50 + Math.sin(angle) * (distance / container.offsetHeight * 100);
        
        particle.style.left = startX + '%';
        particle.style.top = startY + '%';
        
        particleContainer.appendChild(particle);
        
        // Animate particle
        particle.animate([
            { transform: 'scale(0) rotate(0deg)', opacity: 0 },
            { transform: 'scale(1) rotate(180deg)', opacity: 1, offset: 0.1 },
            { transform: 'scale(1.2) rotate(360deg)', opacity: 0.8, offset: 0.9 },
            { transform: 'scale(0) rotate(540deg)', opacity: 0 }
        ], {
            duration: 3000,
            easing: 'cubic-bezier(0.4, 0, 0.2, 1)'
        }).onfinish = () => particle.remove();
    }
    
    // Generate particles continuously
    setInterval(createParticle, 800);
}

// Initialize particle system for hero background
function initParticleSystem() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    const particleContainer = document.createElement('div');
    particleContainer.className = 'floating-particles';
    hero.appendChild(particleContainer);
    
    function createFloatingParticle() {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        const size = Math.random() * 6 + 2;
        const opacity = Math.random() * 0.5 + 0.3;
        const duration = Math.random() * 10 + 15;
        
        particle.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            background: ${Math.random() > 0.5 ? '#5865f2' : '#7289da'};
            border-radius: 50%;
            opacity: ${opacity};
            left: ${Math.random() * 100}%;
        `;
        
        particleContainer.appendChild(particle);
        
        // Animate particle with CSS
        particle.style.animation = `particleFloat ${duration}s linear infinite`;
        
        setTimeout(() => {
            if (particle.parentNode) {
                particle.remove();
            }
        }, duration * 1000);
    }
    
    // Generate particles continuously
    const particleInterval = setInterval(createFloatingParticle, 300);
    
    // Initial burst
    for (let i = 0; i < 20; i++) {
        setTimeout(createFloatingParticle, i * 100);
    }
    
    // Clean up on page unload
    window.addEventListener('beforeunload', () => {
        clearInterval(particleInterval);
    });
}

// Advanced animations initialization
function initAdvancedAnimations() {
    // Performance optimization for hover effects
    const cards = document.querySelectorAll('.content-item, .analysis-card, .sincerity-item');
    
    cards.forEach((card) => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-15px) scale(1.02)';
            card.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Add unicorn magic effects
function addUnicornMagic(unicornElement) {
    if (!unicornElement) return;
    
    unicornElement.style.filter = `
        drop-shadow(0 0 30px rgba(88, 101, 242, 0.8))
        drop-shadow(0 0 60px rgba(114, 137, 218, 0.6))
    `;
    
    // Add pulsing animation
    const originalAnimation = unicornElement.style.animation;
    unicornElement.style.animation = originalAnimation + ', unicornMagic 4s ease-in-out infinite';
    
    // Add magic style if not exists
    if (!document.querySelector('#unicorn-magic-style')) {
        const magicStyle = document.createElement('style');
        magicStyle.id = 'unicorn-magic-style';
        magicStyle.textContent = `
            @keyframes unicornMagic {
                0%, 100% { 
                    filter: drop-shadow(0 0 30px rgba(88, 101, 242, 0.8)) drop-shadow(0 0 60px rgba(114, 137, 218, 0.6));
                    transform: scale(1) rotate(0deg);
                }
                25% { 
                    filter: drop-shadow(0 0 40px rgba(88, 101, 242, 1)) drop-shadow(0 0 80px rgba(114, 137, 218, 0.8));
                    transform: scale(1.05) rotate(2deg);
                }
                50% { 
                    filter: drop-shadow(0 0 50px rgba(88, 101, 242, 1.2)) drop-shadow(0 0 100px rgba(114, 137, 218, 1));
                    transform: scale(1.02) rotate(0deg);
                }
                75% { 
                    filter: drop-shadow(0 0 40px rgba(88, 101, 242, 1)) drop-shadow(0 0 80px rgba(114, 137, 218, 0.8));
                    transform: scale(1.05) rotate(-2deg);
                }
            }
        `;
        document.head.appendChild(magicStyle);
    }
}

// Discord notifications
function addDiscordNotifications() {
    const notifications = [
        { icon: 'fas fa-shield-alt', text: 'Sentinelle est en ligne', delay: 3000 },
        { icon: 'fas fa-eye', text: 'Surveillance activée', delay: 8000 },
        { icon: 'fas fa-check-circle', text: 'Système opérationnel', delay: 15000 }
    ];
    
    notifications.forEach(notification => {
        setTimeout(() => {
            showNotification(notification.icon, notification.text);
        }, notification.delay);
    });
}

function showNotification(iconClass, text) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 120px;
        right: 30px;
        background: linear-gradient(135deg, #5865f2, #7289da);
        color: white;
        padding: 1.2rem 1.5rem;
        border-radius: 12px;
        box-shadow: 0 12px 35px rgba(88, 101, 242, 0.4);
        z-index: 1002;
        opacity: 0;
        transform: translateX(100%) scale(0.8);
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.1);
        max-width: 300px;
    `;
    
    notification.innerHTML = `
        <div style="display: flex; align-items: center; gap: 0.8rem;">
            <i class="${iconClass}" style="font-size: 1.2rem;"></i>
            <span style="font-weight: 500;">${text}</span>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    requestAnimationFrame(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateX(0) scale(1)';
    });
    
    // Auto remove
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(100%) scale(0.8)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 400);
    }, 4000);
}

// CTA Button functionality
document.addEventListener('DOMContentLoaded', function() {
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', function() {
            const presentationSection = document.querySelector('#presentation');
            if (presentationSection) {
                presentationSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }
});

// Utility functions
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

function debounce(func, wait, immediate) {
    let timeout;
    return function() {
        const context = this;
        const args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// Easter egg: Konami code
let konamiCode = [];
const konami = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.keyCode);
    if (konamiCode.length > konami.length) {
        konamiCode.shift();
    }
    
    if (konamiCode.join(',') === konami.join(',')) {
        triggerEasterEgg();
        konamiCode = [];
    }
});

function triggerEasterEgg() {
    const unicorn = document.querySelector('.fa-unicorn');
    if (unicorn) {
        unicorn.style.animation = 'rainbowUnicorn 2s ease-in-out';
        
        const rainbowStyle = document.createElement('style');
        rainbowStyle.textContent = `
            @keyframes rainbowUnicorn {
                0% { filter: hue-rotate(0deg) saturate(1) brightness(1); }
                25% { filter: hue-rotate(90deg) saturate(2) brightness(1.5); }
                50% { filter: hue-rotate(180deg) saturate(2) brightness(1.5); }
                75% { filter: hue-rotate(270deg) saturate(2) brightness(1.5); }
                100% { filter: hue-rotate(360deg) saturate(1) brightness(1); }
            }
        `;
        document.head.appendChild(rainbowStyle);
        
        showNotification('fas fa-star', 'Code secret activé !');
    }
}

console.log('Sentinelle Bot Discord - Gardien magique de votre communauté activé !');
console.log('Astuce: Essayez le code Konami pour un effet spécial !');