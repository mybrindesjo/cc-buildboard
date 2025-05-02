import React, { useState, useEffect } from 'react';

const Profile = () => {
  const [profileImage, setProfileImage] = useState('/default-profile.png');

  useEffect(() => {
    const savedImage = localStorage.getItem('profileImage');
    if (savedImage) {
      setProfileImage(savedImage);
    }
  }, []);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const base64Image = reader.result;
        setProfileImage(base64Image);
        localStorage.setItem('profileImage', base64Image);
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => {
    document.getElementById('profileImageInput').click();
  };

  return (
    <div className="profile-container">
      <div className="profile-image" onClick={triggerFileInput}>
        <img
          src={profileImage}
          alt="Profile"
          className="profile-image-img"
        />
        <input
          id="profileImageInput"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="profile-image-input"
          style={{ display: 'none' }} // Hide the file input
        />
      </div>
        <div className="welcome-message">
            <h1>Välkommen, My!</h1>
        </div>
        <div className="divider"></div>
    </div>
  );
};

export default Profile;
