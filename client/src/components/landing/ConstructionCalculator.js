import React, { useState } from 'react';
import './index.css'; // Importing the custom CSS file

const packages = [
  {
    name: 'Classic',
    price: 1980,
  },
  {
    name: 'Premium',
    price: 2195,
  },
  {
    name: 'Luxury',
    price: 2295,
  }
];

const ConstructionCalculator = () => {
  const [length, setLength] = useState('');
  const [breadth, setBreadth] = useState('');
  const [floors, setFloors] = useState('');
  const [parking, setParking] = useState('');
  const [selectedPackage, setSelectedPackage] = useState('');

  const handleLengthChange = (e) => setLength(e.target.value);
  const handleBreadthChange = (e) => setBreadth(e.target.value);
  const handleFloorsChange = (e) => setFloors(e.target.value);
  const handleParkingChange = (e) => setParking(e.target.value);
  const handlePackageChange = (e) => setSelectedPackage(e.target.value);

  const calculateBuiltUpArea = () => {
    return ((length - 2.5) * (breadth - 2.5) * floors) + 200;
  };

  const calculateParkingArea = () => {
    if (parking === '1') return 250;
    if (parking === '2') return 500;
    if (parking === 'entire') return (length - 2.5) * (breadth - 2.5);
    return 0;
  };

  const calculateTotalCost = () => {
    const builtUpArea = calculateBuiltUpArea();
    const parkingArea = calculateParkingArea();
    const packagePrice = packages.find(p => p.name === selectedPackage)?.price || 0;
    return ((builtUpArea - parkingArea) * packagePrice) + (parkingArea * 1800);
  };

  return (
    <div className="container-normal">
      <h2 className="title">Price Estimation Calculator</h2>
      <div className="forms">
        <div className="form-groups">
          <label className="labels">Length (ft):</label>
          <input
            type="number"
            className="inputs"
            value={length}
            onChange={handleLengthChange}
          />
        </div>
        <div className="form-groups">
          <label className="labels">Breadth (ft):</label>
          <input
            type="number"
            className="inputs"
            value={breadth}
            onChange={handleBreadthChange}
          />
        </div>
        <div className="form-groups">
          <label className="labels">Number of Floors:</label>
          <input
            type="number"
            className="inputs"
            value={floors}
            onChange={handleFloorsChange}
          />
        </div>
        <div className="form-groups">
          <label className="labels">Parking:</label>
          <select
            className="inputs"
            value={parking}
            onChange={handleParkingChange}
          >
            <option value="" disabled>Select Parking</option>
            <option value="1">1 Car Park</option>
            <option value="2">2 Car Parks</option>
            <option value="entire">Entire Ground Floor</option>
          </select>
        </div>
        <div className="form-groups">
          <label className="labels">Package:</label>
          <select
            className="inputs"
            value={selectedPackage}
            onChange={handlePackageChange}
          >
            <option value="" disabled>Select Package</option>
            {packages.map((pkg) => (
              <option key={pkg.name} value={pkg.name}>
                {pkg.name}
              </option>
            ))}
          </select>
        </div>
        <div className="result">
          <h4 className="result-title">Estimated Total Cost:</h4>
          <p className="result-cost">{calculateTotalCost().toLocaleString()} Rs</p>
        </div>
      </div>
    </div>
  );
};

export default ConstructionCalculator;
