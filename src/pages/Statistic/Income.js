import React, { useState } from "react";
import ChartBar from "../Dashboard/chart/ChartBar";
import "../shared/style/widget.css";

import { CustomButton } from "../shared/SharedComponents";
function Index(props) {
  let darkMod = window.localStorage.getItem("mode") === "light" ? false : true;
  return (
    <div className={darkMod ? "Widget-dark" : "Widget"}>
      <div className="ItemHeader">
        <span>{props.title}</span>
        <CustomButton>50</CustomButton>
      </div>
      <ChartBar />
    </div>
  );
}

export default Index;
