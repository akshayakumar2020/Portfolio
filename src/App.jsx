import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ExperienceSection from './components/ExperienceSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import ProjectModal from './components/ProjectModal';
import { getBotResponse } from './data/portfolioData';

const App = () => {
  // Theme
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark' || 
             (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return true;
  });

  // Mobile Menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Chatbot
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { type: 'bot', text: "Hi there! 👋 I'm Akshaya's AI Assistant. Ask me about projects, skills, experience, or how to get in touch." }
  ]);
  const [chatInput, setChatInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  // Project Modal
  const [selectedProject, setSelectedProject] = useState(null);

  // Contact Form
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Apply Theme
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  // Smooth Scroll
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition - bodyRect - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  // 3D Tilt Effect for Project Cards
  const handleTilt = (e, card) => {
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 18;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -18;
    card.style.transform = `perspective(1200px) rotateX(${y}deg) rotateY(${x}deg) scale(1.02)`;
  };

  const resetTilt = (card) => {
    card.style.transition = 'transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)';
    card.style.transform = 'perspective(1200px) rotateX(0deg) rotateY(0deg) scale(1)';
    setTimeout(() => {
      if (card) card.style.transition = 'transform 0.1s ease-out';
    }, 600);
  };

  // Chatbot Functions
  const sendChatMessage = (message = chatInput) => {
    if (!message.trim()) return;

    const userMessage = { type: 'user', text: message.trim() };
    setChatMessages(prev => [...prev, userMessage]);
    setChatInput('');
    setIsTyping(true);

    // Simulate AI thinking
    setTimeout(() => {
      const botResponse = getBotResponse(message);
      setChatMessages(prev => [...prev, { type: 'bot', text: botResponse }]);
      setIsTyping(false);
    }, 650);
  };

  const handleChatQuickPrompt = (prompt) => {
    sendChatMessage(prompt);
  };

  const handleChatSubmit = (e) => {
    e.preventDefault();
    sendChatMessage();
  };

  // Contact Form Handling
  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Name is required';
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Please enter a valid email';
    }
    if (!formData.message.trim()) errors.message = 'Message is required';
    if (formData.message.trim().length < 15) errors.message = 'Message should be at least 15 characters';
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1200));

    setIsSubmitting(false);
    setSubmitSuccess(true);
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
    
    // Auto hide success after 4s
    setTimeout(() => {
      setSubmitSuccess(false);
    }, 4000);
  };

  const openProject = (project) => {
    setSelectedProject(project);
  };

  const closeProject = () => {
    setSelectedProject(null);
  };

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-[#080b12] text-zinc-950 dark:text-zinc-100 transition-colors duration-300 relative">
      
      {/* Concentric Circles Background */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
         <div className="absolute inset-0 bg-concentric-circles opacity-80"></div>
         
         {/* Floating Elements */}
         <div className="floating-bg-text float-delay-1 text-2xl" style={{ top: '25%', left: '10%' }}>{`{ code }`}</div>
         <div className="floating-bg-text float-delay-2 text-xl" style={{ top: '30%', right: '15%' }}>@RestController</div>
         <div className="floating-bg-text float-delay-3 text-2xl" style={{ bottom: '30%', left: '15%' }}>Spring Boot</div>
         <div className="floating-bg-text float-delay-1 text-xl" style={{ top: '15%', left: '40%' }}>{`< />`}</div>
         <div className="floating-bg-text float-delay-2 text-2xl" style={{ bottom: '20%', right: '25%' }}>Java</div>
         
         <div className="absolute inset-0 bg-gradient-radial-fade"></div>
      </div>

      <div className="relative z-10">
        <Navbar 
          isDark={isDark} 
          toggleTheme={toggleTheme} 
          isMenuOpen={isMenuOpen} 
          setIsMenuOpen={setIsMenuOpen} 
          scrollToSection={scrollToSection} 
        />

        <Hero scrollToSection={scrollToSection} />
        <About />
        <SkillsSection />
        
        <ProjectsSection 
          handleTilt={handleTilt} 
          resetTilt={resetTilt} 
          openProject={openProject} 
        />
        
        <ExperienceSection />
        
        <ContactSection 
          formData={formData} 
          formErrors={formErrors} 
          isSubmitting={isSubmitting} 
          submitSuccess={submitSuccess} 
          handleFormChange={handleFormChange} 
          handleFormSubmit={handleFormSubmit} 
        />
        
        <Footer />

        <Chatbot 
          isChatOpen={isChatOpen} 
          setIsChatOpen={setIsChatOpen} 
          chatMessages={chatMessages} 
          chatInput={chatInput} 
          setChatInput={setChatInput} 
          isTyping={isTyping} 
          handleChatSubmit={handleChatSubmit} 
          handleChatQuickPrompt={handleChatQuickPrompt} 
        />

        <ProjectModal 
          selectedProject={selectedProject} 
          closeProject={closeProject} 
        />
      </div>
    </div>
  );
};

export default App;
