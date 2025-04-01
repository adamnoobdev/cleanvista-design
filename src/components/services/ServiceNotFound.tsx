
import React from 'react';
import { Link } from 'react-router-dom';

const ServiceNotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Tjänsten kunde inte hittas</h1>
        <Link to="/tjanster" className="text-primary hover:underline">
          Tillbaka till alla tjänster
        </Link>
      </div>
    </div>
  );
};

export default ServiceNotFound;
