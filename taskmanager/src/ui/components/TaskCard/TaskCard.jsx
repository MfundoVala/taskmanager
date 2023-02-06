import React from "react";
import styles from "./TaskCard.module.scss";
import { useState } from "react";

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
      <h4 className={styles.CardHeading}>{task.name}</h4>
      <p>{task.description}</p>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 10,
          alignContent: "center",
          justifyContent: "center",
        }}
      >
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
              style={{ width: 30, height: 30, borderRadius: 50 }}
              src={user.picture}
              alt=""
            />
            <span>{user.name}</span>
          </div>
        ))}
      </div>
      <p>{task.status}</p>
      <p>due: {task.due_date}</p>
    </div>
  );
};

export default TaskCard;
