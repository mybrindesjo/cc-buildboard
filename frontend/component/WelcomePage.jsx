import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const WelcomePage = () => {
  const [name, setName] = useState('');
  const [profileImage, setProfileImage] = useState('');
  const navigate = useNavigate();

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    if (name && profileImage) {
      localStorage.setItem('profileName', name);
      localStorage.setItem('profileImage', profileImage);
      navigate('/app'); // Redirect to the main app
    } else {
      alert('Please fill in both fields.');
    }
  };

  return (
    <div className="welcome-page" >
      <div className="welcome-container">
        <h1>Welcome! Set up your profile</h1>
        <div className="profile-setup">
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />
          {profileImage && (
            <img
              src={profileImage}
              alt="Profile Preview"
              className="profile-preview"
            />
          )}
          <button onClick={handleSubmit}>Save and Continue</button>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
