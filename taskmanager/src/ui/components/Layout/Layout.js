import React from "react";
import { Outlet } from "react-router-dom";
// import { Footer } from "../Footer";
// import { Header } from "../Header";
import styles from "./Layout.module.scss";

const Layout = () => {
  return (
    <>
      {/* <Header /> */}
      <main className={styles.App}>
        <Outlet />
      </main>
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
