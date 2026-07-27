import React from 'react';
import './index.css'; // Import your CSS file for styles

const Notification = () => {
  const message = "SUJOG Services will be temporarily unavailable from 23rd October 2025 3:00 PM onwards, for SDC storage maintenance. Services will resume once the activity is completed.";

  return (
    <div className="notification-bar">
      <p className="notification-text">{message}</p>
    </div>
  );
};

export default Notification;
