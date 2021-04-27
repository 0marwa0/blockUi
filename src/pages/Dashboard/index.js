import { ReservationsData } from "../../fakeData";
import React, { useRef, useState, useEffect } from "react";
import SideBar from "../Sidebar";
import Reservation from "./Reservation";
import Stock from "./Stocks.js";
import { useLocale } from "react-easy-localization";
import ChartLine from "./chart/ChartLine";
import Statistic from "./Statistic";
import LoadingBar from "react-top-loading-bar";
import { Col, Row } from "antd";
import { CustomButton } from "../shared/SharedComponents";
import "../../App.css";
import { ReactComponent as PlusIcon } from "../../public/images/plus.svg";
import BookingModal from "./BookingModal";
import "../../App.css";
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
    if (localStorage.getItem("mode") === "dark") {
      document.body.style.background = "var(--black)";
    } else {
      document.body.style.background = "var(--lightGray";
    }
    if (window.localStorage.getItem("language") === "arabic") {
      changeLanguage("ar");
    }
  }, [localStorage.getItem("Mode")]);
  const { i18n, languageCode, changeLanguage } = useLocale();
  return (
    <div className="CustomPageWrapper">
      <LoadingBar color="var(--cyan)" ref={ref} shadow={true} />

      <SideBar />
      <div className="PageContentFix">
        <div className="PageHeader">
          <div className="PageTitle">{i18n.dashbaordTitle}</div>
        </div>
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
            <Stock />
            {/*<Clander></Clander>*/}
          </Col>

          <Col style={{ height: "100%" }}>
            <div className="r-ctrl">
              <Reservation Reservations={Reservations} Loading={Loading} />
            </div>
            <div style={{ height: "3%" }}></div>
            <div className="s-ctrl">
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
