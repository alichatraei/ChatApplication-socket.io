import React, { useState } from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Join = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  return (
    <div className="w-100 h-100 bg-dark color-white">
      <Link></Link>
      <div
        className="d-flex align-items-center justify-content-center
      w-100 h-100"
      >
        <div className="card p-5">
          <h3>ورود</h3>
          <hr />
          <div>
            <InputGroup size="sm" className="mb-3">
              <FormControl
                value={name}
                placeholder="نام خودتو وارد کن"
                aria-label="Small"
                aria-describedby="inputGroup-sizing-sm"
                onChange={(event) => {
                  setName(event.target.value);
                }}
              />
            </InputGroup>
          </div>
          <div>
            <InputGroup size="sm" className="mb-3">
              <FormControl
                placeholder="اتاقتو بنویس"
                aria-label="Small"
                aria-describedby="inputGroup-sizing-sm"
                value={room}
                onChange={(event) => {
                  setRoom(event.target.value);
                }}
              />
            </InputGroup>
          </div>
          <div className="w-100">
            <Link
              onClick={(event) => {
                (!name || !room) && event.preventDefault();
              }}
              to={`/chat?name=${name}&room=${room}`}
            >
              <Button
                variant="primary"
                className="w-100"
                disabled={!name || !room}
              >
                ورود
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Join;
