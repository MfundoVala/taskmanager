import React from "react";
import { Outlet } from "react-router-dom";
import RightSidebar from "../RightSidebar/RightSidebar";
import LeftSidebar from "../LeftSideBar/LeftSidebar";
import styles from "./Layout.module.scss";

const Layout = () => {
  return (
    <>
      <RightSidebar />

      <main className={styles.App}>
        <Outlet />
      </main>
      <LeftSidebar />
    </>
  );
};

export default Layout;
