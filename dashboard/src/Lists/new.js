import React from "react";
import { Table, Tag, Space } from "antd";
import emppic from "../static/img/5.png";
import { BsThreeDots } from "react-icons/bs";
import { useHistory } from "react-router-dom";
import { Button, Checkbox, Input } from "antd";
const NewList = () => {
  const data = [
    {
      key: "1",
      Image: emppic,
      FullName: ["Libbie Head", "Cashier"],
      UserName: "gamfirppery",
      Branch: "Baghdad Mall",
      PhoneNumber: "(449)953-7665",
    },
    {
      key: "2",
      Image: emppic,
      FullName: ["Tigao Mack", "Cashier"],
      UserName: "muickbrouldy",
      Branch: "The Station",
      PhoneNumber: "(449)953-8655",
    },
    {
      key: "3",
      Image: emppic,
      FullName: ["Israr Brookes", "Cashier"],
      UserName: "scarpraven",
      Branch: "Amerrat ST.",
      PhoneNumber: "(449)823-3645",
    },
    {
      key: "4",
      Image: emppic,
      FullName: ["Bayley Melton", "Cashier"],
      UserName: "maniacpascals",
      Branch: "Baghdad Mall",
      PhoneNumber: "(449)253-7335",
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
        <BsThreeDots
          style={{ cursor: " pointer" }}
          color="rgb(161, 158, 158)"
        />
      ),
    },
  ];

  const history = useHistory();
  return (
    <div className="page">
      <Table
        dataSource={data}
        columns={columns}
        pagination={false}
        // onRow={() => ({
        //   onClick: () => history.push("/info"),
        // })}
      />
      <div className="input-ctrl">
        <Input placeholder="price" />
        <Input placeholder="amount" />
        <Input placeholder="discont" />
        <Input placeholder="materal" />
      </div>
    </div>
  );
};

export default NewList;
