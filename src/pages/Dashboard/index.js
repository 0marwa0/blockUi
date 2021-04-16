import { ReservationsData } from "../../fakeData";
import React, { useRef, useState, useEffect } from "react";
import SideBar from "../Sidebar";
import Reservation from "./Reservation";
import moment from "moment";

import { useLocale } from "react-easy-localization";
import ChartLine from "./chart/ChartLine";
import Statistic from "./Statistic";
import LoadingBar from "react-top-loading-bar";
import { Col, Row, Input, Button, Menu, Dropdown } from "antd";
import { CustomButton } from "../shared/SharedComponents";
import "../../App.css";
import { ReactComponent as PlusIcon } from "../../public/images/plus.svg";
import { Data } from "../../fakeData/DashFakeData";
import BookingModal from "./BookingModal";
import "../../App.css";
import styled from "styled-components";
const Widget = styled.div`
  background-color: white;
  border-radius: 7px;
  border: 1px solid var(--lighterGray);
  display: flex;

  overflow: hidden;
  transition: 2s ease;
  padding: 17px 17px 8px 17px;
  width: 100%;
  flex-direction: column;
`;

const PageHeader = styled(Row)`
  align-items: center;
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

function Index(props) {
  const ref = useRef(null);
  const [Reservations, setReservations] = useState([]);
  const [open, setOpen] = useState(false);
  const onOpenModal = (open) => {
    setOpen(open);
  };
  const [Loading, setLoading] = useState(false);
  const loadApiData = () => {
    setLoading(true);
    ref.current.staticStart();

    setTimeout(() => {
      setLoading(false);

      ref.current.complete();

      setReservations(ReservationsData);
    }, 1200);
  };

  useEffect(() => {
    loadApiData();
    if (localStorage.getItem("isLight") === "dark") {
      document.body.style.background = "black";
    } else {
      document.body.style.background = "var(--lightGray";
    }
  }, [localStorage.getItem("isLight")]);
  const menu = (
    <Menu>
      <Menu.Item>
        <a>Next month</a>
      </Menu.Item>
      <Menu.Item>
        <a>Previous month</a>
      </Menu.Item>
    </Menu>
  );

  const { i18n, languageCode, changeLanguage } = useLocale();
  return (
    <div className="CustomPageWrapper">
      <LoadingBar color="var(--yellow)" ref={ref} shadow={true} />

      <SideBar />
      <div className="PageContentFix">
        <PageHeader>
          <div className="PageTitle">{i18n.dashbaordTitle}</div>
        </PageHeader>
        <Row>
          <div className="PageBtn">
            <div></div>
            <div className="ButtonGroup">
              <CustomButton
                main
                onOpen={() => props.history.push("/newrecord")}
                lable={i18n.newRecord}
              >
                <PlusIcon />
              </CustomButton>
            </div>
          </div>
        </Row>

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
            <ChartLine />
            {/*<Clander></Clander>*/}
          </Col>

          <Col style={{ height: "100%" }}>
            <div className="r-ctrl">
              {" "}
              <Reservation Reservations={Reservations} Loading={Loading} />
            </div>
            <div style={{ height: "3%" }}></div>
            <div className="s-ctrl">
              {" "}
              <Statistic Loading={Loading} />
            </div>
          </Col>
        </Row>
      </div>
      <BookingModal
        open={open}
        onOpenModal={onOpenModal}
        getData={loadApiData}
      />
    </div>
  );
}

export default Index;
