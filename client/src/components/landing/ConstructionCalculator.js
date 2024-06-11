import React, { useState } from 'react';

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
  const [siteLength, setSiteLength] = useState('');
  const [siteBreadth, setSiteBreadth] = useState('');
  const [numberOfFloors, setNumberOfFloors] = useState('');
  const [selectedPackage, setSelectedPackage] = useState(packages[0]);
  const [totalCost, setTotalCost] = useState(0);

  const calculateTotalCost = () => {
    const length = parseFloat(siteLength);
    const breadth = parseFloat(siteBreadth);
    const floors = parseFloat(numberOfFloors);
    
    const builtUpAreaPerFloor = (length - 2.5) * (breadth - 2.5);
    const totalBuiltUpArea = (builtUpAreaPerFloor * floors) + 200;

    const cost = selectedPackage.price * totalBuiltUpArea;
    setTotalCost(cost);
  }

  return (
    <>
      <div className='bg-clr'>
        <div class="text-center">
          <h2 className="fonts mt-4">Cost Calculator For Building A House</h2>
          <p  className="pb-4 mt-4">Fill out the form below to get an estimate of
              construction costs.
          </p>
        </div>
        <div className="max-w-md mx-auto p-4 bg-gray-100 rounded-lg shadow-md">
          <label className="block mb-2">
            Site Length (ft):
            <input type="text" placeholder='Ex: 30 Area(sq.ft)*' value={siteLength} onChange={(e) => setSiteLength(e.target.value)} className="block w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
          </label>
          <label className="block mb-2">
            Site Breadth (ft):
            <input type="text" placeholder='Ex: 40 Area(sq.ft)*' value={siteBreadth} onChange={(e) => setSiteBreadth(e.target.value)} className="block w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
          </label>
          <label className="block mb-2">
            Number of Floors:
            <input type="number" placeholder='Ex: 4' value={numberOfFloors} onChange={(e) => setNumberOfFloors(e.target.value)} className="block w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
          </label>
          <label className="block mb-2">
            Select Package:
            <select value={selectedPackage.name} onChange={(e) => setSelectedPackage(packages.find(p => p.name === e.target.value))} className="block w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500">
              {packages.map((pkg, index) => (
                <option key={index} value={pkg.name}>{pkg.name}</option>
              ))}
            </select>
          </label>
          <button onClick={calculateTotalCost} className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4 hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Calculate Total Cost</button>
          <p className="mt-4">Total Construction Cost: Rs. {totalCost}</p>
        </div>
      </div>
    </>
  );
}

export default ConstructionCalculator;
