import { notification } from "antd";
import { GoCheck } from "react-icons/go";
import { FaExclamation } from "react-icons/fa";
import { IoIosWarning } from "react-icons/io";
import React from "react";
export const Mesg = (Msg) => {
  let ar = window.localStorage.getItem("language") == "arabic" ? true : false;

  let darkMod = window.localStorage.getItem("mode") === "dark" ? true : false;

  notification.open({
    message: "Something worng happend !",
    description: Msg,
    placement: ar ? "bottomLeft" : "bottomRight",

    style: {
      borderRadius: "5px",
      width: "420px",
      height: "120px",
      backgroundColor: darkMod ? "var(--black)" : "white",
      border: darkMod ? "1px solid #353535" : "none",
      direction: ar ? "ltr" : "rtl",
    },
    icon: (
      <div
        className={
          darkMod ? "NotificationIcon-dark Failed" : "NotificationIcon Failed"
        }
      >
        <FaExclamation color="var(--orange)" size={18} />
      </div>
    ),
  });
};
export const SuccessMesg = (Title, Msg) => {
  let ar = window.localStorage.getItem("language") == "arabic" ? true : false;

  let darkMod = window.localStorage.getItem("mode") === "dark" ? true : false;

  notification.open({
    message: Title,
    description: Msg,

    placement: ar ? "bottomLeft" : "bottomRight",

    style: {
      borderRadius: "5px",
      width: "420px",
      height: "120px",

      backgroundColor: darkMod ? "var(--black)" : "white",
      border: darkMod ? "1px solid #353535" : "none",
      direction: ar ? "ltr" : "rtl",
    },
    icon: (
      <div
        className={
          darkMod ? "NotificationIcon-dark Success" : "NotificationIcon Success"
        }
      >
        <GoCheck color="var(--darkGreen)" size={25} />
      </div>
    ),
  });
};

export const FailedMesg = (Title, Msg) => {
  let ar = window.localStorage.getItem("language") == "arabic" ? true : false;

  let darkMod = window.localStorage.getItem("mode") === "dark" ? true : false;
  if (typeof Title === "object") {
    Title = "NO Connection";
  }
  notification.open({
    message: Title,
    description: Msg,
    placement: ar ? "bottomLeft" : "bottomRight",

    style: {
      borderRadius: "5px",
      width: "420px",
      height: "120px",
      backgroundColor: darkMod ? "var(--black)" : "white",
      border: darkMod ? "1px solid #353535" : "none",
      direction: ar ? "ltr" : "rtl",
    },
    icon: (
      <div
        className={
          darkMod ? "NotificationIcon-dark Failed" : "NotificationIcon Failed"
        }
      >
        <IoIosWarning color="var(--red)" size={18} />
      </div>
    ),
  });
};
