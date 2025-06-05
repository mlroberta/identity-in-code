
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, MapPin, GraduationCap, Briefcase, Heart, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
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
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-semibold text-gray-900">
              Roberta Murad Lima
            </div>
            <div className="hidden md:flex space-x-10">
              {['Home', 'About', 'Experience', 'Contact'].map((item) => (
                <Link
                  key={item}
                  to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                  className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors duration-200"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-32 px-8">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-6xl md:text-8xl font-light mb-8 text-gray-900 tracking-tight">
              Nutrition &
              <br />
              Innovation
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-6 font-light leading-relaxed">
              Bridging the gap between cutting-edge research and real-world health solutions. 
              From ETH Zurich to industry leadership.
            </p>
            <div className="flex items-center justify-center space-x-2 mb-12 text-gray-500">
              <MapPin className="w-4 h-4" />
              <span className="text-sm font-medium">Zurich, Switzerland</span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-24">
              <Link to="/about">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105">
                  Discover My Journey
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="px-8 py-4 rounded-full border-gray-300 hover:bg-gray-50 transition-all duration-200 hover:scale-105 font-medium">
                  Let's Connect
                </Button>
              </Link>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-24">
            {highlights.map((highlight, index) => (
              <Card 
                key={highlight.title}
                className={`group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 bg-white/70 backdrop-blur-xl shadow-lg ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="w-12 h-12 mx-auto mb-6 rounded-full bg-gray-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <highlight.icon className={`w-6 h-6 ${highlight.color}`} />
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-gray-900">{highlight.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Scroll Indicator */}
          <div className="text-center">
            <ChevronDown className="w-6 h-6 text-gray-400 animate-bounce mx-auto" />
            <p className="text-gray-500 mt-2 text-sm">Scroll to explore</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
