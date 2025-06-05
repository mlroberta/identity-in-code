
import { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Target, Users, TrendingUp, Award, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
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
                    item === 'Experience' ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900'
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
              Experience
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
              A proven track record of driving innovation in nutrition science, leading cross-functional teams, 
              and delivering results that make a meaningful impact.
            </p>
          </div>

          {/* Current Role */}
          <Card className={`mb-16 border-0 bg-white/70 backdrop-blur-xl shadow-lg hover:shadow-xl transition-all duration-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`} style={{ transitionDelay: '200ms' }}>
            <CardContent className="p-12">
              <div className="flex items-start justify-between mb-8">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-6">
                    <Briefcase className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-2">{currentRole.title}</h2>
                    <p className="text-lg text-blue-600 font-medium">{currentRole.company}</p>
                    <p className="text-gray-500 text-sm">{currentRole.location} • {currentRole.period}</p>
                  </div>
                </div>
                <Badge className="bg-green-100 text-green-800 border-green-200">Current Role</Badge>
              </div>
              
              <p className="text-gray-700 mb-8 leading-relaxed">{currentRole.description}</p>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2 text-green-600" />
                  Key Achievements
                </h3>
                <ul className="space-y-3">
                  {currentRole.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-4 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Expertise Areas */}
          <div className={`mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`} style={{ transitionDelay: '400ms' }}>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-semibold text-gray-900 mb-4">Areas of Expertise</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Specialized knowledge and skills developed through education, certification, and hands-on experience
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {expertise.map((area, index) => (
                <Card key={area.category} className="border-0 bg-white/70 backdrop-blur-xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                        <area.icon className="w-5 h-5 text-gray-700" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900">{area.category}</h3>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      {area.skills.map((skill) => (
                        <Badge key={skill} variant="outline" className="justify-center py-2 hover:bg-gray-50 transition-colors bg-gray-50 border-gray-200 text-gray-700">
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
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`} style={{ transitionDelay: '600ms' }}>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-semibold text-gray-900 mb-4">Key Achievements</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Milestones that showcase my commitment to excellence and continuous growth
              </p>
            </div>
            
            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <Card key={achievement.title} className="border-0 bg-white/70 backdrop-blur-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-8">
                    <div className="flex items-start">
                      <div className="w-3 h-3 bg-blue-600 rounded-full mt-2 mr-6 flex-shrink-0" />
                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                          <h3 className="text-lg font-semibold text-gray-900">{achievement.title}</h3>
                          <Badge variant="outline" className="w-fit mt-2 md:mt-0 bg-gray-50 border-gray-200">{achievement.year}</Badge>
                        </div>
                        <p className="text-gray-700 text-sm">{achievement.description}</p>
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
