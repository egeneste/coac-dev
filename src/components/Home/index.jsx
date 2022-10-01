import React from 'react';
import './home.style.css';
const index = () => {
  return (
    <div>
      <div className="main">
        <div className="mainpicture">
          <img src="./main-picture.jpeg" alt="" className="company" />
        </div>
        <div className="main-left"></div>
        <div className="main-right"></div>
      </div>
    </div>
  );
};

export default index;
