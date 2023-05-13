import React from 'react';
import './Modal.css'

const Modal = ({ image, closeModal }) => {
  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content">
        <img className="modal-image" src={image.imageSrc} alt={image.title} />
      </div>
    </div>
  );
};

export default Modal;
