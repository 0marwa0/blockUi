import React, { useRef, useState, useEffect } from "react";
import "../shared/style/widget.css";
import "../shared/style/index.css";
import SideBar from "../Sidebar";
import { MdFeaturedPlayList } from "react-icons/md";
import { VscListFlat } from "react-icons/vsc";
import { CustomButton } from "../shared/SharedComponents";
import LoadingBar from "react-top-loading-bar";
import { Input, Table, Col, Row } from "antd";
import "../../App.css";
import { TableLoading } from "../shared/Loading";
import ListItem from "../Records/RecordItem";
import { FiFilter } from "react-icons/fi";
import { CustomersColumns, WorkersColumns } from "./Config";
import { CustomersData, WorkersData } from "../../fakeData";
import ChartBar from "../Dashboard/chart/ChartBar";
import { Modal } from "react-responsive-modal";
import "./style/workerinfo.css";
function Index(props) {
  const ref = useRef(null);
  const hideListItem = () => {
    setShowList(false);
  };
  const [showTable, setShowTable] = useState(true);
  const showTableItem = () => {
    setShowTable(true);
    hideListItem();
  };
  const hideTableItem = () => {
    setShowTable(false);
  };
  const [showList, setShowList] = useState(false);
  const showListItem = () => {
    setShowList(true);
    hideTableItem();
  };
  const [Loading, setLoading] = useState(false);
  const [Filterdata, setFilterdata] = useState([]);

  const loadApiData = () => {
    setLoading(true);
    ref.current.staticStart();

    setLoading(true);
    setTimeout(() => {
      setLoading(false);

      // LoadData(
      //   "users",
      //   (err, data) => {
      //     setLoading(false);
      //     if (err) {
      //       Mesg(err);
      //     } else {
      let Users = [];
      //   setUsersData(data.data.rows);
      WorkersData.map((user) => {
        Users.push({
          id: {
            id: user.id,
            // onOpen: () => notify(user.id, true, user),
            //deactive: () => deactive(user.id),
            //edit: () => edit(user.id, true, user),
          },

          FullName: user.name,
          Email: user.email,
          // notify: {
          //   onOpen: () => onOpenModalNotify(user.id, true),
          // },
          PhoneNumber: user.phone,
          // Date: DateName(user.createdAt),
          Status: user.active ? ["Enabled"] : ["Disabled"],
        });
      });
      ref.current.complete();
      setFilterdata(Users);
    }, 1200);
  };

  useEffect(() => {
    loadApiData();
  }, []);

  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(!modalIsOpen);
  }

  const [theme, setTheme] = useState("light");
  const setMode = (e) => {
    let mode = e ? "light" : "dark";
    window.localStorage.setItem("isLight", mode);
    setTheme(mode);
  };
  const themeToggler = () => {
    theme === "light" ? setMode("dark") : setMode("light");
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("isLight");
    localTheme && setTheme(localTheme);
    if (localStorage.getItem("isLight") === "dark") {
      document.body.style.background = "black";
    } else {
      document.body.style.background = "var(--lightGray";
    }
  }, [theme]);
  let darkMod =
    window.localStorage.getItem("isLight") === "light" ? false : true;
  return (
    <div className="CustomPageWrapper setting-page">
      <LoadingBar color="var(--yellow)" ref={ref} shadow={true} />

      <SideBar isDark={theme} />
      <div className="PageContentFix">
        <div className="PageHeader">
          <div className="PageTitle"> Marwa Profile</div>
        </div>
        <Row></Row>

        <Row
          className="cl-ctrl"
          style={{
            display: "grid",
            gap: "25px",
            gridTemplateColumns: "auto 23vw",
          }}
        >
          <Col
            style={{
              minHeight: "0px",
              minWidth: "0px",
              height: "auto",
            }}
          >
            <div className={darkMod ? "mainWidget-dark" : "mainWidget"}>
              <div className={darkMod ? "isDark" : ""}>
                <div className="ButtonGroup" space>
                  <div
                    style={{
                      display: "flex",
                      gap: "6px",
                      alignItems: "center",
                    }}
                  >
                    <VscListFlat
                      size={30}
                      color={showTable ? "var(--yellow)" : "var(--lighterGray)"}
                      onClick={showTableItem}
                    />
                    <MdFeaturedPlayList
                      size={30}
                      fill={showList ? "var(--yellow)" : "var(--lighterGray)"}
                      onClick={showListItem}
                    />
                  </div>

                  <Input
                    loading={props.Loading}
                    onChange={(e) => props.HandleSearch(e)}
                    className={darkMod ? "input-rg-dark" : "input-rg"}
                    placeholder="Search"
                  />

                  <CustomButton
                    lable="Filter"
                    filter
                    loading={props.Loading}
                    //fun={props.filter}i
                  >
                    <FiFilter />
                  </CustomButton>
                </div>{" "}
                <div style={{ height: "20px" }}></div>
                {showTable ? (
                  <Table
                    columns={WorkersColumns}
                    dataSource={Filterdata}
                    pagination={false}
                    locale={{
                      emptyText: TableLoading(Loading, "Records"),
                      //EmptyText(props.Loading, props.Item),
                    }}
                  />
                ) : (
                  <ListItem data={Filterdata} />
                )}
              </div>
            </div>
          </Col>

          <Col style={{ height: "100%" }}>
            <div className="r-ctrl">
              <div className={darkMod ? "Widget-dark" : "Widget"}>
                <div className="ItemHeader">
                  <span>Marwa Jawad</span>
                </div>
                <div className="worker-widget">
                  <img src={require("../../public/images/2.png")} />
                  <div>Marwa</div>
                  <div>07778456321</div>
                </div>
              </div>
            </div>
            <div className="widget-space"></div>
            <div className="s-ctrl">
              <div className={darkMod ? "Widget-dark" : "Widget"}>
                <div className="ItemHeader">
                  <span>Porgress</span>
                </div>{" "}
                <ChartBar />
              </div>{" "}
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Index;
