import React, { useState } from 'react';
import './index.css'; // Import custom CSS

const packagesselect = [
  {
    name: 'Classic',
    price: 'Rs. 1980/- per sft',
    Structure: {
      Steel: 'Fe 500/550 Meenakshi, Kamadhenu, Prime Gold or Equivalent',
      Cement: '53 Grade & 43 Grade - Maha / Priya / Chettinad / Dalmia or Equivalent',
      Wall: '6" and 4" Blocks',
      Sand: 'M Sand and P Sand - Double Wash',
      Aggregates: '20mm and 40mm',
      EarthExcavation: '6ft Depth',
      Columns: '6"X18" Standard',
      Beam: '1ft to 1.5ft Standard',
    },
    DoorsAndWindows: {
      MainDoor: 'Frame and Shutter worth Rs. 30,000/- 1 Unit only (includes accessories and taxes)',
      PujaDoor: 'Frame and Shutter worth Rs. 14,000/- 1 Unit only',
      InternalDoors: 'Frame and Shutter worth Rs. 8,500/- 1 Unit only (per room)',
      ToiletDoors: 'Frame and Shutter worth Rs. 8,000/- 1 Unit only (per bathroom)',
      Windows: 'UPVC / WPC - Rs. 450/- per sft',
      WindowGrills: '10mm at 120mm spacing - Rs. 120/- per sft',
    },
    Flooring: {
      LivingDiningKitchenCorridor: 'Flooring cost Rs. 75/- per sft and Rs. 25/- per sft labour cost',
      Bedrooms: 'Flooring cost Rs. 75/- per sft and Rs. 25/- per sft labour cost',
      BathroomFlooring: 'Flooring cost Rs. 45/- per sft and Rs. 25/- per sft labour cost',
      BathroomWall: 'Wall Cladding implementation upto - Rs.45/- per sft upto 7ft',
      StairCase: 'Flooring implementation upto - Rs.95/- per sft',
      BalconyUtilityParking: 'Flooring implementation upto - Rs.35/- per sft',
      KitchenDado: 'Upto 2ft height - Wall Cladding implementation upto - Rs.45/- per sft',
    },
    ElectricalAndPlumbing: {
      ElectricalWires: 'Anchor, Havells, Finolex, GM or Equivalent',
      ElectricalPipes: 'Standard ISI Brands',
      PlumbingPipes: 'Ashirwad or Astral or equivalent',
      Switches: 'Basic Range - GM, Anchor or Equivalent',
    },
    Bathroom: {
      MasterBedroom: 'Upto Rs. 30,000/-  1 Bathroom',
      PowderRoom: 'Upto Rs. 12,000/- 1 Unit',
      OtherBathrooms: 'Upto Rs. 22,000/- per Bathroom',
      Waterproofing: 'Fosroc or Dr.Fixit or equivalent',
    },
    PaintingAndPlastering: {
      Plastering: 'Standard Finish',
      Painting: '2 Coats Putty, 2 Coats Paint',
      InternalPaint: 'Asian Paints Tractor emulsion or Equivalent',
      ExternalPaint: 'Asian Paints Ace emulsion or equivalent',
      Grills: '1 coat anti corrosive and 1 coat enamel paint',
    },
    Others: {
      StairCaseRailing: '1/2" or 3/4" MS Pipes - Basic Design',
      BalconyRailing: '1/2" or 3/4" MS Pipes - Basic Design',
      ParaphetWall: '3ft height 4" Block Work only for terrace',
      CompoundWall: 'NA',
      MainGate: 'NA',
      WaterSump: 'Block Wall - 8000 ltrs',
      OverHeadTank: '1500 ltrs - PVC double layered',
      FloorToCeilingHeight: '10ft',
      WindowChazza: '1 ft - 1 dimensional only',
      MaindoorSafetyLock: 'Rs. 2000/- 1 unit only',
      Elevation: 'Material plus labour upto Rs. 60,000/-',
      Supervison: 'Periodic',
      ArchitecturalDesign: 'Inclusive',
    },
  },
  {
    name: 'Premium',
    price: 'Rs. 2195/- per sft',
    Structure: {
      Steel: 'Fe 500/550 Indus, Jindal, Vizag or Equivalent',
      Cement: '53 Grade & 43 Grade - JSW / ACC / Zuari / Ultratech',
      Wall: '6" and 4" Blocks',
      Sand: 'M Sand and P Sand - Double Wash',
      Aggregates: '20mm and 40mm',
      EarthExcavation: '6ft Depth',
      Columns: '6"X18" Standard',
      Beam: '1ft to 1.5ft Standard',
    },
    DoorsAndWindows: {
      MainDoor: 'Frame and Shutter worth Rs. 45,000/- 1 Unit only',
      PujaDoor: 'Frame and Shutter worth Rs. 22,000/- 1 Unit only',
      InternalDoors: 'Frame and Shutter worth Rs. 10,000/- 1 Unit only (per room)',
      ToiletDoors: 'Frame and Shutter worth Rs. 10,000/- 1 Unit only (per bathroom)',
      Windows: 'UPVC / WPC - Rs. 550/- per sft',
      WindowGrills: '10mm at 120mm spacing - Rs. 140/- per sft',
    },
    Flooring: {
      LivingDiningKitchenCorridor: 'Flooring cost Rs. 105/- per sft and Rs. 35/- per sft labour cost',
      Bedrooms: 'Flooring cost Rs. 95/- per sft and Rs. 35/- per sft labour cost',
      BathroomFlooring: 'Flooring cost Rs. 55/- per sft and Rs. 25/- per sft labour cost',
      BathroomWall: 'Wall Cladding implementation upto - Rs.55/- per sft upto 7ft',
      StairCase: 'Flooring implementation upto - Rs.135/- per sft',
      BalconyUtilityParking: 'Flooring implementation upto - Rs.45/- per sft',
      KitchenDado: 'Upto 2ft height - Wall Cladding implementation upto - Rs.55/- per sft',
    },
    ElectricalAndPlumbing: {
      ElectricalWires: 'Anchor, Havells, Finolex, GM or Equivalent',
      ElectricalPipes: 'Standard ISI Brands',
      PlumbingPipes: 'Ashirwad or Astral or equivalent',
      Switches: 'Standard Range - GM , Crabtree or Equivalent',
    },
    Bathroom: {
      MasterBedroom: 'Upto Rs. 42,000/-  1 Bathroom',
      PowderRoom: 'Upto Rs. 18,000/- 1 Unit',
      OtherBathrooms: 'Upto Rs. 32,500/-  per Bathroom',
      Waterproofing: 'Fosroc or Dr.Fixit or equivalent',
    },
    PaintingAndPlastering: {
      Plastering: 'Standard Finish',
      Painting: '2 Coats Putty, 2 Coats Paint',
      InternalPaint: 'Asian Paints Apcolite Emulsion or equivalent',
      ExternalPaint: 'Asian Paints Apex Emulsion or equivalent',
      Grills: '1 coat anti corrosive and 1 coat enamel paint',
    },
    Others: {
      StairCaseRailing: '1/2" or 3/4" SS Pipes - Basic Design',
      BalconyRailing: '1/2" or 3/4" SS Pipes - Basic Design',
      ParaphetWall: '3.5ft height 4" Block Work - only for terrace',
      CompoundWall: '4ft height 4" Block Work',
      MainGate: 'Upto Rs.15,000/-',
      WaterSump: 'Hybrid RCC Wall - 10000 ltrs',
      OverHeadTank: '2000 ltrs - PVC double layered',
      FloorToCeilingHeight: '10ft',
      WindowChazza: '1.5ft - 1 dimensional only',
      MaindoorSafetyLock: 'Rs. 5000/- 1 unit only',
      Elevation: 'Materials plus labour upto Rs. 90,000/-',
      Supervison: 'Periodic',
      ArchitecturalDesign: 'Inclusive',
    },
  },
  {
    name: 'Luxury',
    price: 'Rs. 2295/- per sft',
    Structure: {
      Steel: 'Fe 500/550 Jindal, JSW, Tata or equivalent',
      Cement: '53 Grade & 43 Grade - Birla Super and Ultratech',
      Wall: '6" and 4" Blocks or 9" and 4.5" Bricks',
      Sand: 'M Sand and P Sand - Double Wash',
      Aggregates: '20mm and 40mm',
      EarthExcavation: '6ft Depth',
      Columns: '6"X18" Standard or 9"X18" Maximun',
      Beam: '1ft to 1.5ft Standard',
    },
    DoorsAndWindows: {
      MainDoor: 'Frame and Shutter worth Rs. 60,000/- 1 Unit only',
      PujaDoor: 'Frame and Shutter worth Rs. 30,000/- 1 Unit only',
      InternalDoors: 'Frame and Shutter worth Rs. 12,000/- 1 Unit only (per room)',
      ToiletDoors: 'Frame and Shutter worth Rs. 12,000/- 1 Unit only (per bathroom)',
      Windows: 'UPVC / WPC - Rs. 600/- per sft',
      WindowGrills: '10mm at 120mm spacing - Rs. 170/- per sft',
    },
    Flooring: {
      LivingDiningKitchenCorridor: 'Flooring cost Rs. 135/- per sft and Rs. 35/- per sft labour cost',
      Bedrooms: 'Flooring cost Rs. 120/- per sft and Rs. 35/- per sft labour cost',
      BathroomFlooring: 'Flooring cost Rs. 65/- per sft and Rs. 25/- per sft labour cost',
      BathroomWall: 'Wall Cladding implementation upto - Rs.65/- per sft upto 7ft',
      StairCase: 'Flooring implementation upto - Rs.165/- per sft',
      BalconyUtilityParking: 'Flooring implementation upto - Rs.55/- per sft',
      KitchenDado: 'Upto 2ft height - Wall Cladding implementation upto - Rs.65/- per sft',
    },
    ElectricalAndPlumbing: {
      ElectricalWires: 'Havells, Finolex, GM or Equivalent',
      ElectricalPipes: 'Standard ISI Brands',
      PlumbingPipes: 'Ashirwad or Astral or equivalent',
      Switches: 'Standard Range - Legrand , Havells or Equivalent',
    },
    Bathroom: {
      MasterBedroom: 'Upto Rs. 55,000/- 1 Bathroom',
      PowderRoom: 'Upto Rs. 22,000/- 1 Unit',
      OtherBathrooms: 'Upto Rs. 40,000/- 1 Bathroom',
      Waterproofing: 'Fosroc or Dr.Fixit or equivalent',
    },
    PaintingAndPlastering: {
      Plastering: 'Standard Finish',
      Painting: '2 Coats Putty, 2 Coats Paint',
      InternalPaint: 'Asian Paints Royale Emulsion or equivalent',
      ExternalPaint: 'Asian Paints Ultima Emulsion or equivalent',
      Grills: '1 coat anti corrosive and 1 coat enamel paint',
    },
    Others: {
      StairCaseRailing: '1/2" or 3/4" SS Pipes - Basic Design',
      BalconyRailing: '1/2" or 3/4" SS Pipes - Basic Design',
      ParaphetWall: '4ft height 4" Block Work - only for terrace',
      CompoundWall: '5ft height 4" Block Work',
      MainGate: 'Upto Rs.24,000/-',
      WaterSump: 'RCC - 10,000/-',
      OverHeadTank: '2000 ltrs - PVC triple layered',
      FloorToCeilingHeight: '10ft',
      WindowChazza: '1.5ft - 1 dimensional only',
      MaindoorSafetyLock: 'Rs. 10000/- 1 unit only',
      Elevation: 'Material plus labour Rs. 1,20,000/-',
      Supervison: 'Periodic',
      ArchitecturalDesign: 'Inclusive',
    },
  },
];

