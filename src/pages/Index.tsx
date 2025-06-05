
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, MapPin, GraduationCap, Briefcase, Heart, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
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
      description: "Leading innovation at Agilery AG",
      color: "text-green-600"
    },
    {
      icon: Heart,
      title: "Sports Nutrition Expert",
      description: "IOC Diploma certified",
      color: "text-pink-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-xl border-b border-gray-100/50 transition-all duration-300">
        <div className="max-w-6xl mx-auto px-8 py-6">
          <div className="flex justify-between items-center">
            <div className="text-xl font-medium text-gray-900 tracking-tight">
              Roberta Murad Lima
            </div>
            <div className="hidden md:flex space-x-12">
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
      <section className="pt-40 pb-40 px-8">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-6xl md:text-8xl font-light mb-12 text-gray-900 tracking-tight leading-none">
              Nutrition &
              <br />
              Innovation
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8 font-light leading-relaxed">
              Bridging the gap between cutting-edge research and real-world health solutions. 
              From ETH Zurich to industry leadership.
            </p>
            <div className="flex items-center justify-center space-x-2 mb-16 text-gray-500">
              <MapPin className="w-4 h-4" />
              <span className="text-sm font-medium">Zurich, Switzerland</span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-32">
              <Link to="/about">
                <Button size="lg" className="bg-gray-900 hover:bg-gray-800 text-white px-10 py-6 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 active:scale-95">
                  Discover My Journey
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="px-10 py-6 rounded-full border-gray-300 hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 hover:scale-105 hover:-translate-y-1 active:scale-95 font-medium shadow-sm hover:shadow-lg">
                  Let's Connect
                </Button>
              </Link>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-32">
            {highlights.map((highlight, index) => (
              <Card 
                key={highlight.title}
                className={`group hover:shadow-2xl transition-all duration-700 hover:-translate-y-3 border-0 bg-white/60 backdrop-blur-xl shadow-lg hover:bg-white/80 cursor-pointer ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${200 + index * 150}ms` }}
              >
                <CardContent className="p-10 text-center">
                  <div className="w-14 h-14 mx-auto mb-8 rounded-full bg-gray-100/80 flex items-center justify-center group-hover:scale-110 group-hover:bg-gray-200/80 transition-all duration-500">
                    <highlight.icon className={`w-7 h-7 ${highlight.color} transition-transform duration-300 group-hover:scale-110`} />
                  </div>
                  <h3 className="text-lg font-semibold mb-4 text-gray-900 group-hover:text-gray-800 transition-colors duration-300">{highlight.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Scroll Indicator */}
          <div className="text-center">
            <div className="inline-block animate-bounce cursor-pointer hover:scale-110 transition-transform duration-300">
              <ChevronDown className="w-6 h-6 text-gray-400 mx-auto" />
            </div>
            <p className="text-gray-500 mt-3 text-sm">Scroll to explore</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
