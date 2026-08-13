import React from 'react';
import './index.css'; // Import your CSS file for styles

const Notification = () => {
  const message = "SUJOG Portal will be undergoing server maintenance at the State Data Center from 7:00 PM on 13th August 2026 to 1:00 AM on 14th August 2026. During this period, the portal will be temporarily unavailable for business transaction.";

  return (
    <div className="notification-bar">
      <p className="notification-text">{message}</p>
    </div>
  );
};

export default Notification;
