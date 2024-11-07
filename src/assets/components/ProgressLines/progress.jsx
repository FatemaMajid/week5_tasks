import React from 'react';
import './Progress.css';

const Progress = ({ currentPage }) => {
  return (
    <div className="line">
      <div className={`l1 ${currentPage >= 1 ? 'colored' : ''}`}></div>
      <div className={`l2 ${currentPage >= 2 ? (currentPage === 2 ? 'half-colored' : 'colored') : ''}`}></div>
      <div className={`l2 ${currentPage >= 3 ? (currentPage === 3 ? 'half-colored' : 'colored') : ''}`}></div>
    </div>
  );
};

export default Progress;
