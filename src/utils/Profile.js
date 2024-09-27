import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSearch, faBell, faEnvelope, faUser, faEllipsisH, faUsers, faGem, faBuilding } from '@fortawesome/free-solid-svg-icons';
import './profile.css';

const Profile = () => {
  return (
    <div className="profileContainer grid grid-cols-3 h-screen">
      {/* Left Column - Navigation */}
      <div className="left-container bg-black text-white flex flex-col items-center justify-between p-5">
      <div className="logo">
            {/* Placeholder for the logo */}
            <img src="./img/x-logo.jpg" alt="Logo" className="logox" />
          </div>
        {/* Logo and Navigation */}
        <div>
          
          <nav className="space-y-4">
            <a href="/home" className="nav-link">
              <FontAwesomeIcon icon={faHome} className="nav-icon" /> <span>Anasayfa</span>
            </a>
            <a href="/explore" className="nav-link">
              <FontAwesomeIcon icon={faSearch} className="nav-icon" /> <span>Keşfet</span>
            </a>
            <a href="/notifications" className="nav-link">
              <FontAwesomeIcon icon={faBell} className="nav-icon" /> <span>Bildirimler</span>
            </a>
            <a href="/messages" className="nav-link">
              <FontAwesomeIcon icon={faEnvelope} className="nav-icon" /> <span>Mesajlar</span>
            </a>
            <a href="/grok" className="nav-link">
              <FontAwesomeIcon icon={faEnvelope} className="nav-icon" /> <span>Grok</span>
            </a>
            <a href="/community" className="nav-link">
              <FontAwesomeIcon icon={faUsers} className="nav-icon" /> <span>Topluluklar</span>
            </a>
            <a href="/premium" className="nav-link">
              <FontAwesomeIcon icon={faGem} className="nav-icon" /> <span>Premium</span>
            </a>
            <a href="/institutional" className="nav-link">
              <FontAwesomeIcon icon={faBuilding} className="nav-icon" /> <span>Kurumsal</span>
            </a>
            <a href="/profile" className="nav-link">
              <FontAwesomeIcon icon={faUser} className="nav-icon" /> <span>Profil</span>
            </a>
            <a href="/more" className="nav-link">
              <FontAwesomeIcon icon={faEllipsisH} className="nav-icon" /><span>Daha fazla</span>
            </a>
          </nav>
        </div>

        {/* Post Button */}
        <div>
          <button className="send-button w-full">Gönder</button>
        </div>

        {/* Profile Info */}
        <div className="profile-info-container mt-8">
        <div className="profile-info">
        <img src="https://i.pravatar.cc/150?img=3" alt="Profile" className="profile-image" />

            <div>
            <h4 className="font-semibold">İlkay Şahin</h4>
            <p className="text-gray-500">@zeynepilk_</p>
            </div>
        </div>
        <div className="more-options">⋮</div>
        </div>


      </div>

      {/* Middle Column - Profile Content */}
      <div className="middle-container bg-gray-100 p-5 text-white">
        <h1 className="text-xl font-semibold">Profile Content</h1>
      </div>

      {/* Right Column - Additional Widgets */}
      <div className="right-container bg-gray-200 p-5 text-white">
        <h1 className="text-xl font-semibold">Widgets/Extras</h1>
      </div>
    </div>
  );
};

export default Profile;
