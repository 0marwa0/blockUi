//import Modal from "react-modal";
import Dropdown from "react-dropdown";
import { CustomButton } from "../shared/SharedComponents.js";
import "react-dropdown/style.css";
import { FaPlus } from "react-icons/fa";
import { useLocale } from "react-easy-localization";
import NewSu from "./Suggestion/newSu.js";
import ScrollArea from "react-scrollbar";
import { RiEdit2Fill } from "react-icons/ri";
import React, { useRef, useState, useEffect } from "react";
import "../shared/style/widget.css";
import "../shared/style/index.css";
import { FiFilter } from "react-icons/fi";
import SideBar from "../Sidebar";
import LoadingBar from "react-top-loading-bar";
import { Radio, Col, Row, Input, Switch, Button, Menu } from "antd";
import { ImPrinter } from "react-icons/im";
import { GiTimeBomb } from "react-icons/gi";
import "./styles/index.css";
import "../../App.css";
import checkSettings from "../shared/config";
import { Modal } from "react-responsive-modal";
const options = ["English", "Arabic"];
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
  const toggleLanguage = (value) => {
    let code = value == "English" ? "en" : "ar";
    if (value === "Arabic") {
      document.body.style.direction = "rtl";
      localStorage.setItem("language", "arabic");
      changeLanguage(code);
    } else if (value === "English") {
      localStorage.setItem("language", "english");
      document.body.style.direction = "ltr";
      changeLanguage(code);
    }
  };
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(!modalIsOpen);
  }

  let mode = window.localStorage.getItem("mode");
  let english =
    window.localStorage.getItem("language") === "english" ? true : false;
  let arabic =
    window.localStorage.getItem("language") === "arabic" ? true : false;
  useEffect(() => {
    if (window.localStorage.getItem("mode") === "dark") {
      document.body.style.background = "var(--black)";
    } else {
      document.body.style.background = "var(--lightGray)";
    }
    if (window.localStorage.getItem("language") === "arabic") {
      changeLanguage("ar");
    }

    loadApiData();
  }, [arabic, mode]);
  const [Moode, setMoode] = useState(
    localStorage.getItem("mode") === "dark" ? true : false
  );
  const changeMode = () => {
    let mode = Moode ? "light" : "dark";
    window.localStorage.setItem("mode", mode);
    setMoode(!Moode);
    checkSettings("var(darkGray)");
    if (window.localStorage.getItem("mode") === "dark") {
      document.body.style.background = "var(--black)";
    } else {
      document.body.style.background = "var(--lightGray)";
    }
  };
  let darkMod = localStorage.getItem("mode") === "dark" ? true : false;
  return (
    <ScrollArea speed={0.8} smoothScrolling={true} horizontal={false}>
      <div
        className={
          darkMod
            ? "CustomPageWrapper setting-page isDark"
            : "CustomPageWrapper setting-page"
        }
      >
        <LoadingBar color="var(--cyan)" ref={ref} shadow={true} />
        <SideBar />
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
              <div
                className={
                  darkMod ? "mainWidget-dark" : "mainWidget paddingLeft"
                }
              >
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "40px",
                  }}
                >
                  <div>
                    <div className="widget-title">
                      <ImPrinter color="var(--yellow)" />
                      {i18n.printerSettings}
                    </div>

                    <ul>
                      <li className="widget-item">
                        <div>{i18n.printTitle}</div>
                        <input
                          style={{ width: "max-content" }}
                          className={darkMod ? "input-rg-dark" : "input-rg"}
                        />
                      </li>
                      <li className="widget-item">
                        {i18n.printAddress}
                        <div>
                          <input
                            className={darkMod ? "input-rg-dark" : "input-rg"}
                          />
                        </div>
                      </li>
                      <li className="widget-item ">
                        {i18n.language}
                        <span>
                          <Dropdown
                            options={options}
                            className="drop-css"
                            value={
                              languageCode === "en" ? "English  " : "العربية  "
                            }
                          />
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <div className="widget-title">
                      <FiFilter color="var(--yellow)" />
                      {i18n.filterSettings}
                    </div>

                    <Radio.Group
                      style={{
                        marginTop: "13px",
                        display: "flex",
                        gap: "5px",
                        flexDirection: "column",
                      }}
                    >
                      <Radio value={1} className="flex-item">
                        {i18n.Item}
                      </Radio>
                      <Radio value={2} className="flex-item">
                        {i18n.Price}
                      </Radio>
                      <Radio value={3} className="flex-item">
                        {i18n.quantity}
                      </Radio>
                      <Radio value={4} className="flex-item">
                        {i18n.Discount}
                      </Radio>
                    </Radio.Group>
                  </div>
                </div>
                <div>
                  <div className="widget-title">
                    <GiTimeBomb color="var(--yellow)" />
                    <span>{i18n.serveicExpair}</span>
                  </div>
                  <ul>
                    <li className="flex-line">
                      {i18n.timeLeft} : <span>5months</span>
                    </li>
                    <li className="widget-item">
                      {i18n.enterCode} :
                      <span>
                        <Input
                          className={darkMod ? "input-rg-dark" : "input-rg"}
                        />
                      </span>
                    </li>
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
                    </li>
                    <li className="flex-line ">
                      {i18n.userNum} : <span>07778452222</span>
                    </li>
                    <li className="flex-line">
                      {i18n.userName} : <span>Marwa Jawad</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="widget-space"></div>
              <div className="s-ctrl">
                <div className={darkMod ? "Widget-dark" : "Widget"}>
                  <div className="ItemHeader">
                    <span>{i18n.changeSettings}</span>
                  </div>
                  <ul>
                    <li style={{ display: "flex", alignItems: "center" }}>
                      {i18n.language}
                      {" :"}
                      <Dropdown
                        options={options}
                        className="drop-css"
                        onChange={(e) => toggleLanguage(e.value)}
                        value={languageCode === "en" ? "English" : "العربية"}
                      />
                    </li>
                    <li className="flex-line">
                      {i18n.mode + " : "}
                      <Switch
                        defaultChecked={true}
                        size="small"
                        onChange={changeMode}
                      />
                    </li>
                  </ul>
                </div>
              </div>
              <div className="widget-space"></div>
              <div className={darkMod ? "Widget-dark" : "Widget"}>
                <div className="ItemHeader">
                  <span>{i18n.storage}</span>
                  <CustomButton
                    lable={i18n.storeDownload}
                    main={true}
                    // onOpen={props.onOpenModal}
                  />
                </div>
                <div className="store">
                  55 {i18n.items}
                  <div className="sugges-icon">
                    <FaPlus color="var(--cyan)" onClick={openModal} />
                    <RiEdit2Fill color="var(--yellow)" onClick={openModal} />
                  </div>
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
