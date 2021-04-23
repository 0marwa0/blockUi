import React, { useEffect, useState } from "react";
import "./styles/index.css";
import "./styles/steps.css";
import Test from "./recordTemplet.js";
import Pagination from "../shared/pagination";
import { SortableContainer, SortableElement } from "react-sortable-hoc";
import { CustomButton } from "../shared/SharedComponents";
import { VscTriangleUp, VscTriangleDown } from "react-icons/vsc";
import arrayMove from "array-move";
import { FaPlus } from "react-icons/fa";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { AutoComplete, Input } from "antd";
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
  const itemsData = [
    { item: " 110mm Tube", price: [200], quantity: "0", discount: ["5%"] },
    { item: " 110mm Tube", price: [1000], quantity: "0", discount: ["5%"] },
    { item: " 110mm Tube", price: [20], quantity: "0", discount: ["5%"] },
  ];

  const add = () => {
    //   itemsData.push({ name: name, price: price, amount: note });
    //    setState(itemsData);
  };
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
  const indexOfLastPage = currentPage * pagePerOnce;
  const indexOfFirstPage = indexOfLastPage - pagePerOnce;
  let Data = props.data.slice(indexOfFirstPage, indexOfLastPage);
  const [state, setState] = useState(itemsData);
  let darkMod =
    window.localStorage.getItem("isLight") === "light" ? false : true;
  const SortableItem = SortableElement(({ value }) => (
    <div tabIndex={0} className={darkMod ? "record-dark" : "record"}>
      <div className={darkMod ? "tag-dark  org" : "tag org"}>
        {value.discount}
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
  ));

  const onSortEnd = ({ oldIndex, newIndex }) => {
    setState(arrayMove(state, oldIndex, newIndex));
  };
  const SortableList = SortableContainer(({ items }) => {
    return (
      <div>
        {items.map((value, index) => (
          <SortableItem key={`item-${value}`} index={index} value={value} />
        ))}
      </div>
    );
  });

  const options = [
    {
      text: "item2",
      value: 111,

      price: "522$",
      quantity: "55",
      discount: "55",
    },
    {
      text: "item1 ",
      value: 222,
      price: "522$",
      quantity: "55",
      discount: "55",
    },
  ];
  const [x, setX] = useState("");
  const onSelect = (a, b) => {
    console.log(b.children);
    setX(b.children);
  };
  useEffect(() => {
    props.data.map((item) => {
      itemsData.push(item);
    });
    setState(itemsData);
    console.log(itemsData, "finel ");
  }, [props.data]);
  return (
    <div>
      <div className={darkMod ? "isDark" : ""}>
        <div className={darkMod ? "record-items-dark" : "record-items"}>
          <div className={darkMod ? "record-head-dark" : "record-head"}>
            <span className="flex-row">
              Discount
              <Icon />
            </span>
            <span className="flex-row">
              Price
              <Icon />
            </span>
            <span className="flex-row">
              Quantity <Icon />
            </span>
            <span className="flex-row">
              Item <Icon />
            </span>

            <div></div>
          </div>
          <SortableList items={state} onSortEnd={onSortEnd} />
          {props.children}
        </div>
      </div>

      <Pagination
        length={Data.length}
        currentPage={currentPage}
        prevPage={prevPage}
        totalPge={totalPge}
        nextPage={nextPage}
        lengthAll={itemsData.length + 1}
      />
    </div>
  );
}

export default Index;
