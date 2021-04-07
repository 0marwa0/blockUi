import "./App.css";
import NavBar from "./NavBar";
import "antd/dist/antd.css";
import {
  withRouter,
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import List from "./Lists/index";
import Info from "./Users/info";
import Users from "./Users/index";
import NewList from "./Lists/new";
import Settings from "./Settings";
import Home from "./Home";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route
            path="/Settings"
            exact
            render={() => (
              <div className="mainLayout">
                <NavBar />
                <Settings />
              </div>
            )}
          />{" "}
          <Route
            path="/users"
            exact
            render={() => (
              <div className="mainLayout">
                <NavBar />
                <Users />
              </div>
            )}
          />{" "}
          <Route
            path="/newlist"
            exact
            render={() => (
              <div className="mainLayout">
                <NavBar />
                <NewList />
              </div>
            )}
          />
          <Route
            path="/info"
            exact
            render={() => (
              <div className="mainLayout">
                <NavBar />
                <Info />
              </div>
            )}
          />
          <Route
            path="/lists"
            exact
            render={() => (
              <div className="mainLayout">
                <NavBar />
                <List />
              </div>
            )}
          />{" "}
          <Route
            path="/"
            exact
            render={() => (
              <div className="mainLayout">
                <NavBar />
                <div>
                  <Home />
                </div>
              </div>
            )}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
