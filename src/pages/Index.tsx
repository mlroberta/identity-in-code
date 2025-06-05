
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, MapPin, GraduationCap, Briefcase, Heart, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const highlights = [
    {
      icon: GraduationCap,
      title: "ETH Zurich Graduate",
      description: "MAS in Nutrition and Health",
      color: "from-blue-500 to-purple-600"
    },
    {
      icon: Briefcase,
      title: "Project Manager",
      description: "Leading innovation at Agilery AG",
      color: "from-green-500 to-teal-600"
    },
    {
      icon: Heart,
      title: "Sports Nutrition Expert",
      description: "IOC Diploma certified",
      color: "from-pink-500 to-rose-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div 
        className="fixed inset-0 opacity-20 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.1) 0%, transparent 50%)`
        }}
      />
      
      {/* Floating shapes */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-20 animate-pulse" />
      <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-r from-pink-400 to-rose-500 rounded-full opacity-20 animate-pulse delay-1000" />
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-r from-green-400 to-teal-500 rounded-full opacity-20 animate-pulse delay-2000" />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Roberta Murad Lima
            </div>
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Experience', 'Contact'].map((item) => (
                <Link
                  key={item}
                  to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                  className="text-gray-700 hover:text-blue-600 transition-colors duration-300 relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-center mb-16">
              <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                Nutrition &
                <br />
                Innovation
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Bridging the gap between cutting-edge research and real-world health solutions. 
                From ETH Zurich to industry leadership.
              </p>
              <div className="flex items-center justify-center space-x-2 mt-4 text-gray-500">
                <MapPin className="w-4 h-4" />
                <span>Zurich, Switzerland</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
              <Link to="/about">
                <Button size="lg" className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  Discover My Journey
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="px-8 py-6 text-lg rounded-full border-2 hover:bg-gray-50 transition-all duration-300 hover:scale-105">
                  Let's Connect
                </Button>
              </Link>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {highlights.map((highlight, index) => (
              <Card 
                key={highlight.title}
                className={`group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 bg-white/60 backdrop-blur-sm ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${highlight.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <highlight.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{highlight.title}</h3>
                  <p className="text-gray-600">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Scroll Indicator */}
          <div className="text-center">
            <ChevronDown className="w-8 h-8 text-gray-400 animate-bounce mx-auto" />
            <p className="text-gray-500 mt-2">Scroll to explore</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
