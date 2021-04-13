import React, { useState } from "react";
import "../styles/index.css";
import "../styles/steps.css";
import "./index.css";
import { SortableContainer, SortableElement } from "react-sortable-hoc";
import { CustomButton } from "../../shared/SharedComponents";
import { VscTriangleUp, VscTriangleDown } from "react-icons/vsc";
import arrayMove from "array-move";
import { FaPlus } from "react-icons/fa";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { Input } from "antd";
function Index(props) {
  const itemsData = [
    { item: " 110mm Tube", price: [200], quantity: "0", discount: ["5%"] },
    { item: " 110mm Tube", price: [1000], quantity: "0", discount: ["5%"] },
    { item: " 110mm Tube", price: [20], quantity: "0", discount: ["5%"] },
  ];

  const [name, setName] = useState("");
  const [note, setNote] = useState("");
  const [price, setPrice] = useState("");
  const handelInput = (name, v) => {
    switch (name) {
      case "name":
        setName(v);
        break;
      case "price":
        setPrice(v);
        break;
      case "note":
        setNote(v);
        break;

      default:
        break;
    }
  };
  const add = () => {
    itemsData.push({ name: name, price: price, amount: note });

    setState(itemsData);
  };

  const [state, setState] = useState(itemsData);
  let darkMod =
    window.localStorage.getItem("isLight") === "light" ? false : true;
  const SortableItem = SortableElement(({ value }) => (
    <div tabIndex={0} className={darkMod ? "record-dark" : "record"}>
      <div>{value.item}</div>
      <div className="tag green">{value.price + "$"}</div>
      <div>{value.quantity}</div>
      <div className="tag org">{value.discount}</div>
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
  const Icon = () => {
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
  return (
    <div className={darkMod ? "record-items-dark" : "record-items"}>
      <div className={darkMod ? "print-page-dark" : "print-page"}>
        <div>Print </div>{" "}
        <div className={darkMod ? "record-head-dark" : "record-head"}>
          <span className="flex-row">
            Item
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
            Discount
            <Icon />
          </span>

          <div></div>
        </div>
        <SortableList items={state} onSortEnd={onSortEnd} />
        <CustomButton
          main
          lable="Print"
          //loading={props.Loading}
          // pageTitle={pageTitle}
          //onOpen={() => props.onOpenModal(true)}
        ></CustomButton>
      </div>
    </div>
  );
}

export default Index;
