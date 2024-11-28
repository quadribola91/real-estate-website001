import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaBuilding } from 'react-icons/fa'; // Add React Icons

const Services = () => {
  return (
    <section id="services" className="p-8 bg-white py-16">
      <h2 className="text-2xl font-bold text-center mb-6">Our Services</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="text-center p-6 bg-gray-200 rounded shadow">
          <FaHome size={50} className="mx-auto mb-4" /> {/* Rent Icon */}
          <h3 className="font-semibold">Rent</h3>
          <p>Explore available rental properties.</p>
          <Link to="/rent" className="text-blue-500 hover:underline">Learn More</Link>
        </div>
        <div className="text-center p-6 bg-gray-200 rounded shadow">
          <FaBuilding size={50} className="mx-auto mb-4" /> {/* Buy/Lease Icon */}
          <h3 className="font-semibold">Buy/Lease</h3>
          <p>Explore available properties for buying or leasing.</p>
          <Link to="/buy-lease" className="text-blue-500 hover:underline">Learn More</Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
