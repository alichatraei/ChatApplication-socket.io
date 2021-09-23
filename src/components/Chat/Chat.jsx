import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import queryString from "query-string";
import HeaderInfo from "../HeaderInfo/HeaderInfo";
import SendMessageInput from "../SendMessageInput/SendMessageInput";
import ShowMessages from "../ShowMessages/ShowMessages";
let socket;
const Chat = ({ location }) => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const _ENDPOINT = "http://192.168.1.34:5000/";
  useEffect(() => {
    const { name, room } = queryString.parse(location.search);
    socket = io(_ENDPOINT);
    setName(name);
    setRoom(room);
    socket.emit("join", { name, room }, (error) => {});
    return () => {
      socket.disconnect(name, room);
      socket.off();
    };
  }, [_ENDPOINT, location.search]);
  useEffect(() => {
    socket.on("message", (message) => {
      setMessages([...messages, message]);
    });
  }, [messages]);

  // send message function

  const sendMessage = (event) => {
    event.preventDefault();
    if (message)
      socket.emit("sendMessage", { message, name, room }, () => {
        setMessage("");
      });
  };
  return (
    <div
      className="w-100 h-100 d-flex justify-content-center align-items-center
      bg-dark
    "
    >
      <div className="card w-50 h-50 d-flex flex-column align-items-between">
        <HeaderInfo room={room} />
        <ShowMessages name={name} messages={messages} />
        <SendMessageInput
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        />
      </div>
    </div>
  );
};

export default Chat;
