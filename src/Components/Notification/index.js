import React from 'react';
import './index.css'; // Import your CSS file for styles

const Notification = () => {
  const message = "SUJOG Portal will be undergoing server maintenance at the State Data Centre from 8:00 PM on 10th July 2026 to 8:00 PM on 11th July 2026. During this period, the portal will be temporarily unavailable for any business transaction. ";

  return (
    <div className="notification-bar">
      <p className="notification-text">{message}</p>
    </div>
  );
};

export default Notification;
