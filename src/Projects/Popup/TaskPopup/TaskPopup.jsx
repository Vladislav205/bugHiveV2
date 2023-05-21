import React, { useState } from 'react';
import './TaskPopup.css';

function TaskPopup({ element }) {
  const [attachedImage, setAttachedImage] = useState(null);

  const handleAttachImage = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';

    input.onchange = (event) => {
      const file = event.target.files[0];
      if (file) {
        // Perform any desired logic with the selected file
        setAttachedImage(file);
      }
    };

    input.click();
  };

  return (
    <div className="modal_task">
      <div className="scrollable-content">
      <div className="modal-content_task">
        <h3>{element.title}</h3>
        <h2>{element.description}</h2>
        <button className="attach-button" onClick={handleAttachImage}>
          Attach Image
        </button>
        
          {attachedImage && (
            <img
              src={URL.createObjectURL(attachedImage)}
              alt="img"
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default TaskPopup;
