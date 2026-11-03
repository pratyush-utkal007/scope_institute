export const COURSES = [
  {
    id: "python-programming",
    title: "Python Programming",
    tagline: "Core Programming, Data Structures & Automation",
    shortDescription: "Master Python from absolute basics to object-oriented programming, data handling, and building real-world automation scripts.",
    fullDescription: "Our comprehensive Python Programming course is engineered for beginners and aspiring developers. You will master core syntax, data structures, functional programming, OOP principles, file handling, and write clean, modular scripts for real-world scenarios in dedicated lab sessions.",
    duration: "8 Weeks",
    hours: "48+ Hours of Lab Practice",
    level: "Beginner to Intermediate",
    mode: "Classroom / Interactive Lab",
    badge: "Most Popular",
    category: "Programming & Logic",
    color: "from-blue-600 to-indigo-700",
    iconName: "Code2",
    image: "/images/course-python.jpg",
    nextBatch: "Starts This Monday & Saturday",
    seatsRemaining: "5 Seats Available",
    prerequisites: "No prior programming experience required. Basic computer familiarity.",
    targetRoles: ["Python Developer", "Software Trainee", "Automation Script Engineer", "Backend Associate"],
    projects: [
      { name: "Student Record Management CLI", desc: "Build a comprehensive console application with search, update, CSV storage, and error handling." },
      { name: "Automated Web Data Scraper", desc: "Extract structured tables from live websites and store clean JSON/CSV files." },
      { name: "Live Weather API CLI Tool", desc: "Consume REST APIs with HTTP requests, parse JSON responses, and display formatted weather analytics." },
      { name: "Object-Oriented Banking Simulation", desc: "Full OOP architecture implementing inheritance, encapsulation, transaction logs, and authentication." }
    ],
    skills: ["Python 3.x", "Data Structures", "OOP Concepts", "File I/O", "Modules & Packages", "Problem Solving", "Debugging", "REST APIs", "Git Basics"],
    whatYouWillLearn: [
      "Core Python syntax, data types, variables, and operators",
      "Control flow structures: conditionals and comprehensive looping",
      "Functions, scope, lambda expressions, and modular code design",
      "Object-Oriented Programming: classes, inheritance, and encapsulation",
      "Working with files, exception handling, and standard libraries",
      "Mini-projects: CLI applications, automation scripts, and data parsers"
    ],
    curriculum: [
      { week: "Weeks 1-2", title: "Introduction & Python Syntax", details: "Environment setup, variables, operators, conditional statements, and loops.", deliverables: "CLI Calculator & Number Guessing Game" },
      { week: "Weeks 3-4", title: "Data Structures & Functions", details: "Lists, tuples, dictionaries, sets, string manipulation, and reusable functions.", deliverables: "Contact Book with Dictionary Storage" },
      { week: "Weeks 5-6", title: "Object-Oriented Programming", details: "Class construction, constructors (__init__), inheritance, polymorphism, and modular packages.", deliverables: "OOP Banking Simulation System" },
      { week: "Weeks 7-8", title: "File Operations & Capstone Project", details: "JSON/CSV handling, exception handling, testing, and building a complete CLI management system.", deliverables: "Full Capstone Project on GitHub" }
    ]
  },
  {
    id: "html-css",
    title: "HTML & CSS",
    tagline: "Modern Responsive Web Design, Flexbox & Grid",
    shortDescription: "Build modern, accessible, and responsive website layouts from scratch using HTML5, modern CSS3, Flexbox, and Grid systems.",
    fullDescription: "The bedrock of all web engineering. This program trains students in semantic HTML5 markup, responsive mobile-first architecture, modern CSS Flexbox, Grid systems, keyframe animations, and typography to build pixel-perfect user interfaces matching Figma designs.",
    duration: "6 Weeks",
    hours: "36+ Hours of Lab Practice",
    level: "Beginner",
    mode: "Classroom / Hands-on Lab",
    badge: "Foundation",
    category: "Web Development",
    color: "from-amber-500 to-orange-600",
    iconName: "Layout",
    image: "/images/course-html-css.jpg",
    nextBatch: "Starts This Monday & Saturday",
    seatsRemaining: "6 Seats Available",
    prerequisites: "Zero coding experience needed. Open to all students & career switchers.",
    targetRoles: ["Junior Web Designer", "UI Frontend Trainee", "HTML/CSS Developer", "Landing Page Specialist"],
    projects: [
      { name: "Responsive Developer Portfolio", desc: "Mobile-first personal portfolio showcasing projects, contact forms, and custom CSS animations." },
      { name: "Modern SaaS Landing Page Clone", desc: "Pixel-perfect implementation of a modern tech product landing page using Flexbox and Grid." },
      { name: "E-Commerce Product Showcase Gallery", desc: "Interactive CSS card grids with hover effects, badges, and responsive media queries." },
      { name: "Multi-Step Form Interface", desc: "Clean accessible form layout with custom styled inputs, checkboxes, and validation states." }
    ],
    skills: ["HTML5 Semantics", "CSS3 Styling", "Flexbox", "CSS Grid", "Responsive Design", "Media Queries", "UI Layouts", "Web Accessibility", "Figma to Code"],
    whatYouWillLearn: [
      "Semantic HTML5 tags for clean document hierarchy and SEO",
      "CSS core properties, box model, sizing, and positioning fundamentals",
      "Modern CSS Flexbox for dynamic one-dimensional layouts",
      "CSS Grid system for complex two-dimensional web layouts",
      "Media queries and responsive mobile-first development techniques",
      "Modern animations, transitions, forms, and cross-browser testing"
    ],
    curriculum: [
      { week: "Weeks 1-2", title: "HTML5 Foundations & Semantic Structure", details: "Tags, tables, forms, audio/video, semantic tags, and document accessibility.", deliverables: "Semantic Documentation Webpage" },
      { week: "Weeks 3-4", title: "CSS3 Styling & Box Model", details: "Colors, typography, margins, paddings, borders, shadows, and positioning models.", deliverables: "Styled Pricing Table Component" },
      { week: "Weeks 5-6", title: "Flexbox, Grid & Responsive Portfolio", details: "Responsive breakpoints, Flexbox layouts, CSS Grid galleries, and responsive landing page project.", deliverables: "Full Responsive Portfolio Website" }
    ]
  },
  {
    id: "javascript",
    title: "JavaScript",
    tagline: "Modern ES6+, DOM Manipulation & Asynchronous APIs",
    shortDescription: "Transform static pages into interactive web apps with modern JavaScript (ES6+), DOM manipulation, and asynchronous programming.",
    fullDescription: "JavaScript powers the modern interactive web. In this in-depth course, students master JavaScript from core language fundamentals to advanced ES6+ specifications. Learn DOM events, asynchronous operations with Promises and async/await, API integration, and clean algorithmic problem-solving.",
    duration: "8 Weeks",
    hours: "52+ Hours of Lab Practice",
    level: "Beginner to Intermediate",
    mode: "Classroom / Interactive Lab",
    badge: "Core Web Tech",
    category: "Web Development",
    color: "from-yellow-500 to-amber-600",
    iconName: "FileCode2",
    image: "/images/course-javascript.jpg",
    nextBatch: "Starts This Monday & Saturday",
    seatsRemaining: "4 Seats Available",
    prerequisites: "Basic knowledge of HTML & CSS recommended.",
    targetRoles: ["JavaScript Developer", "Frontend Associate", "Web Application Developer", "Junior Software Engineer"],
    projects: [
      { name: "Interactive Task & Kanban Board", desc: "Drag-and-drop task management application with localStorage persistence and status filters." },
      { name: "Live Weather & Forecast Web App", desc: "Fetch asynchronous weather data via OpenWeatherMap API with dynamic background changes." },
      { name: "E-Commerce Cart & Checkout Engine", desc: "Product catalog with filtering, real-time quantity calculations, discount codes, and validation." },
      { name: "Interactive Quiz Application", desc: "Dynamic countdown timer, score calculation, review summary, and animated transitions." }
    ],
    skills: ["Modern ES6+", "DOM Manipulation", "Event Handling", "Asynchronous JS", "Fetch API & AJAX", "JSON Handling", "Local Storage", "Debugging", "Array Methods"],
    whatYouWillLearn: [
      "Core language fundamentals: variables (let/const), scopes, and data types",
      "ES6+ features: destructuring, rest/spread operators, template literals, and arrow functions",
      "Document Object Model (DOM) traversal, manipulation, and event listeners",
      "Asynchronous JavaScript: callbacks, Promises, and async/await syntax",
      "Consuming REST APIs with Fetch API and handling real JSON responses",
      "Building interactive web applications like Todo Apps, Weather Widgets, and Form Validators"
    ],
    curriculum: [
      { week: "Weeks 1-2", title: "JavaScript Fundamentals & ES6+ Syntax", details: "Variables, data types, operators, conditionals, loops, functions, and arrow functions.", deliverables: "Interactive Tip & Expense Calculator" },
      { week: "Weeks 3-4", title: "DOM Manipulation & Events", details: "Selecting elements, updating CSS styles, creating dynamic elements, and event listeners.", deliverables: "Dynamic Todo List with LocalStorage" },
      { week: "Weeks 5-6", title: "Arrays, Objects & Storage", details: "Array methods (map, filter, reduce), object patterns, JSON, and LocalStorage usage.", deliverables: "Movie Search & Favorites App" },
      { week: "Weeks 7-8", title: "Async JavaScript & Live Project", details: "Promises, async/await, Fetch API with external endpoints, and building an interactive dashboard.", deliverables: "Full Live API Dashboard Project" }
    ]
  },
  {
    id: "react-js",
    title: "React.js",
    tagline: "Component Architecture, Modern Hooks & SPA Routing",
    shortDescription: "Build cutting-edge single-page web applications with modern React components, hooks, state management, and client-side routing.",
    fullDescription: "React is the global industry standard for frontend engineering. This program takes you from foundational React ideas to architecting scalable Single-Page Applications. Master JSX, component modularity, state hooks (useState, useEffect, useContext), dynamic routing, and practical REST API integrations.",
    duration: "10 Weeks",
    hours: "60+ Hours of Lab Practice",
    level: "Intermediate",
    mode: "Classroom / Practical Lab",
    badge: "High Demand",
    category: "Web Development",
    color: "from-cyan-500 to-blue-600",
    iconName: "Atom",
    image: "/images/course-react.svg",
    nextBatch: "Starts This Monday & Saturday",
    seatsRemaining: "3 Seats Available",
    prerequisites: "Good understanding of JavaScript (ES6+), HTML, and CSS.",
    targetRoles: ["React.js Developer", "Frontend Engineer", "UI Software Engineer", "Full-Stack Web Trainee"],
    projects: [
      { name: "E-Commerce Single Page Application", desc: "Full shopping experience with category filtering, cart context, checkout modal, and responsive design." },
      { name: "Real-Time Movie & Series Explorer", desc: "Search and discover movies via TMDB API with trailer embeds, debounced search, and bookmarking." },
      { name: "SaaS Analytics & Performance Dashboard", desc: "Metric cards, responsive chart widgets, dark/light theme toggle, and client-side routing." },
      { name: "Interactive Course Enquiry Portal", desc: "Production-ready admissions application with form validation, custom hooks, and toast alerts." }
    ],
    skills: ["React 19", "JSX Syntax", "React Hooks", "Component Architecture", "State Management", "React Router", "API Integration", "Tailwind CSS", "Vite", "Custom Hooks"],
    whatYouWillLearn: [
      "React architecture, Virtual DOM, and building reusable components with JSX",
      "Props, state management, and component lifecycle with modern Hooks",
      "Mastering useState, useEffect, useRef, useMemo, and custom hooks",
      "Client-side navigation and dynamic routing with React Router DOM",
      "Asynchronous data fetching, loading indicators, and error boundary handling",
      "Building complete Single Page Applications with responsive UI frameworks"
    ],
    curriculum: [
      { week: "Weeks 1-2", title: "React Fundamentals & JSX", details: "Vite setup, JSX rules, reusable functional components, and props passing.", deliverables: "Interactive User Profile Directory" },
      { week: "Weeks 3-4", title: "State & Hooks", details: "useState, user events, conditional rendering, list rendering with keys, and useEffect.", deliverables: "Weather Forecast Single Page App" },
      { week: "Weeks 5-6", title: "Advanced Hooks & Forms", details: "useRef, useMemo, custom hooks, controlled inputs, and form validation techniques.", deliverables: "Form Validation & Authentication UI" },
      { week: "Weeks 7-8", title: "React Router & Context API", details: "Client-side routing, route params, nested routes, and global state management with Context.", deliverables: "Multi-Page Blog & Store Experience" },
      { week: "Weeks 9-10", title: "Full Capstone Project & Deployment", details: "Production builds, responsive UI polish, API integration, and deployment to cloud platforms.", deliverables: "Deployed Full Capstone App on Vercel" }
    ]
  }
];

export const INSTITUTE_INFO = {
  name: "SCOPE INSTITUTE",
  tagline: "Professional Coaching & Computer Training",
  phone: "+91 79785 24529",
  email: "admissions@scopeinstitute.edu.in",
  address: "Chandrasekharpur, Bhubaneswar, Odisha",
  workingHours: "Monday – Saturday: 9:00 AM – 7:30 PM | Sunday: 10:00 AM – 2:00 PM",
  socials: {
    facebook: "https://facebook.com",
    twitter: "https://twitter.com",
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
    youtube: "https://youtube.com"
  }
};
