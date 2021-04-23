import React, { useState } from "react";
import { Input } from "antd";
import Autocomplete from "react-autocomplete";
import TextField from "@material-ui/core/TextField";
import RecordTemplet from "./recordTemplet.js";
import { Modal } from "react-responsive-modal";
import SuggestionModal from "./suggestionModal";
import { ItemDescription } from "semantic-ui-react";
export default function AutoInput() {
  const [name, setName] = useState("");
  const [note, setNote] = useState("");
  const [quantity, setquantity] = useState("");
  const [price, setPrice] = useState("");
  const handelInput = (name, v) => {
    switch (name) {
      case "name":
        setName(v);
        break;
      case "price":
        setPrice(v);
        break;
      case "quantity":
        setquantity(v);
        break;

      case "note":
        setNote(v);
        break;

      default:
        break;
    }
  };
  const itemsData = [
    {
      id: 222,
      note: "no",
      item: " 222110mm Tube",
      price: [200],
      quantity: "0",
      discount: ["5%"],
    },

    {
      id: 33,
      note: "no",
      item: "888 110mm Tube",
      price: [1000],
      quantity: "0",
      discount: ["5%"],
    },
    {
      id: 44,
      note: "no",
      item: "5555110mm Tube25",
      price: [20888888],
      quantity: "0",
      discount: ["5%"],
    },
  ];
  const getValues = (e) => {
    setvalue(e);
    let item;
    let filterd = itemsData.filter((x) => x.item === e);
    item = filterd[0];
    console.log(item, "our obj", e);
    setPrice(item.price[0]);
    setNote(item.note);
    setquantity(item.quantity);
  };
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(!modalIsOpen);
  }
  const [value, setvalue] = useState("");
  const [valueInput, setvalueInput] = useState("");
  const onPick = (item) => {
    setPrice(item.price);
    setName(item.item);
    setNote(item.note);
    setquantity(item.quantity);
    openModal();
  };
  let darkMod =
    window.localStorage.getItem("isLight") === "light" ? false : true;
  return (
    <div className={darkMod ? "isDark" : ""}>
      <RecordTemplet data={[{ item: "oo", price: "00" }]}>
        <div className={darkMod ? "input-row-dark" : "input-row"}>
          <Input
            className={darkMod ? "input-rg-dark" : "input-rg borderLess"}
            placeholder="discount"
            value={note}
            style={{ border: "none", width: "max-content" }}
            onChange={(e) => handelInput("note", e.target.value)}
          />{" "}
          <Input
            className={darkMod ? "input-rg-dark" : "input-rg borderLess"}
            placeholder="price"
            value={price}
            style={{ border: "none", width: "max-content " }}
            onChange={(e) => handelInput("price", e.target.value)}
          />
          <Input
            className={darkMod ? "input-rg-dark" : "input-rg borderLess"}
            placeholder="quantity"
            value={quantity}
            style={{ border: "none", width: "max-content" }}
            onChange={(e) => handelInput("quantity", e.target.value)}
          />{" "}
          <Input
            className={darkMod ? "input-rg-dark" : "input-rg borderLess"}
            placeholder="item"
            defaultValue={valueInput}
            value={name}
            style={{ border: "none", width: "max-content" }}
            onChange={(e) => {
              setvalueInput(e.target.value);
              openModal();
            }}
          />{" "}
        </div>
        <Modal open={modalIsOpen} onClose={openModal}>
          <SuggestionModal onPick={onPick} value={valueInput} />
        </Modal>
      </RecordTemplet>
    </div>
  );
}
