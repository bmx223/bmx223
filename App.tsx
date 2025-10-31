
import React, { useState, useMemo, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import StationCard from './components/StationCard';
import { MOCK_STATIONS, MOCK_NEWS, MOCK_FAQ } from './constants';
import { StationStatus, FuelType, Station } from './types';
import { DownloadApple, DownloadGoogle } from './components/icons';

const App = () => {
  const [stations] = useState<Station[]>(MOCK_STATIONS);
  const [statusFilter, setStatusFilter] = useState<StationStatus | 'all'>('all');
  const [fuelFilter, setFuelFilter] = useState<FuelType | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOrder, setSortOrder] = useState<'distance' | 'name'>('distance');

  const filteredStations = useMemo(() => {
    return stations
      .filter(station => {
        const statusMatch = statusFilter === 'all' || station.status === statusFilter;
        const fuelMatch = fuelFilter === 'all' || station.fuels.some(f => f.type === fuelFilter);
        const searchMatch = station.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            station.address.toLowerCase().includes(searchQuery.toLowerCase());
        return statusMatch && fuelMatch && searchMatch;
      })
      .sort((a, b) => {
        if (sortOrder === 'distance') {
          return a.distance - b.distance;
        }
        return a.name.localeCompare(b.name);
      });
  }, [stations, statusFilter, fuelFilter, searchQuery, sortOrder]);

  const [os, setOs] = useState<'ios' | 'android' | 'other'>('other');

  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
    if (/android/i.test(userAgent)) {
      setOs("android");
    }
    if (/iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream) {
      setOs("ios");
    }
  }, []);

  return (
    <div className="bg-gray-50 font-sans text-gray-800">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative bg-brand-blue-100 pt-24 pb-32 text-center overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: `url('https://picsum.photos/seed/mali/1920/1080')` }}></div>
          <div className="relative container mx-auto px-4">
            <h1 className="font-poppins text-4xl md:text-6xl font-extrabold text-brand-blue-900">
              JIGUI CARBURANT
            </h1>
            <p className="mt-4 text-lg md:text-xl text-brand-blue-800 max-w-3xl mx-auto">
              Votre guide fiable pour le carburant au Mali. Consultez la disponibilité, trouvez la station la plus proche. Simple, transparent, local.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="#telecharger" className="bg-brand-blue-900 text-white font-bold py-3 px-8 rounded-lg hover:bg-brand-blue-800 transition-transform transform hover:scale-105 shadow-lg">
                Télécharger l'app
              </a>
              <a href="#carte" className="bg-white text-brand-blue-900 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-transform transform hover:scale-105 shadow-lg border border-gray-200">
                Voir la carte
              </a>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-poppins font-bold text-brand-blue-900">Comment ça marche ?</h2>
            <p className="mt-2 text-gray-600 max-w-2xl mx-auto">En 3 étapes simples, restez informé et prenez la route en toute sérénité.</p>
            <div className="mt-12 grid md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <div className="bg-brand-blue-100 text-brand-blue-900 rounded-full h-16 w-16 flex items-center justify-center text-2xl font-bold">1</div>
                <h3 className="mt-4 text-xl font-bold">Consultez</h3>
                <p className="mt-2 text-gray-500">Vérifiez l'état des stations sur la carte ou la liste en temps réel.</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-brand-blue-100 text-brand-blue-900 rounded-full h-16 w-16 flex items-center justify-center text-2xl font-bold">2</div>
                <h3 className="mt-4 text-xl font-bold">Se Rendre</h3>
                <p className="mt-2 text-gray-500">Trouvez la station disponible la plus proche de vous.</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-brand-blue-100 text-brand-blue-900 rounded-full h-16 w-16 flex items-center justify-center text-2xl font-bold">3</div>
                <h3 className="mt-4 text-xl font-bold">Confirmez</h3>
                <p className="mt-2 text-gray-500">Aidez la communauté en confirmant le statut via l'application.</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Map & Stations Section */}
        <section id="carte" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-poppins font-bold text-brand-blue-900 text-center">Carte interactive & Stations</h2>
            <p className="mt-2 text-gray-600 max-w-2xl mx-auto text-center">Filtrez et trouvez facilement les informations dont vous avez besoin.</p>
            
            <div className="mt-8 p-4 bg-white rounded-lg shadow-md">
                <img src="https://picsum.photos/seed/map/1200/400" alt="Carte du Mali avec stations" className="rounded-md w-full h-64 md:h-96 object-cover" loading="lazy"/>
            </div>

            <div id="stations" className="mt-12">
              {/* Filter Controls */}
              <div className="bg-white p-4 rounded-lg shadow-md sticky top-20 z-40 mb-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 items-end">
                    <div>
                        <label htmlFor="search" className="block text-sm font-medium text-gray-700">Rechercher une station</label>
                        <input type="text" id="search" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} placeholder="Nom ou adresse..." className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-blue-700 focus:ring focus:ring-brand-blue-700 focus:ring-opacity-50" />
                    </div>
                    <div>
                        <label htmlFor="status" className="block text-sm font-medium text-gray-700">État du service</label>
                        <select id="status" value={statusFilter} onChange={e => setStatusFilter(e.target.value as StationStatus | 'all')} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-blue-700 focus:ring focus:ring-brand-blue-700 focus:ring-opacity-50">
                            <option value="all">Tous</option>
                            {Object.values(StationStatus).map(s => <option key={s} value={s}>{s}</option>)}
                        </select>
                    </div>
                    <div>
                        <label htmlFor="fuel" className="block text-sm font-medium text-gray-700">Type de carburant</label>
                        <select id="fuel" value={fuelFilter} onChange={e => setFuelFilter(e.target.value as FuelType | 'all')} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-blue-700 focus:ring focus:ring-brand-blue-700 focus:ring-opacity-50">
                            <option value="all">Tous</option>
                            {Object.values(FuelType).map(f => <option key={f} value={f}>{f}</option>)}
                        </select>
                    </div>
                    <div>
                         <label htmlFor="sort" className="block text-sm font-medium text-gray-700">Trier par</label>
                        <select id="sort" value={sortOrder} onChange={e => setSortOrder(e.target.value as 'distance' | 'name')} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-blue-700 focus:ring focus:ring-brand-blue-700 focus:ring-opacity-50">
                            <option value="distance">Distance</option>
                            <option value="name">Nom</option>
                        </select>
                    </div>
                </div>
              </div>

              {/* Station List */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredStations.length > 0 ? (
                    filteredStations.map(station => <StationCard key={station.id} station={station} />)
                ) : (
                    <div className="md:col-span-2 lg:col-span-3 text-center py-12 bg-white rounded-lg shadow-sm">
                        <p className="text-gray-500">Aucune station ne correspond à vos critères.</p>
                    </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* News Section */}
        <section id="actualites" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-poppins font-bold text-brand-blue-900 text-center">Actualités & Annonces</h2>
                <div className="mt-12 max-w-3xl mx-auto space-y-8">
                    {MOCK_NEWS.map(article => (
                        <div key={article.id} className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                            <p className="text-sm text-gray-500">{article.date} - <span className="font-semibold">{article.source}</span></p>
                            <h3 className="mt-2 text-xl font-bold text-brand-blue-900">{article.title}</h3>
                            <p className="mt-2 text-gray-700">{article.content}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Download App Section */}
        <section id="telecharger" className="py-20 bg-brand-blue-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-poppins font-bold">Prenez Jigui en main</h2>
            <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">Téléchargez l'application mobile pour une expérience complète, des mises à jour en temps réel et la possibilité de contribuer.</p>
            <div className="mt-8 flex justify-center space-x-4">
              {os !== 'ios' && <a href="#"><DownloadGoogle /></a>}
              {os !== 'android' && <a href="#"><DownloadApple /></a>}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-poppins font-bold text-brand-blue-900 text-center">Questions fréquentes</h2>
            <div className="mt-12 max-w-3xl mx-auto">
              {MOCK_FAQ.map((item, index) => (
                <div key={index} className="border-b">
                  <details className="group p-4">
                    <summary className="font-semibold cursor-pointer list-none flex justify-between items-center">
                      {item.question}
                      <span className="transition-transform transform group-open:rotate-180">
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                      </span>
                    </summary>
                    <p className="mt-4 text-gray-600">{item.answer}</p>
                  </details>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-poppins font-bold text-brand-blue-900 text-center">Contactez-nous</h2>
                <p className="mt-2 text-gray-600 max-w-2xl mx-auto text-center">Pour toute question, partenariat ou contact presse, utilisez le formulaire ci-dessous.</p>
                <form className="mt-12 max-w-xl mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Votre nom</label>
                            <input type="text" id="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-blue-700 focus:ring focus:ring-brand-blue-700 focus:ring-opacity-50" />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Votre email</label>
                            <input type="email" id="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-blue-700 focus:ring focus:ring-brand-blue-700 focus:ring-opacity-50" />
                        </div>
                    </div>
                    <div className="mt-6">
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                        <textarea id="message" rows={5} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-blue-700 focus:ring focus:ring-brand-blue-700 focus:ring-opacity-50"></textarea>
                    </div>
                    <div className="mt-6 text-center">
                        <button type="submit" className="bg-brand-blue-900 text-white font-bold py-3 px-8 rounded-lg hover:bg-brand-blue-800 transition-transform transform hover:scale-105 shadow-lg">
                            Envoyer le message
                        </button>
                    </div>
                </form>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
