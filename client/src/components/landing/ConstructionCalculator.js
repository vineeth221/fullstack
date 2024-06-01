import React, { useState } from 'react';

// Calculator component
function ConstructionCalculator() {
  const [quantity, setQuantity] = useState(0);
  const [pricePerUnit, setPricePerUnit] = useState(0);
  const [hours, setHours] = useState(0);
  const [hourlyRate, setHourlyRate] = useState(0);
  const [materialCost, setMaterialCost] = useState(0);
  const [laborCost, setLaborCost] = useState(0);
  const [totalCost, setTotalCost] = useState(0);

  // Function to calculate material cost based on quantity and price per unit
  const calculateMaterialCost = () => {
    setMaterialCost(quantity * pricePerUnit);
  };

  // Function to calculate labor cost based on hours and hourly rate
  const calculateLaborCost = () => {
    setLaborCost(hours * hourlyRate);
  };

  // Function to calculate total cost
  const calculateTotalCost = () => {
    setTotalCost(materialCost + laborCost);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Construction Calculator</h2>
      <div className="mb-4">
        <label className="block mb-2">
          Quantity:
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value))}
            className="block w-full mt-1 rounded-md border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
          />
        </label>
        <label className="block mb-2">
          Price Per Unit:
          <input
            type="number"
            value={pricePerUnit}
            onChange={(e) => setPricePerUnit(parseInt(e.target.value))}
            className="block w-full mt-1 rounded-md border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
          />
        </label>
        <button onClick={calculateMaterialCost} className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
          Calculate Material Cost
        </button>
      </div>
      <div className="mb-4">
        <label className="block mb-2">
          Hours:
          <input
            type="number"
            value={hours}
            onChange={(e) => setHours(parseInt(e.target.value))}
            className="block w-full mt-1 rounded-md border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
          />
        </label>
        <label className="block mb-2">
          Hourly Rate:
          <input
            type="number"
            value={hourlyRate}
            onChange={(e) => setHourlyRate(parseInt(e.target.value))}
            className="block w-full mt-1 rounded-md border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
          />
        </label>
        <button onClick={calculateLaborCost} className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
          Calculate Labor Cost
        </button>
      </div>
      <div>
        <button onClick={calculateTotalCost} className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
          Calculate Total Cost
        </button>
      </div>
      <div className="mt-6">
        <h3 className="text-lg font-semibold">Material Cost: ${materialCost}</h3>
        <h3 className="text-lg font-semibold">Labor Cost: ${laborCost}</h3>
        <h3 className="text-lg font-semibold">Total Cost: ${totalCost}</h3>
      </div>
    </div>
  );
}

export default ConstructionCalculator;
