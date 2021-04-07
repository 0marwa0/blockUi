import { FakeList } from "../FakeData";
import pic from "../static/5.png";
import React from "react";
import "./index.css";
import "../Style/Navbar.css";
import { FaShoppingCart, FaEdit } from "react-icons/fa";
import { BsBarChartFill } from "react-icons/bs";
import { MdCreateNewFolder } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import { FiEye } from "react-icons/fi";
import { FaFileArchive, FaUsers } from "react-icons/fa";

const ListCard = () => {
  return FakeList.map((item) => (
    // <li class="cards_item">
    <div class="card">
      <div class="card_image">
        {/* <img src="https://picsum.photos/500/300/?image=10" /> */}
      </div>
      <div class="card_content">
        <div className="card-user">
          <img src={pic} />
          <span>name</span>
          <span>
            <MdCreateNewFolder /> :2/5/2021
          </span>
          <span>
            <FaEdit /> :2/5/2021
          </span>
        </div>
        <p class="card_text">
          <ul>
            <li className="flex-line">
              Residual : <span>{item.Residual}</span>
            </li>{" "}
            <li className="flex-line ">
              Received : <span>{item.recive}</span>
            </li>
            <li className="flex-line active-li">Discount:{item.discount}</li>{" "}
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
        <div className="flex-line">
          <button class="btn card_btn">
            <FaEdit color="green" />
          </button>
          <button class="btn card_btn">
            <AiOutlineClose color="red" />
          </button>
          <button class="btn card_btn">
            <FiEye color="blue" />
          </button>
        </div>
      </div>
    </div>
    // </li>
  ));
};

export default ListCard;
