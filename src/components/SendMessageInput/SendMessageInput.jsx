import React from "react";

const SendMessageInput = ({ message, setMessage, sendMessage }) => {
  return (
    <form className="formContainer d-flex justify-content-between">
      <div className="inputContainer w-100">
        <input
          type="text"
          value={message}
          className="w-100 p-3 form-control"
          placeholder="پیامتو بفرس"
          onChange={(event) => setMessage(event.target.value)}
          onKeyPress={(event) => event.key === "Enter" && sendMessage(event)}
        />
      </div>
      <div className="sendMessageButtonContainer w-25">
        <button
          className="w-100 p-3
        btn btn-primary"
          onClick={(event) => sendMessage(event)}
        >
          ارسال پیام
        </button>
      </div>
    </form>
  );
};

export default SendMessageInput;
