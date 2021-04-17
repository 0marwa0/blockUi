import React, { useState } from "react";
import "./styles/index.css";
import "./styles/steps.css";
import { SortableContainer, SortableElement } from "react-sortable-hoc";
import { CustomButton } from "../shared/SharedComponents";
import { VscTriangleUp, VscTriangleDown } from "react-icons/vsc";
import arrayMove from "array-move";
import { FaPlus } from "react-icons/fa";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { AutoComplete, Input } from "antd";
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
      <div className={darkMod ? "tag-dark green" : "tag green"}>
        {value.price + "$"}
      </div>
      <div>{value.quantity}</div>
      <div className={darkMod ? "tag-dark  org" : "tag org"}>
        {value.discount}
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
  return (
    <div className={darkMod ? "isDark" : ""}>
      <div className={darkMod ? "record-items-dark" : "record-items"}>
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
        <div className={darkMod ? "input-row-dark" : "input-row"}>
          <AutoComplete
            style={{
              width: 200,
            }}
            className={darkMod ? "input-rg-dark" : "input-rg borderLess"}
            value={x}
            onSelect={onSelect}
            dataSource={options}
            placeholder="item"
          />{" "}
          <Input
            className={darkMod ? "input-rg-dark" : "input-rg borderLess"}
            placeholder="price"
            style={{ border: "none", width: "max-content " }}
            onChange={(e) => handelInput("price", e.target.value)}
          />
          <Input
            className={darkMod ? "input-rg-dark" : "input-rg borderLess"}
            placeholder="quantity"
            style={{ border: "none", width: "max-content" }}
            onChange={(e) => handelInput("note", e.target.value)}
          />{" "}
          <Input
            className={darkMod ? "input-rg-dark" : "input-rg borderLess"}
            placeholder="discount"
            style={{ border: "none", width: "max-content" }}
            onChange={(e) => handelInput("note", e.target.value)}
          />
        </div>
        <div>
          {/**   <CustomButton
            main
            lable={<FaPlus color="var(--yellow)" />}
            //   pageTitle={pageTitle}
            loading={props.Loading}
            //  onOpen={() => props.onOpenModal(true)}
          ></CustomButton>*/}
        </div>
      </div>
    </div>
  );
}

export default Index;
