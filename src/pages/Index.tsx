
import React, { useEffect, useState } from 'react';
import { ChevronDown, Download, ExternalLink, Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [typedText, setTypedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  
  const roles = ['Full Stack Developer', 'Tech Innovator', 'Problem Solver', 'Code Architect'];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  // Typing animation effect
  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    let currentIndex = 0;
    
    if (isTyping) {
      const typingInterval = setInterval(() => {
        if (currentIndex <= currentRole.length) {
          setTypedText(currentRole.slice(0, currentIndex));
          currentIndex++;
        } else {
          setIsTyping(false);
          setTimeout(() => {
            setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
            setTypedText('');
            setIsTyping(true);
          }, 2000);
          clearInterval(typingInterval);
        }
      }, 100);
      
      return () => clearInterval(typingInterval);
    }
  }, [currentRoleIndex, isTyping]);

  // Scroll animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -10% 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const skills = [
    { name: 'Angular', level: 80 },
    { name: 'HTML/CSS', level: 95 },
    { name: 'JavaScript', level: 85 },
    { name: 'Python', level: 80 },
    { name: 'CSS/HTML', level: 90 },
    { name: 'Git', level: 85 }
  ];

  const projects = [
   {
      title: 'Lottery-Game',
      description: 'It is a Frontend Application and it is developed with HTML , CSS , JavaScript. It is a fun way to Develop a DOM manupulation.',
      image: '/placeholder.svg',
      liveLink: 'https://lottery-game-web.netlify.app/',
      githubLink: 'https://github.com/Mohanboddu18/lottery-game',
      tech: ['HTML', 'CSS', 'JavaScript']
    },
    {
      title: 'Expense-Tracker',
      description: 'Expense Tracker is a simple web app built using HTML and CSS that allows users to log and monitor their daily spending.',
      image: '/placeholder.svg',
      liveLink: 'https://expense-tracker-web1.netlify.app/',
      githubLink: 'https://github.com/Mohanboddu18/Exppense-tracker',
      tech: ['HTML', 'CSS']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent)] animate-pulse"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-bounce-slow"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-lg bg-black/20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              MB
            </div>
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'projects', 'resume', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-all duration-300 hover:text-cyan-400 ${
                    activeSection === section ? 'text-cyan-400 border-b-2 border-cyan-400' : 'text-white/80'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative px-6 fade-in-section">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
              Mohan Boddu
            </h1>
            <div className="text-xl md:text-2xl text-gray-300 mb-2">
              <span className="text-cyan-400 font-mono">{typedText}</span>
              <span className="animate-pulse">|</span>
            </div>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Building Sustainable & Smart Web Solutions
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="glass-button group">
              <Download size={20} className="group-hover:animate-bounce" />
              Download Resume
            </button>
            
            <button 
              onClick={() => scrollToSection('contact')}
              className="glass-button-secondary group"
            >
              Get In Touch
            </button>
          </div>
          
          <div 
            onClick={() => scrollToSection('about')}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce"
          >
            <ChevronDown size={32} className="text-cyan-400" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 fade-in-section">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="glass-card p-8">
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                I'm a passionate tech developer with a strong foundation in web development and modern programming tools.
                 I actively build personal projects to sharpen my skills and stay updated with the latest technologies.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                My journey in tech began with a curiosity for problem-solving and has evolved into a career focused on 
                creating sustainable, efficient, and user-centric digital experiences. I believe in writing clean code 
                and staying updated with the latest industry trends.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, 
                or sharing knowledge with the tech community.
              </p>
            </div>
            
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold mb-6 text-cyan-400">Skills & Technologies</h3>
              <div className="space-y-4">
                {skills.map((skill) => (
                  <div key={skill.name} className="skill-item">
                    <div className="flex justify-between mb-2">
                      <span className="text-white font-medium">{skill.name}</span>
                      <span className="text-cyan-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-cyan-400 to-purple-400 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 fade-in-section">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="project-card glass-card p-6 group">
                <div className="relative overflow-hidden rounded-lg mb-6">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-cyan-400">{project.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a href={project.liveLink} className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors">
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                  <a href={project.githubLink} className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                    <Github size={16} />
                    Source Code
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-20 px-6 fade-in-section">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Resume
          </h2>
          
          <div className="glass-card p-8 mb-8">
            <p className="text-gray-300 text-lg mb-8">
              Download my complete resume to learn more about my experience, education, and technical skills.
            </p>
            
            <button className="glass-button group mb-8">
              <Download size={20} className="group-hover:animate-bounce" />
              Download Full Resume
            </button>
            
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div>
                <h3 className="text-xl font-bold mb-4 text-cyan-400">Highlights</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Python Full Stack Developer</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Led development of 5+ web applications</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Expertise in modern JavaScript frameworks</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4 text-purple-400">Education & Certifications</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Bachelor's in Computer Science</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>AWS Certified Developer</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>AICTE , Eduskills Certified Python Developer</span> 
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 fade-in-section">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold mb-6 text-cyan-400">Let's Connect</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology. 
                Feel free to reach out!
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-gray-300">
                  <Mail className="text-cyan-400" size={20} />
                  <span>mohanboddu18@gmail.com</span>
                </div>
                <div className="flex items-center gap-4 text-gray-300">
                  <Phone className="text-cyan-400" size={20} />
                  <span>+91 7997102207</span>
                </div>
                <div className="flex items-center gap-4 text-gray-300">
                  <MapPin className="text-cyan-400" size={20} />
                  <span>Narsapur, AP</span>
                </div>
              </div>
              
              <div className="flex gap-4 mt-8">
                <a href="https://www.linkedin.com/in/mohan-boddu-5653a1321" className="social-icon">
                  <Linkedin size={24} />
                </a>
                <a href="https://github.com/Mohanboddu18" className="social-icon">
                  <Github size={24} />
                </a>
                <a href="mailto:mohanboddu@gmail.com" className="social-icon">
                  <Mail size={24} />
                </a>
              </div>
            </div>
            
            <form className="glass-card p-8 space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">Name</label>
                <input 
                  type="text" 
                  className="glass-input w-full"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">Email</label>
                <input 
                  type="email" 
                  className="glass-input w-full"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">Message</label>
                <textarea 
                  rows={5} 
                  className="glass-input w-full resize-none"
                  placeholder="Tell me about your project or just say hi!"
                ></textarea>
              </div>
              
              <button type="submit" className="glass-button w-full">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/10 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">
            © 2024 Mohan Boddu. Built with passion and modern technologies.
          </p>
        </div>
      </footer>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
        
        * {
          font-family: 'Inter', sans-serif;
        }
        
        .glass-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          transition: all 0.3s ease;
        }
        
        .glass-card:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(0, 255, 255, 0.3);
          transform: translateY(-5px);
        }
        
        .glass-button {
          background: rgba(0, 255, 255, 0.1);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(0, 255, 255, 0.3);
          color: #00ffff;
          padding: 12px 24px;
          border-radius: 8px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-weight: 600;
          transition: all 0.3s ease;
          cursor: pointer;
        }
        
        .glass-button:hover {
          background: rgba(0, 255, 255, 0.2);
          border-color: rgba(0, 255, 255, 0.5);
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(0, 255, 255, 0.2);
        }
        
        .glass-button-secondary {
          background: rgba(139, 92, 246, 0.1);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(139, 92, 246, 0.3);
          color: #8b5cf6;
          padding: 12px 24px;
          border-radius: 8px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-weight: 600;
          transition: all 0.3s ease;
          cursor: pointer;
        }
        
        .glass-button-secondary:hover {
          background: rgba(139, 92, 246, 0.2);
          border-color: rgba(139, 92, 246, 0.5);
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(139, 92, 246, 0.2);
        }
        
        .glass-input {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          padding: 12px 16px;
          color: white;
          transition: all 0.3s ease;
        }
        
        .glass-input:focus {
          outline: none;
          border-color: rgba(0, 255, 255, 0.5);
          background: rgba(255, 255, 255, 0.08);
        }
        
        .glass-input::placeholder {
          color: rgba(255, 255, 255, 0.5);
        }
        
        .social-icon {
          width: 48px;
          height: 48px;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #00ffff;
          transition: all 0.3s ease;
        }
        
        .social-icon:hover {
          background: rgba(0, 255, 255, 0.1);
          border-color: rgba(0, 255, 255, 0.3);
          transform: translateY(-3px);
          box-shadow: 0 10px 20px rgba(0, 255, 255, 0.2);
        }
        
        .project-card {
          transition: all 0.3s ease;
        }
        
        .project-card:hover {
          transform: scale(1.02);
        }
        
        .fade-in-section {
          opacity: 0;
          transform: translateY(50px);
          transition: all 0.8s ease;
        }
        
        .fade-in-section.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        
        .skill-item {
          transform: translateX(-50px);
          opacity: 0;
          transition: all 0.6s ease;
        }
        
        .animate-in .skill-item {
          transform: translateX(0);
          opacity: 1;
        }
        
        .skill-item:nth-child(1) { transition-delay: 0.1s; }
        .skill-item:nth-child(2) { transition-delay: 0.2s; }
        .skill-item:nth-child(3) { transition-delay: 0.3s; }
        .skill-item:nth-child(4) { transition-delay: 0.4s; }
        .skill-item:nth-child(5) { transition-delay: 0.5s; }
        .skill-item:nth-child(6) { transition-delay: 0.6s; }
        .skill-item:nth-child(7) { transition-delay: 0.7s; }
        .skill-item:nth-child(8) { transition-delay: 0.8s; }
        
        .animate-gradient {
          background-size: 400% 400%;
          animation: gradient 4s ease infinite;
        }
        
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
        
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        
        @media (max-width: 768px) {
          .glass-card {
            margin: 0 16px;
          }
        }
      `}</style>
    </div>
  );
};

export default Index;
