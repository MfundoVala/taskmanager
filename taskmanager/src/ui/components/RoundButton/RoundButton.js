import React from "react";
import styles from "./RoundButton.module.scss";

const CreateButton = ({ setIsOpen, setEditMode, symbol, status }) => {
  return (
    <div
      className={`${styles.ButtonContainer} ${
        !status
          ? ""
          : status === "Complete"
          ? styles.complete
          : status === "In Progress"
          ? styles.inProgress
          : status === "Open"
          ? styles.notStarted
          : ""
      }`}
      onClick={
        status
          ? () => {}
          : () => {
              setEditMode(false);
              setIsOpen(true);
            }
      }
    >
      <h1 className={styles.text}>{symbol}</h1>
    </div>
  );
};

export default CreateButton;
