import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSearch, faBell, faEnvelope, faUser, faEllipsisH, faUsers } from '@fortawesome/free-solid-svg-icons';
import './profile.css';
import { FaSlash, FaHeart, FaComment, FaRetweet, FaEllipsisH, FaChartBar, FaBookmark, FaDownload } from 'react-icons/fa';


const Profile = () => {
  
  const [posts, setPosts] = useState([]);

  const [activeTab, setActiveTab] = useState('posts'); // Aktif sekmeyi takip et

  // Gönderileri filtreleme fonksiyonu
  const getFilteredPosts = () => {
    switch (activeTab) {
      case 'likes':
        return posts.filter(post => post.isFavorited === true);
      case 'posts':
        return posts.filter(post => post.username === "İlkay Şahin");
      case 'replies':
        return posts.filter(post => post.comments > 0);
      case 'media' :
        return posts.filter(post => post.image !== null && post.username === "İlkay Şahin")
      default:
        return posts;
    }
  };  

  useEffect(() => {
    // XHR ile JSON verilerini çekiyoruz
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "./posts.json", true);
    xhr.onload = function () {
      if (xhr.status === 200) {
        const data = JSON.parse(xhr.responseText);
        setPosts(data);
      }
    };
    xhr.send();
  }, []);

  // Beğeniyi yönetme fonksiyonu
  const handleLike = (index) => {
    const updatedPosts = [...posts];
    updatedPosts[index].liked = !updatedPosts[index].liked;
    updatedPosts[index].likes += updatedPosts[index].liked ? 1 : -1;
    setPosts(updatedPosts);
  };

  // Retweet yönetme fonksiyonu
  const handleRetweet = (index) => {
    const updatedPosts = [...posts];
    updatedPosts[index].retweeted = !updatedPosts[index].retweeted;
    updatedPosts[index].retweets += updatedPosts[index].retweeted ? 1 : -1;
    setPosts(updatedPosts);
  };
 

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
        <img src="./img/pp.jpg" alt="Profile" className="profile-image" />

            <div>
            <h4 className="font-semibold">İlkay Şahin</h4>
            <p className="text-gray-500">@xxilkay</p>
            </div>
        </div>
        <div className="more-options">⋮</div>
        </div>


      </div>

      <div className="middle-container bg-gray-100 p-5">
        {/* Geri Tuşu, Kullanıcı İsmi ve Gönderi Sayısı */}
          <div className="header-container">
            <button className="back-button">←</button>
            <div className="header-info">
              <h1 className="user-name-header">İlkay Şahin</h1>
              <p className="post-count">3 Gönderi</p>
            </div>
          </div>
      
        {/* Arka plan resmi */}
        <div className="background-container">
          <img
            src="./img/bg.jpg"
            alt="Background"
            className="background-image"
          />
          {/* Profil resmi */}
          <img
            src="./img/pp.jpg"
            alt="Profile"
            className="middle-profile-image"
          />
        </div>
        
        {/* Kullanıcı Bilgileri */}
        
        <div className="middle-profile-info">
        <button className='edit-profile'>Profili düzenle</button>
          <h1 className="middle-profile-name">İlkay Şahin</h1>
          <p className="middle-profile-username">@xxilkay</p>
          <p className="middle-profile-bio">bir garip hâl</p>
          <p className="middle-profile-details">
            <span className="profile-location">📍Turkey</span> Eylül 2012 tarihinde katıldı
          </p>
          <p className="profile-follow-info">25 Takip Edilen 29 Takipçi</p>
        </div>

        {/* Menü */}
        <div className="profile-menu">
          <ul>
            <li className={activeTab === 'posts' ? 'active' : ''} onClick={() => setActiveTab('posts')}>Gönderiler</li>
            <li className={activeTab === 'replies' ? 'active' : ''} onClick={() => setActiveTab('replies')}>Yanıtlar</li>
            <li className={activeTab === 'featured' ? 'active' : ''} onClick={() => setActiveTab('featured')}>Öne Çıkanlar</li>
            <li className={activeTab === 'articles' ? 'active' : ''} onClick={() => setActiveTab('articles')}>Makaleler</li>
            <li className={activeTab === 'media' ? 'active' : ''} onClick={() => setActiveTab('media')}>Medya</li>
            <li className={activeTab === 'likes' ? 'active' : ''} onClick={() => setActiveTab('likes')}>Beğeni</li>
          </ul>
        </div>

        {/* Gönderiler */}
        <div className="posts">
        {activeTab === 'articles' ? (
          <div className="article-prompt text-center">
            <h1 className="premium-text-header font-bold text-2xl">X'te Makale yaz</h1>
            <p className='premium-text'>X'te Makale yazmak için Premium+ abonesi olman gerekir</p>
            <button className="premium-button mt-4">Premium+ kademesine yükselt</button>
          </div>
        ) : activeTab === 'featured' ? (
          <div className="featured-prompt text-center">
            <h1 className="featured-text-header font-bold text-2xl">Profilinde öne çıkar</h1>
            <p className='featured-text'>Profilinde gönderileri öne çıkarmak için Premium abonesi olman gerekir.</p>
            <button className="featured-button mt-4">Premium+ kademesine yükselt</button>
          </div>
        ) : (getFilteredPosts().map((post, index) => (
          <div className="post-card bg-white shadow-lg p-4 mb-4 rounded-lg" key={index}>
            {/* Gönderen Bilgileri */}
            <div className="post-header flex justify-between items-center">
              <div className="post-user-info flex items-center">
                <img
                  src={post.avatar}
                  alt="User Avatar"
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <span className="font-bold">{post.username}</span>{" "}
                  <span className="text">{post.handle}</span> ·{" "}
                  <span className="text-date">{post.date}</span>
                </div>
              </div>
              {/* Üç Nokta Menüsü */}
              <FaEllipsisH className="dot-dot-dot" />
            </div>

            {/* Gönderi İçeriği */}
            <div className="post-content mt-3">
              <p>{post.content}</p>
              {post.image && (
                <img
                  src={post.image}
                  alt="Post Content"
                  className="mt-3 w-full rounded-lg"
                />
              )}
            </div>

            {/* Gönderi İkonları */}
            <div className="post-actions flex justify-between items-center mt-4 text-gray-600">
              <div className="flex items-center">
                <FaComment className="mr-2 cursor-pointer" />
                <span>{post.comments}</span>
              </div>
              <div className="flex items-center">
                <FaRetweet
                  className={`mr-2 cursor-pointer ${post.retweeted ? 'text-green-500' : ''}`}
                  onClick={() => handleRetweet(index)}
                />
                <span>{post.retweets}</span>
              </div>
              <div className="flex items-center">
                <FaHeart
                  className={`mr-2 cursor-pointer ${post.isFavorited ? 'text-red-500' : ''}`}
                  onClick={() => handleLike(index)}
                />
                <span>{post.likes}</span>
              </div>
              <FaChartBar className="cursor-pointer" />
              <FaBookmark className="cursor-pointer" />
              <FaDownload className="cursor-pointer" />
            </div>
          </div>
        ))
      )}
      </div>
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
            src="https://pagedone.io/asset/uploads/1704275541.png"
            alt="Profile"
            className="profile-photo"
          />
          <div className="profile-text">
            <h4>Emre Gökbelen</h4>
            <p className="username">@kirmizikedi</p>
          </div>
          <button className="follow-button">Takip et</button>
        </div>

        <div className="profile-info-right">
          <img
            src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1061&amp;q=80"
            alt="Profile"
            className="profile-photo"
          />
          <div className="profile-text">
            <h4>Aysu Nevra</h4>
            <p className="username">@kıtırıkçıl</p>
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
            <h4>Yakup Mert</h4>
            <p className="username">@mertyakup</p>
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
          <div className="trending-text">
            <p className="posts-count">İş dünyası ve finans</p>
            <p className="trending-topic">Akbank</p>
            <p className="posts-count">41,8 B posts</p>
          </div>
          <div className="menu-dots">•••</div>
        </div>

        <div className="trending-item">
          <div className="trending-text">
            <p className="posts-count">Türkiye tarihinde gündemde</p>
            <p className="trending-topic">Fulya Öztürk</p>
            <p className="posts-count">14,3 B posts</p>
          </div>
          <div className="menu-dots">•••</div>
        </div>

        <div className="trending-item">
          <div className="trending-text">
            <p className="posts-count">Türkiye tarihinde gündemde</p>
            <p className="trending-topic">Eda Erdem</p>
            <p className="posts-count">3.454 posts</p>
          </div>
          <div className="menu-dots">•••</div>
        </div>

        <div className="trending-item">
          <div className="trending-text">
            <p className="posts-count">Gündemdekiler</p>
            <p className="trending-topic">Van Ferit Melen Havalimanı'nda</p>
            <p className="posts-count">2.124 posts</p>
          </div>
          <div className="menu-dots">•••</div>
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
