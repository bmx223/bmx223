
import React, { useState } from 'react';
import { Logo } from './icons';

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
};

// FIX: Explicitly type NavLink as a React.FC to correctly handle the 'key' prop.
const NavLink: React.FC<NavLinkProps> = ({ href, children }) => (
  <a href={href} className="text-gray-600 hover:text-brand-blue-900 transition-colors font-medium">
    {children}
  </a>
);

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '#carte', text: 'Carte & Stations' },
    { href: '#actualites', text: 'Actualités' },
    { href: '#faq', text: 'FAQ' },
    { href: '#a-propos', text: 'À Propos' },
    { href: '#contact', text: 'Contact' },
  ];

  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#"><Logo /></a>
          
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map(link => (
              <NavLink key={link.href} href={link.href}>{link.text}</NavLink>
            ))}
          </nav>

          <div className="hidden lg:flex items-center">
            <a
              href="#telecharger"
              className="bg-brand-blue-900 text-white font-bold py-2 px-6 rounded-lg hover:bg-brand-blue-800 transition-transform transform hover:scale-105"
            >
              Télécharger l'app
            </a>
          </div>

          <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 hover:text-brand-blue-900">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col space-y-4">
             {navLinks.map(link => (
              <a key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="text-gray-600 hover:text-brand-blue-900 transition-colors font-medium text-center py-2">{link.text}</a>
            ))}
            <a
              href="#telecharger"
              onClick={() => setIsOpen(false)}
              className="bg-brand-blue-900 text-white font-bold py-3 px-6 rounded-lg hover:bg-brand-blue-800 transition-transform transform hover:scale-105 text-center"
            >
              Télécharger l'app
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
