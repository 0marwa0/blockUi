import { PropertySafetyFilled } from "@ant-design/icons";
import { Input } from "antd";
import { Icon } from "./recordTemplet.js";
import React from "react";
import { useState } from "react";
import RecordTemplet from "./recordTemplet.js";
import "./styles/modal.css";
import Pagination from "../shared/pagination";
import { BiDotsVerticalRounded } from "react-icons/bi";
const itemsData = [
  {
    id: "222",
    note: "no",
    item: " 222110mm Tube",
    price: "200",
    quantity: "0",
    discount: "5%",
  },

  {
    id: "33",
    note: "no",
    item: "888 110mm Tube",
    price: " 1000",
    quantity: "0",
    discount: "5%",
  },
  {
    id: "44",
    note: "no",
    item: "5555110mm Tube25",
    price: "20888888",
    quantity: "0",
    discount: "5%",
  },
  {
    id: "44",
    note: "no",
    item: "25110mm Tube25",
    price: "20888888",
    quantity: "0",
    discount: "5%",
  },
];
function Index(props) {
  const [list, setList] = useState([]);
  const [searchValue, setSearch] = useState(props.value);
  const onchangeValeu = (value) => {
    setSearch(value);
    let filterd = itemsData.filter((obj) =>
      Object.keys(obj).some((key) => obj[key].includes(value))
    );
    setList(filterd);
  };
  const [currentPage, setcurrentPage] = useState(1);
  const [pagePerOnce, setpagePerOnce] = useState(10);
  const [pageNumber, setpageNumber] = useState(0);
  const prevPage = () => {
    if (currentPage > 1) {
      setcurrentPage(currentPage - 1);
    }
  };
  const totalPge = Math.ceil(list.length / pagePerOnce);

  const nextPage = () => {
    if (currentPage != totalPge) {
      setcurrentPage(currentPage + 1);
    }
  };
  const handleKey = (event, val) => {
    if (event.key === "Enter") {
      props.onPick(val);
    }
  };
  const indexOfLastPage = currentPage * pagePerOnce;
  const indexOfFirstPage = indexOfLastPage - pagePerOnce;
  let Data = list.slice(indexOfFirstPage, indexOfLastPage);
  let darkMod =
    window.localStorage.getItem("isLight") === "light" ? false : true;
  return (
    <div>
      {" "}
      <div className={darkMod ? "isDark" : ""}>
        <div className={darkMod ? "record-items-dark" : "record-items"}>
          <div
            onKeyPress={(e) =>
              handleKey(e, {
                item: searchValue,
                price: "0",
                quantity: "0",
                discount: "0",
              })
            }
            // tabIndex="10"
            className={darkMod ? "record-dark" : "record"}
          >
            <div className={darkMod ? "tag-dark  org" : "tag org"}>0</div>
            <div className={darkMod ? "tag-dark green" : "tag green"}>0$</div>
            <div>0</div>
            <Input
              value={searchValue}
              onChange={(e) => onchangeValeu(e.target.value)}
              className={darkMod ? "input-rg-dark" : "input-rg borderLess"}
            />{" "}
            <BiDotsVerticalRounded
              style={{
                fontSize: "20px",
                cursor: "pointer",
                color: "var(--lighterGray)",
              }}
            />
          </div>

          {list.map((value, i) => (
            <div
              onKeyPress={(e) => handleKey(e, value)}
              tabIndex={0}
              className={darkMod ? "record-dark" : "record"}
            >
              {value.item}

              <div className={darkMod ? "tag-dark  org" : "tag org"}>
                {value.discount}
                {i}
              </div>
              <div className={darkMod ? "tag-dark green" : "tag green"}>
                {value.price + "$"}
              </div>
              <div>{value.quantity}</div>
              <div>{value.item}</div>
              <BiDotsVerticalRounded
                style={{
                  fontSize: "20px",
                  cursor: "pointer",
                  color: "var(--lighterGray)",
                }}
              />
            </div>
          ))}
        </div>
        <div style={{ backgroundColor: !darkMod ? "white" : "black" }}>
          <Pagination
            length={Data.length}
            currentPage={currentPage}
            prevPage={prevPage}
            totalPge={totalPge}
            nextPage={nextPage}
            lengthAll={itemsData.length + 1}
          />
        </div>
      </div>
    </div>
  );
}
export default Index;
