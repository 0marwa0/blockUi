import React, { useEffect, useState } from "react";
import "../Records/styles/index.css";
import "../Records/styles/steps.css";
import { useLocale } from "react-easy-localization";
import "./style/table.css";
import Pagination from "../shared/pagination";
import { CgArrowsV } from "react-icons/cg";

function Index(props) {
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

  const { i18n, languageCode, changeLanguage } = useLocale();
  const indexOfLastPage = currentPage * pagePerOnce;
  const indexOfFirstPage = indexOfLastPage - pagePerOnce;
  let Data = props.data.slice(indexOfFirstPage, indexOfLastPage);
  let darkMod = window.localStorage.getItem("mode") === "light" ? false : true;
  const tableheads = [
    {
      name: "Records",
      column: [
        i18n.customer,
        i18n.received,
        i18n.description,
        i18n.Discount,
        i18n.residual,
        i18n.driverName,
        i18n.editDate,
        i18n.createDate,
      ],
    },
    {
      name: "RecordItem",
      column: [i18n.Item, i18n.Price, i18n.quantity, i18n.Discount],
    },

    {
      name: "workers",
      column: [i18n.name, i18n.email, i18n.phone, i18n.state],
    },
    {
      name: "admins",
      column: [i18n.name, i18n.email, i18n.phone, i18n.state],
    },
    {
      name: "template",
      column: [
        i18n.templateName,
        i18n.numberOfItems,
        i18n.editDate,
        i18n.createdBy,
      ],
    },
  ];
  let [rows, setRows] = useState(tableheads)
  useEffect(() => {
    // let data = tableheads.map(i => i.column.pop())

  }, []);

  return (
    <div>
      <div className={darkMod ? "isDark" : ""}>

        <div className={darkMod ? "record-items-dark" : "record-items"}>
          {rows.map((item) =>

            item.name === props.pageName ? (
              <div className={props.headcss}>
                {item.column.map((i) => (

                  <div className="flex-row">
                    {i} <CgArrowsV color="var(--lighterGray)" cursor="pointer" />
                  </div>
                ))}

              </div>
            ) : null
          )}

          {props.children}
        </div>
      </div>

      <Pagination
        length={Data.length}
        currentPage={currentPage}
        prevPage={prevPage}
        totalPge={totalPge}
        nextPage={nextPage}
        lengthAll={20}
      />
    </div>
  );
}

export default Index;
