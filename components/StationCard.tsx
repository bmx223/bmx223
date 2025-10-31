
import React from 'react';
import { Station, StationStatus, FuelType } from '../types';
import { CheckCircleIcon, ExclamationCircleIcon, XCircleIcon, GasPumpIcon, LocationMarkerIcon, ClockIcon } from './icons';

const statusConfig = {
  [StationStatus.Disponible]: {
    text: 'Disponible',
    icon: <CheckCircleIcon className="h-5 w-5 text-brand-green-700" />,
    bgColor: 'bg-brand-green-100',
    textColor: 'text-brand-green-700',
  },
  [StationStatus.Limite]: {
    text: 'Quantité Limitée',
    icon: <ExclamationCircleIcon className="h-5 w-5 text-brand-yellow-500" />,
    bgColor: 'bg-brand-yellow-100',
    textColor: 'text-brand-yellow-500',
  },
  [StationStatus.Indisponible]: {
    text: 'Indisponible',
    icon: <XCircleIcon className="h-5 w-5 text-brand-red-700" />,
    bgColor: 'bg-brand-red-100',
    textColor: 'text-brand-red-700',
  },
};

type StationCardProps = {
  station: Station;
};

// FIX: Explicitly type StationCard as a React.FC to correctly handle the 'key' prop.
const StationCard: React.FC<StationCardProps> = ({ station }) => {
  const { name, address, distance, status, lastUpdate, fuels, services } = station;
  const config = statusConfig[status];

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 p-5 flex flex-col">
      <div className="flex-grow">
        <div className="flex justify-between items-start">
          <h3 className="font-poppins font-bold text-lg text-brand-blue-900 pr-2">{name}</h3>
          <div className={`flex items-center space-x-2 py-1 px-3 rounded-full text-sm font-semibold ${config.bgColor} ${config.textColor}`}>
            {config.icon}
            <span>{config.text}</span>
          </div>
        </div>

        <div className="mt-3 text-sm text-gray-500 space-y-2">
          <div className="flex items-center">
            <LocationMarkerIcon className="h-4 w-4 mr-2 flex-shrink-0" />
            <span>{address} (~{distance} km)</span>
          </div>
          <div className="flex items-center">
            <ClockIcon className="h-4 w-4 mr-2 flex-shrink-0" />
            <span>Mis à jour {lastUpdate}</span>
          </div>
        </div>
        
        <div className="mt-4 pt-4 border-t border-gray-100">
          <h4 className="font-semibold text-sm text-gray-800 mb-2">Carburants disponibles</h4>
          {fuels.length > 0 ? (
            <div className="flex space-x-4">
              {fuels.map(fuel => (
                <div key={fuel.type} className="text-center bg-gray-50 p-2 rounded-md flex-1">
                  <p className="font-semibold text-gray-700">{fuel.type}</p>
                  <p className="text-brand-blue-900 font-bold">{fuel.price} FCFA</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-sm text-gray-500 italic">Aucun carburant signalé disponible.</p>
          )}
        </div>
      </div>

      {services.length > 0 && (
        <div className="mt-4 pt-4 border-t border-gray-100">
          <h4 className="font-semibold text-sm text-gray-800 mb-2">Services</h4>
          <div className="flex flex-wrap gap-2">
            {services.map(service => (
              <span key={service} className="bg-brand-blue-100 text-brand-blue-800 text-xs font-medium px-2.5 py-1 rounded-full">
                {service}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default StationCard;
