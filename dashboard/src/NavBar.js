import { Link } from "react-router-dom";
import "./Style/Navbar.css";
import pic from "./static/5.png";
import { Input } from "antd";
import { FaShoppingCart } from "react-icons/fa";
import { BsBarChartFill } from "react-icons/bs";
import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import { FaFileArchive, FaUsers } from "react-icons/fa";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import StarBorder from "@material-ui/icons/StarBorder";
import { makeStyles } from "@material-ui/core/styles";
const NavBar = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      width: "100%",
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
    nested: {
      paddingLeft: theme.spacing(4),
    },
  }));

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <div className="Nav_app">
      {/* <div className="divider"></div> */}
      {/* <div className="user-ctrl">
        <img src={pic} className="user-pic" />
        <div className="user-info">
          <p>Jone smith</p>
          <p>Administrator</p>
          <span className="flex-line">
            <div className="active"></div>Log Out
          </span>
        </div>
      </div>
      <div className="divider"></div>
      <Input
        style={{ backgroundColor: "#31353d", border: "1px solid #39414b" }}
      /> */}
      <div>
        <ul>
          {" "}
          <li className="flex-line ">
            {/* <span className="nav-icon">
                <FaUsers />
              </span>
              Workers*/}
          </li>
          <div style={{ bacgroundColor: "red" }}>
            {" "}
            <ListItem button onClick={handleClick}>
              <ListItemIcon>
                <span className="nav-icon">
                  <FaShoppingCart color="gray" />
                </span>
              </ListItemIcon>
              <ListItemText primary="Records" />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
          </div>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <Link to="/lists">
                  <ListItemText primary="Records" />
                </Link>
              </ListItem>{" "}
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <Link to="/newlist">
                  <ListItemText primary="create Records" />
                </Link>
              </ListItem>{" "}
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <Link to="/lists">
                  <ListItemText primary="Records Store" />
                </Link>
              </ListItem>
            </List>
          </Collapse>
          <Link to="/users">
            <li className="flex-line ">
              <span className="nav-icon">
                <FaUsers />
              </span>
              Workers
            </li>
          </Link>
          <Link to="settings">
            <li className="flex-line active-li">
              <span className="nav-icon">
                <BsBarChartFill />
              </span>
              Settings
            </li>{" "}
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