const PackageSelector = () => {
  const [selectedPackage1, setSelectedPackage1] = useState('Classic');
  const [openPackage, setOpenPackage] = useState('Classic');
  const [activeAccordion, setActiveAccordion] = useState(null);

  const handleSelect1 = (e) => {
    const selected = e.target.value;
    setSelectedPackage1(selected);
    setOpenPackage(selected);
  };

  const handleAccordionClick = (index) => {
    setActiveAccordion(index === activeAccordion ? null : index);
  };

  const renderPackageDetails = (pkg) => {
    if (!pkg) return null;
    const packageObj = packagesselect.find((p) => p.name === pkg);

    return (
      <div className="package-details">
        <div className="display-flex">
          <h4 className="package-title text-custom-blue">{packageObj.name} Package Details:</h4>
          <p style={{ fontSize: "12px" }}>Price: {packageObj.price}</p>
        </div>
        <div className="accordion">
          {Object.keys(packageObj).map((category, index) => (
            category !== 'name' && category !== 'price' &&
            <div key={index}>
              <div className="accordion-header" onClick={() => handleAccordionClick(index)}>
                <span className="side-heading">{category}</span>
                <button onClick={() => handleAccordionClick(index)}>
                  {activeAccordion === index ? "-" : "+"}
                </button>
              </div>
              <div className={`accordion-panel ${activeAccordion === index ? 'active' : ''}`}>
                {Object.keys(packageObj[category]).map((key, idx) => (
                  <p key={idx} className="text-custom-gray">
                    <strong>{key}: </strong>
                    {packageObj[category][key]}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="small-space" />
      <h2 className='fonts mb-2'>Our Packages</h2>
      <p className=" is-website mb-2" style={{ textAlign: "center" }}>
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
                <option key={pkg.name} value={pkg.name} disabled={pkg.name === selectedPackage1}>
                  {pkg.name}
                </option>
              ))}
            </select>
          </div>

          {/* <div className="flex-columns">
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
        </div> */}
        </div>

        {openPackage && renderPackageDetails(openPackage)}
      </div>
    </>
  );
};

export default PackageSelector;
