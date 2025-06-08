
import { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Highlights from '@/components/Highlights';
import Tools from '@/components/Tools';
import CTA from '@/components/CTA';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // SEO: Update document title dynamically
    document.title = 'Roberta Murad Lima - Nutrition Scientist & Innovation Expert | ETH Zurich Graduate';
    
    // SEO: Add meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Roberta Murad Lima - Nutrition scientist and innovation expert with ETH Zurich MAS degree and IOC sports nutrition certification. Specializing in evidence-based nutrition solutions.');
    }
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <Hero isVisible={isVisible} />
      <Highlights isVisible={isVisible} />
      <Tools isVisible={isVisible} />
      <CTA isVisible={isVisible} />
    </div>
  );
};

export default Index;
