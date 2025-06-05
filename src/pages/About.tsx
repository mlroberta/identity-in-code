
import { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Globe, Heart, BookOpen } from 'lucide-react';
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
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-8 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="text-xl font-semibold text-gray-900">
              Roberta Murad Lima
            </Link>
            <div className="hidden md:flex space-x-10">
              {['Home', 'About', 'Experience', 'Contact'].map((item) => (
                <Link
                  key={item}
                  to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    item === 'About' ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-32 pb-32 px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className={`text-center mb-24 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-5xl md:text-7xl font-light mb-8 text-gray-900 tracking-tight">
              About Me
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
              A passionate nutrition scientist and project manager with a unique blend of academic excellence 
              and industry experience.
            </p>
          </div>

          {/* Story Section */}
          <Card className={`mb-16 border-0 bg-white/70 backdrop-blur-xl shadow-lg hover:shadow-xl transition-all duration-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`} style={{ transitionDelay: '200ms' }}>
            <CardContent className="p-12">
              <div className="flex items-center mb-8">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <BookOpen className="w-5 h-5 text-blue-600" />
                </div>
                <h2 className="text-2xl font-semibold text-gray-900">My Story</h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                <p>
                  My journey in nutrition and health began with a deep curiosity about how science can improve human wellbeing. 
                  With a foundation in Environmental Engineering, I discovered my true passion lay in the intersection of 
                  research, nutrition, and practical health applications.
                </p>
                <p>
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
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`} style={{ transitionDelay: '400ms' }}>
            <div className="flex items-center mb-8">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-4">
                <GraduationCap className="w-5 h-5 text-green-600" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-900">Education</h2>
            </div>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={edu.degree} className="border-0 bg-white/70 backdrop-blur-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{edu.degree}</h3>
                        <p className="text-blue-600 font-medium">{edu.institution}</p>
                      </div>
                      <Badge variant="outline" className="w-fit mt-2 md:mt-0 bg-gray-50 border-gray-200">{edu.year}</Badge>
                    </div>
                    <p className="text-gray-600 text-sm">{edu.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Languages & Interests Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Languages */}
            <Card className={`border-0 bg-white/70 backdrop-blur-xl shadow-lg hover:shadow-xl transition-all duration-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`} style={{ transitionDelay: '600ms' }}>
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                    <Globe className="w-5 h-5 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Languages</h3>
                </div>
                <div className="space-y-4">
                  {languages.map((lang) => (
                    <div key={lang.name} className="flex items-center justify-between p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
                      <div className="flex items-center">
                        <span className="text-xl mr-3">{lang.flag}</span>
                        <span className="font-medium text-gray-900">{lang.name}</span>
                      </div>
                      <Badge className="bg-white border-gray-200 text-gray-700">{lang.level}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Interests */}
            <Card className={`border-0 bg-white/70 backdrop-blur-xl shadow-lg hover:shadow-xl transition-all duration-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`} style={{ transitionDelay: '800ms' }}>
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center mr-4">
                    <Heart className="w-5 h-5 text-pink-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Interests</h3>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {interests.map((interest) => (
                    <div key={interest.name} className="text-center p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-all duration-300 hover:scale-105">
                      <div className="text-2xl mb-2">{interest.icon}</div>
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
