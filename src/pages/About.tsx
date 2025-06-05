
import { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Globe, Heart, Zap, BookOpen, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const education = [
    {
      degree: "MAS in Nutrition and Health",
      institution: "ETH Zurich",
      year: "2022-2023",
      description: "Advanced studies in nutrition science and health applications"
    },
    {
      degree: "IOC Diploma in Sports Nutrition",
      institution: "International Olympic Committee",
      year: "2023",
      description: "Specialized certification in sports nutrition and performance"
    },
    {
      degree: "MSc in Environmental Engineering",
      institution: "University",
      year: "Previous",
      description: "Technical foundation in environmental systems and analysis"
    }
  ];

  const languages = [
    { name: "Portuguese", level: "Native", flag: "🇧🇷" },
    { name: "English", level: "Proficient", flag: "🇺🇸" },
    { name: "German", level: "Advanced", flag: "🇩🇪" },
    { name: "Spanish", level: "Proficient", flag: "🇪🇸" }
  ];

  const interests = [
    { name: "Spinning", icon: "🚴‍♀️" },
    { name: "Nutrition Research", icon: "🔬" },
    { name: "Baking", icon: "🧁" },
    { name: "Podcasts", icon: "🎧" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Roberta Murad Lima
            </Link>
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Experience', 'Contact'].map((item) => (
                <Link
                  key={item}
                  to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                  className={`text-gray-700 hover:text-blue-600 transition-colors duration-300 relative group ${
                    item === 'About' ? 'text-blue-600' : ''
                  }`}
                >
                  {item}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-blue-600 transition-all duration-300 ${
                    item === 'About' ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              About Me
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              A passionate nutrition scientist and project manager with a unique blend of academic excellence 
              and industry experience, dedicated to transforming health through evidence-based innovation.
            </p>
          </div>

          {/* Story Section */}
          <Card className={`mb-16 border-0 bg-white/60 backdrop-blur-sm hover:shadow-xl transition-all duration-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`} style={{ transitionDelay: '200ms' }}>
            <CardContent className="p-12">
              <div className="flex items-center mb-8">
                <BookOpen className="w-8 h-8 text-purple-600 mr-4" />
                <h2 className="text-3xl font-bold text-gray-900">My Story</h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <p className="mb-6">
                  My journey in nutrition and health began with a deep curiosity about how science can improve human wellbeing. 
                  With a foundation in Environmental Engineering, I discovered my true passion lay in the intersection of 
                  research, nutrition, and practical health applications.
                </p>
                <p className="mb-6">
                  Pursuing advanced studies at ETH Zurich opened doors to cutting-edge research in nutrition science, 
                  while my IOC certification in Sports Nutrition allowed me to specialize in performance optimization. 
                  Today, I bridge the gap between academic research and real-world solutions as a Project Manager at Agilery AG.
                </p>
                <p>
                  I believe in the power of evidence-based nutrition to transform lives, whether it's optimizing athletic 
                  performance or developing innovative health products that make a meaningful difference in people's daily lives.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Education Section */}
          <div className={`mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`} style={{ transitionDelay: '400ms' }}>
            <div className="flex items-center mb-8">
              <GraduationCap className="w-8 h-8 text-blue-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-900">Education</h2>
            </div>
            <div className="grid gap-6">
              {education.map((edu, index) => (
                <Card key={edu.degree} className="border-0 bg-white/60 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{edu.degree}</h3>
                        <p className="text-lg text-blue-600 font-medium">{edu.institution}</p>
                      </div>
                      <Badge variant="outline" className="w-fit mt-2 md:mt-0">{edu.year}</Badge>
                    </div>
                    <p className="text-gray-600">{edu.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Languages & Interests Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Languages */}
            <Card className={`border-0 bg-white/60 backdrop-blur-sm hover:shadow-xl transition-all duration-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`} style={{ transitionDelay: '600ms' }}>
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Globe className="w-6 h-6 text-green-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">Languages</h3>
                </div>
                <div className="space-y-4">
                  {languages.map((lang) => (
                    <div key={lang.name} className="flex items-center justify-between p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                      <div className="flex items-center">
                        <span className="text-2xl mr-3">{lang.flag}</span>
                        <span className="font-medium text-gray-900">{lang.name}</span>
                      </div>
                      <Badge>{lang.level}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Interests */}
            <Card className={`border-0 bg-white/60 backdrop-blur-sm hover:shadow-xl transition-all duration-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`} style={{ transitionDelay: '800ms' }}>
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Heart className="w-6 h-6 text-pink-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">Interests</h3>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {interests.map((interest) => (
                    <div key={interest.name} className="text-center p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-all duration-300 hover:scale-105">
                      <div className="text-3xl mb-2">{interest.icon}</div>
                      <span className="text-sm font-medium text-gray-700">{interest.name}</span>
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
