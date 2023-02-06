import React from "react";
import { Outlet } from "react-router-dom";
import RightSidebar from "../RightSidebar/RightSidebar";
import LeftSidebar from "../LeftSideBar/LeftSidebar";
// import { Footer } from "../Footer";
// import { Header } from "../Header";
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
