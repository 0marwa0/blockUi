import React, { useState, useEffect } from "react";
import "./shared/style/Sidebar.css";
import styled from "styled-components";
import { MdEventNote, MdAddShoppingCart } from "react-icons/md";
import { BiBookAdd, BiLogIn } from "react-icons/bi";
import { HiOutlineUsers } from "react-icons/hi";
import { AiOutlineDashboard, AiOutlineLineChart } from "react-icons/ai";
import { BiLineChart } from "react-icons/bi";
import { BsSearch, BsFileRichtext } from "react-icons/bs";
import { VscSourceControl } from "react-icons/vsc";
import { CloudUploadOutlined } from "@ant-design/icons";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaRegUser, FaStarAndCrescent } from "react-icons/fa";
import { RiNewspaperLine } from "react-icons/ri";
import { Tooltip, Button, Popover } from "antd";
import { useLocation, useHistory, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { ReactComponent as Booking } from "../public/images/Book.svg";
import { BiCalendarWeek, BiUser } from "react-icons/bi";
import Notification from "./Notification";
import { render } from "@testing-library/react";
import { createGlobalStyle } from "styled-components";

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
  }, []);
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
      className="SideItem"
      style={{
        //borderLeft: !isClicked
        // ? "2px solid var(--black)"
        // : "2px solid var(--yellow)",
        color: isClicked ? "var(--yellow)" : "var(--gray)",
      }}
      type={type}
      isSelected={isSelected}
      move={true}
      onClick={() => setClicked}
    >
      {children}
    </div>
  ) : (
    <Tooltip title={dash ? "Dashboard" : text} placement="right">
      <Link to={url}>
        <div
          className="SideItem"
          style={{
            // borderLeft: !isClicked
            //  ? "2px solid var(--black)"
            // : "2px solid var(--yellow)",
            color: isClicked ? "var(--yellow)" : "var(--gray)",
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
export const SideWrapper = styled.div`
  width: 87px;
  height: 100%;
  display: flex;
  position: fixed;
  border: 1px solid ${(props) => (props.isDark ? "teal" : "transperant")};
  padding-right: 4px;
  z-index: 100;
  flex-direction: column;
  justify-content: space-between;
  background-color: var(--black);
`;
const NotifiHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 30px;

  font-size: 20px;
  font-weight: 400;
  align-items: center;
  cursor: unset;
`;
// move
export const SideItem = styled.li`
  position: relative;
  padding: 1.5vh 25px;

  margin-bottom: 0.5rem;
  border-left: ${(props) =>
    props.type
      ? "2px solid var(--black);"
      : props.isSelected
      ? "2px solid var(--yellow);"
      : "2px solid var(--black);"};
  font-size: 35px;
  display: flex;
  color: ${(props) => (props.isSelected ? "var(--yellow);" : "var(--gray);")};
  justify-content: center;
  align-items: center;
  &:hover {
    border-left: 2px solid var(--yellow);

    color: var(--yellow);
  }
`;

export const UserImage = styled.img`
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
  let page = location.pathname.substr(1);
  return (
    <div>
      <div
        className={
          //  localStorage.getItem("theme") === "dark"
          //     ? "SideWarpper-dark"
          // :
          "SideWarpper"
        }
      >
        <div className="SideList">
          <img className="Logo" src={require("../public/images/logo1.svg")} />
          <NavItem slug="" title={title}>
            <AiOutlineDashboard />
          </NavItem>
          <NavItem slug="statistics" title={title}>
            <AiOutlineLineChart />
          </NavItem>
          <NavItem slug="Records" title={title}>
            <MdAddShoppingCart />
          </NavItem>
          <NavItem slug="admins" title={title}>
            <BiUser />
          </NavItem>
          <NavItem slug="Workers" title={title}>
            <HiOutlineUsers />
          </NavItem>
        </div>
        <li className="SideList">
          <NavItem slug="Notifications">
            {" "}
            <FaStarAndCrescent onClick={props.changeMode} />
          </NavItem>
          <NavItem slug="Notifications" title={title}>
            <Popover
              content={<Notification />}
              title={
                <NotifiHeader>
                  Notifications{" "}
                  <u
                    style={{
                      fontSize: "14px",
                      color: "var(--darkGray)",
                    }}
                  >
                    Mark all as read
                  </u>
                </NotifiHeader>
              }
              trigger="click"
              placement="rightBottom"
              visible={showNotification}
              onVisibleChange={showPopup}
            >
              <div>
                <BiLogIn />
              </div>
            </Popover>
          </NavItem>
          <NavItem slug="profile" index={true}>
            <img
              className="UserImage"
              src={require("../public/images/b.jpg")}
            />
            <div className="Active"></div>{" "}
          </NavItem>
        </li>
      </div>
    </div>
  );
}

export default SideBar;
