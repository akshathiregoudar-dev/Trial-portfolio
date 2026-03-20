import { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X, Github, Linkedin, Mail, ExternalLink, ChevronDown } from 'lucide-react';

export default function App() {
  // State to track if dark mode is active
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });
  // State to track if the mobile navigation menu is open
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // This effect runs whenever 'darkMode' changes.
  // It adds or removes the 'dark' class on the root HTML element.
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Function to smoothly scroll to a specific section on the page
  const scrollToSection = (id: string) => {
    setIsMenuOpen(false); // Close mobile menu if it's open
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Data for our navigation links
  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Projects', id: 'projects' },
    { name: 'Skills', id: 'skills' },
    { name: 'Contact', id: 'contact' },
  ];

  // Data for our projects section
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with React, Node.js, and Stripe integration.',
      tags: ['React', 'Node.js', 'Tailwind CSS'],
      link: '#'
    },
    {
      title: 'Task Management App',
      description: 'A beautiful and responsive task manager with drag-and-drop functionality.',
      tags: ['TypeScript', 'React', 'Firebase'],
      link: '#'
    },
    {
      title: 'Weather Dashboard',
      description: 'Real-time weather forecasting app using OpenWeather API and dynamic backgrounds.',
      tags: ['JavaScript', 'HTML', 'CSS'],
      link: '#'
    }
  ];

  // Data for our skills section
  const skills = [
    'HTML5', 'CSS3', 'JavaScript (ES6+)', 'TypeScript', 
    'React.js', 'Tailwind CSS', 'Node.js', 'Git & GitHub',
    'Responsive Design', 'UI/UX Principles'
  ];

  return (
    // Main container with dynamic background and text colors based on dark mode
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-50 transition-colors duration-300 font-sans selection:bg-indigo-500/30">
      
      {/* --- Navigation Bar --- */}
      <nav className="fixed w-full z-50 top-0 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            
            {/* Logo */}
            <div className="flex-shrink-0 cursor-pointer" onClick={() => scrollToSection('home')}>
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-violet-500">
                Portfolio.
              </span>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.id)}
                  className="text-sm font-medium text-slate-600 hover:text-indigo-500 dark:text-slate-300 dark:hover:text-indigo-400 transition-colors"
                >
                  {link.name}
                </button>
              ))}
              
              {/* Dark Mode Toggle Button (Desktop) */}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                aria-label="Toggle Dark Mode"
              >
                {darkMode ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            </div>

            {/* Mobile Menu Buttons */}
            <div className="md:hidden flex items-center space-x-4">
              {/* Dark Mode Toggle Button (Mobile) */}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
              >
                {darkMode ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              {/* Hamburger Menu Toggle */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-600 dark:text-slate-300"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.id)}
                  className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-slate-600 hover:text-indigo-500 hover:bg-slate-50 dark:text-slate-300 dark:hover:text-indigo-400 dark:hover:bg-slate-800 transition-colors"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* --- Main Content --- */}
      <main>
        
        {/* 1. Header / Hero Section */}
        <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center min-h-[90vh] justify-center overflow-hidden">
          {/* Background Image & Dimmed Overlay */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            {/* Replace the URL below with your uploaded image path once you upload it, e.g., bg-[url('/group-photo.jpg')] */}
            <div className="absolute inset-0 bg-[url('/group-photo.jpeg')] bg-cover bg-center opacity-60 dark:opacity-40"></div>
            <div className="absolute inset-0 bg-slate-50/80 dark:bg-slate-950/80 backdrop-blur-[2px]"></div>
          </div>

          <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
              Hi, I'm{' '}
              <span className="relative inline-block">
                <span className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-violet-500 blur-md opacity-20 dark:opacity-30"></span>
                <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-violet-500">JK402</span>
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 max-w-2xl mb-10 leading-relaxed font-medium">
              A passionate frontend developer crafting beautiful, responsive, and user-friendly web experiences. I turn complex problems into simple, elegant solutions.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button 
                onClick={() => scrollToSection('projects')}
                className="px-8 py-3 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium transition-colors shadow-lg shadow-indigo-500/30 w-full sm:w-auto"
              >
                View My Work
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="px-8 py-3 rounded-full bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 font-medium transition-colors w-full sm:w-auto"
              >
                Contact Me
              </button>
            </div>
            
            {/* Bouncing arrow pointing down */}
            <div className="mt-20 animate-bounce cursor-pointer text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors" onClick={() => scrollToSection('projects')}>
              <ChevronDown size={32} />
            </div>
          </div>
        </section>

        {/* 2. Projects Section */}
        <section id="projects" className="py-20 bg-white dark:bg-slate-800/50 transition-colors duration-300">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
              <div className="w-20 h-1 bg-indigo-500 rounded-full"></div>
            </div>
            
            {/* Grid layout for project cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div key={index} className="group bg-slate-50 dark:bg-slate-900 rounded-2xl p-6 border border-slate-100 dark:border-slate-800 hover:shadow-xl hover:border-indigo-500/30 dark:hover:border-indigo-500/30 transition-all duration-300 flex flex-col h-full">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-indigo-500 transition-colors">{project.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-6 flex-grow">{project.description}</p>
                  
                  {/* Project Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 text-xs font-medium rounded-full bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Project Link */}
                  <a href={project.link} className="inline-flex items-center text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300">
                    View Project <ExternalLink size={16} className="ml-1" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Skills Section */}
        <section id="skills" className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12 md:mb-16 text-center flex flex-col items-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
              <div className="w-20 h-1 bg-indigo-500 rounded-full"></div>
              <p className="mt-6 text-slate-600 dark:text-slate-400 max-w-2xl">
                Here are a few technologies I've been working with recently. I'm always eager to learn new tools and frameworks.
              </p>
            </div>
            
            {/* Flex layout for skill badges */}
            <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
              {skills.map((skill, index) => (
                <div 
                  key={index} 
                  className="px-6 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl shadow-sm hover:shadow-md hover:border-indigo-500 dark:hover:border-indigo-500 transition-all cursor-default font-medium"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Contact Section */}
        <section id="contact" className="py-20 bg-white dark:bg-slate-800/50 transition-colors duration-300">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
            <div className="w-20 h-1 bg-indigo-500 rounded-full mx-auto mb-8"></div>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 leading-relaxed">
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            
            {/* Email Button */}
            <a 
              href="mailto:hello@example.com" 
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-full bg-indigo-600 hover:bg-indigo-700 text-white transition-colors shadow-lg shadow-indigo-500/30"
            >
              <Mail className="mr-2" size={20} />
              Say Hello
            </a>
            
            {/* Social Links */}
            <div className="mt-16 flex justify-center space-x-6">
              <a href="#" className="text-slate-400 hover:text-indigo-500 transition-colors">
                <span className="sr-only">GitHub</span>
                <Github size={28} />
              </a>
              <a href="#" className="text-slate-400 hover:text-indigo-500 transition-colors">
                <span className="sr-only">LinkedIn</span>
                <Linkedin size={28} />
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* --- Footer --- */}
      <footer className="py-8 text-center border-t border-slate-200 dark:border-slate-800">
        <p className="text-slate-500 dark:text-slate-400 text-sm">
          © {new Date().getFullYear()} JK402. Built with React & Tailwind CSS.
        </p>
      </footer>
    </div>
  );
}
