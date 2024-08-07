import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

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

const CustomAlert = ({ message, show, onClose }) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(onClose, 3000);
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  if (!show) return null;

  return (
    <div className="custom-toast">
      <div className="custom-toast-body">
        {message}
        <button type="button" className="custom-toast-close" onClick={onClose}>×</button>
      </div>
    </div>
  );
};

const ConstructionCalculator = () => {
  const [siteLength, setSiteLength] = useState('');
  const [siteBreadth, setSiteBreadth] = useState('');
  const [numberOfFloors, setNumberOfFloors] = useState('');
  const [selectedPackage, setSelectedPackage] = useState(packages[0]);
  const [builtUpArea, setBuiltUpArea] = useState(0);
  const [totalCost, setTotalCost] = useState(0);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const validateFields = () => {
    const invalidFields = [];
    if (!siteLength || isNaN(parseFloat(siteLength)) || parseFloat(siteLength) <= 0) {
      invalidFields.push('Site Length');
    }
    if (!siteBreadth || isNaN(parseFloat(siteBreadth)) || parseFloat(siteBreadth) <= 0) {
      invalidFields.push('Site Breadth');
    }
    if (!numberOfFloors || isNaN(parseFloat(numberOfFloors)) || parseFloat(numberOfFloors) <= 0) {
      invalidFields.push('Number of Floors');
    }
    return invalidFields;
  };

  const calculateTotalCost = () => {
    const invalidFields = validateFields();
    if (invalidFields.length > 0) {
      setAlertMessage(`Please input ${invalidFields.join(', ')}`);
      setShowAlert(true);
      return;
    }

    const length = parseFloat(siteLength);
    const breadth = parseFloat(siteBreadth);
    const floors = parseFloat(numberOfFloors);

    const builtUpAreaPerFloor = (length - 2.5) * (breadth - 2.5);
    const totalBuiltUpArea = (builtUpAreaPerFloor * floors) + 200;
    setBuiltUpArea(totalBuiltUpArea);

    const cost = selectedPackage.price * totalBuiltUpArea;
    setTotalCost(cost);
  };

  return (
    <>
      <div className='bg-clr'>
        <div className="text-center">
          <h2 className="fonts mt-4">Cost Calculator For Building A House</h2>
          <p className="pb-4 mt-4">Fill out the form below to get an estimate of construction costs.</p>
        </div>
        <div className="max-w-md mx-auto p-4 bg-gray-100 rounded-lg shadow-md wood-img">
          <label className="block mb-2">
            Site Length (sq.ft*):
            <input type="text" placeholder='Ex: 30 Area(sq.ft)*' value={siteLength} onChange={(e) => setSiteLength(e.target.value)} className="block w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
          </label>
          <label className="block mb-2">
            Site Breadth (sq.ft*):
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
          <div className="mt-4 flex justify-between">
            <p className="font-bold"  style={{fontSize:"14px"}}>Built-Up Area:</p>
            <p className="font-bold text-blue-700"  style={{fontSize:"14px"}}>{builtUpArea.toLocaleString()} sq.ft</p>
          </div>
          <div className="mt-4 flex justify-between">
            <p className="font-bold"  style={{fontSize:"14px"}}>Total Construction Cost:</p>
            <p className="font-bold text-blue-700" style={{fontSize:"14px"}}>Rs. {totalCost.toLocaleString()}/-</p>
          </div>
        </div>
        <Row className="my-8 d-flex justify-center text-dark">
          <Col md={4}>
            <p className="mt-2 text-center text-sm text-gray-600">*This is just approximate built-up area and approximate cost. The final built-up area and cost can be derived only after architectural plans are finalized.</p>
          </Col>
        </Row>
      </div>
      <CustomAlert message={alertMessage} show={showAlert} onClose={() => setShowAlert(false)} />
    </>
  );
}

export default ConstructionCalculator;
