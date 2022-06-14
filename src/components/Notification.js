import React from "react";

function Notification({ showNotification }) {
  return (
    <>
      {/* notification shown when the letter is typed twice. This adds the css class show and "" */}
      <div
        className={`notification-container ${showNotification ? "show" : ""}`}
      >
        <p>You have already entered this letter</p>
      </div>
    </>
  );
}

export default Notification;
