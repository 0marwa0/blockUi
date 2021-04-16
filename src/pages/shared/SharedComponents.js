import React from "react";
import "./style/SharedComponents.css";
import { RiArrowDownSFill } from "react-icons/ri";
import ContentLoader from "react-content-loader";
import { Button } from "antd";
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
  return (
    <button
      className={main ? "ButtonStyledMain" : "ButtonStyled"}
      //style={{
      // padding: extra ? "0 50px" : "",
      //width: extra ? "80px" : "",
      //height: extra ? "110px" : "",
      //borderRadius: extra ? "2px" : "",
      // }}
      loading={loading}
      onClick={main ? onOpen : fun}
    >
      {children}
      {lable}
      {filter ? <RiArrowDownSFill color="var(--lighterGray)" /> : ""}
    </button>
  );
};
export const CustomModleButton = ({ Loading, children, main, fun, extra }) => {
  return (
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
