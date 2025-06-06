
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
    period: "09/2022 - 05/2024",
    location: "Zurich, Switzerland",
    description: "Managed multiple client projects across diverse markets while coordinating interdisciplinary teams",
    achievements: [
      "Successfully managed 10 client projects from concept to completion across Europe, Africa, and South America",
      "Drove product development by coordinating interdisciplinary teams of up to 12 members, ensuring alignment with company brand vision, formulation, production, and compliance",
      "Oversaw supplier selection and process optimization, reducing costs by an average of 15% per project"
    ]
  };

  const previousRole = {
    title: "Associate Project Manager",
    company: "Agilery AG",
    period: "03/2022 - 09/2022",
    location: "Zurich, Switzerland",
    description: "Expanded supplier network and supported product development initiatives",
    achievements: [
      "Expanded supplier network by 20%, streamlining procurement and enabling more competitive sourcing",
      "Supported product development from concept to launch through prototyping, recipe development, and sensory testing",
      "Prepared nutritional fact sheets, assisted with packaging specifications, and ensured regulatory compliance"
    ]
  };

  const researchRole = {
    title: "Research Student - Laboratory of Human Nutrition",
    company: "ETH Zurich",
    period: "09/2020 - 05/2021",
    location: "Zurich, Switzerland",
    description: "Conducted human trial research and data analysis",
    achievements: [
      "Conducted a human trial to assess iron absorption from edible insects in 21 women",
      "Led recruitment, data collection, and stable isotope analysis to evaluate Tenebrio molitor as a dietary iron source",
      "Analyzed the impact of chitin content on bioavailability using Excel, SPSS, and R"
    ]
  };

  const certifications = [
    {
      title: "Integrative Nutrition Health Coach (INHC)",
      description: "Completed holistic health coaching certification focusing on personalized nutrition and lifestyle behavior change",
      year: "Current"
    }
  ];

  const volunteering = [
    {
      title: "FoodHack Zurich Ambassador",
      organization: "FoodHack",
      period: "08/2022 - 08/2024",
      location: "Zurich, Switzerland",
      description: "Co-organized local events and meetups to connect food-tech professionals and support the Zurich innovation ecosystem as part of a global ambassador team"
    }
  ];

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
                <Badge className="bg-blue-100/80 text-blue-800 border-blue-200 hover:bg-blue-200/80 transition-all duration-300">Most Recent</Badge>
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

          {/* Previous Role */}
          <Card className={`mb-20 border-0 bg-white/60 backdrop-blur-xl shadow-lg hover:shadow-2xl hover:bg-white/80 transition-all duration-700 hover:-translate-y-2 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`} style={{ transitionDelay: '300ms' }}>
            <CardContent className="p-12">
              <div className="flex items-start justify-between mb-10">
                <div className="flex items-center">
                  <div className="w-14 h-14 bg-green-100/80 rounded-full flex items-center justify-center mr-8 hover:scale-110 hover:bg-green-200/80 transition-all duration-300">
                    <Users className="w-7 h-7 text-green-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-3 hover:text-gray-700 transition-colors duration-300">{previousRole.title}</h2>
                    <p className="text-lg text-green-600 font-medium hover:text-green-700 transition-colors duration-300">{previousRole.company}</p>
                    <p className="text-gray-500 text-sm mt-1">{previousRole.location} • {previousRole.period}</p>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-700 mb-10 leading-relaxed text-lg">{previousRole.description}</p>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center">
                  <TrendingUp className="w-5 h-5 mr-3 text-green-600" />
                  Key Achievements
                </h3>
                <ul className="space-y-4">
                  {previousRole.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start group">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-3 mr-6 flex-shrink-0 group-hover:scale-150 transition-transform duration-300" />
                      <span className="text-gray-700 text-sm leading-relaxed group-hover:text-gray-900 transition-colors duration-300">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Research Role */}
          <Card className={`mb-20 border-0 bg-white/60 backdrop-blur-xl shadow-lg hover:shadow-2xl hover:bg-white/80 transition-all duration-700 hover:-translate-y-2 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`} style={{ transitionDelay: '400ms' }}>
            <CardContent className="p-12">
              <div className="flex items-start justify-between mb-10">
                <div className="flex items-center">
                  <div className="w-14 h-14 bg-purple-100/80 rounded-full flex items-center justify-center mr-8 hover:scale-110 hover:bg-purple-200/80 transition-all duration-300">
                    <Award className="w-7 h-7 text-purple-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-3 hover:text-gray-700 transition-colors duration-300">{researchRole.title}</h2>
                    <p className="text-lg text-purple-600 font-medium hover:text-purple-700 transition-colors duration-300">{researchRole.company}</p>
                    <p className="text-gray-500 text-sm mt-1">{researchRole.location} • {researchRole.period}</p>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-700 mb-10 leading-relaxed text-lg">{researchRole.description}</p>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center">
                  <TrendingUp className="w-5 h-5 mr-3 text-purple-600" />
                  Key Achievements
                </h3>
                <ul className="space-y-4">
                  {researchRole.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start group">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mt-3 mr-6 flex-shrink-0 group-hover:scale-150 transition-transform duration-300" />
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
          }`} style={{ transitionDelay: '500ms' }}>
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

          {/* Additional Sections Grid */}
          <div className="grid md:grid-cols-2 gap-10">
            {/* Certifications */}
            <Card className={`border-0 bg-white/60 backdrop-blur-xl shadow-lg hover:shadow-2xl hover:bg-white/80 transition-all duration-700 hover:-translate-y-2 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`} style={{ transitionDelay: '600ms' }}>
              <CardContent className="p-10">
                <div className="text-center mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Certifications</h3>
                </div>
                <div className="space-y-6">
                  {certifications.map((cert, index) => (
                    <div key={cert.title} className="p-6 rounded-2xl bg-gray-50/80 hover:bg-gray-100/80 transition-all duration-300 hover:scale-[1.02] cursor-pointer">
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="font-semibold text-gray-900">{cert.title}</h4>
                        <Badge variant="outline" className="bg-white/80 border-gray-200 text-gray-700">{cert.year}</Badge>
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed">{cert.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Volunteering */}
            <Card className={`border-0 bg-white/60 backdrop-blur-xl shadow-lg hover:shadow-2xl hover:bg-white/80 transition-all duration-700 hover:-translate-y-2 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`} style={{ transitionDelay: '700ms' }}>
              <CardContent className="p-10">
                <div className="text-center mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Volunteering</h3>
                </div>
                <div className="space-y-6">
                  {volunteering.map((vol, index) => (
                    <div key={vol.title} className="p-6 rounded-2xl bg-gray-50/80 hover:bg-gray-100/80 transition-all duration-300 hover:scale-[1.02] cursor-pointer">
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="font-semibold text-gray-900">{vol.title}</h4>
                        <Badge variant="outline" className="bg-white/80 border-gray-200 text-gray-700">{vol.period}</Badge>
                      </div>
                      <p className="text-sm text-blue-600 font-medium mb-2">{vol.organization}</p>
                      <p className="text-xs text-gray-500 mb-3">{vol.location}</p>
                      <p className="text-sm text-gray-600 leading-relaxed">{vol.description}</p>
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

export default Experience;
