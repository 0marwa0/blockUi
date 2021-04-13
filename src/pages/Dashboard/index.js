import { BarChartWidget, SalesValueWidgetPhone } from "./chart/chart.js";
import { ReservationsData } from "../../fakeData";
import React, { useRef, useState, useEffect } from "react";
import SideBar from "../Sidebar";
import { BiExport, BiDollar } from "react-icons/bi";
import Reservation from "./Reservation";
import moment from "moment";
import ChartLine from "./chart/ChartLine";
import Statistic from "./Statistic";
import LoadingBar from "react-top-loading-bar";
import { AiOutlinePlus } from "react-icons/ai";
import { Col, Row, Input, Button, Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { CustomButton } from "../shared/SharedComponents";
import "../../App.css";
import { ReactComponent as PlusIcon } from "../../public/images/plus.svg";
import { useHistory } from "react-router-dom";
import FullCalendar from "@fullcalendar/react";
import { Modal } from "react-responsive-modal";
import { ReactComponent as PrintIcon } from "../../public/images/print.svg";
import { Data } from "../../fakeData/DashFakeData";
import dayGridPlugin from "@fullcalendar/daygrid";
import { RiArrowDropDownLine } from "react-icons/ri";
import Tooltip from "react-tooltip";
import BookingModal from "./BookingModal";
import { LoadBooking, LoadData } from "../../API";
import { SuccessMesg, FailedMesg, Mesg } from "../../API/APIMessage";
import { SmileOutlined } from "@ant-design/icons";
import "../../App.css";

import {
  PageContent,
  PageTitle,
  PageContentFix,
  PageBtn,
  ButtonGroup,
} from "../shared/CustomPage";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
const colors = {
  color1: "var(--darkGreen)",
  color2: "var(--orange)",
  color3: "var(--blue)",
  color4: "var(--red)",
  color5: "var(--purple)",
};

export const Widget = styled.div`
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

const Clander = styled.div`
  background-color: white;
  border-radius: 7px;
  padding: 15px 25px;
  height: 100%;
  margin-bottom: 10%;
  min-height: 0px;
  min-width: 0px;
  border: 1px solid var(--lighterGray);
`;
const List = styled.div`
  color: #3b86ff;
  display: flex;
  align-items: cneter;
  margin-top: 4px;
`;
const SearchInput = styled(Input)`
  border-radius: 6px;
  border: 1px solid var(--lighterGray);
  height: 30px;
  color: var(--lighterGray);
  width: 300px;
`;
const PageHeader = styled(Row)`
  align-items: center;
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
export const DateName = (date) => {
  let result = moment(date, "YYYY-MM-DD HH:mm:ss")
    .format("D-MMMM-yyy")
    .replace("-", " ")
    .replace("-", " ");
  return result;
};
export const getTime = (date) => {
  let result = moment(date, "YYYY-MM-DD HH:mm:ss")
    .format("h-mm")
    .replace("-", ":");
  return result;
};
function Index(props) {
  const ref = useRef(null);
  const [ID, setID] = useState(localStorage.getItem("Station_id"));
  const [Reservations, setReservations] = useState([]);

  const [open, setOpen] = useState(false);
  const onOpenModal = (open) => {
    setOpen(open);
    //callback()
  };
  const [Loading, setLoading] = useState(false);
  const [BookDates, setBookDates] = useState(false);
  const [statistics, setstatistics] = useState({});
  const getDate = (date) => {
    let result = moment(date, "YYYY-MM-DD HH:mm:ss").format("yyyy-MM-DD");
    return result;
  };
  const getDay = (date) => {
    let result = moment(date, "YYYY-MM-DD HH:mm:ss").format("dddd");
    return result;
  };

  const loadApiData = () => {
    setLoading(true);
    ref.current.staticStart();

    setTimeout(() => {
      setLoading(false);

      ref.current.complete();

      setReservations(ReservationsData);
    }, 1200);

    setBookDates(Data);
  };

  useEffect(() => {
    loadApiData();
    if (localStorage.getItem("isLight") === "dark") {
      document.body.style.background = "black";
    } else {
      document.body.style.background = "var(--lightGray";
    }
  }, [localStorage.getItem("isLight")]);
  let id = localStorage.getItem("Station_id");
  let NowDate = new Date();
  let month = NowDate.getMonth();
  if (month === 12) {
    month = 1;
  } else {
    month = month + 1;
  }
  let year = NowDate.getFullYear();
  const setNextMonth = () => {
    setchange(true);
  };
  const setPrevMonth = () => {
    setCurrentMonth(month - 1);
  };
  // year + "-" + CurrentMonth.toString() + "-01T00:00:00.000Z"
  const [change, setchange] = useState(false);
  const [CurrentMonth, setCurrentMonth] = useState("2020-11-01T00:00:00.000Z");
  const menu = (
    <Menu>
      <Menu.Item>
        <a onClick={setNextMonth}>Next month</a>
      </Menu.Item>
      <Menu.Item>
        <a onClick={setPrevMonth}>Previous month</a>
      </Menu.Item>
    </Menu>
  );

  // let d = "2020-11-05T00:00:00.000Z";
  return (
    <div className="CustomPageWrapper">
      <LoadingBar color="var(--yellow)" ref={ref} shadow={true} />

      <SideBar />
      <div className="PageContentFix">
        <PageHeader>
          <div className="PageTitle"> Dashboard</div>
        </PageHeader>
        <Row>
          <div className="PageBtn">
            <div></div>
            <div className="ButtonGroup">
              <CustomButton main onOpen={onOpenModal} lable="New Booking">
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
              <Statistic Loading={Loading} statistics={statistics} />
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
