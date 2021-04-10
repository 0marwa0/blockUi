import React, { useState } from "react";
import "./styles/index.css";
import { SortableContainer, SortableElement } from "react-sortable-hoc";
import { CustomButton } from "../shared/SharedComponents";
import { VscTriangleUp, VscTriangleDown } from "react-icons/vsc";
import arrayMove from "array-move";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { Input } from "antd";
function Index(props) {
  const itemsData = [
    { name: "Nonoxxx", price: "2000", note: "55" },
    { name: "Nono", price: "2000", note: "55" },
    { name: "marwa", price: "2000", note: "55" },
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

  const SortableItem = SortableElement(({ value }) => (
    <div tabIndex={0} className="record">
      <div>{value.name}</div>
      <div>{value.note}</div>
      <div>{value.price}</div>
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
    <div className="record-items">
      <div className="record-head">
        <span className="flex-row">
          name
          <Icon />
        </span>

        <span className="flex-row">
          amount <Icon />
        </span>
        <span className="flex-row">
          note <Icon />
        </span>

        <div></div>
      </div>
      <SortableList items={state} onSortEnd={onSortEnd} />;
      <div className="input-row">
        <div className="flex-row">
          {" "}
          <div>
            {" "}
            <Input
              placeholder="name"
              style={{ border: "none", width: "max-content" }}
              onChange={(e) => handelInput("name", e.target.value)}
            />
          </div>
          <div>
            {" "}
            <Input
              placeholder="price"
              style={{ border: "none", width: "max-content" }}
              onChange={(e) => handelInput("price", e.target.value)}
            />
          </div>
          <div>
            <Input
              placeholder="note"
              style={{ border: "none", width: "max-content" }}
              onChange={(e) => handelInput("note", e.target.value)}
            />
          </div>
        </div>
        <div>
          <CustomButton
            main
            lable="Create"
            //   pageTitle={pageTitle}
            loading={props.Loading}
            //  onOpen={() => props.onOpenModal(true)}
          ></CustomButton>
        </div>
      </div>
    </div>
  );
}

export default Index;
