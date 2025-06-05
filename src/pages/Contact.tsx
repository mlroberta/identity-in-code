
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
      link: "mailto:roberta.muradlima@example.com",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: MapPin,
      title: "Location",
      info: "Zurich, Switzerland",
      link: "",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      info: "/in/roberta-murad-lima",
      link: "https://linkedin.com/in/roberta-murad-lima",
      color: "from-purple-500 to-violet-500"
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-pink-50">
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
                    item === 'Contact' ? 'text-blue-600' : ''
                  }`}
                >
                  {item}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-blue-600 transition-all duration-300 ${
                    item === 'Contact' ? 'w-full' : 'w-0 group-hover:w-full'
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
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-pink-600 to-purple-600 bg-clip-text text-transparent">
              Let's Connect
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Ready to collaborate on innovative nutrition solutions? Whether you're looking for expert consultation, 
              partnership opportunities, or just want to chat about the future of health science, I'd love to hear from you.
            </p>
          </div>

          {/* Contact Grid */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Contact Form */}
            <Card className={`border-0 bg-white/60 backdrop-blur-sm hover:shadow-xl transition-all duration-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`} style={{ transitionDelay: '200ms' }}>
              <CardContent className="p-8">
                <div className="flex items-center mb-8">
                  <Send className="w-6 h-6 text-purple-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">Send a Message</h2>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-gray-700 font-medium">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="mt-2 border-gray-200 focus:border-purple-500 focus:ring-purple-500"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-gray-700 font-medium">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="mt-2 border-gray-200 focus:border-purple-500 focus:ring-purple-500"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="subject" className="text-gray-700 font-medium">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="mt-2 border-gray-200 focus:border-purple-500 focus:ring-purple-500"
                      placeholder="What's this about?"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message" className="text-gray-700 font-medium">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="mt-2 border-gray-200 focus:border-purple-500 focus:ring-purple-500"
                      placeholder="Tell me about your project or how we can work together..."
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-6 text-lg rounded-lg transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                        Sending...
                      </div>
                    ) : (
                      <div className="flex items-center">
                        Send Message
                        <Send className="ml-2 w-5 h-5" />
                      </div>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info & Reasons */}
            <div className="space-y-8">
              {/* Contact Information */}
              <Card className={`border-0 bg-white/60 backdrop-blur-sm hover:shadow-xl transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`} style={{ transitionDelay: '400ms' }}>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
                  <div className="space-y-4">
                    {contactInfo.map((info) => (
                      <div key={info.title} className="flex items-center p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                        <div className={`w-10 h-10 bg-gradient-to-r ${info.color} rounded-full flex items-center justify-center mr-4`}>
                          <info.icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">{info.title}</p>
                          {info.link ? (
                            <a href={info.link} className="text-gray-600 hover:text-purple-600 transition-colors">
                              {info.info}
                            </a>
                          ) : (
                            <p className="text-gray-600">{info.info}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Reasons to Connect */}
              <Card className={`border-0 bg-white/60 backdrop-blur-sm hover:shadow-xl transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`} style={{ transitionDelay: '600ms' }}>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Connect?</h3>
                  <div className="space-y-6">
                    {reasons.map((reason) => (
                      <div key={reason.title} className="flex items-start">
                        <reason.icon className="w-6 h-6 text-purple-600 mr-4 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">{reason.title}</h4>
                          <p className="text-gray-600 text-sm">{reason.description}</p>
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
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`} style={{ transitionDelay: '800ms' }}>
            <Card className="border-0 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
              <CardContent className="p-12">
                <h3 className="text-3xl font-bold mb-4">Ready to Collaborate?</h3>
                <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                  Whether you're looking to innovate in nutrition science, develop new products, 
                  or simply explore opportunities, let's create something amazing together.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    asChild
                    variant="secondary" 
                    size="lg" 
                    className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105"
                  >
                    <Link to="/about">Learn More About Me</Link>
                  </Button>
                  <Button 
                    asChild
                    variant="outline" 
                    size="lg" 
                    className="border-white text-white hover:bg-white hover:text-purple-600 px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105"
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
