
import React from 'react';
import { Logo } from './icons';

const Footer = () => {
  return (
    <footer className="bg-brand-blue-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2">
              <div className="bg-white p-2 rounded-md">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7.014A8.003 8.003 0 0117.657 18.657z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                 </svg>
              </div>
              <span className="font-poppins font-bold text-xl text-white">JIGUI CARBURANT</span>
            </div>
            <p className="mt-4 text-gray-300 max-w-md">
              Votre guide fiable pour la disponibilité du carburant au Mali. Simple, transparent, et fait pour les Maliens.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg tracking-wider">Navigation</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#carte" className="hover:underline text-gray-300">Carte & Stations</a></li>
              <li><a href="#actualites" className="hover:underline text-gray-300">Actualités</a></li>
              <li><a href="#faq" className="hover:underline text-gray-300">FAQ</a></li>
              <li><a href="#contact" className="hover:underline text-gray-300">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg tracking-wider">Légal</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="hover:underline text-gray-300">Politique de confidentialité</a></li>
              <li><a href="#" className="hover:underline text-gray-300">Conditions d'utilisation</a></li>
            </ul>
             <div className="mt-6 flex space-x-4">
                {/* Social media links placeholders */}
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-brand-blue-700 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Jigui Carburant. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
