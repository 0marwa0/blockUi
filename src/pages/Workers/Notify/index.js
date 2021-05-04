import React, { useState } from "react";
import { Input, InputNumber } from "antd";
import { Upload, Menu, Dropdown, Button, Select } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { Mesg, FailedMesg, SuccessMesg } from "../../../API/APIMessage";
import "../../shared/style/index.css";
import "../../Admins/Admin/index.css";
import {
  InputLable,
  ModleFooter,
  ModleHeader,
  Space,
} from "../../shared/SharedStyle";
import styled from "styled-components";
import { ReactComponent as DropIcon } from "../../../public/images/dropdown.svg";
import { ReactComponent as Close } from "../../../public/images/close.svg";
import { addData } from "../../../API";
import { useLocale } from "react-easy-localization";

import { AiFillCamera } from "react-icons/ai";
import { GiNorthStarShuriken } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { CustomModleButton, CustomButton } from "../../shared/SharedComponents";
import { CustomInput, CustomInputArea } from "../../shared/SharedStyle";
const { Option } = Select;

const { TextArea } = Input;

const optionData = (
  <Menu>
    <Menu.Item key="1" isSelected={true}>
      all
    </Menu.Item>
    {/* <Menu.Item key="2">100</Menu.Item>
    <Menu.Item key="3">50</Menu.Item> */}
  </Menu>
);

function Index(props) {
  const [title, setTitle] = useState("");
  const [mesg, setMesg] = useState("");
  const [Loading, setLoading] = useState(false);

  const { i18n, languageCode, changeLanguage } = useLocale();
  const handleInput = (e, key) => {
    let value = e.target.value;
    if (key === "title") {
      setTitle(value);
    }
    if (key === "mesg") {
      setMesg(value);
    }
  };

  const clear = () => {
    setTitle("");
    setMesg("");
  };
  const handleSubmit = () => {
    let receiver = props.all ? "all" : props.recevierId.toString();
    let data = {
      title: title,
      to: receiver,
      contents: mesg,
      lang: "ar",
      userId: props.id,
    };
    setLoading(true);
    //if (title != "" && mesg != "") {
    // addData(
    //   "send/notification",
    //   data,
    //   (mesg, Data) => {
    //     // if (!Data.status) {
    //     //   Mesg(mesg);
    //     // }
    //     console.log(data, Data, mesg, "send notifi");
    setTimeout(() => {
      SuccessMesg("Notification done !");
      clear();
      setLoading(false);
      props.Close();
    }, 1200);

    //     },
    //     (err) => {
    //       props.Close();
    //       setLoading(false);
    //       clear();
    //       FailedMesg(err);
    //     }
    //   );
    // } else {
    //   FailedMesg("Cant send an empty notification");

    //   // props.Close();
    // }
  };
  const [imageName, setimageName] = useState();
  const [file, setfile] = useState("");
  const [ImageUrl, setImageUrl] = useState("");
  const Image = (e) => {
    setfile(e);
  };

  const handleImage = (info, fileList) => {
    Image(info.originFileObj);

    if (info.file.status === "done") {
      let data = {
        uid: info.file.uid,
        name: info.file.name,
        url: info.file.response.url,
      };
      setimageName(data);
      props.handleSelect(info.file.response.url, "image");
      // console.log(fileList, "respone");
    }
  };
  const handleClose = (e) => {
    if (node.contains(e.target)) {
      return;
    }
    props.Close(false);
  };
  const Props = {
    //multiple: false,
    name: "image",
    action: "https://station-solo.herokuapp.com/dash/v1/upload",
    headers: { token: localStorage.getItem("station_token") },
    showUploadList: false,
    transformFile(file) {
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          const canvas = document.createElement("canvas");
          const img = document.createElement("img");
          img.src = reader.result;

          img.onload = () => {
            const ctx = canvas.getContext("2d");
            ctx.drawImage(img, 0, 0);
            ctx.fillStyle = "yellow";
            ctx.textBaseline = "middle";
            setImageUrl(img.src);
            ctx.fillText("Ant Design", 20, 20);
            canvas.toBlob(resolve);
          };
        };
      });
    },
  };
  let node;
  let darkMod = window.localStorage.getItem("mode") === "dark" ? true : false;
  return (
    <div className="Overlay" onClick={(e) => handleClose(e)}>
      <div
        className={darkMod ? "Modal-dark" : "Modal"}
        ref={(nods) => {
          node = nods;
        }}
      >
        <div className="SideModal">
          <div style={{ height: "150vh" }}>
            <div className="Title">
              <div>{i18n.addNewWorker}</div>
              <Close onClick={props.Close} cursor="pointer" />
            </div>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
              }}
            >
              <div
                className="ProfileImage"
                style={{ backgroundImage: "../public/images/0.png" }}
              >
                {/* {ImageUrl === "" ? name : ""} */}
                <div className="Space camra-icon" style={{ cursor: "pointer" }}>
                  <Upload
                    {...Props}
                    onChange={(e) => handleImage(e)}
                    defaultFileList={imageName && [imageName]}
                  >
                    <AiFillCamera color="var(--yellow)" size={25} />
                  </Upload>
                </div>
              </div>
            </div>
            <div className="Space" /> <div />
            <InputLable>
              {i18n.fullName}
              <Input
                className={darkMod ? "input-rg-dark" : "input-rg"}
                onChange={(e) => props.handleInput(e, "name")}
                placeholder="Write admin name"
              />
            </InputLable>
            <div className="Space" /> <div />
            <InputLable>
              {i18n.email}
              <Input
                placeholder="Write admin Email"
                className={darkMod ? "input-rg-dark" : "input-rg"}
                onChange={(e) => props.handleInput(e, "email")}
              />
            </InputLable>
            <div className="Space" /> <div />
            <InputLable>
              {i18n.phone}
              <Input
                placeholder="Write admin phone number"
                className={darkMod ? "input-rg-dark" : "input-rg"}
                onChange={(e) => props.handleInput(e, "phone")}
              />
            </InputLable>
            <div className="Space" /> <div />
          </div>
          <Space />
          <div
            style={{
              marginTop: "40px",
            }}
          >
            <div className="ModalFooter">
              <div style={{ float: "right" }}>
                <CustomButton main extra fun={props.handleSubmit}>
                  {props.type === "create" ? "Create" : i18n.save}
                </CustomButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
