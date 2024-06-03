import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import './index.css';

const WhatsAppIcon = () => {
    return (
        <a href="https://wa.me/7411283407" className="whatsapp-float" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="whatsapp-icon" />
        </a>
    );
};

export default WhatsAppIcon;
