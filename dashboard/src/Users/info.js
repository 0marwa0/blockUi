import { BsSearch } from "react-icons/bs";
import React from "react";
import img from "../static/img/1.png";
import ListCard from "../Lists/ListCard";
import { Input } from "antd";
import { FaTrashAlt } from "react-icons/fa";
const Info = () => {
  return (
    <div className="page">
      {" "}
      <div className="info-layout">
        <div>
          <div class="profile-header">
            <div class="profile-img">
              <img src={img} width="200" alt="Profile Image" />
            </div>
            <div class="profile-nav-info">
              <h3 class="user-name">Marwa Jawad</h3>BsSearch
              <div class="address">
                <p id="state" class="state">
                  Iraq,
                </p>
                <span id="country" class="country">
                  Babylon.
                </span>{" "}
                <div style={{ padding: " 0 30px" }}>
                  <div className="wrap">
                    <div className="search">
                      {/* <input
                        type="text"
                        className="searchTerm"
                        placeholder="What are you looking for?"
                      /> */}
                      <input
                        style={{
                          backgroundColor: "transparent",
                          border: "none",
                          borderBottom: "1px solid var(--main)",
                          outline: "none",
                        }}
                      />
                      <button type="submit" className="searchButton">
                        <BsSearch color="var(--main)" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="profile-option">
              <div class="notification">
                <FaTrashAlt color="white" fontSize="20px" />
                {/* <span class="alert-message">3</span> */}
              </div>
            </div>
          </div>
        </div>
        <div className="main">
          <ul class="cards">
            <ListCard />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Info;
