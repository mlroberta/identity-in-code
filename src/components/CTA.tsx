
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Linkedin } from 'lucide-react';

interface CTAProps {
  isVisible: boolean;
}

const CTA = ({ isVisible }: CTAProps) => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-8">
      <div className={`text-center transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`} style={{ transitionDelay: '1000ms' }}>
        <Card className="border-0 bg-gradient-to-br from-gray-900 to-gray-800 shadow-2xl hover:shadow-3xl transition-all duration-700 hover:-translate-y-2 overflow-hidden">
          <CardContent className="p-8 sm:p-12 lg:p-16 text-center relative">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-4 sm:mb-6 text-white tracking-tight leading-tight">
                Let's Work Together
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-8 sm:mb-10 font-light leading-relaxed">
                Ready to collaborate on innovative nutrition solutions? 
                Let's discuss how we can make an impact together.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
                <a href="mailto:robertamurad@gmail.com">
                  <Button size="lg" className="w-full sm:w-auto bg-white text-gray-900 hover:bg-gray-100 px-8 sm:px-10 py-4 sm:py-6 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 active:scale-95">
                    <Mail className="mr-2 w-4 h-4" />
                    Send Email
                  </Button>
                </a>
                <a href="https://www.linkedin.com/in/robertamuradlima/" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-6 rounded-full border-white text-white bg-white/10 hover:bg-white/20 hover:border-white transition-all duration-300 hover:scale-105 hover:-translate-y-1 active:scale-95 font-medium">
                    <Linkedin className="mr-2 w-4 h-4" />
                    LinkedIn
                  </Button>
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CTA;
