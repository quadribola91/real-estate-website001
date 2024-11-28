import React from 'react';

const RentPage = () => {
  const locations = [
    { name: 'Location 1', price: '₦50,000', type: '1-Bedroom Miniflat' },
    { name: 'Location 2', price: '₦80,000', type: '2-Bedroom Miniflat' },
    { name: 'Location 3', price: '₦120,000', type: '3-Bedroom Miniflat' },
    { name: 'Location 4', price: '₦60,000', type: '1-Room Self Contained' },
    { name: 'Location 5', price: '₦100,000', type: 'Studio' },
  ];

  return (
    <section id="rent" className="p-8 bg-white py-16">
      <h2 className="text-2xl font-bold text-center mb-6">Available Properties for Rent</h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {locations.map((location, index) => (
          <div key={index} className="bg-gray-200 p-6 rounded shadow">
            <h3 className="font-semibold">{location.name}</h3>
            <p>{location.type}</p>
            <p className="text-blue-500">{location.price} / month</p>
            <button className="bg-blue-500 text-white p-2 w-full mt-4">View Details</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RentPage;
