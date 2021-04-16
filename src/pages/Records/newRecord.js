import React, { FC, useState, useCallback, useRef } from "react";
import styled from "styled-components";
import { Button, DatePicker, Checkbox, Space, Input } from "antd";
import "./styles/index.css";
import { CustomButton } from "../shared/SharedComponents";
import { VscTriangleUp, VscTriangleDown } from "react-icons/vsc";
import { MultiStepForm, Step } from "react-multi-form";
import CustomPage from "../shared/CustomPage";
import { SortableContainer, SortableElement } from "react-sortable-hoc";
import { BiDotsVerticalRounded } from "react-icons/bi";
import FirstStep from "./firstStep";
import ThirdStep from "./thirdStep";
import SecondStep from "./secondStep";
const { RangePicker } = DatePicker;
export const TextNote = styled.div`
  color: var(--darkGray);
  font-size: 13px;
`;
const PageWrapper = styled.div`
  width: max-content;

  display: flex;
  flex-direction: column;
  height: 85%;
  padding: 20px 40px;
`;
export const SideModal = styled.div`
  width: max-content;
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;

  width: 540px;
  padding: 30px 40px;
  margin-bottom: 20px;
`;

const Container = styled.div`
  width: 100%;
  margin: 40px;
  @media (max-width: 590px) {
    width: 300px;
  }
`;
const itemsData = [
  { name: "Nonoxxx", price: "2000", note: "55" },
  { name: "Nono", price: "2000", note: "55" },
  { name: "marwa", price: "2000", note: "55" },
];
const Index = (props) => {
  const [state, setState] = useState(itemsData);
  let node;
  const handleClose = (e) => {
    if (node.contains(e.target)) {
      return;
    }
    props.fun(false);
  };
  const [active, setActive] = React.useState(1);
  return (
    <CustomPage custom={true} pageTitle="New Record" data={[]}>
      <Container>
        <MultiStepForm activeStep={active}>
          <Step label="Templet">
            <FirstStep
              data={[
                { name: "water", num: "55" },
                { name: "Sewers", num: "55" },
              ]}
            />
          </Step>
          <Step label="Choose Tamplet ">
            <FirstStep
              data={[
                { name: " 110mm Tube", num: "55" },
                { name: " 110mm Tube", num: "55" },
                { name: " 110mm Tube", num: "55" },
              ]}
              onrow={true}
            />
          </Step>
          <Step label="Build Record">
            <SecondStep />
          </Step>
          <Step label="Submit">done </Step>
        </MultiStepForm>
        <div style={{ padding: "10px 0" }}>
          {active !== 1 && (
            <Button
              style={{ backgroundColor: "var(--yellow)" }}
              onClick={() => setActive(active - 1)}
            >
              Previous
            </Button>
          )}
          {active !== 4 && (
            <Button
              style={{
                color: "black",
                backgroundColor: "var(--yellow)",
                float: "right",
              }}
              onClick={() => setActive(active + 1)}
            >
              Next
            </Button>
          )}
        </div>
      </Container>
    </CustomPage>
  );
};

export default Index;
