
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-6">
          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">Kontakta Bygg & Städ Sandviken</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone size={18} className="flex-shrink-0" />
                <a href="tel:+46725302323" className="hover:underline transition-all">072-530 23 23</a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="flex-shrink-0" />
                <a href="mailto:info@byggstadsandviken.se" className="hover:underline transition-all">
                  info@byggstadsandviken.se
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="flex-shrink-0 mt-1" />
                <address className="not-italic">
                  Storgatan 1<br />
                  811 30 Sandviken
                </address>
              </div>
              <div className="flex items-start space-x-3">
                <Clock size={18} className="flex-shrink-0 mt-1" />
                <div>
                  <p>Mån-Fre: 08:00-17:00</p>
                  <p>Lör-Sön: Stängt</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">Snabblänkar</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:underline transition-all">Hem</Link>
              </li>
              <li>
                <Link to="/tjanster" className="hover:underline transition-all">Tjänster</Link>
              </li>
              <li>
                <Link to="/tjanster/flyttstad" className="hover:underline transition-all">Flyttstäd</Link>
              </li>
              <li>
                <Link to="/tjanster/kontorsstad" className="hover:underline transition-all">Kontorsstäd</Link>
              </li>
              <li>
                <Link to="/tjanster/dodsbo" className="hover:underline transition-all">Dödsbo</Link>
              </li>
              <li>
                <Link to="/tjanster/takbyten" className="hover:underline transition-all">Takbyten</Link>
              </li>
              <li>
                <Link to="/offert" className="hover:underline transition-all">Begär offert</Link>
              </li>
              <li>
                <Link to="/priser" className="hover:underline transition-all">Priser</Link>
              </li>
            </ul>
          </div>
          
          {/* About */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">Om Bygg & Städ i toppklass Sandviken</h3>
            <p>
              Vi erbjuder professionella tjänster inom flyttstäd, kontorsstäd, dödsbo, 
              demontering/bortforsling samt takbyten. Med fokus på kvalitet och kundnöjdhet 
              har vi byggt ett starkt förtroende i Sandviken med omnejd.
            </p>
            <div className="mt-4">
              <h4 className="text-base font-medium mb-2">Tjänsteområden</h4>
              <p className="text-sm">
                Sandviken, Gävle, Hofors, Ockelbo och omnejd
              </p>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-white/10 mt-10 pt-6 px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>© {currentYear} Bygg & Städ i toppklass Sandviken. Alla rättigheter förbehållna.</p>
            <div className="mt-4 md:mt-0">
              <Link to="/privacy-policy" className="text-sm hover:underline mr-4">Integritetspolicy</Link>
              <Link to="/terms" className="text-sm hover:underline">Villkor</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
