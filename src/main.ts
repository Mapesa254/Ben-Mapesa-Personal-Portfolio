import './styles/index.css'
import { createIcons, Sun, Moon, Menu, X, Zap, Github, Twitter, Linkedin, Globe, Mail, MapPin, MessageSquare, CheckCircle, Send, Plus, Gamepad2, Palette, BarChart3, ChevronRight, ArrowRight, ExternalLink, ChevronDown, Sparkles, Play, Eye, ArrowUpRight, Heart, ArrowUp, Award, Code2, Calendar, Download } from 'lucide'

import { initSkills } from './js/skills';
import { initProjects } from './js/projects';
import { initAbout } from './js/about';
import { initTools } from './js/tools';
import { initContact } from './js/contact';

// Initialize Lucide Icons globally — all icons used anywhere in the static HTML
createIcons({
  icons: {
    Sun, Moon, Menu, X, Zap, Github, Twitter, Linkedin, Globe, Mail, MapPin,
    MessageSquare, CheckCircle, Send, Plus, Gamepad2, Palette, BarChart3,
    ChevronRight, ArrowRight, ExternalLink, ChevronDown, Sparkles, Play, Eye,
    ArrowUpRight, Heart, ArrowUp, Award, Code2, Calendar, Download
  }
});

// Theme Logic
const themeToggle = document.getElementById('theme-toggle');
const html = document.documentElement;
let isDark = true; // default dark

function updateTheme() {
    if (isDark) {
        html.classList.add('dark');
    } else {
        html.classList.remove('dark');
    }
    
    // Update theme toggle icon
    const themeIconContainer = document.getElementById('theme-icon');
    if (themeIconContainer) {
        themeIconContainer.innerHTML = isDark ? '<i data-lucide="sun" class="w-4 h-4"></i>' : '<i data-lucide="moon" class="w-4 h-4"></i>';
        createIcons({
            icons: { Sun, Moon }
        });
    }
}

// Initialize modules
const inits = [
    { name: 'Skills', fn: initSkills },
    { name: 'Projects', fn: initProjects },
    { name: 'About', fn: initAbout },
    { name: 'Tools', fn: initTools },
    { name: 'Contact', fn: initContact }
];

inits.forEach(({name, fn}) => {
    try {
        fn();
    } catch (e: any) {
        console.error(`Error initializing ${name}:`, e);
        const errDiv = document.createElement('div');
        errDiv.style.color = 'red';
        errDiv.textContent = `Error in ${name}: ` + e.toString();
        document.body.prepend(errDiv);
    }
});

// Initial theme setup
updateTheme();

themeToggle?.addEventListener('click', () => {
    isDark = !isDark;
    updateTheme();
});

// Scroll functionality (Navbar)
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
        navbar?.classList.add('scrolled');
    } else {
        navbar?.classList.remove('scrolled');
    }
});

// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuBtn?.addEventListener('click', () => {
    mobileMenu?.classList.toggle('hidden');
    const isHidden = mobileMenu?.classList.contains('hidden');
    mobileMenuBtn.innerHTML = isHidden ? '<i data-lucide="menu" class="w-4 h-4"></i>' : '<i data-lucide="x" class="w-4 h-4"></i>';
    createIcons({
        icons: { Menu, X }
    });
});

// Intersection Observer for scroll animations (replaces framer-motion)
const observerOptions = {
    rootMargin: '0px',
    threshold: 0.15
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

(window as any).observeElements = () => {
    document.querySelectorAll('.reveal-on-scroll:not(.animate-in)').forEach(el => {
        observer.observe(el);
    });
};

(window as any).observeElements();

// Typing animation for Hero
const roles = ["Game Developer", "Graphic Designer", "Data Scientist"];
let roleIndex = 0;
const roleElement = document.getElementById('hero-role');

if (roleElement) {
    setInterval(() => {
        roleIndex = (roleIndex + 1) % roles.length;
        roleElement.textContent = roles[roleIndex];
    }, 2800);
}
