
import { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Globe, Heart, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  const education = [
    {
      degree: "IOC Diploma in Sports Nutrition",
      institution: "International Olympic Committee",
      year: "02/2023 - 12/2024",
      description: "Specialized certification covering nutritional strategies for athletic performance, recovery, hydration, and supplementation"
    },
    {
      degree: "MAS in Nutrition and Health",
      institution: "ETH Zurich (Swiss Federal Institute of Technology)",
      year: "09/2019 - 02/2021",
      description: "Advanced studies focusing on clinical and public health nutrition, nutrigenomics, toxicology, and dietary assessment methods"
    },
    {
      degree: "MSc in Environmental Engineering",
      institution: "ETH Zurich (Swiss Federal Institute of Technology)",
      year: "09/2016 - 04/2019",
      description: "Specialized in ecological systems design, process engineering, and urban water/waste management"
    },
    {
      degree: "BSc in Environmental Engineering",
      institution: "FAESA (Faculdade Espírito Santense)",
      year: "01/2011 - 07/2016",
      description: "Foundation in environmental systems and engineering principles"
    }
  ];

  const languages = [
    { name: "Portuguese", level: "Native", flag: "🇧🇷" },
    { name: "English", level: "Proficient", flag: "🇺🇸" },
    { name: "German", level: "Advanced", flag: "🇩🇪" },
    { name: "Spanish", level: "Advanced", flag: "🇪🇸" }
  ];

  const interests = [
    { name: "Spinning", icon: "🚴‍♀️" },
    { name: "Nutrition Research", icon: "🔬" },
    { name: "Baking", icon: "🧁" },
    { name: "Podcasts", icon: "🎧" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-xl border-b border-gray-100/50 transition-all duration-300">
        <div className="max-w-6xl mx-auto px-8 py-6">
          <div className="flex justify-between items-center">
            <Link to="/" className="text-xl font-medium text-gray-900 tracking-tight hover:text-gray-700 transition-colors duration-300">
              Roberta Murad Lima
            </Link>
            <div className="hidden md:flex space-x-12">
              {['Home', 'About', 'Experience', 'Contact'].map((item) => (
                <Link
                  key={item}
                  to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                  className={`text-sm font-medium transition-all duration-300 hover:scale-105 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-[-4px] after:left-0 after:bg-gray-900 after:transition-all after:duration-300 hover:after:w-full ${
                    item === 'About' ? 'text-gray-900 after:w-full' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-40 pb-40 px-8">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className={`text-center mb-32 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-5xl md:text-7xl font-light mb-12 text-gray-900 tracking-tight leading-none">
              About Me
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
              A passionate nutrition scientist with a unique blend of academic excellence 
              and industry experience.
            </p>
          </div>

          {/* Story Section */}
          <Card className={`mb-20 border-0 bg-white/60 backdrop-blur-xl shadow-lg hover:shadow-2xl hover:bg-white/80 transition-all duration-700 hover:-translate-y-2 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`} style={{ transitionDelay: '200ms' }}>
            <CardContent className="p-12">
              <div className="flex items-center mb-10">
                <div className="w-12 h-12 bg-blue-100/80 rounded-full flex items-center justify-center mr-6 hover:scale-110 hover:bg-blue-200/80 transition-all duration-300">
                  <BookOpen className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-2xl font-semibold text-gray-900">My Story</h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-8">
                <p>
                  My journey in nutrition and health began with a deep curiosity about how science can improve human wellbeing. 
                  With a foundation in Environmental Engineering, I discovered my true passion lay in the intersection of 
                  research, nutrition, and practical health applications.
                </p>
                <p>
                  Pursuing advanced studies at ETH Zurich opened doors to cutting-edge research in nutrition science, 
                  while my IOC certification in Sports Nutrition allowed me to specialize in performance optimization. 
                  My experience as a Project Manager at Agilery AG taught me how to bridge the gap between academic research and real-world solutions.
                </p>
                <p>
                  I believe in the power of evidence-based nutrition to transform lives, whether it's optimizing athletic 
                  performance or developing innovative health products that make a meaningful difference in people's daily lives. 
                  I'm currently seeking new opportunities to apply my expertise in nutrition science and project management.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Education Section */}
          <div className={`mb-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`} style={{ transitionDelay: '400ms' }}>
            <div className="flex items-center mb-10">
              <div className="w-12 h-12 bg-green-100/80 rounded-full flex items-center justify-center mr-6 hover:scale-110 hover:bg-green-200/80 transition-all duration-300">
                <GraduationCap className="w-6 h-6 text-green-600" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-900">Education</h2>
            </div>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <Card key={edu.degree} className="border-0 bg-white/60 backdrop-blur-xl shadow-lg hover:shadow-2xl hover:bg-white/80 transition-all duration-500 hover:-translate-y-2 cursor-pointer">
                  <CardContent className="p-10">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-3 hover:text-gray-700 transition-colors duration-300">{edu.degree}</h3>
                        <p className="text-blue-600 font-medium hover:text-blue-700 transition-colors duration-300">{edu.institution}</p>
                      </div>
                      <Badge variant="outline" className="w-fit mt-3 md:mt-0 bg-gray-50/80 border-gray-200 hover:bg-gray-100/80 hover:border-gray-300 transition-all duration-300">{edu.year}</Badge>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">{edu.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Languages & Interests Grid */}
          <div className="grid md:grid-cols-2 gap-10">
            {/* Languages */}
            <Card className={`border-0 bg-white/60 backdrop-blur-xl shadow-lg hover:shadow-2xl hover:bg-white/80 transition-all duration-700 hover:-translate-y-2 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`} style={{ transitionDelay: '600ms' }}>
              <CardContent className="p-10">
                <div className="flex items-center mb-8">
                  <div className="w-12 h-12 bg-purple-100/80 rounded-full flex items-center justify-center mr-6 hover:scale-110 hover:bg-purple-200/80 transition-all duration-300">
                    <Globe className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Languages</h3>
                </div>
                <div className="space-y-5">
                  {languages.map((lang) => (
                    <div key={lang.name} className="flex items-center justify-between p-5 rounded-2xl bg-gray-50/80 hover:bg-gray-100/80 transition-all duration-300 hover:scale-[1.02] cursor-pointer">
                      <div className="flex items-center">
                        <span className="text-xl mr-4 hover:scale-110 transition-transform duration-300">{lang.flag}</span>
                        <span className="font-medium text-gray-900">{lang.name}</span>
                      </div>
                      <Badge className="bg-white/80 border-gray-200 text-gray-700 hover:bg-gray-50/80 transition-all duration-300">{lang.level}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Interests */}
            <Card className={`border-0 bg-white/60 backdrop-blur-xl shadow-lg hover:shadow-2xl hover:bg-white/80 transition-all duration-700 hover:-translate-y-2 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`} style={{ transitionDelay: '800ms' }}>
              <CardContent className="p-10">
                <div className="flex items-center mb-8">
                  <div className="w-12 h-12 bg-pink-100/80 rounded-full flex items-center justify-center mr-6 hover:scale-110 hover:bg-pink-200/80 transition-all duration-300">
                    <Heart className="w-6 h-6 text-pink-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Interests</h3>
                </div>
                <div className="grid grid-cols-2 gap-5">
                  {interests.map((interest) => (
                    <div key={interest.name} className="text-center p-6 rounded-2xl bg-gray-50/80 hover:bg-gray-100/80 transition-all duration-300 hover:scale-105 cursor-pointer group">
                      <div className="text-2xl mb-3 group-hover:scale-110 transition-transform duration-300">{interest.icon}</div>
                      <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors duration-300">{interest.name}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
