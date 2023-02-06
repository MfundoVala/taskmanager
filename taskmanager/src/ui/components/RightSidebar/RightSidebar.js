import React from "react";
import styles from "./RightSidebar.module.scss";
import RightSidebarImage from "../../../assets/RightSidebar.svg";

const RightSidebar = () => {
  return (
    <div className={styles.RighSidebarContainer}>
      <div
        style={{
          backgroundImage: `url(${RightSidebarImage})`,
          height: "100%",
          width: "100%",
          backgroundSize: "contain",
          backgroundPosition: "top",
        }}
      ></div>
    </div>
  );
};

export default RightSidebar;
