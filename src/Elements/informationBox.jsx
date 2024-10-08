import React, { useState, useEffect } from 'react';
import './informationBox.css';

function InfoBox({ message, isVisible, onClose }) {
  const [visibleClass, setVisibleClass] = useState('');

  useEffect(() => {
    if (isVisible) {
      setVisibleClass('visible');
      const timer = setTimeout(() => {
        setVisibleClass('');
        onClose();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  return (
    isVisible && (
      <div className={`info-box ${visibleClass}`}>
        <img src='assets/info-symbol.png' className='info-symbol'></img>
        {message}
      </div>
    )
  );
}

export default InfoBox;