// List item Page //
import { useLocale } from "react-easy-localization";
import { FiPhoneCall } from "react-icons/fi";
import { ImLocation } from "react-icons/im";
import React from "react";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import "./styles/ListItem.css";
import styled, { keyframes } from "styled-components";
import { ArticlesData } from "../../fakeData";
import { BsTrashFill } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { FaCalendarAlt } from "react-icons/fa";
import { useState } from "react";
import Moment from "react-moment";
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

const ListItem = (props) => {
  console.log(props.data, "article list");
  const [currentPage, setcurrentPage] = useState(1);
  const [pagePerOnce, setpagePerOnce] = useState(6);

  const { i18n, languageCode, changeLanguage } = useLocale();
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
  let darkMod = window.localStorage.getItem("mode") === "dark" ? true : false;
  return (
    <div className="List-holder">
      {props.data.map((item) => (
        <div class={darkMod ? "card-dark" : "card"}>
          <div class={darkMod ? "card_content-dark" : "card_content"}>
            <div className={darkMod ? "card-user-dark" : "card-user"}>
              <img src={require("" + "../../public/images/0.png")} />
              <span>name</span>
              <span>
                <MdCreateNewFolder color="var(--yellow)" /> :
                <Moment data={item.date} format="dd/MM/yy" />{" "}
              </span>
              <span>
                <FaEdit color="var(--yellow)" /> :
                <Moment data={item.modified} format="dd/MM/yy" />
              </span>
            </div>
            <div className="List-owner"> {item.customer.name}</div>
            <div class={darkMod ? "card_text-dark" : "card_text"}>
              <ul>
                <li className="flex-line">
                  {i18n.residual} : <span>{item.rest}</span>
                </li>
                <li className="flex-line ">
                  {i18n.received}: <span>{item.receive}</span>
                </li>
                <li className="flex-line active-li">
                  {i18n.discount}:{item.discount}
                </li>
              </ul>
              <ul>
                <li className="flex-line">
                  {i18n.creater}: <span> {item.creator}</span>
                </li>
                <li className="flex-line ">
                  {i18n.driverName} :<span>{item.driver}</span>
                </li>
                <li className="flex-line active-li">
                  {i18n.Price} :<span>{item.price}</span>
                </li>
              </ul>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "0 20px",
                marginBottom: "5px",
              }}
            >
              <li className="flex-line active-li">
                <FiPhoneCall color="var(--yellow)" /> :
                <span>{item.customer.telephone}</span>
              </li>
              <li className="flex-line active-li">
                <ImLocation color="var(--yellow)" />:{" "}
                <span>{item.customer.address}</span>
              </li>
            </div>
            <div className="flex-line" style={{ justifyContent: "center" }}>
              <button
                class={darkMod ? "btn-dark card_btn" : "btn card_btn"}
                // class="btn card_btn"
              >
                <AiOutlineClose color="red" />
              </button>
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
