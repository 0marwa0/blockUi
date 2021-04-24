import ClipLoader from "react-spinners/ClipLoader";
import { useState, useRef } from "react";
import { Button, Popover, Col, Row, Table, Input, Radio } from "antd";
import React, { useEffect } from "react";
import { BiImport, BiExport } from "react-icons/bi";
import LoadingBar from "react-top-loading-bar";
import { TableLoading } from "../shared/Loading";
import { HiViewList } from "react-icons/hi";
import { HiViewGrid } from "react-icons/hi";
import { AiOutlinePlus } from "react-icons/ai";
import "./style/index.css";
import "./style/SharedComponents.css";
import Pagination from "./pagination";
import { useHistory } from "react-router-dom";
import { useLocale } from "react-easy-localization";
import { FiFilter } from "react-icons/fi";
import { CustomButton } from "../shared/SharedComponents";
import SideBar from "../Sidebar";
import ListItem from "../Records/RecordItem";
import Checkbox from "antd/lib/checkbox/Checkbox";
const content = (
  <Radio.Group style={{ display: "flex", flexDirection: "column" }}>
    <Radio value={1} className="filter-item">
      Name
    </Radio>
    <Radio value={2} className="filter-item">
      Price
    </Radio>
    <Radio value={3} className="filter-item">
      Quantity
    </Radio>
    <Radio value={4} className="filter-item">
      Discount
    </Radio>
  </Radio.Group>
);
function CustomPage(props) {
  const ref = useRef(null);
  const { i18n, languageCode, changeLanguage } = useLocale();
  let pageTitle = props.pageTitle;
  const columns = props.columns;
  const data = props.data;
  const [next, setNext] = useState(true);
  const [prev, setprev] = useState(false);
  let history = useHistory();
  const [showList, setShowList] = useState(false);
  const showListItem = () => {
    setShowList(true);
    hideTableItem();
  };
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
  const [currentPage, setcurrentPage] = useState(1);
  const [pagePerOnce, setpagePerOnce] = useState(10);
  const [pageNumber, setpageNumber] = useState(0);
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
  let Data = props.data.slice(indexOfFirstPage, indexOfLastPage);
  let pageTitleName;
  if (pageTitle === "booking") {
    pageTitleName = props.pageTitle;
  } else {
    pageTitleName = props.pageTitle.substring(0, props.pageTitle.length - 1);
  }
  const lightTheme = "light";
  const darkTheme = "dark";
  let theme;

  const [isDark, setDark] = useState(true);
  if (localStorage.getItem("theme")) {
    theme = localStorage.getItem("theme");
    if (theme === darkTheme) {
      localStorage.setItem("theme", "light");
      theme = lightTheme;
      //  document.body.style.background = "white";
      //setDark(false);
    } else {
      localStorage.setItem("theme", "dark");
      theme = darkTheme;
      // setDark(true);
      // document.body.style.background = "var(--black)";
    }
  }

  useEffect(() => {
    if (localStorage.getItem("isLight") === "dark") {
      document.body.style.background = "var(--black)";
    } else {
      document.body.style.background = "white";
    }
    if (props.Loading) {
      ref.current.staticStart();
    } else {
      ref.current.complete();
    }
  }, []);
  let darkMod =
    window.localStorage.getItem("isLight") === "light" ? false : true;
  return (
    <div>
      {" "}
      <LoadingBar color="var(--cyan)" ref={ref} shadow={true} />
      <div className="CustomPageWrapper">
        <SideBar
          title={props.Title}
          // changeMode={() => changeMode}
          isDark={localStorage.getItem("isDark")}
        />
        <div className="PageContent">
          <Row>
            <Col>
              <div className="PageTitle">
                {props.pageTitle.charAt(0).toUpperCase() +
                  props.pageTitle.slice(1)}
              </div>
            </Col>
          </Row>
          <Row>
            <div className="PageBtn">
              {props.custom ? (
                props.children
              ) : (
                <>
                  {" "}
                  <div className="ButtonGroup" space>
                    {props.pageTitle === "Records" ? (
                      <div
                        style={{
                          display: "flex",
                          gap: "6px",
                          alignItems: "center",
                        }}
                      >
                        <HiViewList
                          size={30}
                          color={
                            showTable
                              ? "var(--cyan)"
                              : darkMod
                              ? "var(--darkGray)"
                              : "var(--lighterGray)"
                          }
                          onClick={showTableItem}
                        />
                        <HiViewGrid
                          size={30}
                          fill={
                            showList
                              ? "var(--cyan)"
                              : darkMod
                              ? "var(--darkGray)"
                              : "var(--lighterGray)"
                          }
                          onClick={showListItem}
                        />
                      </div>
                    ) : (
                      ""
                    )}
                    <Input
                      loading={props.Loading}
                      onChange={(e) => props.HandleSearch(e)}
                      className={darkMod ? "input-rg-dark" : "input-rg"}
                      placeholder="Search"
                    />
                    {props.pageTitle === "resources" ? (
                      ""
                    ) : props.pageTitle === "file Uploader" ? (
                      ""
                    ) : (
                      <Popover
                        placement="bottom"
                        title="filter by :"
                        content={content}
                        trigger="click"
                      >
                        <button
                          className="ButtonStyled"
                          loading={props.Loading}
                          //fun={props.filter}i
                        >
                          {" "}
                          {props.Loading ? (
                            <div style={{ marginTop: "5px" }}>
                              <ClipLoader
                                size={15}
                                color="var(--darkGray)"
                                timeout={3000} //3 secs
                              />
                            </div>
                          ) : (
                            <FiFilter />
                          )}
                          {i18n.filter}
                        </button>
                      </Popover>
                    )}
                  </div>
                  <div className="ButtonGroup">
                    <CustomButton lable={i18n.import} loading={props.Loading}>
                      <BiImport
                        color={
                          darkMod ? "var(--darkGray)" : "var(--lighterGray)"
                        }
                      />
                    </CustomButton>

                    <CustomButton lable={i18n.export} loading={props.Loading}>
                      <BiExport
                        color={
                          darkMod ? "var(--darkGray)" : "var(--lighterGray)"
                        }
                      />
                    </CustomButton>

                    <CustomButton
                      lable={`New ${
                        pageTitleName.charAt(0).toUpperCase() +
                        pageTitleName.slice(1)
                      }`}
                      main={true}
                      pageTitle={pageTitle}
                      loading={props.Loading}
                      onOpen={props.onOpenModal}
                    >
                      <AiOutlinePlus
                        color={
                          darkMod ? "var(--darkGray)" : "var(--lighterGray)"
                        }
                      />
                    </CustomButton>
                  </div>
                </>
              )}{" "}
            </div>
          </Row>

          <Row>
            <Col style={{ width: "100%" }}>
              {props.custom ? (
                ""
              ) : showTable ? (
                <div style={{ width: "100%" }}>
                  <div className={darkMod ? "isDark" : ""}>
                    <Table
                      columns={columns}
                      rowClassName="tableRow"
                      onRow={() =>
                        props.pageTitle === "workers"
                          ? //   props.pageTitle==="Workers"
                            {
                              onClick: () => history.push("/workerprofile"),
                            }
                          : ""
                      }
                      pagination={false}
                      dataSource={Data}
                      locale={{
                        emptyText: TableLoading(props.Loading, props.Item),
                      }}
                    />
                    <Pagination
                      length={Data.length}
                      currentPage={currentPage}
                      prevPage={prevPage}
                      totalPge={totalPge}
                      nextPage={nextPage}
                      lengthAll={props.data.length}
                    />
                  </div>
                </div>
              ) : showList ? (
                <ListItem data={props.data} />
              ) : (
                ""
              )}
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default CustomPage;
