import React from 'react';
import Button from './Button';
import { ExternalLink, Info } from 'lucide-react';
import { motion } from 'framer-motion';

interface VehicleProps {
  id: number;
  title: string;
  price: number;
  year: number;
  mileage: number;
  fuel: string;
  transmission: string;
  power: string;
  imageUrl: string;
  mobileDeUrl: string;
}

const VehicleCard: React.FC<VehicleProps> = ({
  title,
  price,
  year,
  mileage,
  fuel,
  transmission,
  power,
  imageUrl,
  mobileDeUrl,
}) => {
  return (
    <motion.div 
      className="group bg-white overflow-hidden"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative h-56 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute top-0 right-0 bg-primary text-white px-4 py-2 m-3 font-bold">
          {price.toLocaleString('de-DE')} €
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-4 text-secondary">{title}</h3>
        
        <div className="grid grid-cols-2 gap-4 mb-6 text-sm text-secondary-lighter">
          <div className="flex items-center">
            <span className="font-medium mr-2 text-secondary">Baujahr:</span> {year}
          </div>
          <div className="flex items-center">
            <span className="font-medium mr-2 text-secondary">Kilometer:</span> {mileage.toLocaleString('de-DE')}
          </div>
          <div className="flex items-center">
            <span className="font-medium mr-2 text-secondary">Kraftstoff:</span> {fuel}
          </div>
          <div className="flex items-center">
            <span className="font-medium mr-2 text-secondary">Getriebe:</span> {transmission}
          </div>
          <div className="flex items-center col-span-2">
            <span className="font-medium mr-2 text-secondary">Leistung:</span> {power}
          </div>
        </div>
        
        <div className="flex gap-3">
          <a href={mobileDeUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
            <Button variant="primary" fullWidth className="flex items-center justify-center group">
              <span>Details</span>
              <ExternalLink size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </a>
          <a href={`tel:+491736851896`} className="flex-1">
            <Button variant="outline" fullWidth className="flex items-center justify-center">
              <span>Anfragen</span>
              <Info size={16} className="ml-2" />
            </Button>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default VehicleCard;