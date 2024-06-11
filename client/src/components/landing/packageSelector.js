import React, { useState } from 'react';
import './index.css'; // Import custom CSS

const packagesselect = [
  {
    name: 'Classic',
    price: 'Rs. 1980/- per sft',
    details: {
      steel: 'Fe 500/550 Meenakshi, Kamadhenu, Prime Gold or Equivalent',
      cement: '53 Grade & 43 Grade - Maha / Priya / Chettinad / Dalmia or Equivalent',
      wall: '6" and 4" Blocks',
      sand: 'M Sand and P Sand - Double Wash',
      aggregates: '20mm and 40mm',
      earthExcavation: '6ft Depth',
      columns: '6"X18" Standard',
      beam: '1ft to 1.5ft Standard',
      mainDoor: 'Frame and Shutter worth Rs. 30,000/- 1 Unit only (includes accessories and taxes)',
      pujaDoor: 'Frame and Shutter worth Rs. 14,000/- 1 Unit only',
      internalDoors: 'Frame and Shutter worth Rs. 8,500/- 1 Unit only (per room)',
      toiletDoors: 'Frame and Shutter worth Rs. 8,000/- 1 Unit only (per bathroom)',
      windows: 'UPVC / WPC - Rs. 450/- per sft',
      windowGrills: '10mm at 120mm spacing - Rs. 120/- per sft',
      livingDiningKitchenCorridor: 'Flooring cost Rs. 75/- per sft and Rs. 25/- per sft labour cost',
      bedrooms: 'Flooring cost Rs. 75/- per sft and Rs. 25/- per sft labour cost',
      bathroomFlooring: 'Flooring cost Rs. 45/- per sft and Rs. 25/- per sft labour cost',
      bathroomWall: 'Wall Cladding implementation upto - Rs.45/- per sft upto 7ft',
      stairCase: 'Flooring implementation upto - Rs.95/- per sft',
      balconyUtilityParking: 'Flooring implementation upto - Rs.35/- per sft',
      kitchenDado: 'Upto 2ft height - Wall Cladding implementation upto - Rs.45/- per sft',
      electricalWires: 'Anchor, Havells, Finolex, GM or Equivalent',
      electricalPipes: 'Standard ISI Brands',
      plumbingPipes: 'Ashirwad or Astral or equivalent',
      switches: 'Basic Range - GM, Anchor or Equivalent',
      masterBathroom: 'Upto Rs. 30,000/- 1 Bathroom',
      powderRoom: 'Upto Rs. 12,000/- 1 Unit',
      otherBathrooms: 'Upto Rs. 22,000/- per Bathroom',
      waterproofing: 'Fosroc or Dr.Fixit or equivalent',
      plastering: 'Standard Finish',
      internalPaint: '2 Coats Putty, 2 Coats Paint - Asian Paints Tractor emulsion or Equivalent',
      externalPaint: '2 Coats Putty, 2 Coats Paint - Asian Paints Ace emulsion or equivalent',
      grillPainting: '1 coat anti corrosive and 1 coat enamel paint',
      stairCaseRailing: '1/2" or 3/4" MS Pipes - Basic Design',
      balconyRailing: '1/2" or 3/4" MS Pipes - Basic Design',
      parapetWall: '3ft height 4" Block Work only for terrace',
      compoundWall: 'NA',
      mainGate: 'NA',
      waterSump: 'Block Wall - 8000 ltrs',
      overHeadTank: '1500 ltrs - PVC double layered',
      floorToCeilingHeight: '10ft',
      windowChajja: '1 ft - 1 dimensional only',
      mainDoorSafetyLock: 'Rs. 2000/- 1 unit only',
      elevation: 'Material plus labour upto Rs. 60,000/-',
      supervision: 'Periodic',
      architecturalDesign: 'Inclusive'
    }
  },
  {
    name: 'Premium',
    price: 'Rs. 2195/- per sft',
    details: {
      steel: 'Fe 500/550 Indus, Jindal, Vizag or Equivalent',
      cement: '53 Grade & 43 Grade - JSW / ACC / Zuari / Ultratech',
      wall: '6" and 4" Blocks',
      sand: 'M Sand and P Sand - Double Wash',
      aggregates: '20mm and 40mm',
      earthExcavation: '6ft Depth',
      columns: '6"X18" Standard',
      beam: '1ft to 1.5ft Standard',
      mainDoor: 'Frame and Shutter worth Rs. 45,000/- 1 Unit only',
      pujaDoor: 'Frame and Shutter worth Rs. 22,000/- 1 Unit only',
      internalDoors: 'Frame and Shutter worth Rs. 10,000/- 1 Unit only (per room)',
      toiletDoors: 'Frame and Shutter worth Rs. 10,000/- 1 Unit only (per bathroom)',
      windows: 'UPVC / WPC - Rs. 550/- per sft',
      windowGrills: '10mm at 120mm spacing - Rs. 140/- per sft',
      livingDiningKitchenCorridor: 'Flooring cost Rs. 105/- per sft and Rs. 35/- per sft labour cost',
      bedrooms: 'Flooring cost Rs. 95/- per sft and Rs. 35/- per sft labour cost',
      bathroomFlooring: 'Flooring cost Rs. 55/- per sft and Rs. 25/- per sft labour cost',
      bathroomWall: 'Wall Cladding implementation upto - Rs.55/- per sft upto 7ft',
      stairCase: 'Flooring implementation upto - Rs.135/- per sft',
      balconyUtilityParking: 'Flooring implementation upto - Rs.45/- per sft',
      kitchenDado: 'Upto 2ft height - Wall Cladding implementation upto - Rs.55/- per sft',
      electricalWires: 'Anchor, Havells, Finolex, GM or Equivalent',
      electricalPipes: 'Standard ISI Brands',
      plumbingPipes: 'Ashirwad or Astral or equivalent',
      switches: 'Standard Range - GM, Crabtree or Equivalent',
      masterBathroom: 'Upto Rs. 42,000/- 1 Bathroom',
      powderRoom: 'Upto Rs. 18,000/- 1 Unit',
      otherBathrooms: 'Upto Rs. 32,500/- per Bathroom',
      waterproofing: 'Fosroc or Dr.Fixit or equivalent',
      plastering: 'Standard Finish',
      internalPaint: '2 Coats Putty, 2 Coats Paint - Asian Paints Apcolite Emulsion or equivalent',
      externalPaint: '2 Coats Putty, 2 Coats Paint - Asian Paints Apex Emulsion or equivalent',
      grillPainting: '1 coat anti corrosive and 1 coat enamel paint',
      stairCaseRailing: '1/2" or 3/4" SS Pipes - Basic Design',
      balconyRailing: '1/2" or 3/4" SS Pipes - Basic Design',
      parapetWall: '3.5ft height 4" Block Work - only for terrace',
      compoundWall: '4ft height 4" Block Work',
      mainGate: 'Upto Rs.15,000/-',
      waterSump: 'Hybrid RCC Wall - 10000 ltrs',
      overHeadTank: '2000 ltrs - PVC double layered',
      floorToCeilingHeight: '10ft',
      windowChajja: '1.5ft - 1 dimensional only',
      mainDoorSafetyLock: 'Rs. 5000/- 1 unit only',
      elevation: 'Materials plus labour upto Rs. 90,000/-',
      supervision: 'Periodic',
      architecturalDesign: 'Inclusive'
    }
  },
  {
    name: 'Luxury',
    price: 'Rs. 2295/- per sft',
    details: {
      steel: 'Fe 500/550 Jindal, JSW, Tata or equivalent',
      cement: '53 Grade & 43 Grade - Birla Super and Ultratech',
      wall: '6" and 4" Blocks or 9" and 4.5" Bricks',
      sand: 'M Sand and P Sand - Double Wash',
      aggregates: '20mm and 40mm',
      earthExcavation: '6ft Depth',
      columns: '6"X18" Standard or 9"X18" Maximum',
      beam: '1ft to 1.5ft Standard',
      mainDoor: 'Frame and Shutter worth Rs. 60,000/- 1 Unit only',
      pujaDoor: 'Frame and Shutter worth Rs. 30,000/- 1 Unit only',
      internalDoors: 'Frame and Shutter worth Rs. 12,000/- 1 Unit only (per room)',
      toiletDoors: 'Frame and Shutter worth Rs. 12,000/- 1 Unit only (per bathroom)',
      windows: 'UPVC / WPC - Rs. 600/- per sft',
      windowGrills: '10mm at 120mm spacing - Rs. 170/- per sft',
      livingDiningKitchenCorridor: 'Flooring cost Rs. 135/- per sft and Rs. 35/- per sft labour cost',
      bedrooms: 'Flooring cost Rs. 120/- per sft and Rs. 35/- per sft labour cost',
      bathroomFlooring: 'Flooring cost Rs. 65/- per sft and Rs. 25/- per sft labour cost',
      bathroomWall: 'Wall Cladding implementation upto - Rs.65/- per sft upto 7ft',
      stairCase: 'Flooring implementation upto - Rs.165/- per sft',
      balconyUtilityParking: 'Flooring implementation upto - Rs.55/- per sft',
      kitchenDado: 'Upto 2ft height - Wall Cladding implementation upto - Rs.65/- per sft',
      electricalWires: 'Havells, Finolex, GM or Equivalent',
      electricalPipes: 'Standard ISI Brands',
      plumbingPipes: 'Ashirwad or Astral or equivalent',
      switches: 'Standard Range - Legrand, Havells or Equivalent',
      masterBathroom: 'Upto Rs. 55,000/- 1 Bathroom',
      powderRoom: 'Upto Rs. 22,000/- 1 Unit',
      otherBathrooms: 'Upto Rs. 40,000/- per Bathroom',
      waterproofing: 'Fosroc or Dr.Fixit or equivalent',
      plastering: 'Standard Finish',
      internalPaint: '2 Coats Putty, 2 Coats Paint - Asian Paints Royale Emulsion or equivalent',
      externalPaint: '2 Coats Putty, 2 Coats Paint - Asian Paints Ultima Emulsion or equivalent',
      grillPainting: '1 coat anti corrosive and 1 coat enamel paint',
      stairCaseRailing: '1/2" or 3/4" SS Pipes - Basic Design',
      balconyRailing: '1/2" or 3/4" SS Pipes - Basic Design',
      parapetWall: '4ft height 4" Block Work - only for terrace',
      compoundWall: '5ft height 4" Block Work',
      mainGate: 'Upto Rs.24,000/-',
      waterSump: 'RCC - 10,000 ltrs',
      overHeadTank: '2000 ltrs - PVC triple layered',
      floorToCeilingHeight: '10ft',
      windowChajja: '1.5ft - 1 dimensional only',
      mainDoorSafetyLock: 'Rs. 10000/- 1 unit only',
      elevation: 'Material plus labour Rs. 1,20,000/-',
      supervision: 'Periodic',
      architecturalDesign: 'Inclusive'
    }
  }
];

