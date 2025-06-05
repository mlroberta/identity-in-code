
import { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Target, Users, TrendingUp, Award, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  const currentRole = {
    title: "Project Manager",
    company: "Agilery AG",
    period: "Current",
    location: "Switzerland",
    description: "Leading cross-functional teams in developing innovative nutrition and health products",
    achievements: [
      "Spearheaded product development initiatives from concept to market",
      "Managed human trials and clinical research projects",
      "Led cross-functional teams across multiple departments",
      "Developed data analysis frameworks for nutrition research",
      "Coordinated international collaborations and partnerships"
    ]
  };

  const expertise = [
    {
      category: "Sports Nutrition",
      icon: Target,
      skills: ["Performance Optimization", "Supplement Development", "Athletic Recovery", "IOC Certified"]
    },
    {
      category: "Clinical Nutrition",
      icon: Award,
      skills: ["Evidence-Based Practice", "Nutritional Assessment", "Therapeutic Nutrition", "Health Outcomes"]
    },
    {
      category: "Product Development",
      icon: Lightbulb,
      skills: ["Innovation Management", "Market Research", "Product Strategy", "Quality Assurance"]
    },
    {
      category: "Research & Analysis",
      icon: TrendingUp,
      skills: ["Data Analysis", "Human Trials", "Scientific Writing", "Statistical Methods"]
    }
  ];

  const achievements = [
    {
      title: "ETH Zurich Excellence",
      description: "Completed MAS in Nutrition and Health with distinction",
      year: "2023"
    },
    {
      title: "IOC Sports Nutrition Certification",
      description: "International Olympic Committee diploma in Sports Nutrition",
      year: "2023"
    },
    {
      title: "Cross-Cultural Leadership",
      description: "Successfully managed international teams across 4 languages",
      year: "Ongoing"
    },
    {
      title: "Innovation Projects",
      description: "Led multiple product development initiatives from concept to market",
      year: "2022-Present"
    }
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
                    item === 'Experience' ? 'text-gray-900 after:w-full' : 'text-gray-600 hover:text-gray-900'
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
              Experience
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
              A proven track record of driving innovation in nutrition science, leading cross-functional teams, 
              and delivering results that make a meaningful impact.
            </p>
          </div>

          {/* Current Role */}
          <Card className={`mb-20 border-0 bg-white/60 backdrop-blur-xl shadow-lg hover:shadow-2xl hover:bg-white/80 transition-all duration-700 hover:-translate-y-2 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`} style={{ transitionDelay: '200ms' }}>
            <CardContent className="p-12">
              <div className="flex items-start justify-between mb-10">
                <div className="flex items-center">
                  <div className="w-14 h-14 bg-blue-100/80 rounded-full flex items-center justify-center mr-8 hover:scale-110 hover:bg-blue-200/80 transition-all duration-300">
                    <Briefcase className="w-7 h-7 text-blue-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-3 hover:text-gray-700 transition-colors duration-300">{currentRole.title}</h2>
                    <p className="text-lg text-blue-600 font-medium hover:text-blue-700 transition-colors duration-300">{currentRole.company}</p>
                    <p className="text-gray-500 text-sm mt-1">{currentRole.location} • {currentRole.period}</p>
                  </div>
                </div>
                <Badge className="bg-green-100/80 text-green-800 border-green-200 hover:bg-green-200/80 transition-all duration-300">Current Role</Badge>
              </div>
              
              <p className="text-gray-700 mb-10 leading-relaxed text-lg">{currentRole.description}</p>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center">
                  <TrendingUp className="w-5 h-5 mr-3 text-green-600" />
                  Key Achievements
                </h3>
                <ul className="space-y-4">
                  {currentRole.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start group">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 mr-6 flex-shrink-0 group-hover:scale-150 transition-transform duration-300" />
                      <span className="text-gray-700 text-sm leading-relaxed group-hover:text-gray-900 transition-colors duration-300">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Expertise Areas */}
          <div className={`mb-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`} style={{ transitionDelay: '400ms' }}>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-semibold text-gray-900 mb-6">Areas of Expertise</h2>
              <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Specialized knowledge and skills developed through education, certification, and hands-on experience
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-10">
              {expertise.map((area, index) => (
                <Card key={area.category} className="border-0 bg-white/60 backdrop-blur-xl shadow-lg hover:shadow-2xl hover:bg-white/80 transition-all duration-700 hover:-translate-y-3 group cursor-pointer">
                  <CardContent className="p-10">
                    <div className="flex items-center mb-8">
                      <div className="w-12 h-12 bg-gray-100/80 rounded-full flex items-center justify-center mr-6 group-hover:scale-110 group-hover:bg-gray-200/80 transition-all duration-300">
                        <area.icon className="w-6 h-6 text-gray-700 group-hover:text-gray-900 transition-colors duration-300" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-gray-800 transition-colors duration-300">{area.category}</h3>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      {area.skills.map((skill) => (
                        <Badge key={skill} variant="outline" className="justify-center py-3 hover:bg-gray-100/80 hover:scale-105 transition-all duration-300 bg-gray-50/80 border-gray-200 text-gray-700 hover:border-gray-300">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Achievements Timeline */}
          <div className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`} style={{ transitionDelay: '600ms' }}>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-semibold text-gray-900 mb-6">Key Achievements</h2>
              <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Milestones that showcase my commitment to excellence and continuous growth
              </p>
            </div>
            
            <div className="space-y-8">
              {achievements.map((achievement, index) => (
                <Card key={achievement.title} className="border-0 bg-white/60 backdrop-blur-xl shadow-lg hover:shadow-2xl hover:bg-white/80 transition-all duration-500 hover:-translate-y-2 cursor-pointer group">
                  <CardContent className="p-10">
                    <div className="flex items-start">
                      <div className="w-3 h-3 bg-blue-600 rounded-full mt-3 mr-8 flex-shrink-0 group-hover:scale-150 transition-transform duration-300" />
                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-gray-800 transition-colors duration-300">{achievement.title}</h3>
                          <Badge variant="outline" className="w-fit mt-3 md:mt-0 bg-gray-50/80 border-gray-200 hover:bg-gray-100/80 hover:border-gray-300 transition-all duration-300">{achievement.year}</Badge>
                        </div>
                        <p className="text-gray-700 text-sm leading-relaxed group-hover:text-gray-900 transition-colors duration-300">{achievement.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
