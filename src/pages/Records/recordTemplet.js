import React, { useEffect, useState } from "react";
import "./styles/index.css";
import "./styles/steps.css";
import { SortableContainer, SortableElement } from "react-sortable-hoc";
import { CustomButton } from "../shared/SharedComponents";
import { VscTriangleUp, VscTriangleDown } from "react-icons/vsc";
import arrayMove from "array-move";
import { FaPlus } from "react-icons/fa";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { AutoComplete, Input } from "antd";
import Table from "../shared/Table";

function Index(props) {
  const itemsData = [
    { item: " 110mm Tube", price: [200], quantity: "0", discount: ["5%"] },
    { item: " 110mm Tube", price: [1000], quantity: "0", discount: ["5%"] },
    { item: " 110mm Tube", price: [20], quantity: "0", discount: ["5%"] },
  ];
  const [state, setState] = useState(itemsData);

  let darkMod = window.localStorage.getItem("mode") === "dark" ? true : false;
  const SortableItem = SortableElement(({ value }) => (
    <div tabIndex={0} className={darkMod ? "record-dark" : "record"}>
      <div className="flex-row">{value.item}</div>
      <div className="flex-row">
        <div className={darkMod ? "tag-dark green" : "tag green"}>
          {value.price + "$"}
        </div>
      </div>
      <div className="flex-row">{value.quantity}</div>

      <div className="flex-row">
        <div className={darkMod ? "tag-dark  org" : "tag org"}>
          {value.discount}
        </div>
      </div>
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
  }, [props.data]);
  return (
    <Table
      pageName="RecordItem"
      headcss={darkMod ? "head-dark record" : "head record"}
      data={[]}
    >
      <SortableList items={props.data} onSortEnd={onSortEnd} />
      {props.children}
    </Table>
  );
}

export default Index;
