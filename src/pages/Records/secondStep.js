import React, { useState } from "react";
import { Input } from "antd";
import Autocomplete from "react-autocomplete";
import TextField from "@material-ui/core/TextField";
import RecordTemplet from "./recordTemplet.js";
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

  const [value, setvalue] = useState("");
  let darkMod =
    window.localStorage.getItem("isLight") === "light" ? false : true;
  return (
    <div className={darkMod ? "isDark" : ""}>
      <RecordTemplet data={[{ item: "oo", price: "00" }]}>
        <div className={darkMod ? "input-row-dark" : "input-row"}>
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
            placeholder="discount"
            value={note}
            style={{ border: "none", width: "max-content" }}
            onChange={(e) => handelInput("note", e.target.value)}
          />{" "}
          <div className="div-inside">
            <Autocomplete
              //   className={darkMod ? "input-rg-dark" : "input-rg"}
              getItemValue={(item) => item.item}
              items={itemsData}
              renderItem={(item, isHighlighted) => (
                <div
                  style={{ background: isHighlighted ? "lightgray" : "white" }}
                >
                  {item.item}
                </div>
              )}
              inputProps={{ placeholder: "item name" }}
              value={value}
              onChange={(e) => setvalue(e.target.value)}
              onSelect={(val) => getValues(val)}
            />
          </div>
        </div>
      </RecordTemplet>
    </div>
  );
}
