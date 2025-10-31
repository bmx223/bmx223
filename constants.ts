
import { Station, NewsArticle, FaqItem, StationStatus, FuelType } from './types';

export const MOCK_STATIONS: Station[] = [
  {
    id: 1,
    name: 'Station TotalEnergies - ACI 2000',
    address: 'ACI 2000, Bamako',
    distance: 2.5,
    status: StationStatus.Disponible,
    lastUpdate: 'il y a 5 minutes',
    fuels: [
      { type: FuelType.Essence, price: 850 },
      { type: FuelType.Gasoil, price: 825 },
    ],
    services: ['Boutique', 'Lavage auto', 'Gonflage'],
    coordinates: { lat: 12.639232, lng: -8.002889 }
  },
  {
    id: 2,
    name: 'Station Shell - Badalabougou',
    address: 'Badalabougou Est, Bamako',
    distance: 4.1,
    status: StationStatus.Limite,
    lastUpdate: 'il y a 22 minutes',
    fuels: [
      { type: FuelType.Essence, price: 850 },
      { type: FuelType.Gasoil, price: 825 },
    ],
    services: ['Boutique', 'Café'],
    coordinates: { lat: 12.6221, lng: -7.9945 }
  },
  {
    id: 3,
    name: 'Station Oilibya - Route de Ségou',
    address: 'Sogoniko, Bamako',
    distance: 8.9,
    status: StationStatus.Indisponible,
    lastUpdate: 'il y a 1 heure',
    fuels: [],
    services: ['Lavage auto'],
    coordinates: { lat: 12.5996, lng: -7.9542 }
  },
    {
    id: 4,
    name: 'Station Star Oil - Hippodrome',
    address: 'Rue 224, Hippodrome, Bamako',
    distance: 1.8,
    status: StationStatus.Disponible,
    lastUpdate: 'il y a 12 minutes',
    fuels: [
      { type: FuelType.Essence, price: 845 },
      { type: FuelType.Gasoil, price: 820 },
    ],
    services: ['Boutique', 'Restaurant', 'Gonflage'],
    coordinates: { lat: 12.6465, lng: -8.0213 }
  },
  {
    id: 5,
    name: 'Station BPEC - Cité du Niger',
    address: 'Cité du Niger, Bamako',
    distance: 6.2,
    status: StationStatus.Limite,
    lastUpdate: 'il y a 45 minutes',
    fuels: [
      { type: FuelType.Gasoil, price: 825 },
    ],
    services: ['Gonflage'],
    coordinates: { lat: 12.6647, lng: -8.0076 }
  },
];

export const MOCK_NEWS: NewsArticle[] = [
  {
    id: 1,
    title: "Communication du Ministère de l'Énergie",
    date: '15 juillet 2024',
    source: 'Gouvernement du Mali',
    content: "Le Ministère assure la population que des mesures sont prises pour garantir un approvisionnement stable en carburant sur l'ensemble du territoire."
  },
  {
    id: 2,
    title: "Arrivage de nouvelles citernes à Bamako",
    date: '14 juillet 2024',
    source: 'ORTM',
    content: "Un convoi de citernes est arrivé ce matin dans la capitale, ce qui devrait améliorer la disponibilité dans les jours à venir."
  }
];

export const MOCK_FAQ: FaqItem[] = [
  {
    question: "Les informations sont-elles fiables ?",
    answer: "Oui, les données sont mises à jour en temps réel par les gérants de stations et des contributeurs citoyens vérifiés. Chaque information affiche l'heure de la dernière mise à jour."
  },
  {
    question: "Comment puis-je contribuer ?",
    answer: "Téléchargez notre application mobile ! Vous pourrez y signaler l'état des stations que vous visitez, aidant ainsi toute la communauté."
  },
  {
    question: "L'application est-elle gratuite ?",
    answer: "Oui, le site web et l'application mobile Jigui Carburant sont entièrement gratuits pour tous les utilisateurs."
  },
  {
    question: "Pourquoi ma station préférée n'est pas listée ?",
    answer: "Nous ajoutons continuellement de nouvelles stations. Si une station manque, vous pouvez nous la suggérer via le formulaire de contact ou dans l'application."
  }
];
