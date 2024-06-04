import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import './index.css';

const WhatsAppIcon = () => {
    return (
        <a href="https://wa.me/7411283407" className="whatsapp-float" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="whatsapp-icon" />
            <span class="tawk-badge tawk-flex tawk-flex-center tawk-flex-middle tawk-min-badge" style={{inset: "auto auto 35px 39px"}}>1</span>
        </a>
    );
};

export default WhatsAppIcon;
