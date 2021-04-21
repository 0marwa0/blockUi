import React, { useState, useEffect } from "react";
import "./shared/style/Sidebar.css";
import styled from "styled-components";
import { MdEventNote, MdAddShoppingCart } from "react-icons/md";
import { BiBookAdd, BiLogIn } from "react-icons/bi";
import { HiOutlineUsers } from "react-icons/hi";
import { AiOutlineDashboard, AiOutlineLineChart } from "react-icons/ai";
import { Tooltip, Button, Popover } from "antd";
import { FiSettings } from "react-icons/fi";
import { useLocation, useHistory, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { BiCalendarWeek, BiUser } from "react-icons/bi";
import Notification from "./Notification";

import { BiBox } from "react-icons/bi";
const NavItem = ({ slug, children, index, title }) => {
  const history = useHistory();
  const location = useLocation();
  let url = `/` + slug;
  let type;
  let isSelected = false;
  if (index) {
    type = true;
  } else {
    type = false;
  }

  useEffect(() => {
    // console.log(type, "type");
  }, [window.localStorage.getItem("isLight")]);
  if (slug === location.pathname.substr(1)) {
    isSelected = true;
  }

  if (
    location.pathname.substr(1).slice(0, 14) === "bookingDetalis" &&
    slug === "booking"
  ) {
    isSelected = true;
  }
  if (location.pathname.substr(1) === "createEvent" && slug === "events") {
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
  let text = slug.charAt(0).toUpperCase() + slug.slice(1);
  return slug === "Notifications" ? (
    <div
      className={
        !window.localStorage.getItem("isLight") ? "SideItem isDark" : "SideItem"
      }
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
          className="SideItem"
          style={{
            borderLeft: location.pathname == url ? "1px solid var(--cyan)" : "",
            //  ? "2px solid var(--yellow)"
          }}
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
const UserImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

function SideBar(props) {
  let node;
  const [showNotification, setShow] = useState(false);
  const showPopup = (showNotification) => {
    setShow(showNotification);
  };

  const location = useLocation();
  let { id } = useParams();
  let title = props.title;
  let page = location.pathname;
  let darkMod =
    window.localStorage.getItem("isLight") === "light" ? false : true;
  return (
    <div className={darkMod ? "isDark" : ""}>
      <div
        className={
          window.localStorage.getItem("isLight") === "dark"
            ? "SideWarpper-dark"
            : "SideWarpper"
        }
      >
        <div className="SideList">
          <img className="Logo" src={require("../public/images/logo1.svg")} />
          <NavItem slug="" title={title}>
            <AiOutlineDashboard color={page === "/" ? "var(--cyan)" : ""} />
          </NavItem>{" "}
          <NavItem slug="Records" title={title}>
            <BiBox color={page === "/Records" ? "var(--cyan)" : ""} />
          </NavItem>
          <NavItem slug="Workers" title={title}>
            <HiOutlineUsers color={page === "/Workers" ? "var(--cyan)" : ""} />
          </NavItem>{" "}
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
                overlayInnerStyle={{
                  backgroundColor: darkMod ? "rgb(19, 18, 18)" : "",
                  border: darkMod ? "1px solid rgb(19, 18, 18)" : "",
                }}
                content={<Notification />}
                title={
                  <div
                    className={darkMod ? "NotifiHeader-dark" : "NotifiHeader"}
                  >
                    Notifications{" "}
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
            <div className="Active"></div>{" "}
          </NavItem>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
