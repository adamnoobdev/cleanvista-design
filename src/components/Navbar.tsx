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
    { name: 'Priser', path: '/pricing' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled ? 'bg-white shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-primary flex items-center space-x-3">
          <img 
            src="https://xzzytdbscfivjkiqiwin.supabase.co/storage/v1/object/public/images//Logotyp.png" 
            alt="Bygg & Städ i toppklass Sandviken" 
            className="h-10 w-auto"
          />
          <span className="text-2xl hidden md:inline">Bygg & Städ i toppklass Sandviken</span>
        </Link>
        
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`relative transition-colors duration-200 
                ${isActive(item.path) 
                  ? 'text-primary font-medium' 
                  : 'text-foreground hover:text-primary'
                }
                ${isActive(item.path) ? 'border-b-2 border-primary' : ''}`}
            >
              {item.name}
            </Link>
          ))}
        </div>
        
        <button 
          className="md:hidden text-foreground" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md mt-3 mx-6 rounded-md overflow-hidden">
          <div className="flex flex-col py-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-6 py-3 transition-colors duration-200 
                  ${isActive(item.path) 
                    ? 'text-primary font-medium bg-secondary' 
                    : 'text-foreground hover:bg-secondary hover:text-primary'
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
