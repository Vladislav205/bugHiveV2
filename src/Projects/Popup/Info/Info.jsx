import React from 'react';
import './Info.css';

function Info({ element }) {
  return (
    <div className="modal_info">
      <div className="scrollable-content">
      <div className="modal-content_task">
        <h3>{element.assigned_from}</h3>
        <h2>{element.assigned_to}</h2>
        </div>
      </div>
    </div>
  );
}

export default Info;
