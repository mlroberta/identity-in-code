
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, MapPin, GraduationCap, Briefcase, Heart, Mail, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // SEO: Update document title dynamically
    document.title = 'Roberta Murad Lima - Nutrition Scientist & Innovation Expert | ETH Zurich Graduate';
    
    // SEO: Add meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Roberta Murad Lima - Nutrition scientist and innovation expert with ETH Zurich MAS degree and IOC sports nutrition certification. Specializing in evidence-based nutrition solutions.');
    }
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  const highlights = [
    {
      icon: GraduationCap,
      title: "ETH Zurich Graduate",
      description: "MAS in Nutrition and Health",
      color: "text-blue-600"
    },
    {
      icon: Briefcase,
      title: "Project Manager",
      description: "Innovation experience at Agilery AG",
      color: "text-green-600"
    },
    {
      icon: Heart,
      title: "Sports Nutrition Expert",
      description: "IOC Diploma certified",
      color: "text-pink-600"
    }
  ];

  const tools = [
    { name: "R", description: "Statistical Analysis", icon: "📊" },
    { name: "SPSS", description: "Data Analytics", icon: "📈" },
    { name: "Microsoft Office", description: "Productivity Suite", icon: "📋" },
    { name: "Asana", description: "Project Management", icon: "📋" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-xl border-b border-gray-100/50 transition-all duration-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 py-4 sm:py-6">
          <div className="flex justify-between items-center">
            <div className="text-lg sm:text-xl font-medium text-gray-900 tracking-tight">
              Roberta Murad Lima
            </div>
            <div className="hidden md:flex space-x-8 lg:space-x-12">
              {['Home', 'About', 'Experience', 'Contact'].map((item) => (
                <Link
                  key={item}
                  to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                  className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-all duration-300 hover:scale-105 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-[-4px] after:left-0 after:bg-gray-900 after:transition-all after:duration-300 hover:after:w-full"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 sm:pt-32 lg:pt-40 pb-20 sm:pb-32 lg:pb-40 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-light mb-8 sm:mb-12 text-gray-900 tracking-tight leading-none">
              Nutrition &
              <br />
              Innovation
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-6 sm:mb-8 font-light leading-relaxed">
              Transforming evidence-based nutrition science into innovative health solutions. 
              Combining academic excellence with practical industry applications.
            </p>
            <div className="flex items-center justify-center space-x-2 mb-12 sm:mb-16 text-gray-500">
              <MapPin className="w-4 h-4" />
              <span className="text-sm font-medium">Zurich, Switzerland</span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-20 sm:mb-32">
              <Link to="/about">
                <Button size="lg" className="w-full sm:w-auto bg-gray-900 hover:bg-gray-800 text-white px-8 sm:px-10 py-4 sm:py-6 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 active:scale-95">
                  Discover My Journey
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/experience">
                <Button variant="outline" size="lg" className="w-full sm:w-auto text-gray-900 bg-white hover:bg-gray-50 border-gray-300 hover:border-gray-400 px-8 sm:px-10 py-4 sm:py-6 rounded-full transition-all duration-300 hover:scale-105 hover:-translate-y-1 active:scale-95 font-medium shadow-sm hover:shadow-lg">
                  View My Experience
                </Button>
              </Link>
            </div>
          </div>

          {/* Highlights Grid */}
          <div id="highlights-section" className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-20 sm:mb-32">
            {highlights.map((highlight, index) => (
              <Card 
                key={highlight.title}
                className={`group hover:shadow-2xl transition-all duration-700 hover:-translate-y-3 border-0 bg-white/60 backdrop-blur-xl shadow-lg hover:bg-white/80 cursor-pointer ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${200 + index * 150}ms` }}
              >
                <CardContent className="p-6 sm:p-8 lg:p-10 text-center">
                  <div className="w-12 sm:w-14 h-12 sm:h-14 mx-auto mb-6 sm:mb-8 rounded-full bg-gray-100/80 flex items-center justify-center group-hover:scale-110 group-hover:bg-gray-200/80 transition-all duration-500">
                    <highlight.icon className={`w-6 sm:w-7 h-6 sm:h-7 ${highlight.color} transition-transform duration-300 group-hover:scale-110`} />
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-gray-900 group-hover:text-gray-800 transition-colors duration-300">{highlight.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Tools Section */}
          <div className={`mb-20 sm:mb-32 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`} style={{ transitionDelay: '600ms' }}>
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-4 sm:mb-6 text-gray-900 tracking-tight">
                Tools & Technologies
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
                Advanced analytics and research tools for data-driven nutrition insights
              </p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
              {tools.map((tool, index) => (
                <Card 
                  key={tool.name}
                  className={`group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-0 bg-white/60 backdrop-blur-xl shadow-lg hover:bg-white/80 cursor-pointer ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${800 + index * 100}ms` }}
                >
                  <CardContent className="p-4 sm:p-6 text-center">
                    <div className="text-2xl sm:text-3xl mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                      {tool.icon}
                    </div>
                    <h3 className="font-semibold text-sm sm:text-base text-gray-900 mb-1 sm:mb-2 group-hover:text-gray-800 transition-colors duration-300">
                      {tool.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                      {tool.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className={`text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`} style={{ transitionDelay: '1000ms' }}>
            <Card className="border-0 bg-gradient-to-br from-gray-900 to-gray-800 shadow-2xl hover:shadow-3xl transition-all duration-700 hover:-translate-y-2 overflow-hidden">
              <CardContent className="p-8 sm:p-12 lg:p-16 text-center relative">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>
                <div className="relative z-10">
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-4 sm:mb-6 text-white tracking-tight leading-tight">
                    Let's Work Together
                  </h2>
                  <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-8 sm:mb-10 font-light leading-relaxed">
                    Ready to collaborate on innovative nutrition solutions? 
                    Let's discuss how we can make an impact together.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
                    <a href="mailto:robertamurad@gmail.com">
                      <Button size="lg" className="w-full sm:w-auto bg-white text-gray-900 hover:bg-gray-100 px-8 sm:px-10 py-4 sm:py-6 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 active:scale-95">
                        <Mail className="mr-2 w-4 h-4" />
                        Send Email
                      </Button>
                    </a>
                    <a href="https://www.linkedin.com/in/robertamuradlima/" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="lg" className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-6 rounded-full border-white text-white bg-white/10 hover:bg-white/20 hover:border-white transition-all duration-300 hover:scale-105 hover:-translate-y-1 active:scale-95 font-medium">
                        <Linkedin className="mr-2 w-4 h-4" />
                        LinkedIn
                      </Button>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
