import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const tasksApiUrl =
  "http://localhost/taskmanager/api/controllers/tasks/";

export const employeesApiUrl =
  "http://localhost/taskmanager/api/controllers/employees/";

// Define a thunk that dispatches those action creators
export const fetchTasks = createAsyncThunk("tasks/fetchTasks", async () => {
  const response = await axios.get(tasksApiUrl + "read_all.php");
  console.log("response", response.data);
  return response.data;
});

export const fetchSingleTask = createAsyncThunk(
  "tasks/fetchSingleTask",
  async (id) => {
    const response = await axios.get(tasksApiUrl + "read_single.php?id=" + id);
    console.log(response.data);
    return response.data;
  }
);

export const createNewTask = createAsyncThunk(
  "tasks/addNewTask",
  async (task) => {
    const response = await axios.post(tasksApiUrl + "create.php", task);
    console.log(response.data);
    return task;
  }
);

export const updateTask = createAsyncThunk("tasks/updateTask", async (task) => {
  const { id } = task;
  console.log("taskUpdate", task);
  console.log("id", id);

  const response = await axios.put(tasksApiUrl + "update.php?id=" + id, task);
  console.log(response.data);
  return task;
});

export const deleteTask = createAsyncThunk("tasks/deleteTask", async (id) => {
  const response = await axios.post(tasksApiUrl + "delete.php?id=" + id);
  console.log(response.data);
  return response.data;
});

export const fetchEmployees = createAsyncThunk(
  "employees/fetchEmployees",
  async () => {
    const response = await axios.get(employeesApiUrl + "read_all.php");
    console.log(response.data);
    return response.data;
  }
);

export const fetchSingleEmployee = createAsyncThunk(
  "employees/fetchSingleEmployee",
  async (id) => {
    const response = await axios.get(
      employeesApiUrl + "read_single.php?id=" + id
    );
    console.log(response.data);
    return response.data;
  }
);
