import React, { useEffect, useState } from "react";
import { InputLable } from "../shared/SharedStyle";
import "../shared/style/index.css";
import "../../App.css";
import "./styles/steps.css";
import { Input } from "antd";
import { useLocale } from "react-easy-localization";
const { TextArea } = Input;
function Index(props) {
  const [Loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [driver, setDriver] = useState("");
  const [note, setNote] = useState("");
  const handleInput = (key, e) => {
    let value = e.target.value;
    switch (key) {
      case "name":
        setName(value);
        break;
      case "address":
        setAddress(value);
        break;
      case "phone":
        setPhone(value);
        break;
      case "driver":
        setDriver(value);
        break;
      case "note":
        setNote(value);
        break;
      default:
        break;
    }
  };
  const { i18n, languageCode, changeLanguage } = useLocale();
  let darkMod = window.localStorage.getItem("mode") === "dark" ? true : false;
  return (
    <div className="finalStep">
      <div>{i18n.CustomerInfo}</div>
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
            {i18n.fullName}
            <input
              value={name}
              className={darkMod ? "input-rg-dark" : "input-rg"}
              onChange={(e) => {
                handleInput("name", e);
                props.handleInput("name", e);
              }}
              placeholder="Write  name"
            />
          </InputLable>
        </div>
        <div>
          <InputLable>
            {i18n.address}
            <input
              value={address}
              placeholder="Write  Address"
              className={darkMod ? "input-rg-dark" : "input-rg"}
              onChange={(e) => {
                handleInput("address", e);

                props.handleInput("address", e);
              }}
            />
          </InputLable>
        </div>
        <div>
          <InputLable>
            {i18n.phone}
            <input
              value={phone}
              placeholder="Write  phone number"
              className={darkMod ? "input-rg-dark" : "input-rg"}
              onChange={(e) => {
                handleInput("phone", e);

                props.handleInput("phone", e);
              }}
            />
          </InputLable>
        </div>
        <div>
          <InputLable>
            {i18n.driverName}
            <input
              value={driver}
              placeholder="Write Driver name"
              className={darkMod ? "input-rg-dark" : "input-rg"}
              onChange={(e) => {
                handleInput("driver", e);

                props.handleInput("driver", e);
              }}
            />
          </InputLable>
        </div>
        <div>
          <InputLable>
            {i18n.note}
            <textarea
              rows={5}
              cols={5}
              value={note}
              placeholder="Write  Note"
              className={darkMod ? "input-rg-dark" : "input-rg"}
              onChange={(e) => {
                handleInput("note", e);

                props.handleInput("note", e);
              }}
            />
          </InputLable>
        </div>
      </div>
    </div>
  );
}

export default Index;
