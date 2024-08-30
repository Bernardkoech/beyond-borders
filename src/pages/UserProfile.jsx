import React from 'react';
import './UserProfile.css';

const UserProfile = () => {
  // Dummy user data
  const dummyUserData = {
    displayName: 'Rteiyan',
    email: 'rteiyan@example.com',
    phoneNumber: '123-456-7890',
    photoURL: 'https://scontent.cdninstagram.com/v/t51.2885-19/454154458_1841219486399762_244180508209965861_n.jpg?stp=cp0_dst-jpg_s110x80&_nc_cat=107&ccb=1-7&_nc_sid=fcb8ef&_nc_ohc=buOLpTxwB9QQ7kNvgG7VbNv&_nc_ht=scontent.cdninstagram.com&oh=00_AYCCytC-Adwq9t8Sx3143jPQwtIEMfZb62kEbUIfTX0Ykg&oe=66D7909C' // Placeholder URL for dummy profile picture
  };

  return (
    <div className="user-profile-page">
      <div className="profile-card">
        <div className="profile-photo">
          <img src={dummyUserData.photoURL || 'default-profile.png'} alt={`${dummyUserData.displayName || 'User'}'s profile`} />
        </div>
        <div className="profile-info">
          <h2>{dummyUserData.displayName || 'User'}</h2>
          <p>Email: {dummyUserData.email}</p>
          <p>Phone: {dummyUserData.phoneNumber || 'N/A'}</p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
