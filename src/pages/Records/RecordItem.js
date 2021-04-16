// List item Page //

import React from "react";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import "./styles/ListItem.css";
import styled, { keyframes } from "styled-components";
import { ArticlesData } from "../../fakeData";
import { BsTrashFill } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { FaCalendarAlt } from "react-icons/fa";
import { useState } from "react";
import { Popconfirm } from "antd";
import { FaShoppingCart, FaEdit } from "react-icons/fa";
import { BsBarChartFill } from "react-icons/bs";
import { MdCreateNewFolder } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import { FiEye } from "react-icons/fi";
import { FaFileArchive, FaUsers } from "react-icons/fa";
import { useHistory, Link } from "react-router-dom";
import { ReactComponent as EditICon } from "../../public/images/solid edit.svg";
import { ReactComponent as ItemIcon } from "../../public/images/itemIcon.svg";
import { PageText, PageNmber, IconCss, Pagination } from "../shared/CustomPage";
import { ReactComponent as TrashICon } from "../../public/images/solid trash-alt.svg";
import { LoadData, addData, addFile } from "../../API";
import { SuccessMesg, FailedMesg, Mesg } from "../../API/APIMessage";

const ListItemWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  gap: 15px;
`;

const ItemActions = styled.span`
  display: flex;
  padding: 5px 0;
  padding-left: 13px;
  justify-content: space-between;
  flex-direction: row;
  font-size: 13px;
  visibility: hidden;
`;
const Item = styled.img`
  width: 100%;
  height: 100%;

  border-radius: 7px;
`;

const ItemOverlay = styled.div`
  border-radius: 7px;
  width: 100%;
  height: auto;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.5),
    rgba(0, 0, 0, 0.8)
  );
  -webkit-transition: background 1s ease-out;
  -moz-transition: background 1s ease-out;
  -o-transition: background 1s ease-out;
  transition: background 1s ease-out;

  background-size: 1px 500px;
  border-radius: 10px;

  width: 100%;
  height: 100%;
`;

const ItemHolder = styled.div`
  width: 100%;
  height: 280px;
  position: relative;

  &:hover ${ItemActions} {
    visibility: visible;
  }

  &:hover ${ItemOverlay} {
    background-position: 100% 100%;
  }
`;

const ListImg = styled.img`
  with: 20px;
  height: 20px;
  border-radius: 50%;
`;
const Title = styled.div`
  color: white;
  font-size: 0.9vw;
  font-weight: bold;
  width: 80%;
  height: 33px;
  overflow: hidden;
  margin-bottom: 7px;
  line-height: 1.3em;
`;
const Date = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
  color: white;
  font-size: 9px;
`;
const ListIcon = styled.div`
  border: 1px solid white;
  gap: 5px;
  display: flex;
  height: 26px;
  justify-content: center;
  align-items: center;
  border-radius: 7px;
  margin-right: 13px;
  cursor: pointer;
  margin-top: 9px;
  padding: 1px 10px;
  color: white;
`;

const ListBottom = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;

  margin-top: 140px;
`;

const BottomText = styled.div`
  display: flex;
  opacity: 1;

  justify-content: space-between;
