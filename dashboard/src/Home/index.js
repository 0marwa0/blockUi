import Slider from "react-slick";
import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import "./index.css";
import "../App.css";
import Chart from "react-bulma-chartjs";
import "slick-carousel/slick/slick.css";
import Logs from "./log";
import "slick-carousel/slick/slick-theme.css";
import {
  FaUserFriends,
  FaClipboardList,
  FaFolderPlus,
  FaFolderOpen,
  FaFolderMinus,
  FaPlus,
} from "react-icons/fa";
const Home = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  const widget = [
    {
      icon: <FaUserFriends color="orange" />,
      lable: "Workers",
      $: "5822$",
      QRD: "9855QRD",
    },
    {
      icon: <FaClipboardList color="teal" />,
      lable: "Records",
      $: "5822$",
      QRD: "9855QRD",
    },
    {
      icon: <FaFolderMinus color="yellow" />,
      lable: "Lack Records",
      $: "5822$",
      QRD: "9855QRD",
    },
    {
      icon: <FaFolderOpen />,
      lable: " Remain Records",
      $: "5822$",
      QRD: "9855QRD",
    },
    {
      icon: <FaFolderPlus />,
      lable: "Received Records",
      $: "5822$",
      QRD: "9855QRD",
    },
  ];
  const data = {
    labels: ["Feb", "Jan", "May"],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: [
          "#FF6384",
          // , "#36A2EB"
          "#FFCE56",
        ],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };
  const options = {
    animateRotate: true,
  };
  return (
    <div className="page">
      <div className="dash-content">
        <div className="dash-nav">
          <Slider {...settings}>
            {widget.map((item) => (
              <div>
                <div className="dash-widget">
                  <div>{item.lable}</div>
                  <span className="dash-icon">{item.icon}</span>
                  <div>{item.$}</div>
                  <div>{item.QRD}</div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div style={{ display: "flex" }}>
          <Logs />
          <div
            className="dash-chart"
            style={{ position: "relative", width: "400px" }}>
            <Chart
              className="dash-chart"
              type={"line"}
              options={{ maintainAspectRatio: false }}
              data={data}
              options={options}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
