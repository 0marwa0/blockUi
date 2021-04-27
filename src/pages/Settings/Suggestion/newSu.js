import { GrFormClose } from "react-icons/gr";
import { TableLoading } from "../../shared/Loading";
import { CustomButton } from "../../shared/SharedComponents";
import { FaPlus, FaTrash } from "react-icons/fa";
import { CgClose } from "react-icons/cg";
import { RiEdit2Fill } from "react-icons/ri";
import React, { useState } from "react";
import "../styles/index.css";
import { Table, Checkbox, Tag, Input, Popover } from "antd";
function Index(props) {
  const templet = [
    { id: "11", tempName: "water", row: [{ name: "test", price: "55$" }] },
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
  const RecordsColumns = [
    { key: 1, title: "", dataIndex: "", render: () => <Checkbox /> },
    {
      key: 2,
      title: "Item",
      dataIndex: "item",
      sorter: {
        compare: (a, b) => a.english - b.english,
        multiple: 1,
      },
    },

    {
      key: 5,
      title: "Price",
      dataIndex: "price",
      sorter: {
        compare: (a, b) => a.english - b.english,
        multiple: 1,
      },
      render: (Status) => (
        <>
          {Status.map((status) => {
            let color;
            if (status > 100) {
              color = "green";
            } else {
              color = "gold";
            }
            return (
              <Tag color={color} key={status}>
                {status + "$"}
              </Tag>
            );
          })}
        </>
      ),
    },

    {
      key: 6,
      title: "Qunatity",
      dataIndex: "quantity",
      sorter: {
        compare: (a, b) => a.math - b.math,
        multiple: 2,
      },
    },
    {
      key: 7,
      title: "Discount",
      dataIndex: "discount",
      sorter: {
        compare: (a, b) => a.english - b.english,
        multiple: 1,
      },
      render: (Status) => (
        <>
          {Status.map((status) => {
            let color;
            if (status === "Enabled") {
              color = "green";
            } else {
              color = "gold";
            }
            return (
              <Tag color={color} key={status}>
                {status.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      key: 7,
      title: "",
      dataIndex: "",
      sorter: {
        compare: (a, b) => a.english - b.english,
        multiple: 1,
      },
      render: () => (
        <div className="sugges-icon">
          <FaTrash color="red" />
          <RiEdit2Fill color="var(--cyan)" />
        </div>
      ),
    },
  ];
  const RecordsData = [
    { item: " 110mm Tube", price: [200], quantity: "0", discount: ["5%"] },
    { item: " 110mm Tube", price: [1000], quantity: "0", discount: ["5%"] },
    { item: " 110mm Tube", price: [20], quantity: "0", discount: ["5%"] },
  ];
  let darkMod =
    window.localStorage.getItem("isLight") === "light" ? false : true;
  const [Loading, setLoading] = useState(false);
  return (
    <div className={darkMod ? "templetPopup-dark" : "templetPopup"}>
      <div className={darkMod ? "isDark" : ""}>
        <Table
          columns={RecordsColumns}
          rowClassName="tableRow"
          pagination={false}
          dataSource={RecordsData}
          locale={{
            emptyText: TableLoading(Loading, "Items"),
            //EmptyText(props.Loading, props.Item),
          }}
        />
      </div>

      <div className={darkMod ? "input-row-dark" : "input-row"}>
        <div className="flex-row">
          <div>
            <Input
              className={darkMod ? "input-rg-dark" : "input-rg"}
              placeholder="item"
              style={{ border: "none", width: "max-content" }}
              onChange={(e) => handelInput("name", e.target.value)}
            />
          </div>
          <div>
            <Input
              className={darkMod ? "input-rg-dark" : "input-rg"}
              placeholder="price"
              style={{ border: "none", width: "max-content" }}
              onChange={(e) => handelInput("price", e.target.value)}
            />
          </div>
          <div>
            <Input
              className={darkMod ? "input-rg-dark" : "input-rg"}
              placeholder="quantity"
              style={{ border: "none", width: "max-content" }}
              onChange={(e) => handelInput("note", e.target.value)}
            />
          </div>
          <div>
            <Input
              className={darkMod ? "input-rg-dark" : "input-rg"}
              placeholder="discount"
              style={{ border: "none", width: "100%" }}
              onChange={(e) => handelInput("note", e.target.value)}
            />
          </div>
        </div>
        <div>
          <CustomButton
            main
            lable={<FaPlus color="var(--yellow)" />}
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
