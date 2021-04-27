import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "../shared/style/widget.css";
import { Widget } from "./index";
import { RiArrowDropDownLine } from "react-icons/ri";
import { ReactComponent as DropIcon } from "../../public/images/dropdown.svg";
import { Mesg, FailedMesg } from "../../API/APIMessage";
import { LoadData } from "../../API";
import ContentLoader from "react-content-loader";
import StatisticLoading from "../shared/Loading";
import { MdShowChart } from "react-icons/md";
import { GiElectric } from "react-icons/gi";
import { StatisticData } from "../../fakeData";
import { BiDollar } from "react-icons/bi";
import { Button, Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import "../shared/style/widget.css";
import { BiBox } from "react-icons/bi";

import { ImUsers } from "react-icons/im";
import { useLocale } from "react-easy-localization";
const menu2 = (
  <Menu>
    <Menu.Item key="1">1st menu item</Menu.Item>
    <Menu.Item key="2">2nd menu item</Menu.Item>
    <Menu.Item key="3">3rd menu item</Menu.Item>
  </Menu>
);

function Index(props) {
  useEffect(() => {}, []);

  const Lable = (name) => {
    let Lable = "";
    switch (name) {
      case "income":
        Lable = "";
        break;
      case "resevation":
        Lable = "Total Reservations";
        break;

      case "timeTotal":
        Lable = "";
        break;

      default:
        break;
    }
  };
  useEffect(() => {
    if (localStorage.getItem("mode") === "dark") {
      document.body.style.background = "var(--black)";
    } else {
      document.body.style.background = "var(--lightGray";
    }
    if (window.localStorage.getItem("language") === "arabic") {
      changeLanguage("ar");
    }
  });

  const { i18n, languageCode, changeLanguage } = useLocale();
  let statistics = props.statistics;
  let darkMod = window.localStorage.getItem("mode") === "light" ? false : true;
  return (
    <div className={darkMod ? "Widget-dark" : "Widget"}>
      <div className="ItemHeader">
        <span style={{ fontWeight: "bold", fontSize: "1.2vw" }}>
          {i18n.statistics}
        </span>
        <Dropdown overlay={menu2}>
          <div className="DropBtn">
            Oct
            <DropIcon />
          </div>
        </Dropdown>
      </div>
      <div>
        {props.Loading ? (
          [1, 2, 3, 4].map((i) => {
            return <StatisticLoading />;
          })
        ) : (
          <div>
            <div className="ReservationItem">
              <div
                className={`TotleReservationsIcon ${
                  darkMod ? "darkIcon" : "blue"
                }`}
              >
                <ImUsers color="var(--blue)" size={15} />
              </div>
              <div>
                workers <div className="GrayText"></div>
              </div>
              <div className="BoldText">8824</div>
            </div>

            <div className="ReservationItem">
              <div
                className={`TotleReservationsIcon ${
                  darkMod ? "darkIcon" : "orange"
                }`}
              >
                <BiBox color="var(--orange)" size={20} />
              </div>
              <div>
                records<div className="GrayText"></div>
              </div>
              <div className="BoldText">12,000,00</div>
            </div>
            <div className="ReservationItem">
              <div
                className={`TotleReservationsIcon ${
                  darkMod ? "darkIcon" : "red"
                }`}
              >
                <MdShowChart color="var(--red)" size={20} />
              </div>
              <div>
                {i18n.numberofSoldRecord}
                <div className="GrayText"></div>
              </div>
              <div className="BoldText">5555</div>
            </div>
            <div className="ReservationItem">
              <div
                className={`TotleReservationsIcon ${
                  darkMod ? "darkIcon" : "red"
                }`}
              >
                <MdShowChart color="var(--red)" size={20} />
              </div>
              <div>
                {i18n.numberofSoldRecord}
                <div className="GrayText"></div>
              </div>
              <div className="BoldText">5555</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Index;
