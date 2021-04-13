import React, { useState } from "react";
import ChartBar from "../Dashboard/chart/ChartBar";
import "../shared/style/widget.css";

function Index(props) {
  let darkMod =
    window.localStorage.getItem("isLight") === "light" ? false : true;
  return (
    <div className={darkMod ? "Widget-dark" : "Widget"}>
      <div className="ItemHeader">
        <span>Expanse</span>
        <div className="NumBtn">50</div>
      </div>
      <ChartBar />
    </div>
  );
}

export default Index;
