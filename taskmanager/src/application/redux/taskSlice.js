import {
  createSlice,
  createSelector,
  createEntityAdapter,
} from "@reduxjs/toolkit";

import {
  fetchTasks,
  fetchSingleTask,
  createNewTask,
  updateTask,
  deleteTask,
} from "../../services/api";

const initialState = {
  tasks: [],
  status: "idle",
  error: null,
};

const tasksAdapter = createEntityAdapter();

//   useEffect(() => {
//     // fetch("http://localhost/taskmanager/api/controllers/tasks/read_all.php")
//     //   .then((response) => response.json())
//     //   .then((res) => {
//     //     const { data } = res;
//     //     console.log(Object.values(data));
//     //     setNotes(Object.values(data));
//     //   });

//     fetch(
//       "http://localhost/taskmanager/api/controllers/tasks/read_single.php?id=2"
//     )
//       .then((response) => response.json())
//       .then((res) => {
//         // const { data } = res;
//         console.log(res);
//         console.log(JSON.parse(res["assigned_to"]));
//         res["assigned_to"] = JSON.parse(res["assigned_to"]);
//         console.log(res);
//         console.log("res assig", res["assigned_to"][0]);
//         setSingleTask(res);
//         console.log(notes.length);
//       });
//   }, []);

export const tasksSlice = createSlice({
  name: "tasks",
  initialState: tasksAdapter.getInitialState(initialState),
  reducers: {
    fetchTasks: (state) => {
      state.status = "loading";
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchTasks.pending, (state) => {
        console.log(state);
        state.status = "loading";
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.status = "succeeded";

        const { data } = action.payload;

        data.map((task) => {
          task["assigned_to"] = JSON.parse(task["assigned_to"]);
        });

        console.log("modified data", data);

        tasksAdapter.setAll(state, data);
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      .addCase(fetchSingleTask.fulfilled, tasksAdapter.addOne)

      .addCase(createNewTask.fulfilled, tasksAdapter.addOne)

      .addCase(updateTask.fulfilled, (state, action) => {
        console.log("action", action.payload);
        console.log("state", state);
      })

      .addCase(deleteTask.fulfilled, tasksAdapter.removeOne);
  },
});

export const {
  selectAll: selectAllTasks,
  selectById: selectTaskById,
  selectIds: selectTaskIds,
} = tasksAdapter.getSelectors((state) => state.tasks);

export default tasksSlice.reducer;
