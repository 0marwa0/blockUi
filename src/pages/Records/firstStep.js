import { GrFormClose } from "react-icons/gr";
import { TableLoading } from "../shared/Loading";
import Templet from "./Templet";
import { FaPlus } from "react-icons/fa";
import { CgClose } from "react-icons/cg";
import Pagination from "../shared/pagination";
import { RiEdit2Fill } from "react-icons/ri";
import pic from "../../public/images/0.png";
import React, { useState } from "react";
import "./styles/steps.css";
import { Modal } from "react-responsive-modal";
import { Table, Checkbox, Tag, Popover } from "antd";
const templet = [
  {
    id: "11",
    tempName: "water",

    row: [{ name: "test", price: "55$" }],
  },
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
  {
    key: 2,
    title: "Number of Items",
    dataIndex: "num",
    sorter: {
      compare: (a, b) => a.english - b.english,
      multiple: 1,
    },
  },
  {
    key: 2,
    title: "Edit Date",
    dataIndex: "num",
    sorter: {
      compare: (a, b) => a.english - b.english,
      multiple: 1,
    },
  },
  {
    key: "6",
    title: "Created by",
    dataIndex: "image",
    render: (theImageURL) => (
      <div style={{ width: "50px" }}>
        <img
          alt={theImageURL}
          src={pic}
          style={{ borderRadius: "50%", width: "40px", height: "40px" }}
        />
      </div>
    ),
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
  const [currentPage, setcurrentPage] = useState(1);
  const [pagePerOnce, setpagePerOnce] = useState(10);
  const [pageNumber, setpageNumber] = useState(0);
  const prevPage = () => {
    if (currentPage > 1) {
      setcurrentPage(currentPage - 1);
    }
  };
  const totalPge = Math.ceil(props.data.length / pagePerOnce);

  const nextPage = () => {
    if (currentPage != totalPge) {
      setcurrentPage(currentPage + 1);
    }
  };
  const indexOfLastPage = currentPage * pagePerOnce;
  const indexOfFirstPage = indexOfLastPage - pagePerOnce;
  let Data = props.data.slice(indexOfFirstPage, indexOfLastPage);
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
                onClick: props.next,
              }
            : ""
        }
        dataSource={props.data}
        locale={{
          emptyText: TableLoading(Loading, "Items"),
          //EmptyText(props.Loading, props.Item),
        }}
      />
      <Pagination
        length={Data.length}
        currentPage={currentPage}
        prevPage={prevPage}
        totalPge={totalPge}
        nextPage={nextPage}
        lengthAll={props.data.length}
      />
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
