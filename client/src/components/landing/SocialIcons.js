import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './index.css'

const SocialIcons = ({ Icons }) => {
  const renderIcon = (name) => {
    switch (name) {
      case 'facebook':
        return <FaFacebook />;
      case 'twitter':
        return <FaTwitter />;
      case 'instagram':
        return <FaInstagram />;
      case 'linkedin':
        return <FaLinkedin />;
      default:
        return null;
    }
  };

  return (
    <div className="text-teal-500">
      {Icons.map((icon, index) => (
        <span
          key={index}
          className="p-2 cursor-pointer inline-flex items-center
                rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-teal-500
                duration-300 "
        >
          {renderIcon(icon.name)}
        </span>
      ))}
    </div>
  );
};

export default SocialIcons;
