import React, { useEffect, useState } from "react";
import { InputLable } from "../shared/SharedStyle";
import "../shared/style/index.css";
import "../../App.css";
import "./styles/steps.css";
import { Input } from "antd";
const { TextArea } = Input;
function Index(props) {
  const [Loading, setLoading] = useState(false);
  let darkMod =
    window.localStorage.getItem("isLight") === "light" ? false : true;
  return (
    <div className="finalStep">
      {" "}
      <div>Customer Information</div>
      <div
        style={{
          height: "250px",
          display: "flex",
          padding: "20ox",
          flexDirection: "column",
          gap: "10px",
          flexWrap: "wrap",
        }}
      >
        <div>
          <InputLable>
            Full Name
            <Input
              className={darkMod ? "input-rg-dark" : "input-rg"}
              //          onChange={(e) => props.handleInput(e, "name")}
              placeholder="Write  name"
            />
          </InputLable>
        </div>{" "}
        <div>
          <InputLable>
            Address
            <Input
              placeholder="Write  Address"
              className={darkMod ? "input-rg-dark" : "input-rg"}
              //        onChange={(e) => props.handleInput(e, "email")}
            />
          </InputLable>
        </div>{" "}
        <div>
          <InputLable>
            Phone
            <Input
              placeholder="Write  phone number"
              className={darkMod ? "input-rg-dark" : "input-rg"}
              //       onChange={(e) => props.handleInput(e, "phone")}
            />
          </InputLable>{" "}
        </div>{" "}
        <div>
          <InputLable>
            Driver Nmae
            <Input
              placeholder="Write Driver name"
              className={darkMod ? "input-rg-dark" : "input-rg"}
              //       onChange={(e) => props.handleInput(e, "phone")}
            />
          </InputLable>
        </div>
        <div>
          <InputLable>
            Note
            <TextArea
              placeholder="Write  Note"
              className={darkMod ? "input-rg-dark" : "input-rg"}
              //       onChange={(e) => props.handleInput(e, "phone")}
            />
          </InputLable>
        </div>
      </div>
    </div>
  );
}

export default Index;
