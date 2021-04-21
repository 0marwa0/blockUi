import React, { useEffect, useState } from "react";
import { InputLable } from "../shared/SharedStyle";
import "../shared/style/index.css";
import "../../App.css";
import "./styles/steps.css";
import { Input } from "antd";
function Index(props) {
  const [Loading, setLoading] = useState(false);
  let darkMod =
    window.localStorage.getItem("isLight") === "light" ? false : true;
  return (
    <div className="finalStep">
      {" "}
      <div>Customer Information</div>
      <div style={{ width: "400px" }}>
        <div className="Space" /> <div />
        <InputLable>
          Full Name
          <Input
            className={darkMod ? "input-rg-dark" : "input-rg"}
            //          onChange={(e) => props.handleInput(e, "name")}
            placeholder="Write  name"
          />
        </InputLable>
        <div className="Space" /> <div />
        <InputLable>
          Email
          <Input
            placeholder="Write  Email"
            className={darkMod ? "input-rg-dark" : "input-rg"}
            //        onChange={(e) => props.handleInput(e, "email")}
          />
        </InputLable>
        <div className="Space" /> <div />
        <InputLable>
          Phone
          <Input
            placeholder="Write  phone number"
            className={darkMod ? "input-rg-dark" : "input-rg"}
            //       onChange={(e) => props.handleInput(e, "phone")}
          />
        </InputLable>
        <div className="Space" /> <div />
      </div>
    </div>
  );
}

export default Index;
