
import { Card, CardContent } from "@/components/ui/card";

interface ToolsProps {
  isVisible: boolean;
}

const Tools = ({ isVisible }: ToolsProps) => {
  const tools = [
    { name: "R", description: "Statistical Analysis", icon: "📊" },
    { name: "SPSS", description: "Data Analytics", icon: "📈" },
    { name: "Microsoft Office", description: "Productivity Suite", icon: "📋" },
    { name: "Asana", description: "Project Management", icon: "📋" }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-8">
      <div className={`mb-20 sm:mb-32 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`} style={{ transitionDelay: '600ms' }}>
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-4 sm:mb-6 text-gray-900 tracking-tight">
            Tools & Technologies
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
            Advanced analytics and research tools for data-driven nutrition insights
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
          {tools.map((tool, index) => (
            <Card 
              key={tool.name}
              className={`group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-0 bg-white/60 backdrop-blur-xl shadow-lg hover:bg-white/80 cursor-pointer ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${800 + index * 100}ms` }}
            >
              <CardContent className="p-4 sm:p-6 text-center">
                <div className="text-2xl sm:text-3xl mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                  {tool.icon}
                </div>
                <h3 className="font-semibold text-sm sm:text-base text-gray-900 mb-1 sm:mb-2 group-hover:text-gray-800 transition-colors duration-300">
                  {tool.name}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                  {tool.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tools;