const PackageSelector = () => {
  const [selectedPackage1, setSelectedPackage1] = useState('Classic');
  const [selectedPackage2, setSelectedPackage2] = useState('');
  const [openPackage, setOpenPackage] = useState('Classic');  
  const [activeAccordion, setActiveAccordion] = useState(null);

  const handleSelect1 = (e) => {
    const selected = e.target.value;
    setSelectedPackage1(selected);
    setSelectedPackage2('');
    setOpenPackage(selected);
  };

  const handleSelect2 = (e) => {
    const selected = e.target.value;
    setSelectedPackage2(selected);
    setSelectedPackage1('');
    setOpenPackage(selected);
  };

  const handleAccordionClick = (index) => {
    setActiveAccordion(index === activeAccordion ? null : index);
  };

  const renderPackageDetails = (pkg) => {
    if (!pkg) return null;
    const packageObj = packagesselect.find(p => p.name === pkg);
  
    return (
      <div className="package-details">
        <div className='display-flex'>
        <h4 className="package-title text-custom-blue">{packageObj.name} Package Details:</h4>
        <p>Price: {packageObj.price}</p>
        </div>
        <div className="accordion">
          {Object.keys(packageObj.details).map((key, index) => (
            <div key={key}>
              <div className="accordion-header" onClick={() => handleAccordionClick(index)}>
                <span>{key}</span>
                <button onClick={() => handleAccordionClick(index)}>
                  {activeAccordion === index ? "-" : "+"}
                </button>
              </div>
              <div className={`accordion-panel ${activeAccordion === index ? 'active' : ''}`}>
                <p className="text-custom-gray">{packageObj.details[key]}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  

  return (
    <>
    <h2 className='fonts mb-2'>Our Packages</h2>
    <p className=" is-website mb-2" style={{textAlign:"center"}}>
                Find the best home construction packages.
            </p>
            <div class="wrapper d-flex bb-current-location justify-center">
                <p className="mb-0 mr-2">
                    Currently showing for
                </p>
                <div class="form__group mb-4 pt-0">
                    <select onchange="getPackages()" name="city" id="city" className="form__field form__field--theme ">
                        <option selected="" value="BNG_KA_IN">Bengaluru</option>
                    </select>
                </div>
            </div>
    <div className="container-package bg-custom-gray">
      <h2 className="title text-custom-blue">Package Selector</h2>
      <div className="flexis">
        <div className="flex-columns">
          <select 
            className="select" 
            value={selectedPackage1} 
            onChange={handleSelect1}
          >
            <option value="" disabled>Select Package</option>
            {packagesselect.map((pkg) => (
              <option key={pkg.name} value={pkg.name} disabled={pkg.name === selectedPackage2}>
                {pkg.name}
              </option>
            ))}
          </select>
        </div>
        
        <div className="flex-columns">
          <select 
            className="select" 
            value={selectedPackage2} 
            onChange={handleSelect2}
          >
            <option value="" disabled>Select Package</option>
            {packagesselect.map((pkg) => (
              <option key={pkg.name} value={pkg.name} disabled={pkg.name === selectedPackage1}>
                {pkg.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {openPackage && renderPackageDetails(openPackage)}
    </div>
    </>
  );
};

export default PackageSelector;
