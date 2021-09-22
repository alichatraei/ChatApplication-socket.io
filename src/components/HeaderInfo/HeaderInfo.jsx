import React from "react";
import closeButton from "../../assets/Icons/close.png";
import { Link } from "react-router-dom";
const HeaderInfo = ({ room }) => {
  return (
    <div
      className="headerInfoContainer d-flex 
    align-items-center justify-content-between
    w-100 bg-light p-2"
    >
      <div className="headerInfoText">
        <h4>نام اتاق : {room}</h4>
      </div>
      <div className="headerInfoIcon">
        <Link to="/">
          <img src={closeButton} alt="CloseButton" width="24" />
        </Link>
      </div>
    </div>
  );
};

export default HeaderInfo;
