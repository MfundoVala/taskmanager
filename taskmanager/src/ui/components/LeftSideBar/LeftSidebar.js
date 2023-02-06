import React from "react";
import styles from "./LeftSidebar.module.scss";
import logo from "../../../assets/logo.svg";
import dashboardImg from "../../../assets/dashboard.svg";
import analyticsImg from "../../../assets/analytics.svg";
import { NavLink as RouterNavLink } from "react-router-dom";

const LeftSideBar = () => {
  return (
    <div className={styles.LeftSidebarContainer}>
      <img className={styles.img} src={logo} />
      <RouterNavLink
        className={styles.navLink}
        activeClassName={styles.activeNavLink}
        to="/"
      >
        <div className={styles.navLinkContainer}>
          <div className={styles.navLinkIcon}>
            <img src={dashboardImg} />
          </div>
        </div>
      </RouterNavLink>
      <RouterNavLink
        className={styles.navLink}
        activeClassName={styles.activeNavLink}
        to="/analytics"
      >
        <div className={styles.navLinkContainer}>
          <div className={styles.navLinkIcon}>
            <img src={analyticsImg} />
          </div>
        </div>
      </RouterNavLink>
    </div>
  );
};

export default LeftSideBar;
