import React, { useState, useEffect } from "react";
import ChartBar from "./chart/ChartBar";
import "../shared/style/widget.css";
import TimeAgo from "react-simple-timeago";

import { useLocale } from "react-easy-localization";
function Index(props) {
  const { i18n, languageCode, changeLanguage } = useLocale();
  let darkMod = window.localStorage.getItem("mode") === "light" ? false : true;
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
