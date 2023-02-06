import React from "react";
import styles from "./TaskCard.module.scss";
import { useState } from "react";
import taskImage from "../../../assets/taskCard.png";
import RoundButton from "../../components/RoundButton/RoundButton";

const TaskCard = ({ task, setIsOpen, setEditTask, setEditMode }) => {
  return (
    <div
      className={styles.TaskContainer}
      onClick={() => {
        setEditTask(task);
        setEditMode(true);
        setIsOpen(true);
      }}
    >
      <div className={styles.headingDiv}>
        <div className={styles.FlexLeft}>
          <h4 className={styles.heading}>
            {task.name.length > 20 ? task.name.slice(0, 20) + "..." : task.name}
          </h4>
        </div>
      </div>

      <div className={styles.descriptionDiv}>
        <div className={styles.FlexLeft}>
          <div className={styles.descriptionInnerDiv}>
            <p className={styles.description}>
              {task.description.length > 100
                ? task.description.slice(0, 140) + "..."
                : task.description}
            </p>
          </div>
        </div>
      </div>

      <div className={styles.statusDiv}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 5,
              alignContent: "flex-start",
              justifyContent: "flex-start",
              marginLeft: 22,
              marginBottom: 5,
            }}
          >
            {" "}
            {task.assigned_to.map((user) => (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                key={user.id + "b"}
              >
                <img
                  style={{ width: 25, height: 25, borderRadius: 50 }}
                  src={user.picture}
                  alt=""
                />
                <span className={styles.imageText}>{user.name}</span>
              </div>
            ))}
          </div>
          <div className={styles.due_date}>Due: {task.due_date}</div>
        </div>
        <RoundButton
          status={task.status}
          symbol={task.status[0].toUpperCase()}
        />
      </div>
    </div>
  );
};

export default TaskCard;
