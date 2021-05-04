import { useLocale } from "react-easy-localization";

import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { Input, Button, Checkbox } from "antd";
import Icon from "../../public/images/logo1.svg";
import { ReactComponent as LogoIcon } from "../../public/images/logo1.svg";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useHistory } from "react-router";
import "../../App.css";
import { Carousel } from "antd";
import { Login } from "../../API";
import { FailedMesg, Mesg, SuccessMesg } from "../../API/APIMessage";
const PageWrapper = styled.div`
  display: flex;
  height: 100vh;

  width: 100%;
`;

const LoginContent = styled.div`
  position: absolute;
  left: 50%;
  font-siz: 18px;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  max-width: 450px;
`;
const Logo = styled.div`
  width: 100%;
  text-align: center;
`;

const BoldText = styled.h3`
  font-weight: 700;
  color: var(--black);
`;

const LoginInfo = styled.div`
  display: flex;
  font-size: 15px;

  justify-content: space-between;
`;
const Slide = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  padding-top: 60px;
  padding-left: 15%;
  padding-right: 15%;
`;
const Space = styled.div`
  height: 15px;
`;
const Label = styled.div`
  color: var(--darkGray);
  font-size: 18px;
  height: 22px;
`;
const StyledPassword = styled(Input.Password)`
  Input {
    background-color: transparent;
    border-color: red;
    color: white;
    padding: 10px;
    height: auto;
    border-radius: 3px;
  }
`;

export default function Index(props) {
  const [username, setusername] = useState("");
  const [Password, setpassword] = useState("");
  const [nameErr, setnameErr] = useState(false);
  const [PasswordErr, setpasswordErr] = useState(false);
  const [Loading, setLoading] = useState(false);

  const handelInput = (e, key) => {
    let value = e.target.value;
    if (key === "name") {
      if (value.length != 0) {
        setusername(value);
        setnameErr(false);
      } else {
        setnameErr(true);
      }
    } else if (key === "password") {
      if (value.length != 0) {
        setpassword(value);
        setpasswordErr(false);
      } else {
        setpasswordErr(true);
      }
    }
  };
  const history = useHistory();

  const handleSubmit = () => {
    let formdata = new FormData();
    formdata.append("username", username);
    formdata.append("password", Password);

    if (username != 0 && Password != 0) {
      setLoading(true);
      Login(
        formdata,
        (status) => {
          SuccessMesg("Login Successfully");
          props.history.push("/");
          setLoading(false);
        },
        (err) => {
          FailedMesg(err);
          setLoading(false);
        }
      );
    } else {
      if (username.length === 0) setnameErr(true);
      if (Password.length === 0) setpasswordErr(true);

      FailedMesg("Empty filed", "you should enter your username and passwrod");
    }
  };

  const { i18n, languageCode, changeLanguage } = useLocale();
  useEffect(() => {
    if (localStorage.getItem("mode") === "dark") {
      document.body.style.background = "var(--black)";
    } else {
      document.body.style.background = "white";
    }
    if (window.localStorage.getItem("language") === "arabic") {
      changeLanguage("ar");
    }
  }, [localStorage.getItem("Mode")]);
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const SlideItem = () => {
    return (
      <Slide>
        <img
          src={require("../../public/images/Browser.png")}
          style={{ width: "100%", marginBottom: "70px" }}
        />
        <BoldText>Trusted & certificated Dashboard System </BoldText>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <p style={{ width: "60%" }}>
            Turn your smartphone or tablet into powerful POS Manage sales
            inventory and employees with ease; engage custommers increase your
            revenue
          </p>
        </div>
      </Slide>
    );
  };
  let darkMod = window.localStorage.getItem("mode") === "dark" ? true : false;

  return (
    <PageWrapper>
      <LoginContent>
        <Logo>
          <img src={Icon} width={200} />
        </Logo>
        <Space />
        <div>
          <Label> {i18n.username}</Label>

          <input
            placeholder="Enter you user name"
            className={darkMod ? "input-rg-dark" : "input-rg"}
            onChange={(e) => handelInput(e, "name")}
            style={{
              height: "60px",
              borderRadius: "6px",
              marginTop: "5px",
              padding: "20px",
              border: nameErr ? "1px solid red" : "",
            }}
          />
          {nameErr ? (
            <span className="errorText">{i18n.emptyFeild}</span>
          ) : null}
        </div>

        <Space />
        <div>
          <Label>{i18n.password}</Label>

          <input
            placeholder="Enter you passwrd"
            onChange={(e) => handelInput(e, "password")}
            className={darkMod ? "input-rg-dark" : "input-rg"}
            style={{
              height: "60px",
              borderRadius: "6px",
              marginTop: "5px",
              padding: "20px",
              border: PasswordErr ? "1px solid red" : "",
            }}
          />
          {PasswordErr ? (
            <span className="errorText">{i18n.emptyFeild}</span>
          ) : null}
        </div>
        <Space />
        <div>
          {/* <Link to="/Dashboard"> */}
          <Button
            onClick={handleSubmit}
            loading={Loading}
            disabled={Loading ? true : false}
            style={{
              backgroundColor: "var(--cyan)",
              borderRadius: "5px",
              border: "none",
              display: "flex",
              gap: "5px",

              width: "100%",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "18px",
              height: "60px",
            }}
          >
            {i18n.login}
          </Button>
          {/* </Link> */}
        </div>
        <Space />
        <LoginInfo>
          <div style={{ color: "var(--darkGray)" }}>
            <Checkbox />
            {"  " + i18n.rememberme}
          </div>
          <u>{i18n.forgotpassword}</u>
        </LoginInfo>
      </LoginContent>
    </PageWrapper>
  );
}
