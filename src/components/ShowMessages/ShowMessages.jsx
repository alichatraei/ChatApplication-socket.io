import React from "react";
import Message from "../Message/Message";
import ScrollToBottom from "react-scroll-to-bottom";
import "./ShowMessages.css";
const ShowMessages = ({ name, messages }) => {
  console.log(messages);

  return (
    <ScrollToBottom className="chatboxContainer" mode="bottom">
      {messages.map((message, i) => (
        <div key={i}>
          <Message message={message} name={name} />
        </div>
      ))}
    </ScrollToBottom>
  );
};

export default ShowMessages;
