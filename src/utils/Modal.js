import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

import './Modal.css'; // Stil dosyası

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null; // Modal açık değilse hiçbir şey göstermez.

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        <div className="modal-header">
          <h6>Taslaklar</h6>
        </div>
        <textarea placeholder="Neler oluyor?" className="modal-textarea"></textarea>
        <div className="modal-footer">
        <div className="modal-options">
            <i className="fas fa-image"></i>
            <i className="fas fa-gif"></i>
            <i className="fas fa-poll"></i>
            <i className="fas fa-smile"></i>
            <i className="fas fa-calendar-alt"></i>
            <i className="fas fa-map-marker-alt"></i>
        </div>

          <button className="send-button-modal">Gönder</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
