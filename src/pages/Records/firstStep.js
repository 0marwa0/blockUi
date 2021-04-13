import { GrFormClose } from "react-icons/gr";
import { TableLoading } from "../shared/Loading";
import Templet from "./Templet";
import { FaPlus } from "react-icons/fa";
import { CgClose } from "react-icons/cg";
import { RiEdit2Fill } from "react-icons/ri";
import React, { useState } from "react";
import "./styles/steps.css";
import { Modal } from "react-responsive-modal";
import { Table, Checkbox, Tag, Popover } from "antd";
const templet = [
  { id: "11", tempName: "water", row: [{ name: "test", price: "55$" }] },
];
export const RecordsColumns = [
  { key: 1, title: "", dataIndex: "", render: () => <Checkbox /> },
  {
    key: 2,
    title: "Templet Name",
    dataIndex: "name",
    sorter: {
      compare: (a, b) => a.english - b.english,
      multiple: 1,
    },
  },
];
function Index(props) {
  const RecordsData = props.data;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(!modalIsOpen);
  }
  let darkMod =
    window.localStorage.getItem("isLight") === "light" ? false : true;
  const [Loading, setLoading] = useState(false);
  return (
    <div className={darkMod ? "isDark" : ""}>
      <Table
        columns={RecordsColumns}
        rowClassName="tableRow"
        pagination={false}
        onRow={() =>
          props.onrow
            ? {
                onClick: openModal,
              }
            : ""
        }
        dataSource={props.data}
        locale={{
          emptyText: TableLoading(Loading, "Items"),
          //EmptyText(props.Loading, props.Item),
        }}
      />{" "}
      <Modal
        open={modalIsOpen}
        onClose={openModal}
        styles={{ padding: "10px" }}
      >
        <Templet />
      </Modal>
    </div>
  );
}

export default Index;
