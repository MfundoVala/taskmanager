import React from "react";
import styles from "./Dashboard.module.scss";
import { useEffect, useState } from "react";
import {
  updateTask,
  createNewTask,
  deleteTask,
} from "../../../services/api.js";
import { useDispatch, useSelector } from "react-redux";
import {
  selectAllTasks,
  selectTaskById,
} from "../../../application/redux/taskSlice";
import TaskCard from "../../components/TaskCard/TaskCard";
import store from "../../../application/redux/store";
import RoundButton from "../../components/RoundButton/RoundButton";
import TaskModal from "../../components/TaskModal/TaskModal";

const Dashboard = () => {
  const tasks = useSelector(selectAllTasks);
  if (tasks.length > 0) {
    console.log("tasks", tasks);
  }

  const [isOpen, setIsOpen] = useState(false);

  const [editMode, setEditMode] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    setEditTask({});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");

    const task = {
      id: editTask.id,
      name: editTask.name,
      description: editTask.description,
      status: editTask.status,
      due_date: editTask.due_date,
      assigned_to: editTask.assigned_to,
    };

    console.log("taskDash", task);
    editMode
      ? store.dispatch(updateTask(task))
      : store.dispatch(createNewTask(task));

    handleClose();
  };

  const handleDelete = (e) => {
    store.dispatch(deleteTask(editTask.id));
    handleClose();
  };
  const [editTask, setEditTask] = useState({});
  const [selectedOptions, setSelectedOptions] = useState([]);
  return (
    <div className={styles.Dashboard}>
      <div className={styles.createButton}>
        <RoundButton
          setIsOpen={setIsOpen}
          setEditMode={setEditMode}
          symbol={"+"}
        />
      </div>
      {tasks.length > 0 &&
        tasks.map((task) => (
          <TaskCard
            task={task}
            key={task.id + "z"}
            setIsOpen={setIsOpen}
            setEditTask={setEditTask}
            setEditMode={setEditMode}
          />
        ))}
      <div>
        {isOpen && (
          <TaskModal
            task={editTask}
            setEditTask={setEditTask}
            selectedOptions={selectedOptions}
            setSelectedOptions={setSelectedOptions}
            handleSubmit={handleSubmit}
            handleClose={handleClose}
            editMode={editMode}
            editTask={editTask}
            handleDelete={handleDelete}
          />
        )}
      </div>
    </div>
  );
};

export default Dashboard;
