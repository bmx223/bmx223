
export enum StationStatus {
  Disponible = 'Disponible',
  Limite = 'Limité',
  Indisponible = 'Indisponible',
}

export enum FuelType {
  Essence = 'Essence',
  Gasoil = 'Gasoil',
}

export interface Station {
  id: number;
  name: string;
  address: string;
  distance: number;
  status: StationStatus;
  lastUpdate: string;
  fuels: {
    type: FuelType;
    price: number;
  }[];
  services: string[];
  coordinates: {
    lat: number;
    lng: number;
  };
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface NewsArticle {
  id: number;
  title: string;
  date: string;
  source: string;
  content: string;
}
