import React, { useEffect, useState } from "react";
import "../Records/styles/index.css";
import "../Records/styles/steps.css";
import { useLocale } from "react-easy-localization";

import Pagination from "../shared/pagination";
import { VscTriangleUp, VscTriangleDown } from "react-icons/vsc";
export const Icon = () => {
  return (
    <div className="record-icon">
      <div
        style={{
          position: "relative",
        }}
      >
        <VscTriangleUp style={{ position: "absolute", top: "-8px" }} />
      </div>
      <VscTriangleDown />
    </div>
  );
};

function Index(props) {
  const [currentPage, setcurrentPage] = useState(1);
  const [pagePerOnce, setpagePerOnce] = useState(10);
  const [pageNumber, setpageNumber] = useState(0);
  const prevPage = () => {
    if (currentPage > 1) {
      setcurrentPage(currentPage - 1);
    }
  };
  const totalPge = Math.ceil(props.data.length / pagePerOnce);

  const nextPage = () => {
    if (currentPage != totalPge) {
      setcurrentPage(currentPage + 1);
    }
  };

  const { i18n, languageCode, changeLanguage } = useLocale();
  const indexOfLastPage = currentPage * pagePerOnce;
  const indexOfFirstPage = indexOfLastPage - pagePerOnce;
  let Data = props.data.slice(indexOfFirstPage, indexOfLastPage);
  let darkMod = window.localStorage.getItem("mode") === "light" ? false : true;
  const RecordHead = () => {
    return (
      <div className={darkMod ? "record-head-dark" : "record-head"}>
        <span className="flex-row">
          {i18n.Item} <Icon />
        </span>

        <span className="flex-row">
          {i18n.Price}
          <Icon />
        </span>
        <span className="flex-row">
          {i18n.quantity} <Icon />
        </span>
        <span className="flex-row">
          {i18n.Discount}
          <Icon />
        </span>
        <span className="flex-row">
          {i18n.worker}
          <Icon />
        </span>
        <div></div>
      </div>
    );
  };
  useEffect(() => {}, []);
  return (
    <div>
      <div className={darkMod ? "isDark" : ""}>
        <div className={darkMod ? "record-items-dark" : "record-items"}>
          <RecordHead />
          {props.children}
        </div>
      </div>

      <Pagination
        length={Data.length}
        currentPage={currentPage}
        prevPage={prevPage}
        totalPge={totalPge}
        nextPage={nextPage}
        lengthAll={20}
      />
    </div>
  );
}

export default Index;
