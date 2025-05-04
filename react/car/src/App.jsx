import React, { useState } from 'react';

const cars = [
  {
    id: 1,
    name: 'Honda Civic',
    type: 'Sedan',
    price: 22000,
    image: 'https://via.placeholder.com/200x120?text=Honda+Civic',
  },
  {
    id: 2,
    name: 'Toyota RAV4',
    type: 'SUV',
    price: 28000,
    image: 'https://via.placeholder.com/200x120?text=Toyota+RAV4',
  },
  {
    id: 3,
    name: 'Ford Mustang',
    type: 'Coupe',
    price: 35000,
    image: 'https://via.placeholder.com/200x120?text=Ford+Mustang',
  },
  {
    id: 4,
    name: 'Hyundai Tucson',
    type: 'SUV',
    price: 26000,
    image: 'https://via.placeholder.com/200x120?text=Hyundai+Tucson',
  },
];

const CarList = () => {
  const [filterType, setFilterType] = useState('');
  const [sortOption, setSortOption] = useState('');

  const filteredCars = [];

  // First, manually filter the cars
  for (let i = 0; i < cars.length; i++) {
    const car = cars[i];
    if (!filterType || car.type === filterType) {
      filteredCars.push(car);
    }
  }

  // Then, manually sort the filtered cars
  if (sortOption === 'name') {
    filteredCars.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortOption === 'price') {
    filteredCars.sort((a, b) => a.price - b.price);
  }


  return (
    <div className="car-container">
      <h2>🚗 Car Showroom</h2>

      <div className="controls">
        <select onChange={e => setFilterType(e.target.value)} value={filterType}>
          <option value="">All Types</option>
          <option value="Sedan">Sedan</option>
          <option value="Coupe">Coupe</option>
          <option value="SUV">SUV</option>
        </select>

        <select onChange={e => setSortOption(e.target.value)} value={sortOption}>
          <option value="">Sort By</option>
          <option value="name">Name</option>
          <option value="price">Price</option>
        </select>
      </div>

      <div className="car-list">
        {filteredCars.map(car => (
          <div key={car.id} className="car-card">
            <img src={car.image} alt={car.name} />
            <h3>{car.name}</h3>
            <p>Type: {car.type}</p>
            <p>Price: ${car.price.toLocaleString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarList;
