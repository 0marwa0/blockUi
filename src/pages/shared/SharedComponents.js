import React from "react";
import "./style/SharedComponents.css";
import { RiArrowDownSFill } from "react-icons/ri";
import ContentLoader from "react-content-loader";
import { Button } from "antd";
import Loader from "react-loader-spinner";

import ClipLoader from "react-spinners/ClipLoader";
export const CustomButton = ({
  lable,
  children,
  main,
  filter,
  onOpen,
  pageTitle,
  fun,
  undo,
  loading,
  extra,
}) => {
  let darkMod =
    window.localStorage.getItem("isLight") === "light" ? false : true;
  return loading ? (
    <button
      className={main ? "ButtonStyledMain" : "ButtonStyled"}
      style={{
        borderColor: darkMod ? "transparent" : "",
        color: darkMod ? "var(--darkGray)" : "",
        backgroundColor: darkMod ? "#353535" : "",
        cursor: "wait",
      }}
      disabled={true}
      loading={loading}
      //  onClick={main ? onOpen : fun}
    >
      <div style={{ marginTop: "5px" }}>
        <ClipLoader
          size={15}
          color="var(--darkGray)"
          timeout={3000} //3 secs
        />
      </div>
      {lable}
      {filter ? <RiArrowDownSFill color="var(--lighterGray)" /> : ""}
    </button>
  ) : (
    <button
      className={main ? "ButtonStyledMain" : "ButtonStyled"}
      style={{
        borderColor: darkMod ? "transparent" : "",
        color: darkMod ? "var(--darkGray)" : "",
        backgroundColor: darkMod ? "#353535" : "",
      }}
      loading={loading}
      onClick={main ? onOpen : fun}
    >
      {children}

      {lable}
      {filter ? (
        <RiArrowDownSFill
          color={darkMod ? "var(--darkGray)" : "var(--lighterGray)"}
        />
      ) : (
        ""
      )}
    </button>
  );
};
export const CustomModleButton = ({ Loading, children, main, fun, extra }) => {
  return Loading ? (
    <button
      calssName={main ? "ButtonStyledModleMain" : "ButtonStyledModle"}
      Loading={Loading}
      // main={main}
      //extra={extra}

      onClick={fun}
    >
      <div style={{ marginTop: "5px" }}>
        <ClipLoader
          size={15}
          color="var(--darkGray)"
          timeout={3000} //3 secs
        />
      </div>
    </button>
  ) : (
    <button
      calssName={main ? "ButtonStyledModleMain" : "ButtonStyledModle"}
      Loading={Loading}
      // main={main}
      //extra={extra}

      onClick={fun}
    >
      {children}
    </button>
  );
};

export function ReservationLoading(props) {
  let data = [1, 2, 3, 4];
  return data.map((i, index) => (
    <div key={index}>
      <ContentLoader
        speed={1.5}
        width="100%"
        height="55px"
        viewBox="0 0 600 80"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
      >
        <rect x="0" y="8" rx="15" ry="15" width="88" height="65" />
        <rect x="100" y="60" rx="3" ry="90" width="300" height="5" />
        <rect x="520" y="8" rx="3" ry="90" width="88" height="7" />
      </ContentLoader>
    </div>
  ));
}

export function TextLoadS(props) {
  return (
    <div
      style={{
        textAlign: "left",
        width: "60px",
      }}
    >
      <ContentLoader
        speed={1}
        // width="100%"
        height="15px"
        viewBox="0 0 600 80"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
      >
        <rect x="0" y="8" rx="3" ry="90" width="350" height="30" />
      </ContentLoader>
    </div>
  );
}
