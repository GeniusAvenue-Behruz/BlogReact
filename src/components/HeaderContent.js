import React from 'react';
import '../styles/HeaderContents.css'; // Importing the CSS file for styling
import myPicture from '../imgs/logo.png'; // Update the path to your image

const HeaderContents = () => {
  return (
    <div className="header__contents">
      <div className='container'>
      <div className="text-container">
        <h3>Welcome to Royal Coder Labaratory</h3>
        <h1>What do we do here?</h1>
        <p>We will explore the junction of technology and creativity with Royal Coder Lab. Join us on a journey through innovative development, design, and education. Let's build something great together.</p>
      </div>
      <div className="image-container">
        <img src={myPicture} alt="Royal Coder" className="profile-picture"/>
      </div>
      </div>
    </div>
  );
}

export default HeaderContents;
