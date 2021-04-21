import React, { useState } from "react";
import ChartBar from "./chart/ChartBar";
import "../shared/style/widget.css";
import "../shared/style/Stock.css";
import TimeAgo from "react-simple-timeago";
import { MdShowChart } from "react-icons/md";
import { GiElectric } from "react-icons/gi";
import { StatisticData } from "../../fakeData";
import { BiDollar } from "react-icons/bi";
import { useLocale } from "react-easy-localization";
function Index(props) {
  const { i18n, languageCode, changeLanguage } = useLocale();
  let darkMod =
    window.localStorage.getItem("isLight") === "light" ? false : true;
  return (
    <div className={darkMod ? "Widget-dark" : "Widget"}>
      <div style={{ display: "flex", flexDirection: "row", gap: "40px" }}>
        <div className="stock-item">
          <div
            className={`TotleReservationsIcon ${
              darkMod ? "darkIcon" : "green"
            }`}
          >
            <BiDollar color="var(--darkGreen)" size={17} />
          </div>
          <div>
            Total Income in $<div className="GrayText"></div>
          </div>
          <div className="BoldText">88,000</div>
        </div>
        <div className="stock-item">
          <div
            className={`TotleReservationsIcon ${darkMod ? "darkIcon" : "blue"}`}
          >
            <GiElectric color="var(--blue)" size={15} />
          </div>
          <div>
            Total Income in QRD
            <div className="GrayText"></div>
          </div>
          <div className="BoldText">555557</div>
        </div>{" "}
        <div className="stock-item">
          <div
            className={`TotleReservationsIcon ${darkMod ? "darkIcon" : "blue"}`}
          >
            <GiElectric color="var(--blue)" size={15} />
          </div>
          <div>
            {i18n.numberofSoldRecord}
            <div className="GrayText"></div>
          </div>
          <div className="BoldText">8824</div>
        </div>
        <div className="stock-item">
          <div
            className={`TotleReservationsIcon ${
              darkMod ? "darkIcon" : "orange"
            }`}
          >
            {" "}
            <MdShowChart color="var(--orange)" size={20} />
          </div>
          <div>
            {i18n.total}
            <div className="GrayText"></div>
          </div>
          <div className="BoldText">12,000,00</div>
        </div>
        <div className="stock-item">
          <div
            className={`TotleReservationsIcon ${darkMod ? "darkIcon" : "red"}`}
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
    </div>
  );
}

export default Index;
