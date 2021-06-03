import React, { useEffect, useState } from "react";
import CustomPage from "../shared/CustomPage";
import { BookingColumns } from "./Config";
import "react-responsive-modal/styles.css";
import Moment from "react-moment";
//import { Print } from "@syncfusion/ej2-schedule";
import Print from "./print";
import { FailedMesg, Mesg } from "../../API/APIMessage";
import { LoadData } from "../../API/index";
import { useLocale } from "react-easy-localization";
export const Values = React.createContext();
function Records(props) {
  const { i18n, languageCode, changeLanguage } = useLocale();
  const [Loading, setLoading] = useState(false);
  const [records, setRecord] = useState([
    {

      modified: "2021/02/02",
      customer: { name: "Ahmed" },
      description: "no thing",
      rest: "200$",
      price: "500$",
      date: "2021/05/02", driver: "Ali",
    },
    {
      modified: "2021/02/02",
      customer: { name: "Ahmed" },
      description: "no thing",
      rest: "200$",
      price: "500$",
      date: "2021/05/02", driver: "Ali",
    }]);
  const loadRecord = () => {
    setLoading(true);

    LoadData(
      "record",
      (data) => {
        setLoading(false);
        setRecord(data);
      },
      (err) => {
        setLoading(false);

        FailedMesg(err, "Something worng happend !");
      }
    );
  };

  useEffect(() => {
    loadRecord();
    // if (localStorage.getItem("station_token")) {
    // } else {
    //   props.history.push("/login");
    // }
  }, []);
  let darkMod = window.localStorage.getItem("mode") === "light" ? false : true;

  return (
    <div>
      <CustomPage
        pageTitle="Records"
        Title={i18n.recordTitle}
        columns={BookingColumns}
        data={records}
        Item="event"
        headcss={darkMod ? "head-dark record-head" : "head record-head"}
        //export={() => onOpenExport(true)}
        onOpenModal={() => props.history.push("newrecord")}
        Loading={Loading}
      >
        {records.map((value) => (
          <div
            className={darkMod ? "record-tab-dark recordcss" : "record-tab recordcss"}
          >
            <div className="flex-row">{value.customer.name}</div>
            <div className="flex-row">
              <div className={darkMod ? "tag-dark green" : "tag green"}>
                {value.price + "$"}
              </div>
            </div>
            <div className="flex-row">{value.description}</div>
            <div className="flex-row">
              {" "}
              <div className={darkMod ? "tag-dark  org" : "tag org"}>
                {value.discount + "%"}
              </div>
            </div>
            <div className="flex-row">{value.rest}</div>
            <div className="flex-row">{value.driver}</div>
            <div className="flex-row">
              <Moment format="mm/dd">{value.modified}</Moment>
            </div>
            <div className="flex-row">
              <Moment format="mm/dd">{value.date}</Moment>
            </div>
          </div>
        ))}
      </CustomPage>
    </div>
  );
}

export default Records;
