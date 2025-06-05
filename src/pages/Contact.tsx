
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Linkedin, Send, Heart, Coffee } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    setIsVisible(true);
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message Sent! 🎉",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      info: "roberta.muradlima@example.com",
      link: "mailto:roberta.muradlima@example.com"
    },
    {
      icon: MapPin,
      title: "Location",
      info: "Zurich, Switzerland",
      link: ""
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      info: "/in/roberta-murad-lima",
      link: "https://linkedin.com/in/roberta-murad-lima"
    }
  ];

  const reasons = [
    {
      icon: Coffee,
      title: "Collaboration Opportunities",
      description: "Let's discuss potential partnerships in nutrition and health innovation"
    },
    {
      icon: Heart,
      title: "Speaking Engagements",
      description: "Available for conferences, workshops, and educational events"
    },
    {
      icon: Send,
      title: "Consulting Services",
      description: "Expert guidance in sports nutrition and product development"
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
                    item === 'Contact' ? 'text-gray-900 after:w-full' : 'text-gray-600 hover:text-gray-900'
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
              Let's Connect
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
              Ready to collaborate on innovative nutrition solutions? Whether you're looking for expert consultation, 
              partnership opportunities, or just want to chat about the future of health science.
            </p>
          </div>

          {/* Contact Grid */}
          <div className="grid lg:grid-cols-2 gap-16 mb-20">
            {/* Contact Form */}
            <Card className={`border-0 bg-white/60 backdrop-blur-xl shadow-lg hover:shadow-2xl hover:bg-white/80 transition-all duration-700 hover:-translate-y-2 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`} style={{ transitionDelay: '200ms' }}>
              <CardContent className="p-10">
                <div className="flex items-center mb-10">
                  <div className="w-12 h-12 bg-blue-100/80 rounded-full flex items-center justify-center mr-6 hover:scale-110 hover:bg-blue-200/80 transition-all duration-300">
                    <Send className="w-6 h-6 text-blue-600" />
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900">Send a Message</h2>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name" className="text-gray-700 font-medium text-sm">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="mt-3 border-gray-200 focus:border-blue-500 focus:ring-blue-500 bg-white/80 hover:bg-white transition-all duration-300 py-6"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-gray-700 font-medium text-sm">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="mt-3 border-gray-200 focus:border-blue-500 focus:ring-blue-500 bg-white/80 hover:bg-white transition-all duration-300 py-6"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="subject" className="text-gray-700 font-medium text-sm">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="mt-3 border-gray-200 focus:border-blue-500 focus:ring-blue-500 bg-white/80 hover:bg-white transition-all duration-300 py-6"
                      placeholder="What's this about?"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message" className="text-gray-700 font-medium text-sm">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="mt-3 border-gray-200 focus:border-blue-500 focus:ring-blue-500 bg-white/80 hover:bg-white transition-all duration-300"
                      placeholder="Tell me about your project or how we can work together..."
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gray-900 hover:bg-gray-800 text-white py-6 rounded-xl transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed font-medium shadow-lg hover:shadow-xl"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                        Sending...
                      </div>
                    ) : (
                      <div className="flex items-center">
                        Send Message
                        <Send className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </div>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info & Reasons */}
            <div className="space-y-10">
              {/* Contact Information */}
              <Card className={`border-0 bg-white/60 backdrop-blur-xl shadow-lg hover:shadow-2xl hover:bg-white/80 transition-all duration-700 hover:-translate-y-2 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`} style={{ transitionDelay: '400ms' }}>
                <CardContent className="p-10">
                  <h3 className="text-xl font-semibold text-gray-900 mb-8">Get in Touch</h3>
                  <div className="space-y-5">
                    {contactInfo.map((info) => (
                      <div key={info.title} className="flex items-center p-5 rounded-2xl bg-gray-50/80 hover:bg-gray-100/80 transition-all duration-300 hover:scale-[1.02] cursor-pointer group">
                        <div className="w-12 h-12 bg-gray-100/80 rounded-full flex items-center justify-center mr-6 group-hover:scale-110 group-hover:bg-gray-200/80 transition-all duration-300">
                          <info.icon className="w-5 h-5 text-gray-600 group-hover:text-gray-800 transition-colors duration-300" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900 text-sm group-hover:text-gray-800 transition-colors duration-300">{info.title}</p>
                          {info.link ? (
                            <a href={info.link} className="text-gray-600 hover:text-blue-600 transition-colors text-sm">
                              {info.info}
                            </a>
                          ) : (
                            <p className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors duration-300">{info.info}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Reasons to Connect */}
              <Card className={`border-0 bg-white/60 backdrop-blur-xl shadow-lg hover:shadow-2xl hover:bg-white/80 transition-all duration-700 hover:-translate-y-2 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`} style={{ transitionDelay: '600ms' }}>
                <CardContent className="p-10">
                  <h3 className="text-xl font-semibold text-gray-900 mb-8">Why Connect?</h3>
                  <div className="space-y-8">
                    {reasons.map((reason) => (
                      <div key={reason.title} className="flex items-start group cursor-pointer hover:scale-[1.02] transition-transform duration-300">
                        <div className="w-10 h-10 bg-gray-100/80 rounded-full flex items-center justify-center mr-6 mt-1 flex-shrink-0 group-hover:scale-110 group-hover:bg-gray-200/80 transition-all duration-300">
                          <reason.icon className="w-4 h-4 text-gray-600 group-hover:text-gray-800 transition-colors duration-300" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2 text-sm group-hover:text-gray-800 transition-colors duration-300">{reason.title}</h4>
                          <p className="text-gray-600 text-xs leading-relaxed group-hover:text-gray-700 transition-colors duration-300">{reason.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Call to Action */}
          <div className={`text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`} style={{ transitionDelay: '800ms' }}>
            <Card className="border-0 bg-gray-900 text-white shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <CardContent className="p-16">
                <h3 className="text-2xl font-semibold mb-6">Ready to Collaborate?</h3>
                <p className="text-lg opacity-90 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
                  Whether you're looking to innovate in nutrition science, develop new products, 
                  or simply explore opportunities, let's create something amazing together.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Button 
                    asChild
                    variant="secondary" 
                    size="lg" 
                    className="bg-white text-gray-900 hover:bg-gray-100 px-10 py-6 rounded-full transition-all duration-300 hover:scale-105 hover:-translate-y-1 active:scale-95 font-medium shadow-lg hover:shadow-xl"
                  >
                    <Link to="/about">Learn More About Me</Link>
                  </Button>
                  <Button 
                    asChild
                    variant="outline" 
                    size="lg" 
                    className="border-white text-white hover:bg-white hover:text-gray-900 px-10 py-6 rounded-full transition-all duration-300 hover:scale-105 hover:-translate-y-1 active:scale-95 font-medium"
                  >
                    <Link to="/experience">View My Experience</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
