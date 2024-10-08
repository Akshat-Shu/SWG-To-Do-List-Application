import React, { useState, useEffect } from 'react';
import './informationBox.css';

function InfoBox({ message, isVisible, onClose }) {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  return (
    isVisible && (
      <div className="info-box">
        <img src='assets/info-symbol.png' className='info-symbol'></img>
        {message}
      </div>
    )
  );
}

export default InfoBox;