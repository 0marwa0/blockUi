//import Modal from "react-modal";
import { FaPlus } from "react-icons/fa";
import NewSu from "./Suggestion/newSu.js";
import { RiEdit2Fill } from "react-icons/ri";
import { ReservationsData } from "../../fakeData";
import React, { useRef, useState, useEffect } from "react";
import "../shared/style/widget.css";
import "../shared/style/index.css";
import SideBar from "../Sidebar";
import { BiExport, BiDollar } from "react-icons/bi";
import moment from "moment";
import LoadingBar from "react-top-loading-bar";
import { Col, Row, Input, Switch, Button, Menu, Dropdown } from "antd";
import Suggestion from "./Suggestion/index";
import { DownOutlined } from "@ant-design/icons";
import { ImPrinter } from "react-icons/im";
import { GiTimeBomb } from "react-icons/gi";
import "./styles/index.css";
import "../../App.css";
import { Modal } from "react-responsive-modal";

import {
  PageContent,
  PageTitle,
  PageContentFix,
  PageBtn,
  ButtonGroup,
} from "../shared/CustomPage";
import styled from "styled-components";
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
export const Widget = styled.div`
  background-color: white;
  border-radius: 7px;
  border: 1px solid var(--lighterGray);
  display: flex;

  overflow: hidden;
  transition: 2s ease;
  padding: 17px 17px 8px 17px;
  width: 100%;
  flex-direction: column;
`;

const Clander = styled.div`
  background-color: white;
  border-radius: 7px;
  padding: 15px 25px;
  height: 100%;
  margin-bottom: 10%;
  min-height: 0px;
  min-width: 0px;
  border: 1px solid var(--lighterGray);
`;

const PageHeader = styled(Row)`
  align-items: center;
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
export const DateName = (date) => {
  let result = moment(date, "YYYY-MM-DD HH:mm:ss")
    .format("D-MMMM-yyy")
    .replace("-", " ")
    .replace("-", " ");
  return result;
};
export const getTime = (date) => {
  let result = moment(date, "YYYY-MM-DD HH:mm:ss")
    .format("h-mm")
    .replace("-", ":");
  return result;
};
function Index(props) {
  const ref = useRef(null);

  const [Loading, setLoading] = useState(false);

  const loadApiData = () => {
    setLoading(true);
    ref.current.staticStart();

    setTimeout(() => {
      setLoading(false);

      ref.current.complete();
    }, 1200);
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
    console.log(localStorage.getItem("isLight"), "seeeeeeeeeeeeeting");
  };
  const themeToggler = () => {
    theme === "light" ? setMode("dark") : setMode("light");
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("isLight");
    localTheme && setTheme(localTheme);
    if (localStorage.getItem("isLight") === "dark") {
      document.body.style.background = "black";
    } else {
      document.body.style.background = "var(--lightGray";
    }
  }, [theme]);
  let darkMod =
    window.localStorage.getItem("isLight") === "light" ? false : true;
  return (
    <div className="CustomPageWrapper setting-page">
      <LoadingBar color="var(--yellow)" ref={ref} shadow={true} />

      <SideBar isDark={theme} />
      <div className="PageContentFix">
        <PageHeader>
          <div className="PageTitle"> Settings</div>
        </PageHeader>
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
                  <ImPrinter color="var(--black)" />
                  Printer Settings
                </div>

                <ul>
                  <li className="widget-item">
                    <span>Title</span>
                    <div>
                      <Input
                        className={darkMod ? "input-rg-dark" : "input-rg"}
                      />
                    </div>{" "}
                  </li>{" "}
                  <li className="widget-item">
                    Address{" "}
                    <div>
                      {" "}
                      <Input
                        className={darkMod ? "input-rg-dark" : "input-rg"}
                      />
                    </div>{" "}
                  </li>{" "}
                  <li className="widget-item ">
                    Language :{" "}
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
                  <GiTimeBomb color="var(--black)" />{" "}
                  <span>Serveic Expair</span>
                </div>
                <ul>
                  <li className="flex-line">
                    Time left : <span>5 months</span>{" "}
                  </li>{" "}
                  <li className="widget-item">
                    Enter Code :
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
                  <span>System Information</span>
                  {/**   <div className="NumBtn">50</div>*/}
                </div>
                <ul>
                  <li className="flex-line">
                    Version : <span>7.7</span>
                  </li>{" "}
                  <li className="flex-line ">
                    User Num : <span>07778452222</span>
                  </li>
                  <li className="flex-line active-li">
                    User Name : <span>Marwa Jawad</span>{" "}
                  </li>{" "}
                  <li className="flex-line active-li">
                    Mode : <span>Light</span>
                  </li>
                </ul>
              </div>
            </div>
            <div style={{ height: "3%" }}></div>
            <div className="s-ctrl">
              <div className={darkMod ? "Widget-dark" : "Widget"}>
                <div className="ItemHeader">
                  <span>Change Settings</span>
                </div>{" "}
                <ul>
                  <li className="flex-line">
                    Mode{" "}
                    <Switch
                      defaultChecked={true}
                      size="small"
                      onChange={setMode}
                    />{" "}
                  </li>{" "}
                  <li className="flex-line ">
                    Language :{" "}
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
              </div>{" "}
              <div className={darkMod ? "Widget-dark" : "Widget"}>
                <div className="ItemHeader">
                  <span>Sugestion</span>
                  <span className="NumBtn">Upload</span>
                </div>
                <div className="suggestion">
                  55 items
                  <div className="sugges-icon">
                    <FaPlus color="var(--yellow)" onClick={openModal} />
                    <RiEdit2Fill color="var(--black)" onClick={openModal} />
                  </div>{" "}
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
  );
}

export default Index;
