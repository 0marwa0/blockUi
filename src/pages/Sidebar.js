import React, { useState, useEffect } from "react";
import "./shared/style/Sidebar.css";
import { BiLogIn } from "react-icons/bi";
import { HiOutlineUsers } from "react-icons/hi";
import { AiOutlineDashboard, AiOutlineLineChart } from "react-icons/ai";
import { Col, Tooltip, Popover } from "antd";
import { FiSettings } from "react-icons/fi";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { BiUser } from "react-icons/bi";
import Notification from "./Notification";
import { BiBox } from "react-icons/bi";

let darkMod = window.localStorage.getItem("mode") == "dark" ? true : false;
const NavItem = ({ slug, children, index, title }) => {
  const location = useLocation();
  let ar = window.localStorage.getItem("language") == "arabic" ? true : false;
  let url = `/` + slug;
  let type;
  let isSelected = false;
  if (index) {
    type = true;
  } else {
    type = false;
  }
  if (slug === location.pathname.substr(1)) {
    isSelected = true;
  }
  let dash = false;
  if (slug === "") {
    slug = "Dashboard";
    dash = true;
  }
  const [isClicked, setIsClicked] = useState(false);
  const setClicked = () => {
    setIsClicked(!isClicked);
  };
  return slug === "Notifications" ? (
    <div
      className={ar ? "SideItem-ar" : "SideItem"}
      type={type}
      isSelected={isSelected}
      move={true}
      onClick={() => setClicked}
    >
      {children}
    </div>
  ) : (
    <Tooltip title={slug} placement="right">
      <Link to={url}>
        <div
          className={ar ? "SideItem-ar" : "SideItem"}
          type={type}
          onClick={() => setClicked}
          isSelected={isSelected}
        >
          {children}
        </div>
      </Link>
    </Tooltip>
  );
};
function SideBar(props) {
  const [showNotification, setShow] = useState(false);
  const showPopup = (showNotification) => {
    setShow(showNotification);
  };

  let ar = window.localStorage.getItem("language") == "arabic" ? true : false;
  const location = useLocation();
  let title = props.title;
  let page = location.pathname;
  let darkMod = window.localStorage.getItem("mode") == "dark" ? true : false;

  return (
    <div className={darkMod ? "isDark" : ""}>
      <Col
        className={darkMod ? "SideWarpper-dark" : "SideWarpper"}
        style={{
          borderLeft: ar
            ? `1px solid ${darkMod ? "#353535" : "transparent"}`
            : "none",
          borderRight: ar
            ? "none"
            : `1px solid ${darkMod ? "#353535" : "transparent"}`,
        }}
      >
        <div className="SideList">
          <img className="Logo" src={require("../public/images/logo1.svg")} />
          <NavItem slug="" title={title}>
            <AiOutlineDashboard color={page === "/" ? "var(--cyan)" : ""} />
          </NavItem>
          <NavItem slug="Records" title={title}>
            <BiBox color={page === "/Records" ? "var(--cyan)" : ""} />
          </NavItem>
          <NavItem slug="Workers" title={title}>
            <HiOutlineUsers color={page === "/Workers" ? "var(--cyan)" : ""} />
          </NavItem>
          <NavItem slug="admins" title={title}>
            <BiUser color={page === "/admins" ? "var(--cyan)" : ""} />
          </NavItem>
          <NavItem slug="statistics" title={title}>
            <AiOutlineLineChart
              color={page === "/statistics" ? "var(--cyan)" : ""}
            />
          </NavItem>
          <NavItem slug="settings" title={title}>
            <FiSettings color={page === "/settings" ? "var(--cyan)" : ""} />
          </NavItem>
        </div>
        <div className="SideList">
          <NavItem slug="Notifications" title={title}>
            <div>
              <Popover
                className={darkMod ? "isDark" : ""}
                overlayInnerStyle={{
                  backgroundColor: darkMod ? "rgb(19, 18, 18)" : "white",
                }}
                content={<Notification />}
                title={
                  <div
                    className={darkMod ? "NotifiHeader-dark" : "NotifiHeader"}
                  >
                    Notifications
                    <u
                      style={{
                        fontSize: "14px",
                        color: "var(--darkGray)",
                      }}
                    >
                      Mark all as read
                    </u>
                  </div>
                }
                trigger="click"
                placement="rightBottom"
                visible={showNotification}
                onVisibleChange={showPopup}
              >
                <div>
                  <BiLogIn
                    color={page === "/Notifications" ? "var(--cyan)" : ""}
                  />
                </div>
              </Popover>
            </div>
          </NavItem>
          <NavItem slug="profile" index={true}>
            <img
              className="UserImage"
              src={require("../public/images/b.jpg")}
            />
            <div className="Active"></div>
          </NavItem>
        </div>
      </Col>
    </div>
  );
}

export default SideBar;
