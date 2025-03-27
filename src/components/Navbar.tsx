
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navItems = [
    { name: 'Hem', path: '/' },
    { name: 'Tjänster', path: '/services' },
    { name: 'Begär offert', path: '/quote' },
    { name: 'Om oss', path: '/about' },
    { name: 'Priser', path: '/pricing' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-primary flex items-center space-x-2">
          <span className="text-2xl">Bygg & Städ Sandviken</span>
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`relative overflow-hidden transition-colors duration-300 
                ${isActive(item.path) 
                  ? 'text-primary font-medium' 
                  : 'text-foreground hover:text-primary'
                }
                after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-primary 
                after:left-0 after:-bottom-1 after:rounded-full after:origin-bottom-right 
                after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 
                ${isActive(item.path) ? 'after:scale-x-100' : ''}`}
            >
              {item.name}
            </Link>
          ))}
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-foreground" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden glass animate-fade-in mt-3 mx-6 rounded-lg overflow-hidden">
          <div className="flex flex-col py-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-6 py-3 transition-colors duration-300 
                  ${isActive(item.path) 
                    ? 'text-primary font-medium bg-white/60' 
                    : 'text-foreground hover:bg-white/40 hover:text-primary'
                  }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
