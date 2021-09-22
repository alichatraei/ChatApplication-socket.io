import React from "react";
import emoji from "react-emoji";
import "./Messages.css";
const Message = ({ name, message: { user, text } }) => {
  let isISentMessage = false;
  const trimmedName = name.trim().toLowerCase();
  if (trimmedName === user) isISentMessage = true;
  return (
    <div className="w-100 h-100">
      {isISentMessage ? (
        <div className="myMessage h-100">
          <div className="messageAuthor w-100 h-100">
            <p className="w-100">{user}</p>
          </div>
          <div className="messageText">{emoji.ReactEmoji(text)}</div>
        </div>
      ) : (
        <div className="myMessage h-100">
          <div className="messageAuthor w-100 h-100">
            <p className="w-100">{user}</p>
          </div>
          <div className="messageText">{emoji.ReactEmoji(text)}</div>
        </div>
      )}
    </div>
  );
};

export default Message;
