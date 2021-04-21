import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import React, { useEffect } from "react";
import styled from "styled-components";

import "./style/index.css";

import "./style/pagination.css";

function Index(props) {
  useEffect(() => {
    if (localStorage.getItem("isLight") === "dark") {
      document.body.style.background = "var(--black)";
    } else {
      document.body.style.background = "white";
    }
  }, []);
  let darkMod =
    window.localStorage.getItem("isLight") === "light" ? false : true;
  return (
    <div className={darkMod ? "Pagination-dark" : "Pagination"}>
      <div calssName="PageText">
        View search of {props.length} from {props.lengthAll} search we got .
      </div>
      <div className="pageNum">
        <div
          style={{
            color: props.currentPage > 1 ? "var(--cyan)" : "var(--textGray)",
          }}
        >
          <MdKeyboardArrowLeft
            size={20}
            onClick={props.prevPage}
            style={{
              cursor: props.currentPage > 1 ? "pointer" : "not-allowed",
            }}
          />
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
          <MdKeyboardArrowRight
            size={20}
            onClick={props.nextPage}
            style={{
              cursor:
                props.currentPage != props.totalPge ? "pointer" : "not-allowed",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Index;
