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
          }}
        >
          <h1>{editMode ? "Edit Task" : "Create Task"}</h1>
          <div onClick={handleClose}>
            <h2>X</h2>
          </div>
        </div>

        <div className={styles.modalForm}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={task.name ? task.name : ""}
            onChange={(e) => {
              console.log(e.target.value);
              setEditTask({
                ...task,
                name: e.target.value,
              });
            }}
          />
          <label htmlFor="description">Description</label>

          <input
            type="text"
            name="description"
            id="description"
            value={task ? task.description : ""}
            onChange={(e) => {
              console.log(e.target.value);
              setEditTask({
                ...task,
                description: e.target.value,
              });
            }}
          />
          <label htmlFor="status">Status</label>

          <input
            type="text"
            name="status"
            id="status"
            value={task.status ? task.status : ""}
            onChange={(e) => {
              console.log(e.target.value);
              setEditTask({
                ...task,
                status: e.target.value,
              });
            }}
          />
          <label htmlFor="due_date">Due Date</label>

          <input
            type="text"
            name="due_date"
            id="due_date"
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

          <label htmlFor="assigned_to">Assigned To</label>

          <input
            type="text"
            name="assigned_to"
            id="assigned_to"
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
          <input
            type="submit"
            value={"SUBMIT"}
            onClick={(e) => handleSubmit(e)}
          />
          <hr />
          <button onClick={(e) => handleDelete(e)}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default TaskModal;
