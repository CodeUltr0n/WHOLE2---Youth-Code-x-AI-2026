import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagramSquare,
  faPinterest,
  faFacebook,
  faTelegram,
  faXTwitter,
  faYoutube
} from '@fortawesome/free-brands-svg-icons';

const footerLinks = {
  'Shop by Category': [
    { name: 'Electronics', path: '/shop/electronics' },
    { name: 'Fashion', path: '/shop/fashion' },
    { name: 'Home & Living', path: '/shop/home' },
    { name: 'Beauty', path: '/shop/beauty' },
  ],
  'About': [
    { name: 'Our Story', path: '/about' },
    { name: 'Our Mission', path: '/mission' },
    { name: 'Contact Us', path: '/contact' },
  ],
  'Support': [
    { name: 'Customer Support', path: '/support' },
    { name: 'FAQs', path: '/faq' },
    { name: 'Shipping & Returns', path: '/shipping' },
    { name: 'Seller Support', path: '/seller-support' },
  ],
};

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Column 1: Brand and Mission */}
          <div className="lg:col-span-1 pr-8">
            <h3 className="text-xl font-bold tracking-wider mb-2">(WHOLE)²</h3>
            <p className="text-xs text-slate-400">
              An AI-powered, digital-first commerce engine connecting you with top global brands.
            </p>
          </div>

          {/* Columns 2, 3, 4: Navigation Links */}
          {Object.keys(footerLinks).map(title => (
            <div key={title}>
              <h4 className="font-semibold mb-3">{title}</h4>
              <ul className="space-y-1">
                {footerLinks[title].map(link => (
                  <li key={link.name}>
                    <Link to={link.path} className="text-slate-400 hover:text-white transition-colors text-sm">{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      
      {/* Bottom Bar: Copyright and Social Media */}
      <div className="bg-slate-900 py-3">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-slate-500 mb-4 md:mb-0">
            © {new Date().getFullYear()} (WHOLE)². All rights reserved.
          </p>
          {/* This is the corrected social icons container */}
          <div className="flex items-center gap-5">
            <a href="#" className="text-slate-400 hover:text-white transition-colors"><FontAwesomeIcon icon={faInstagramSquare} size="lg" /></a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors"><FontAwesomeIcon icon={faPinterest} size="lg" /></a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors"><FontAwesomeIcon icon={faFacebook} size="lg" /></a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors"><FontAwesomeIcon icon={faTelegram} size="lg" /></a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors"><FontAwesomeIcon icon={faXTwitter} size="lg" /></a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors"><FontAwesomeIcon icon={faYoutube} size="lg" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


