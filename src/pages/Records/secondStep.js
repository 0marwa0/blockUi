import React, { useEffect, useState } from "react";
import { Input } from "antd";
import Autocomplete from "react-autocomplete";
import TextField from "@material-ui/core/TextField";
import RecordTemplet from "./recordTemplet.js";
import { Modal } from "react-responsive-modal";
import SuggestionModal from "./suggestionModal";
import { ItemDescription } from "semantic-ui-react";
export default function AutoInput(props) {
  const [item, setItem] = useState("");
  const [discount, setDiscount] = useState("");
  const [quantity, setquantity] = useState("");
  const [price, setPrice] = useState("");
  const handelInput = (name, e) => {
    let v = e.target.value;
    switch (name) {
      case "item":
        setItem(v);
        break;
      case "price":
        setPrice(v);
        break;
      case "quantity":
        setquantity(v);
        break;

      case "discount":
        setDiscount(v);
        break;

      default:
        break;
    }
  };
  const [store, setStore] = useState(props.itemsData);
  useEffect(() => {
    if (props.itemsData) {
      setStore(props.itemsData);
    }
  }, [props.itemsData]);
  const getValues = (e) => {
    setvalue(e);
    let item;
    let filterd = store.filter((x) => x.item === e);
    item = filterd[0];
    console.log(item, "our obj", e);
    setPrice(item.price[0]);
    setDiscount(item.note);
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
    setItem(item.item);
    setDiscount(item.note);
    setquantity(item.quantity);
    openModal();
  };
  const [data, setData] = useState([{ item: "oo", price: "00" }]);
  let darkMod = window.localStorage.getItem("mode") === "dark" ? true : false;
  const handleEnter = (event) => {
    if (event.key === "Enter") {
      if (item != "" && price != "") {
        setData((data) => [...data, { item, price, quantity, discount }]);
      }
    }
  };
  useEffect(() => {
    updateItems();
  }, [data]);
  const updateItems = () => {
    props.getItems(data);
  };
  return (
    <div className={darkMod ? "isDark" : ""}>
      <RecordTemplet data={data}>
        <div className={darkMod ? "input-row-dark" : "input-row"}>
          <Input
            className={darkMod ? "input-rg-dark" : "input-rg borderLess"}
            placeholder="item"
            defaultValue={valueInput}
            value={item}
            onKeyPress={handleEnter}
            style={{ border: "none", width: "max-content" }}
            onChange={(e) => {
              setvalueInput("item", e);
              props.handleInput("item", e);
              openModal();
            }}
          />
          <Input
            className={darkMod ? "input-rg-dark" : "input-rg borderLess"}
            placeholder="price"
            value={price}
            style={{ border: "none", width: "max-content " }}
            onKeyPress={handleEnter}
            onChange={(e) => {
              handelInput("price", e);
              props.handleInput("price", e);
            }}
          />
          <Input
            className={darkMod ? "input-rg-dark" : "input-rg borderLess"}
            placeholder="quantity"
            value={quantity}
            onKeyPress={handleEnter}
            style={{ border: "none", width: "max-content" }}
            onChange={(e) => {
              handelInput("quantity", e);
              props.handleInput("quantity", e);
            }}
          />
          <Input
            className={darkMod ? "input-rg-dark" : "input-rg borderLess"}
            placeholder="discount"
            value={discount}
            onKeyPress={handleEnter}
            style={{ border: "none", width: "max-content" }}
            onChange={(e) => {
              handelInput("discount", e);
              props.handleInput("discount", e);
            }}
          />
        </div>
        <Modal open={modalIsOpen} onClose={openModal} showCloseIcon={false}>
          <SuggestionModal onPick={onPick} value={valueInput} />
        </Modal>
      </RecordTemplet>
    </div>
  );
}
