import React, { useState } from "react";
import ChartBar from "./chart/ChartBar";
import "../shared/style/widget.css";
import TimeAgo from "react-simple-timeago";

import { useLocale } from "react-easy-localization";
function Index(props) {
  const { i18n, languageCode, changeLanguage } = useLocale();
  let darkMod =
    window.localStorage.getItem("isLight") === "light" ? false : true;
  return (
    <div className={darkMod ? "Widget-dark" : "Widget"}>
      <div className="ItemHeader">
        <span>{i18n.mostActive}</span>
        <div className="NumBtn">50</div>
      </div>
      <ChartBar />
    </div>
  );
}

export default Index;
