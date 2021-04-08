import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import "./index.css";
//import "../App.css";
const Logs = () => {
  const logs = [
    { user: "ali ahmed", action: "remove from the  records" },
    { user: "Mhommed ", action: "add to the records " },
    { user: "sajjad Jawad ", action: "update the records" },
    { user: "ali ahmed", action: "remove from the  records" },
    { user: "Mhommed ", action: "add to the records " },
  ];

  return (
    <div className="dash-log">
      <div className="log-title">Logs </div>
      {logs.map((item) => (
        <div className="log-item">
          <div className="log-user">
            <img src="" />
          </div>
          <div> {item.user}</div> <div className="log-info">{item.action}</div>
        </div>
      ))}
      <div className="log-more">Show more</div>
    </div>
  );
};

export default Logs;
