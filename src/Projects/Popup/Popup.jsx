import React from 'react';
import './Popup.css';
import TaskPopup from './TaskPopup/TaskPopup'
import CommentPopup from './CommentPopup/CommentPopup'
import Info from './Info/Info'

function Popup({ element, closeModal }) {
  const handleClickOutside = (event) => {
    if (event.target.classList.contains('modal')) {
      closeModal();
    }
  };

  return (
    <div className="modal" onClick={handleClickOutside}>
      <div className="modal-content">

        <TaskPopup element={element} />
        <Info element={element} />
        <CommentPopup element={element} />
        
        {/* Контент модального окна */}
        
      </div>
      <button className="modal-close" onClick={closeModal}>
          Close
        </button>
    </div>
  );
}

export default Popup;