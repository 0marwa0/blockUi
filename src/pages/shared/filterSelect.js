import React, { useState } from "react";
import Select from "react-select";
import Dropdown from "react-dropdown";

import { Checkbox, Popover } from "antd";
const options = [
  <div>
    <Checkbox />
    English
  </div>,
  "Arabic",
];
const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);
function Index() {
  const [selectedOption, setSelect] = useState(null);
  const handleChange = (selectedOption) => {
    setSelect(selectedOption);
  };

  return (
    <div>
      <Popover
        placement="bottom"
        title={text}
        content={content}
        trigger="click"
      >
        <CustomButton
          lable={i18n.filter}
          filter
          loading={props.Loading}
          //fun={props.filter}i
        >
          <FiFilter />
        </CustomButton>
      </Popover>
    </div>
  );
}
export default Index;
