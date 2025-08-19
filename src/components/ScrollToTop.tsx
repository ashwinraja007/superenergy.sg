import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import { useLocation } from 'react-router-dom';
export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top function - ensure it works with click events
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Listen to scroll events
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Reset scroll position when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return <>
      {isVisible}
    </>;
};
export default ScrollToTop;