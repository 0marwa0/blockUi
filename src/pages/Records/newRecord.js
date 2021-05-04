import React, { FC, useEffect, useState, useCallback, useRef } from "react";
import styled from "styled-components";
import FinalStep from "./finalStep";
import { Button, DatePicker, Checkbox, Space, Input } from "antd";
import "./styles/index.css";
import { CustomButton } from "../shared/SharedComponents";
import { VscTriangleUp, VscTriangleDown } from "react-icons/vsc";
import { MultiStepForm, Step } from "react-multi-form";
import { addData } from "../../API/index";
import CustomPage from "../shared/CustomPage";
import { SortableContainer, SortableElement } from "react-sortable-hoc";
import { BiDotsVerticalRounded } from "react-icons/bi";
import FirstStep from "./firstStep";
import { useLocale } from "react-easy-localization";
import { FailedMesg, Mesg, SuccessMesg } from "../../API/APIMessage";
import { LoadData } from "../../API/index";

import ThirdStep from "./thirdStep";
import SecondStep from "./secondStep";
import { render } from "@testing-library/react";
const { RangePicker } = DatePicker;
const Container = styled.div`
  width: 100%;
  margin: 40px;
  @media (max-width: 590px) {
    width: 300px;
  }
`;

export default function Index(props) {
  const [active, setactivenum] = useState(1);
  const [loading, setLoading] = useState("");
  const setActive = (num) => {
    setactivenum(num);
  };
  const [store, setStore] = useState(props.itemsData);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [driver, setDriver] = useState("");
  const [note, setNote] = useState("");
  const [item, setItem] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [discount, setDiscount] = useState("");
  const [recordItems, setRecordItems] = useState([]);
  const handleInput = (key, e) => {
    let value = e.target.value;
    switch (key) {
      case "item":
        setItem(value);
        break;
      case "price":
        setPrice(value);
        break;
      case "quantity":
        setQuantity(value);
        break;
      case "discount":
        setDiscount(value);
        break;
      case "name":
        setName(value);
        break;
      case "address":
        setAddress(value);
        break;
      case "phone":
        setPhone(value);
        break;
      case "driver":
        setDriver(value);
        break;
      case "note":
        setNote(value);
        break;

      default:
        break;
    }
  };
  const handleSubmit = () => {
    let data = {
      items: recordItems,

      customer: {
        name: name,
        telephone: phone,
        address: address,
      },

      branch: true,
      currency: "USD",
      driver: driver,
      description: note,
      total: 8.0,
      receive: 11.0,
      rest: 9.0,
      discount: discount,
      creator: 1,
    };

    // onOpenModal(false);
    console.log(data, "record sended");
    setLoading(true);
    addData(
      "record",
      data,
      (mesg, Data) => {
        SuccessMesg("Record Created Successfully !");
        setLoading(false);
      },
      (err) => {
        setLoading(false);

        FailedMesg(err);
      }
    );
  };

  const { i18n, languageCode, changeLanguage } = useLocale();
  const addItem = () => {
    console.log("befor", store);
    if (true) {
      console.log("after", store);
      setStore([{ item: item, price: price }]);
    }
  };
  let ar = window.localStorage.getItem("language") === "arabic" ? true : false;
  const getItmeData = (items) => {
    setRecordItems(items);
  };
  return (
    <CustomPage custom={true} pageTitle={i18n.newRecord} data={[]}>
      <Container>
        <MultiStepForm activeStep={active}>
          <Step label={i18n.template}>
            <FirstStep
              data={[
                { name: "water", num: "55" },
                { name: "Sewers", num: "55" },
              ]}
              onrow={true}
              next={() => setActive(active + 1)}
            />
          </Step>
          <Step label={i18n.chooseTemplate}>
            <FirstStep
              data={[
                { name: " 110mm Tube", num: "55" },
                { name: " 110mm Tube", num: "55" },
                { name: " 110mm Tube", num: "55" },
              ]}
              onrow={true}
              next={() => setActive(active + 1)}
            />
          </Step>
          <Step label={i18n.buildRecord}>
            <SecondStep
              itemsData={store}
              handleInput={handleInput}
              addItem={addItem}
              getItems={getItmeData}
            />
          </Step>
          <Step label={i18n.submit}>
            <FinalStep handleInput={handleInput} />
          </Step>
        </MultiStepForm>

        <div style={{ padding: "10px 0" }}>
          {active !== 1 && (
            <Button
              style={{
                color: "var(--black)",
                backgroundColor: "var(--cyan)",
              }}
              onClick={() => setActive(active - 1)}
            >
              {i18n.previous}
            </Button>
          )}
          {active !== 4 && (
            <Button
              style={{
                color: "var(--black)",
                backgroundColor: "var(--cyan)",

                float: ar ? "left" : "right",
              }}
              onClick={() => setActive(active + 1)}
            >
              {i18n.next}
            </Button>
          )}
          {active === 4 ? (
            <Button
              style={{
                color: "var(--black)",
                backgroundColor: "var(--cyan)",
                float: ar ? "left" : "right",
              }}
              onClick={handleSubmit}
            >
              finsh
            </Button>
          ) : null}
        </div>
      </Container>
    </CustomPage>
  );
}
