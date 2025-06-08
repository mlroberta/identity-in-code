
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HeroProps {
  isVisible: boolean;
}

const Hero = ({ isVisible }: HeroProps) => {
  return (
    <section className="pt-24 sm:pt-32 lg:pt-40 pb-20 sm:pb-32 lg:pb-40 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-light mb-8 sm:mb-12 text-gray-900 tracking-tight leading-none">
            Nutrition &
            <br />
            Innovation
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-6 sm:mb-8 font-light leading-relaxed">
            Transforming evidence-based nutrition science into innovative health solutions. 
            Combining academic excellence with practical industry applications.
          </p>
          <div className="flex items-center justify-center space-x-2 mb-12 sm:mb-16 text-gray-500">
            <MapPin className="w-4 h-4" />
            <span className="text-sm font-medium">Zurich, Switzerland</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-20 sm:mb-32">
            <Link to="/about">
              <Button size="lg" className="w-full sm:w-auto bg-gray-900 hover:bg-gray-800 text-white px-8 sm:px-10 py-4 sm:py-6 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 active:scale-95">
                Discover My Journey
                <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link to="/experience">
              <Button variant="outline" size="lg" className="w-full sm:w-auto text-gray-900 bg-white hover:bg-gray-50 border-gray-300 hover:border-gray-400 px-8 sm:px-10 py-4 sm:py-6 rounded-full transition-all duration-300 hover:scale-105 hover:-translate-y-1 active:scale-95 font-medium shadow-sm hover:shadow-lg">
                View My Experience
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
