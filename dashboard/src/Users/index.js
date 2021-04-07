import { FakeList } from "../FakeData";
import pic from "../static/5.png";
import React from "react";

import "./index.css";
import "../Lists/index.css";
import { withRouter } from "react-router-dom";
import { BsThreeDots } from "react-icons/bs";
import { useHistory } from "react-router-dom";
import { Button, Checkbox } from "antd";
import "../Style/Navbar.css";
import { FaShoppingCart, FaEdit } from "react-icons/fa";
import { BsBarChartFill } from "react-icons/bs";
import { MdCreateNewFolder } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import { FiEye } from "react-icons/fi";
import { FaFileArchive, FaUsers } from "react-icons/fa";
import { Table, Tag, Space } from "antd";
import emppic from "../static/img/5.png";
const data = [
  {
    key: "1",
    Image: emppic,
    FullName: ["Libbie Head", "Workers"],
    UserName: "gamfirppery",
    Branch: "Baghdad Mall",
    PhoneNumber: "(449)953-7665",
  },
  {
    key: "2",
    Image: emppic,
    FullName: ["Tigao Mack", "Workers"],
    UserName: "muickbrouldy",
    Branch: "The Station",
    PhoneNumber: "(449)953-8655",
  },
  {
    key: "3",
    Image: emppic,
    FullName: ["Israr Brookes", "Workers"],
    UserName: "scarpraven",
    Branch: "Amerrat ST.",
    PhoneNumber: "(449)823-3645",
  },
  {
    key: "4",
    Image: emppic,
    FullName: ["Bayley Melton", "Workers"],
    UserName: "maniacpascals",
    Branch: "Baghdad Mall",
    PhoneNumber: "(449)253-7335",
  },
  {
    key: "5",
    Image: emppic,
    FullName: ["Elliot Sanford", "Workers"],
    UserName: "thoughtemit",
    Branch: "The station",
    PhoneNumber: "(449)953-7665",
  },
  {
    key: "6",
    Image: emppic,
    FullName: ["Oran O'Reilly", "Workers"],
    UserName: "hollowsecrt",
    Branch: "Baghdad Mall",
    PhoneNumber: "(449)356-2225",
  },

  {
    key: "10",
    Image: emppic,
    FullName: ["Aizah Hull", "Workers"],
    UserName: "moughcompactor",
    Branch: "Baghdad Mall",
    PhoneNumber: "(449)321-665",
  },
  {
    key: "11",
    Image: emppic,
    FullName: ["Samiha Casey", "Workers"],
    UserName: "definitionpurist",
    Branch: "The Station",
    PhoneNumber: "(449)563-321",
  },
];

const columns = [
  {
    title: "",
    dataIndex: "key",
    render: (value, record, rowIndex) => (
      <Checkbox
        onChange={() => {
          console.log("");
        }}
      />
    ),
  },

  {
    title: "",
    dataIndex: "Image",
    render: (theImageURL) => (
      <div style={{ width: "50px" }}>
        <img alt={theImageURL} src={theImageURL} className="cell-img" />
      </div>
    ),
  },
  {
    title: "FullName",
    dataIndex: "FullName",
    render: (FullName) => (
      <span>
        {FullName.map((text, i) => (
          <span>
            {i === 0 ? <span>{text}</span> : null}
            {i === 1 ? <h4 style={{ color: "#c8cacc" }}>{text}</h4> : null}
          </span>
        ))}
      </span>
    ),
  },
  {
    title: "UserName",
    dataIndex: "UserName",
  },
  {
    title: "Branch",
    dataIndex: "Branch",
  },
  {
    title: "PhoneNumber",
    dataIndex: "PhoneNumber",
  },
  {
    title: "",
    dataIndex: "",
    render: () => (
      <BsThreeDots style={{ cursor: " pointer" }} color="rgb(161, 158, 158)" />
    ),
  },
];

const Users = (props) => {
  const history = useHistory();

  return (
    <div className="page">
      <Table
        dataSource={data}
        columns={columns}
        onRow={() => ({
          onClick: () => history.push("/info"),
        })}
      />
    </div>
  );
};

export default Users;
