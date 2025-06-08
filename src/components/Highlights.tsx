
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Briefcase, Heart } from 'lucide-react';

interface HighlightsProps {
  isVisible: boolean;
}

const Highlights = ({ isVisible }: HighlightsProps) => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "ETH Zurich Graduate",
      description: "MAS in Nutrition and Health",
      color: "text-blue-600"
    },
    {
      icon: Briefcase,
      title: "Project Manager",
      description: "Innovation experience at Agilery AG",
      color: "text-green-600"
    },
    {
      icon: Heart,
      title: "Sports Nutrition Expert",
      description: "IOC Diploma certified",
      color: "text-pink-600"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-8">
      <div id="highlights-section" className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-20 sm:mb-32">
        {highlights.map((highlight, index) => (
          <Card 
            key={highlight.title}
            className={`group hover:shadow-2xl transition-all duration-700 hover:-translate-y-3 border-0 bg-white/60 backdrop-blur-xl shadow-lg hover:bg-white/80 cursor-pointer ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
            style={{ transitionDelay: `${200 + index * 150}ms` }}
          >
            <CardContent className="p-6 sm:p-8 lg:p-10 text-center">
              <div className="w-12 sm:w-14 h-12 sm:h-14 mx-auto mb-6 sm:mb-8 rounded-full bg-gray-100/80 flex items-center justify-center group-hover:scale-110 group-hover:bg-gray-200/80 transition-all duration-500">
                <highlight.icon className={`w-6 sm:w-7 h-6 sm:h-7 ${highlight.color} transition-transform duration-300 group-hover:scale-110`} />
              </div>
              <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-gray-900 group-hover:text-gray-800 transition-colors duration-300">{highlight.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">{highlight.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Highlights;
