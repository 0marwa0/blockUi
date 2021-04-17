//import Modal from "react-modal";
import { FaPlus } from "react-icons/fa";
import { useLocale } from "react-easy-localization";
import NewSu from "./Suggestion/newSu.js";
import ScrollArea from "react-scrollbar";
import { RiEdit2Fill } from "react-icons/ri";
import { ReservationsData } from "../../fakeData";
import React, { useRef, useState, useEffect } from "react";
import "../shared/style/widget.css";
import "../shared/style/index.css";
import { setLanguage } from "react-localization";
import Local from "./Local";
import SideBar from "../Sidebar";
import { BiExport, BiDollar } from "react-icons/bi";
import LoadingBar from "react-top-loading-bar";
import { Col, Row, Input, Switch, Button, Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { ImPrinter } from "react-icons/im";
import { GiTimeBomb } from "react-icons/gi";
import "./styles/index.css";
import "../../App.css";
import { Modal } from "react-responsive-modal";
import styled from "styled-components";
import strings from "./Local.js";
const menu = (
  <Menu>
    <Menu.Item>
      <a>English</a>
    </Menu.Item>
    <Menu.Item>
      <a>Arabic</a>
    </Menu.Item>
  </Menu>
);

function Index(props) {
  const ref = useRef(null);
  const { i18n, languageCode, changeLanguage } = useLocale();
  const [Loading, setLoading] = useState(false);

  const loadApiData = () => {
    setLoading(true);
    ref.current.staticStart();

    setTimeout(() => {
      setLoading(false);

      ref.current.complete();
    }, 1200);
  };
  const toggleLanguage = () => {
    return languageCode === "en" ? changeLanguage("ar") : changeLanguage("en");
  };
  useEffect(() => {
    loadApiData();
  }, []);

  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(!modalIsOpen);
  }

  const [theme, setTheme] = useState("light");
  const setMode = (e) => {
    let mode = e ? "light" : "dark";
    window.localStorage.setItem("isLight", mode);
    setTheme(mode);
  };
  const themeToggler = () => {
    theme === "light" ? setMode("dark") : setMode("light");
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("isLight");
    localTheme && setTheme(localTheme);
    if (localStorage.getItem("isLight") === "dark") {
      document.body.style.background = "var(--black)";
    } else {
      document.body.style.background = "var(--lightGray";
    }
  }, [theme]);
  let darkMod =
    window.localStorage.getItem("isLight") === "light" ? false : true;
  return (
    <ScrollArea speed={0.8} smoothScrolling={true} horizontal={false}>
      <div className="CustomPageWrapper setting-page">
        <LoadingBar color="var(--cyan)" ref={ref} shadow={true} />

        <SideBar isDark={theme} />

        <div className="PageContentFix">
          <div className="PageHeader">
            <div className="PageTitle">{i18n.settingTitle}</div>
          </div>
          <Row></Row>

          <Row
            className="cl-ctrl"
            style={{
              display: "grid",

              gap: "25px",
              gridTemplateColumns: "auto 23vw",
            }}
          >
            <Col
              style={{
                minHeight: "0px",
                minWidth: "0px",
                height: "auto",
              }}
            >
              <div className={darkMod ? "mainWidget-dark" : "mainWidget"}>
                <div>
                  <div className="widget-title">
                    <ImPrinter color="var(--yellow)" />
                    {i18n.printerSettings}
                  </div>

                  <ul>
                    <li className="widget-item">
                      <div>{i18n.printTitle}</div>
                      <Input
                        className={darkMod ? "input-rg-dark" : "input-rg"}
                      />
                    </li>{" "}
                    <li className="widget-item">
                      {i18n.printAddress}
                      <div>
                        {" "}
                        <Input
                          className={darkMod ? "input-rg-dark" : "input-rg"}
                        />
                      </div>{" "}
                    </li>{" "}
                    <li className="widget-item ">
                      {i18n.language}
                      <span>
                        <Dropdown overlay={menu}>
                          <a
                            className="ant-dropdown-link"
                            onClick={(e) => e.preventDefault()}
                          >
                            English <DownOutlined />
                          </a>
                        </Dropdown>
                      </span>
                    </li>
                  </ul>
                </div>
                <div>
                  <div className="widget-title">
                    <GiTimeBomb color="var(--yellow)" />{" "}
                    <span>{i18n.serveicExpair}</span>
                  </div>
                  <ul>
                    <li className="flex-line">
                      {i18n.timeLeft} : <span>5months</span>{" "}
                    </li>{" "}
                    <li className="widget-item">
                      {i18n.enterCode} :
                      <span>
                        <Input
                          className={darkMod ? "input-rg-dark" : "input-rg"}
                        />
                      </span>
                    </li>{" "}
                  </ul>
                </div>
              </div>
            </Col>

            <Col style={{ height: "100%" }}>
              <div className="r-ctrl">
                <div className={darkMod ? "Widget-dark" : "Widget"}>
                  <div className="ItemHeader">
                    <span>{i18n.systemInfo}</span>
                    {/**   <div className="NumBtn">50</div>*/}
                  </div>
                  <ul>
                    <li className="flex-line">
                      {i18n.version} : <span>7.7</span>
                    </li>{" "}
                    <li className="flex-line ">
                      {i18n.userNum} : <span>07778452222</span>
                    </li>
                    <li className="flex-line">
                      {i18n.userName} : <span>Marwa Jawad</span>
                    </li>{" "}
                  </ul>
                </div>
              </div>
              <div className="widget-space"></div>
              <div className="s-ctrl">
                <div className={darkMod ? "Widget-dark" : "Widget"}>
                  <div className="ItemHeader">
                    <span>{i18n.changeSettings}</span>
                  </div>{" "}
                  <ul>
                    <li className="flex-line">
                      {i18n.mode + " :  "}
                      <Switch
                        defaultChecked={true}
                        size="small"
                        onChange={setMode}
                      />{" "}
                    </li>{" "}
                    <li className="flex-line ">
                      {languageCode === "en" ? "English : " : "العربية : "}
                      <span>
                        <Switch
                          defaultChecked={true}
                          size="small"
                          onChange={toggleLanguage}
                        />{" "}
                        {/** <Dropdown overlay={menu}>
                          <a
                            className="ant-dropdown-link"
                            onClick={() => toggleLanguage}
                          >
                            English <DownOutlined />
                          </a>
                        </Dropdown>*/}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>{" "}
              <div className="widget-space"></div>{" "}
              <div className={darkMod ? "Widget-dark" : "Widget"}>
                <div className="ItemHeader">
                  <span>{i18n.storage}</span>
                  <span className="NumBtn">{i18n.storeDownload}</span>
                </div>
                <div className="store">
                  55 {i18n.items}
                  <div className="sugges-icon">
                    <FaPlus color="var(--cyan)" onClick={openModal} />
                    <RiEdit2Fill color="var(--yellow)" onClick={openModal} />
                  </div>{" "}
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <Modal open={modalIsOpen} onClose={openModal}>
          <NewSu />
        </Modal>
      </div>
    </ScrollArea>
  );
}

export default Index;
