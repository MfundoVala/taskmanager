import React from "react";
import styles from "./TaskModal.module.scss";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.min.css";
import { useState } from "react";

const TaskModal = ({
  task,
  editTask,
  setEditTask,
  selectedOptions,
  setSelectedOptions,
  handleSubmit,
  handleClose,
  editMode,
  handleDelete,
}) => {
  const [dueDate, setDueDate] = useState(new Date().setFullYear(2023, 5, 1));

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            paddingLeft: "20px",
            paddingRight: "20px",
          }}
        >
          <h1>{editMode ? "Edit Task" : "Create Task"}</h1>
          <div style={{ cursor: "pointer" }} onClick={handleClose}>
            <h2>X</h2>
          </div>
        </div>

        <div className={styles.modalForm}>
          <label className={styles.modalText} htmlFor="name">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            style={{
              height: "30px",
              width: "50%",
              borderRadius: "5px",
              border: "1px solid white",
            }}
            value={task.name ? task.name : ""}
            onChange={(e) => {
              console.log(e.target.value);
              setEditTask({
                ...task,
                name: e.target.value,
              });
            }}
          />
          <label className={styles.modalText} htmlFor="description">
            Description
          </label>

          <input
            type="text"
            name="description"
            id="description"
            value={task ? task.description : ""}
            className={styles.modalInputLarge}
            onChange={(e) => {
              console.log(e.target.value);
              setEditTask({
                ...task,
                description: e.target.value,
              });
            }}
          />
          <label className={styles.modalText} htmlFor="status">
            Status
          </label>

          <input
            type="text"
            name="status"
            id="status"
            className={styles.modalInput}
            value={task.status ? task.status : ""}
            onChange={(e) => {
              console.log(e.target.value);
              setEditTask({
                ...task,
                status: e.target.value,
              });
            }}
          />
          <label htmlFor="due_date" className={styles.modalText}>
            Due Date
          </label>

          <input
            type="text"
            name="due_date"
            id="due_date"
            className={styles.modalInput}
            value={task.due_date ? task.due_date : ""}
          />
          <div>
            <DatePicker
              selected={dueDate}
              onChange={(date) => {
                setDueDate(date);
                setEditTask({
                  ...task,
                  due_date:
                    date.getFullYear() +
                    "-" +
                    date.getMonth() +
                    "-" +
                    date.getDate(),
                });
                console.log(editTask);
              }}
            />
          </div>

          <label htmlFor="assigned_to" className={styles.modalText}>
            Assigned To
          </label>

          <input
            type="text"
            name="assigned_to"
            id="assigned_to"
            className={styles.modalInput}
            value={
              task.assigned_to && task.assigned_to[0]
                ? task.assigned_to.map((user) => user.name)
                : "unassigned"
            }
            onChange={(e) => {
              console.log(e.target.value);
              setEditTask({
                ...task,
                assigned_to: e.target.value,
              });
            }}
          />
          <div>
            <input
              type="radio"
              id="option2"
              value="option2"
              checked={selectedOptions.includes("option2")}
              onClick={(e) => {
                if (selectedOptions.includes("option2")) {
                  setSelectedOptions(
                    selectedOptions.filter((option) => option !== "option2")
                  );
                  setEditTask({
                    ...task,
                    assigned_to: task.assigned_to.filter(
                      (user) => user.name !== "mfundo"
                    ),
                  });
                } else {
                  console.log(e.target.value);
                  setSelectedOptions([...selectedOptions, "option2"]);
                  setEditTask({
                    ...task,
                    assigned_to: [
                      {
                        id: 1,
                        name: "mfundo",
                        picture: "https://i.imgur.com/9p6RMtz.jpg",
                      },
                    ],
                  });
                }
              }}
            />
            <label htmlFor="option2">Mfundo</label>
          </div>
          <div
            style={{
              width: "50%",
              height: "30px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <input
              type="submit"
              value={"SUBMIT"}
              className={styles.modalSubmit}
              onClick={(e) => handleSubmit(e)}
            />
            <button
              className={styles.modalSubmit}
              onClick={(e) => handleDelete(e)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskModal;
