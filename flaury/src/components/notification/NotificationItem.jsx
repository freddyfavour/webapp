import React from "react";

const NotificationItem = ({ icon, message, details, isRead }) => {
  return (
    <div className="flex items-center gap-4 p-4 relative">
      {!isRead && (
        <div className="absolute right-1 w-2 h-2 bg-primary rounded-full"></div>
      )}
      <img src={icon} alt="" />
      <div>
        <p className="text-black text-sm font-semibold">{message}</p>
        <p className="text-black text-xs mt-2">{details}</p>
      </div>
    </div>
  );
};

export default NotificationItem;
