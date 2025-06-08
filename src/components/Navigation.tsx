
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-xl border-b border-gray-100/50 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 py-4 sm:py-6">
        <div className="flex justify-between items-center">
          <div className="text-lg sm:text-xl font-medium text-gray-900 tracking-tight">
            Roberta Murad Lima
          </div>
          <div className="hidden md:flex space-x-8 lg:space-x-12">
            {['Home', 'About', 'Experience', 'Contact'].map((item) => (
              <Link
                key={item}
                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-all duration-300 hover:scale-105 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-[-4px] after:left-0 after:bg-gray-900 after:transition-all after:duration-300 hover:after:w-full"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
