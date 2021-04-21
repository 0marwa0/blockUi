import React, { useEffect, useState } from "react";
import SideBar from "../Sidebar";
import "./styles/index.css";
import { Upload } from "antd";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import { CustomInput } from "../shared/SharedStyle";
import { BsExclamationCircle } from "react-icons/bs";
import { Mesg, SuccessMesg, FailedMesg } from "../../API/APIMessage";
import { Input } from "antd";
import pic from "../../public/images/b.jpg";
import "../shared/style/index.css";
import { CustomButton } from "../shared/SharedComponents";
function Index(props) {
  let user = props.admins.filter((i) => i.id === props.id);
  let data = {};
  user.map((i) => (data = i));

  const [fillName, setfillName] = useState("");
  const [userName, setuserName] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [phone, setphone] = useState("");
  const [type, settype] = useState("");
  const [file, setfile] = useState("");
  const [Loading, setLoading] = useState("");
  const [ImageUrl, setImageUrl] = useState("");
  useEffect(() => {
    // if (localStorage.getItem("station_token")) {
    // } else {
    //   props.history.push("/login");
    // }
    if (localStorage.getItem("isLight") === "dark") {
      document.body.style.background = "var(--black)";
    } else {
      document.body.style.background = "var(--lightGray";
    }
  }, []);
  const Props = {
    multiple: false,
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    showUploadList: false,
    onChange({ file, fileList }) {
      Image(file.originFileObj);
    },
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

  const Image = (e) => {
    setfile(e);
  };
  const handleInput = (e, key) => {
    let value = e.target.value;
    let file = e;
    switch (key) {
      case "userName":
        setuserName(value);
        break;
      case "fillName":
        setfillName(value);
        break;
      case "phone":
        setphone(value);
        break;
      case "eamil":
        setemail(value);
        break;
      case "password":
        setpassword(value);
        break;

      default:
        break;
    }
  };
  const Save = () => {
    // let admin = {
    //   name: fillName,
    //   username: userName,
    //   type: type,
    //   active: true,
    //   phone: phone,
    //   email: email,
    //   image: data.url,
    // };
    // addData(
    //   `admin/edit${data.id}`,
    //   admin,

    //   (mesg, Data) => {
    //     if (mesg && mesg != undefined) {
    //       Mesg(mesg);
    //       setLoading(false);
    //     } else {
    SuccessMesg("Account data Saved!");
    setLoading(false);
    //         props.onOpenModal(false);
    //         props.getData();
    //       }
    //     },
    //     (err) => {
    //       props.onOpenModal(false);
    //       setLoading(false);

    //       FailedMesg(err);
    //     }
    //   );
  };
  let name = data.name;
  let darkMod =
    window.localStorage.getItem("isLight") === "light" ? false : true;
  return (
    <div className="CustomPageWrapper">
      <SideBar />
      <div className={darkMod ? "ProfileContetn-dark" : "ProfileContetn"}>
        <div className="ProfileHead">
          <Link to="/">
            <div className="PageBack">
              <BsArrowLeft />
              <div>Dashboard</div>
            </div>
          </Link>
          <div className="PageTitle">
            <div> My Profile</div>{" "}
            <CustomButton main={true} onOpen={Save}>
              Save
            </CustomButton>
          </div>
        </div>
        <div className="ProfileContent">
          {" "}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div
              className="ProfileImage"
              style={{
                backgroundImage: require("" + "../../public/images/b.jpg"),
              }}
            >
              {/* {ImageUrl === "" ? name : ""} */}
            </div>
            <div className="Space" style={{ cursor: "pointer" }}>
              <Upload {...Props}>Upload Photo</Upload>
            </div>
          </div>
          <div className="Form">
            <div calssName="Input-Lable">
              Full Name
              <span style={{ display: "flex", gap: "5px" }}>
                <Input
                  placeholder="Write admin phone number"
                  className={darkMod ? "input-rg-dark" : "input-rg"}
                  onChange={(e) => handleInput(e, "fillName")}
                />

                {/* 
                <CustomInput
                  defaultValue={data.username}
                  onChange={(e) => handleInput(e, "userName")}
                />*/}
              </span>
            </div>
            <div calssName="InputLable">
              Email Address
              <Input
                placeholder="Write admin phone number"
                className={darkMod ? "input-rg-dark" : "input-rg"}
                onChange={(e) => handleInput(e, "email")}
              />
            </div>
            <div calssName="InputLable">
              Password
              <Input
                placeholder="Write admin phone number"
                className={darkMod ? "input-rg-dark" : "input-rg"}
                onChange={(e) => handleInput(e, "password")}
              />
            </div>
            <div className="Space">Change Password?</div>
            <div calssName="InputLable">
              Phone Number
              <Input
                placeholder="Write admin phone number"
                className={darkMod ? "input-rg-dark" : "input-rg"}
                onChange={(e) => handleInput(e, "phone")}
              />
            </div>
            <div className="DeleteAccount">
              Delet Your Account?
              <BsExclamationCircle color="var(--lighterGray)" />
            </div>
          </div>{" "}
        </div>
      </div>
    </div>
  );
}

export default Index;
