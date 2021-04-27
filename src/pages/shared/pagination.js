import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import React, { useEffect } from "react";
import styled from "styled-components";
import { useLocale } from "react-easy-localization";

import "./style/index.css";

import "./style/pagination.css";

function Index(props) {
  const { i18n, languageCode, changeLanguage } = useLocale();
  useEffect(() => {
    if (localStorage.getItem("mode") === "dark") {
      document.body.style.background = "var(--black)";
    } else {
      document.body.style.background = "white";
    }
  }, []);
  let ar = window.localStorage.getItem("language") == "arabic" ? true : false;

  let darkMod = window.localStorage.getItem("mode") === "light" ? false : true;
  return (
    <div className={darkMod ? "Pagination-dark" : "Pagination"}>
      <div calssName="PageText">
        {i18n.viewSearch + " "}
        {props.length} {i18n.from} {props.lengthAll} {i18n.searchResulit} .
      </div>
      <div className="pageNum">
        <div
          style={{
            color: props.currentPage > 1 ? "var(--cyan)" : "var(--textGray)",
          }}
        >
          {ar ? (
            <MdKeyboardArrowRight
              size={20}
              onClick={props.nextPage}
              style={{
                cursor:
                  props.currentPage != props.totalPge
                    ? "pointer"
                    : "not-allowed",
              }}
            />
          ) : (
            <MdKeyboardArrowLeft
              size={20}
              onClick={props.prevPage}
              style={{
                cursor: props.currentPage > 1 ? "pointer" : "not-allowed",
              }}
            />
          )}
        </div>
        <p style={{ marginTop: "12px" }}>
          {props.currentPage}/ {props.totalPge}
        </p>
        <div
          style={{
            color:
              props.currentPage != props.totalPge
                ? "var(--cyan)"
                : "var(--textGray)",
          }}
        >
          {ar ? (
            <MdKeyboardArrowLeft
              size={20}
              onClick={props.prevPage}
              style={{
                cursor: props.currentPage > 1 ? "pointer" : "not-allowed",
              }}
            />
          ) : (
            <MdKeyboardArrowRight
              size={20}
              onClick={props.nextPage}
              style={{
                cursor:
                  props.currentPage != props.totalPge
                    ? "pointer"
                    : "not-allowed",
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Index;
