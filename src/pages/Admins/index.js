// Admin page //

import Sider from "antd/lib/layout/Sider";
import React, { useState, useEffect } from "react";
import CustomPage from "../shared/CustomPage";
import { Mesg, FailedMesg, SuccessMesg } from "../../API/APIMessage";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import PasswordRest from "./PasswordRest";
import { AdminsData } from "../../fakeData/index";
import { AdminsColumns } from "./Config";
// import { Modal } from "react-responsive-modal";
import Admin from "./Admin/index.js";
import { Drawer } from "antd";
import { LoadData, addData, editData, addFile } from "../../API";
import EditAdmin from "./EditAdmin";
import { fakeData } from "../api/fake"

export const Values = React.createContext();

function Admins(props) {
  const [open, setOpen] = useState(false);
  const [Loading, setLoading] = useState(false);
  const [Admins, setAdmins] = useState([]);
  const [data, setdata] = useState(fakeData);
  const [openPass, setopenPass] = useState(false);
  const [openEdit, setopenEdit] = useState(false);
  const [Filterdata, setFilterdata] = useState([]);
  const [id, setId] = useState();
  const [Edited, setEdited] = useState([]);
  const [admin, setadmin] = useState([]);
  const [edited, setedited] = useState([]);

  const onOpenModal = () => {
    setOpen(true);
  };
  const onCloseModal = () => {
    setOpen(false);
    ClearState();
  };

  const onCloseModalEdit = () => {
    setopenEdit(false);
    ClearState();
  };

  const onOpenModalPass = (id, value) => {
    setopenPass(value);
    setId(id);
  };

  const deactive = (id) => {
    let data = { id: id };
    addData(
      "admin/deactivate",
      data,
      (mesg, Data) => {
        SuccessMesg("Deactivate admin done !");

        getAdmins();
      },
      (err) => {
        FailedMesg(err);
      }
    );
  };
  const [showSttings, setSttings] = useState(false);
  const OpenSttings = (value) => {
    setSttings(value);
  };
  const getAdmins = () => {
    setLoading(true);
    // LoadData(
    //   "Admins",
    //   (err, data) => {
    //     setLoading(false);
    //     if (err) {
    //       Mesg(err);
    //     } else {
    //       //     AdminsData(data.data, (Admins) => {
    //   setAdmins(Admins);
    // });
    setTimeout(() => {
      setLoading(false);

      let Admins = [];
      // setadmin(data.data);
      AdminsData.map((admin) => {
        Admins.push({
          id: {
            id: admin.id,
            open: () => OpenSttings(true),
            deactive: () => deactive(admin.id),
            onOpen: () => onOpenModalPass(admin.id, true),
            openPass: openPass,
            onClose: onOpenModalPass(null, false),
            onedit: () => onOpenModalEdit(admin.id, admin),
          },
          FullName: admin.FullName,
          Username: admin.name,
          phone: admin.phone,
          email: admin.Username,


        });
      });
      //setEdited(data.data);

      setdata(fakeData);
      setFilterdata(Admins);
    }, 1200);
    //       }
    //     },
    //     (err) => {
    //       setLoading(false);
    //       FailedMesg(err, "Something worng happend !");
    //       // console.log(err, "failed");
    //     }
    //   );
  };
  const [name, setname] = useState("");
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [branch, setbranch] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [type, settype] = useState("");
  const [image, setimage] = useState();

  const handleInput = (e, key) => {
    let value = e.target.value;
    switch (key) {
      case "name":
        setname(value);
        break;
      case "username":
        setusername(value);
        break;
      case "email":
        setemail(value);
        break;
      case "password":
        setpassword(value);
        break;
      case "phone":
        setphone(value);
        break;
      default:
        break;
    }
  };
  const handleRole = (value) => {
    settype(value);
  };
  const handleSelect = (e, key) => {
    let value = e;
    switch (key) {
      case "branch":
        setbranch(value);
        break;
      case "image":
        setimage(value);
        break;
      default:
        break;
    }
  };
  const ClearState = () => {
    setLoading(false);

    setname("");
    setusername("");
    setpassword("");
  };
  const handleSubmit = () => {
    setLoading(true);
    let role = 1;

    if (type === "Meadia Admin") {
      role = 2;
    } else if (type === "Book Admin") {
      role = 3;
    }

    console.log(data, "data");
    let admin = {
      image: image,
      name: name,
      username: username,
      password: password,
      email: email,
      type: role,
      phone: phone,
      gov: branch,
    };
    // addData(
    //   "admin/add",
    //   admin,
    //   (mesg, Data) => {
    //     if (mesg) {
    //       Mesg(mesg);
    //     } else {
    SuccessMesg("Account creating done !");
    //  props.getAdmins();
    ClearState();
    onCloseModal();
    //     }
    //   },
    //   (err) => {
    //     ClearState();
    //     FailedMesg(err);
    //     onCloseModal();
    //   }
    // );
  };
  const handleEdit = () => {
    let data = {
      name: name,
      username: username,
      phone: phone,
      image: image,
      email: email,
      type: type,
      branch: branch,
    };

    // for (var propName in data) {
    //   if (data[propName] === "" || data[propName] === undefined) {
    //     delete data[propName];
    //   }
    // }
    // if (data.length != 0) {
    setLoading(true);
    // addData(
    //   `admin/edit/${id}`,
    //   data,
    //   (mesg, Data) => {
    //     if (mesg) {
    //       Mesg(mesg);
    //       console.log(data, Data.errMsg, "editd data wiht mesg");
    //     } else {
    SuccessMesg("Account data saved !");
    onCloseModalEdit();
    setLoading(false);
    getAdmins();

    //       ClearState();
    //     }
    //   },
    //   (err) => {
    //     onCloseModalEdit();
    //     ClearState();
    //     setLoading(false);
    //     FailedMesg(err);
    //   }
    // );
    //}
  };
  useEffect(() => {
    getAdmins();
    // if (
    //   localStorage.getItem("station_token") != undefined &&
    //   localStorage.getItem("station_token") != ""
    // ) {
    //   setLoading(true);
    //   getAdmins();
    // } else {
    //   props.history.push("/login");
    // }
  }, []);

  const [searchText, setsearchText] = useState("");
  const HandleSearch = (e) => {
    let value = e.target.value;
    setsearchText(value);
    if (value) {
      setFilterdata(data);
    }
  };

  const Filter = () => {
    let newData = data.filter((item) =>
      item.FullName.toLowerCase().includes(searchText.toLowerCase())
    );

    setFilterdata(newData);
  };
  // setEdited(admins[0]);
  const [info, setinfo] = useState();
  const onOpenModalEdit = (id, info) => {
    setId(id);
    setopenEdit(true);
    // let admins = admin.filter((item) => item.id === id);

    setinfo(info);
  };

  let admins = admin.filter((item) => item.id === id);
  // console.log(info, "sended");
  let darkMod = window.localStorage.getItem("mode") === "light" ? false : true;

  return (
    <div>
      <CustomPage
        pageTitle="admins"
        columns={AdminsColumns}
        data={Filterdata}
        HandleSearch={HandleSearch}
        filter={Filter}
        onOpenModal={() => console.log("dfjhso")}
        EmptyTitle="No Admins found"
        Item="Admin"
        onOpenModal={() => onOpenModal(true)}
        Loading={Loading}
        headcss={darkMod ? "head-dark users-head" : "head users-head"}
        length={Admins.length}
      > {data.map((value) => (
        <div
          className={
            darkMod ? "record-tab-dark userscss" : "record-tab userscss"
          }
        >
          <div className="flex-row">{value.FullName}</div>
          <div className="flex-row">{value.Email}</div>
          <div className="flex-row">{value.PhoneNumber}</div>
          <div className={darkMod ? `tag-dark green` : "tag green"}>
            {value.status}
          </div>
        </div>
      ))}
      </CustomPage>
      {open ? (
        <Admin
          fun={onCloseModal}
          type="create"
          getAdmins={getAdmins}
          handleRole={handleRole}
          handleSelect={handleSelect}
          handleSubmit={handleSubmit}
          handleInput={handleInput}
        />
      ) : null}
      {data.map((value) => (
        <div
          className={
            darkMod ? "record-tab-dark userscss" : "record-tab userscss"
          }
        >
          <div className="flex-row">{value.FullName}</div>
          <div className="flex-row">{value.Email}</div>
          <div className="flex-row">{value.PhoneNumber}</div>
        </div>
      ))}
    </div>
  );
}

export default Admins;