`;
const ListItem = (props) => {
  console.log(props.data, "article list");
  const [currentPage, setcurrentPage] = useState(1);
  const [pagePerOnce, setpagePerOnce] = useState(6);

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
  const Data = props.data.slice(indexOfFirstPage, indexOfLastPage);
  const [Loading, setLoading] = useState(false);

  const onEdit = (id) => {
    setLoading(true);

    let data = {
      title: "test",
      description: "test",
      platform: "web",
      publish: true,
      image: "file",
      lang: "ar",
      gov: "baghdad",
    };
    addData(
      `article/edit/${id}`,
      data,
      (mesg, Data) => {
        SuccessMesg("Edit Article Done!");
        setLoading(false);
      },
      (err) => {
        setLoading(false);

        FailedMesg(err);
      }
    );
  };

  const onDelete = (id) => {
    setLoading(true);
    let data = {
      publish: false,
    };

    addData(
      `article/edit/${id}`,
      data,
      (mesg, Data) => {
        SuccessMesg("unpublish Article Done!");
        setLoading(false);
      },
      (err) => {
        setLoading(false);

        FailedMesg(err);
      }
    );
  };
  const items = [
    {
      name: "ali",
      phone: "4568741",
      recive: "5555",
      Residual: "895",
      discount: "936",
      emp: "Ahmed",
      note: "no thing",
      Address: "Babylone",
      Price: "9999",
    },

    {
      name: "ali",
      phone: "4568741",
      recive: "5555",
      Residual: "895",
      discount: "936",
      emp: "Ahmed",
      note: "no thing",
      Address: "Babylone",
      Price: "9999",
    },
    {
      name: "ali",
      phone: "4568741",
      recive: "5555",
      Residual: "895",
      discount: "936",
      emp: "Ahmed",
      note: "no thing",
      Address: "Babylone",
      Price: "9999",
    },
    {
      name: "ali",
      phone: "4568741",
      recive: "5555",
      Residual: "895",
      discount: "936",
      emp: "Ahmed",
      note: "no thing",
      Address: "Babylone",
      Price: "9999",
    },

    {
      name: "ali",
      phone: "4568741",
      recive: "5555",
      Residual: "895",
      discount: "936",
      emp: "Ahmed",
      note: "no thing",
      Address: "Babylone",
      Price: "9999",
    },
    {
      name: "ali",
      phone: "4568741",
      recive: "5555",
      Residual: "895",
      discount: "936",
      emp: "Ahmed",
      note: "no thing",
      Address: "Babylone",
      Price: "9999",
    },
  ];
  let darkMod =
    window.localStorage.getItem("isLight") === "light" ? false : true;
  return (
    <div className="List-holder">
      {items.map((item) => (
        <div class={darkMod ? "card-dark" : "card"}>
          <div class={darkMod ? "card_content-dark" : "card_content"}>
            <div className={darkMod ? "card-user-dark" : "card-user"}>
              <img src={require("" + "../../public/images/0.png")} />
              <span>name</span>
              <span>
                <MdCreateNewFolder color="var(--black)" /> :2/5/2021
              </span>
              <span>
                <FaEdit color="var(--black)" /> :2/5/2021
              </span>
            </div>
            <div className="List-owner"> record owner</div>
            <p class={darkMod ? "card_text-dark" : "card_text"}>
              <ul>
                <li className="flex-line">
                  Residual : <span>{item.Residual}</span>
                </li>{" "}
                <li className="flex-line ">
                  Received : <span>{item.recive}</span>
                </li>
                <li className="flex-line active-li">
                  Discount:{item.discount}
                </li>{" "}
                <li className="flex-line active-li">
                  Phone :<span>{item.phone}</span>
                </li>
              </ul>
              <ul>
                <li className="flex-line">
                  Employe : <span> {item.emp}</span>
                </li>{" "}
                <li className="flex-line ">
                  Note <span>{item.note}</span>
                </li>
                <li className="flex-line active-li">
                  Price :<span>{item.Price}</span>
                </li>
                <li className="flex-line active-li">
                  Address : <span>{item.Address}</span>
                </li>
              </ul>
            </p>
            <div className="flex-line" style={{ justifyContent: "center" }}>
              <button
                class={darkMod ? "btn-dark card_btn" : "btn card_btn"}
                // class="btn card_btn"
              >
                <AiOutlineClose color="red" />
              </button>{" "}
              <button
                class={darkMod ? "btn-dark card_btn" : "btn card_btn"}
                // class="btn card_btn"
              >
                <FaEdit color="green" />
              </button>
              <button
                class={darkMod ? "btn-dark card_btn" : "btn card_btn"}
                //   class="btn card_btn"
              >
                <FiEye color="blue" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListItem;
