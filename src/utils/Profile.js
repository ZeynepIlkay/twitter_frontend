import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSearch, faBell, faEnvelope, faUser, faEllipsisH, faUsers } from '@fortawesome/free-solid-svg-icons';
import './profile.css';
import { FaSlash } from 'react-icons/fa';

const Profile = () => {
  return (
    <div className="profileContainer grid grid-cols-3 h-screen">
      {/* Left Column - Navigation */}
      <div className="left-container bg-black text-white flex flex-col items-center justify-between p-5">
      <div className="logo">
          {/* Placeholder for the logo */}
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="logox" viewBox="0 0 16 16">
            <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
          </svg>
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
              <span className="icon-container">
                <FaSlash className="nav-icon" />
              </span>
              <span>Grok</span>
            </a>
            <a href="/community" className="nav-link">
              <FontAwesomeIcon icon={faUsers} className="nav-icon" /> <span>Topluluklar</span>
            </a>
            <a href="/premium" className="nav-link">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="premium-logo"
                viewBox="0 0 16 16"
              >
                <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
              </svg>
              <span>Premium</span>
            </a>

            <a href="/institutional" className="nav-link">
              <img src="img/kurumsal.png" alt="Kurumsal" className="nav-icons" style={{ width: '35px', height: '35px' }} />
              <span>Kurumsal</span>
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
        
          <button className="send-button w-full">Gönder</button>
        

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
      <div className="right-container">
      {/* Arama Kutusu */}
          
      <div className="search-container">
        <div className="input-wrapper">
          <span className="search-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon h-5 w-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-4.35-4.35M16.5 10.5a6 6 0 11-12 0 6 6 0z"
              />
            </svg>
          </span>
          <input
            type="text"
            placeholder="Ara"
            className="search-input"
          />
        </div>
      </div>




      {/* Takip Edilebilecek Profil Önerisi */}
      <div className="profile-suggestion">
        <div className="suggestion-info">
        <h2>Bunları beğenebilirsin</h2>
        <div className="profile-info-right">
          <img
            src="https://tecdn.b-cdn.net/img/new/avatars/2.webp"
            alt="Profile"
            className="profile-photo"
          />
          <div className="profile-text">
            <h4>Gökben Hızlı Sayar</h4>
            <p className="username">@hizlisayar</p>
          </div>
          <button className="follow-button">Takip et</button>
        </div>

        <div className="profile-info-right">
          <img
            src="https://tecdn.b-cdn.net/img/new/avatars/2.webp"
            alt="Profile"
            className="profile-photo"
          />
          <div className="profile-text">
            <h4>Gökben Hızlı Sayar</h4>
            <p className="username">@hizlisayar</p>
          </div>
          <button className="follow-button">Takip et</button>
        </div>

        <div className="profile-info-right">
          <img
            src="https://tecdn.b-cdn.net/img/new/avatars/2.webp"
            alt="Profile"
            className="profile-photo"
          />
          <div className="profile-text">
            <h4>Gökben Hızlı Sayar</h4>
            <p className="username">@hizlisayar</p>
          </div>
          <button className="follow-button">Takip et</button>
        </div>

        <button className="more-button">Daha fazla göster</button>
        
      </div>
      </div>

      {/* İlgini Çekebilecek Gündemler */}
      <div className="trending">
        <h2>İlgini çekebilecek gündemler</h2>
        <div className="trending-item">
          <p>Akbank</p>
          <p className="posts-count">36,2 B posts</p>
        </div>
        <div className="trending-item">
          <p>Fulya Öztürk</p>
          <p className="posts-count">14,3 B posts</p>
        </div>
        <div className="trending-item">
          <p>Arapların</p>
          <p className="posts-count">3.454 posts</p>
        </div>
        <div className="trending-item">
          <p>Van Ferit Melen Havalimanı'nda</p>
          <p className="posts-count">2.124 posts</p>
        </div>
        <button className="more-button">Daha fazla göster</button>
      </div>

      {/* Footer */}
      <footer className="footer">
        
          <span >Hizmet Şartları</span>
          <span>Gizlilik Politikası</span>
          <span>Çerez Politikası</span>
          <span>Imprint</span>
          <span>Erişilebilirlik</span>
          <span>Reklam bilgisi</span>
          <span>Daha fazla ...</span>
        
        <p>&copy; 2024 X Corp.</p>
      </footer>
    </div>

    </div>
  );
};

export default Profile;
