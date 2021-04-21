import React, { useState, useEffect, createContext } from "react";
import { Mesg, FailedMesg } from "./API/APIMessage";
import { useLocale } from "react-easy-localization";
import WorkerINFO from "./pages/Workers/workerInfo";
import { LoadData } from "./API";
import logo from "./logo.svg";
import "./App.css";
import { useHistory } from "react-router";
import "react-progress-2/main.css";
import Sidebar from "./pages/Sidebar";
import Dashboard from "./pages/Dashboard";
import Records from "./pages/Records";
import NewRecord from "./pages/Records/newRecord.js";
import Workers from "./pages/Workers";
import Admins from "./pages/Admins";
import { resources } from "./resources";
import { LocaleProvider } from "react-easy-localization";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import Settings from "./pages/Settings";
import Login from "./pages/Login";
import Statistic from "./pages/Statistic/index";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
function App(props) {
  const Admin = createContext();
  const [admins, setadmins] = useState([]);
  const [spaces, setspaces] = useState([]);
  const [userId, setuserId] = useState("");
  const history = useHistory();

  const getAdmins = () => {};
  const getSpace = () => {
    LoadData(
      "spaces",
      (err, data) => {
        setspaces(data.data);
        setuserId(data.user.id);
        if (err) {
          Mesg(err);
        }
      },
      (err) => {
        FailedMesg(err, "Something worng happend !");
      }
    );
  };
  const { i18n, languageCode, changeLanguage } = useLocale();

  useEffect(() => {
    if (localStorage.getItem("isLight") === "dark") {
      document.body.style.background = "var(--black)";
    } else {
      document.body.style.background = "var(--lightGray)";
    }
    if (localStorage.getItem("isEnglish")) {
      if (localStorage.getItem("isEnglish") === "false") {
        document.body.style.direction = "rtl";
        changeLanguage("ar");
      } else {
        document.body.style.direction = "ltr";
        changeLanguage("en");
      }
    }

    // LoadData(
    //   "Admins",
    //   (err, data) => {
    //     setadmins(data.data);
    //   },
    //   (err) => {
    //     FailedMesg(err, "Something worng happend !");
    //   }
    // );
    //getSpace();
    if (
      localStorage.getItem("station_token") != undefined &&
      localStorage.getItem("station_token") != ""
    ) {
    } else {
      //history.push("/login");
      //.log(props.history);
    }
  }, []);
  return (
    <LocaleProvider resources={resources}>
      <Switch>
        <Route
          path="/"
          exact
          render={(props) => <Dashboard {...props} admins={admins} />}
        />
        <Route
          path="/newrecord"
          render={(props) => (
            <NewRecord {...props} admins={admins} id={userId} />
          )}
          exact
        />
        <Route
          path="/profile"
          render={(props) => <Profile {...props} admins={admins} id={userId} />}
          exact
        />
        <Route path="/home" component={Home} exact />
        <Route
          path="/workers"
          render={(props) => <Workers {...props} id={userId} />}
          exact
        />{" "}
        <Route
          path="/statistics"
          render={(props) => <Statistic {...props} id={userId} />}
          exact
        />{" "}
        <Route
          path="/settings"
          render={(props) => <Settings {...props} id={userId} />}
          exact
        />{" "}
        <Route
          path="/login"
          render={(props) => <Login {...props} id={userId} />}
          exact
        />{" "}
        <Route
          path="/workerProfile"
          render={(props) => <WorkerINFO {...props} id={userId} />}
          exact
        />{" "}
        <Route
          path="/records"
          render={(props) => <Records {...props} id={userId} />}
          exact
        />
        <Route
          path="/admins"
          render={(props) => <Admins {...props} admins={admins} />}
          exact
        />
      </Switch>
    </LocaleProvider>
  );
}

export default App;
