import { GiHamburgerMenu } from "react-icons/gi";
import { useState, useRef } from "react";
import { Col, Row, Table, Input } from "antd";
import React, { useEffect } from "react";
import LoadingBar from "react-top-loading-bar";
import { TableLoading } from "../shared/Loading";
import { ButtonStyled } from "../shared/SharedStyle";
import { ReactComponent as ExportIcon } from "../../public/images/export.svg";
import { ReactComponent as ImportIcon } from "../../public/images/import.svg";
import { ReactComponent as PlusIcon } from "../../public/images/plus.svg";
import "./style/index.css";
import { useHistory } from "react-router-dom";
import { useLocale } from "react-easy-localization";
import { FiFilter } from "react-icons/fi";
import { MdFeaturedPlayList } from "react-icons/md";
import { VscListFlat } from "react-icons/vsc";
import { CustomButton } from "../shared/SharedComponents";
import SideBar from "../Sidebar";
import styled, { createGlobalStyle } from "styled-components";
import { ReactComponent as Upload } from "../../public/images/solid cloud-upload-alt.svg";
import { ReactComponent as Notifiy } from "../../public/images/solid bell.svg";
import ListItem from "../Records/RecordItem";
const GlobalStyle = createGlobalStyle`

`;

const PageContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 25px;
  margin-left: 130px;

  margin-right: 35px;
`;

const PageBtn = styled.div`
  display: flex;
  flex-cirection: row;
  justify-content: space-between;
  margin-bottom: 17px;
  width: 100%;
`;
const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  algin-items: cneter;
  justify-content: flex-end;
  margin-right: ${(props) => (props.space ? "10px" : "0")};
`;
const Pagination = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0px 20px;
  color: var(--darkGray);
  border: ${(props) =>
    props.noborder ? "none" : " 1px solid var(--lighterGray)"};
  border-radius: 0 0 10px 10px;
  border-top: none;
  width: 100%;
`;
const PageText = styled.div`
  color: var(--darkGray);
  margin-top: 12px;
`;
const PageNmber = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;
const IconCss = styled.span`
  color: ${(props) => (props.active ? "var(--yellow)" : "var(--textGray)")};
`;
function CustomPage(props) {
  const ref = useRef(null);

  const { i18n, languageCode, changeLanguage } = useLocale();
  let pageTitle = props.pageTitle;
  const columns = props.columns;
  const data = props.data;
  // const [next, setNext] = useState(true);
  // const [prev, setprev] = useState(false);
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
  const [pagePerOnce, setpagePerOnce] = useState(20);
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
      // document.body.style.background = "black";
    }
  }

  const changeMode = () => {
    // if (theme === darkTheme) {
    //  localStorage.setItem("theme", "light");
    // theme = lightTheme;
    // document.body.style.background = "white";
    //  } else {
    //   localStorage.setItem("theme", "dark");
    //  theme = darkTheme;
    // document.body.style.background = "black";
    // }
  };
  useEffect(() => {
    if (localStorage.getItem("isLight") === "dark") {
      document.body.style.background = "black";
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
      <div className="CustomPageWrapper">
        <LoadingBar color="var(--yellow)" ref={ref} shadow={true} />

        <SideBar
          title={props.Title}
          // changeMode={() => changeMode}
          isDark={localStorage.getItem("isDark")}
        />
        <PageContent>
          <Row>
            <Col>
              <div className="PageTitle">
                {props.pageTitle.charAt(0).toUpperCase() +
                  props.pageTitle.slice(1)}
              </div>
            </Col>
          </Row>
          <Row>
            <PageBtn>
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
                        <VscListFlat
                          size={30}
                          color={
                            showTable ? "var(--yellow)" : "var(--lighterGray)"
                          }
                          onClick={showTableItem}
                        />
                        <MdFeaturedPlayList
                          size={30}
                          fill={
                            showList ? "var(--yellow)" : "var(--lighterGray)"
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
                      <CustomButton
                        lable={i18n.filter}
                        filter
                        loading={props.Loading}
                        //fun={props.filter}i
                      >
                        <FiFilter />
                      </CustomButton>
                    )}
                  </div>
                  <ButtonGroup>
                    {props.pageTitle === "resources" ? (
                      ""
                    ) : props.pageTitle === "file Uploader" ? (
                      ""
                    ) : props.pageTitle === "customers" ? (
                      ""
                    ) : props.pageTitle === "admins" ? (
                      ""
                    ) : props.pageTitle === "articles" ? (
                      ""
                    ) : (
                      <CustomButton lable={i18n.import} loading={props.Loading}>
                        <ImportIcon />
                      </CustomButton>
                    )}

                    <CustomButton
                      lable={i18n.export}
                      loading={props.Loading}
                      //   fun={props.export}
                    >
                      <ExportIcon />
                    </CustomButton>

                    {pageTitleName == "customer" ? (
                      <CustomButton
                        main={true}
                        lable={`Notify Users`}
                        loading={props.Loading}
                        pageTitle={pageTitle}
                        onOpen={() => props.onOpenModal(true)}
                      >
                        <Notifiy />
                      </CustomButton>
                    ) : pageTitleName === "resource" ||
                      pageTitleName === "file Uploade" ? (
                      <CustomButton
                        main={true}
                        lable={`Upload`}
                        pageTitle={pageTitle}
                        loading={props.Loading}
                        onOpen={() => props.onOpenModal(true)}
                      >
                        <Upload />
                      </CustomButton>
                    ) : pageTitleName === "event" ? (
                      <CustomButton
                        main={true}
                        lable={`New Booking `}
                        pageTitle={pageTitle}
                        loading={props.Loading}
                        onOpen={() => props.onOpenModal(true)}
                      >
                        <PlusIcon />
                      </CustomButton>
                    ) : pageTitleName === "articles" ? null : (
                      <CustomButton
                        main={true}
                        pageTitle={pageTitle}
                        loading={props.Loading}
                        onOpen={props.onOpenModal}
                      >
                        <PlusIcon />
                        {`New ${
                          pageTitleName.charAt(0).toUpperCase() +
                          pageTitleName.slice(1)
                        }`}
                      </CustomButton>
                    )}
                  </ButtonGroup>
                </>
              )}{" "}
            </PageBtn>
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
                        //EmptyText(props.Loading, props.Item),
                      }}
                      // footer={() => (
                      //   <Pagination>
                      //     <PageText>
                      //       View search of {Data.length} from {props.data.length}{" "}
                      //       search we got .
                      //     </PageText>
                      //     <PageNmber>
                      //       <IconCss active={currentPage > 1 ? true : false}>
                      //         <LeftOutlined
                      //           onClick={prevPage}
                      //           style={{
                      //             cursor:
                      //               currentPage > 1 ? "pointer" : "not-allowed",
                      //           }}
                      //         />
                      //       </IconCss>
                      //       <p style={{ marginTop: "12px" }}>
                      //         {currentPage}/ {totalPge}
                      //       </p>
                      //       <IconCss
                      //         active={currentPage != totalPge ? true : false}>
                      //         <RightOutlined
                      //           onClick={nextPage}
                      //           style={{
                      //             cursor:
                      //               currentPage != totalPge
                      //                 ? "pointer"
                      //                 : "not-allowed",
                      //           }}
                      //         />
                      //       </IconCss>
                      //     </PageNmber>
                      //   </Pagination>
                      // )}
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
        </PageContent>
      </div>
    </div>
  );
}

export default CustomPage;
