import React from "react";
import styles from "./CreateButton.module.scss";

const CreateButton = ({ setIsOpen, setEditMode }) => {
  return (
    <div
      className={styles.ButtonContainer}
      onClick={() => {
        setEditMode(false);
        setIsOpen(true);
      }}
    >
      <h1 className={styles.text}>+</h1>
    </div>
  );
};

export default CreateButton;
