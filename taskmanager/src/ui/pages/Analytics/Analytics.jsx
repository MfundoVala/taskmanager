import React from "react";
import styles from "./Analytics.module.scss";

const Analytics = () => {
  return (
    <div className={styles.Analytics}>
      <h1>Project breakdown</h1>

      <div style={{ width: "100%", height: "5%" }}>
        <hr></hr>
      </div>
      <h3>
        This project was built with the help of:
        <ul>
          <li>React: Front end UI</li>
          <li>PHP and MySql: Rest api and backend</li>
          <li>Redux with Redux toolkit: State management</li>
          <li>Redux thunk: Asynchronus API calls</li>
          <li>Redux-persist: State persistence</li>
          <li>Sass: SCSS styling</li>
          <li>react-datepicker: Date picking component</li>
        </ul>
        File structure:
        <br></br>
        <br></br>
        The project uses React in the front end to make it as modular as
        possible. <br />
        The client source is seperated into 3 main layers:
        <ul>
          <li>Application: for app business logic such as state management</li>
          <li>
            Services: for code that communicates with outside services such as
            API logic
          </li>
          <li>UI: for the View model code</li>
        </ul>
        and a seperate folder for Assests well. Our application is also wrapped
        in a layout component that has our footer and header as global
        components and accepts all other components as children. It also has a
        layout css file for our more global UI styless.
        <br />
        <br />
        The backend is structured in a similar way with 3 main modules:
        <ul>
          <li>
            Config: where the PHP MySQL database connection is established
          </li>
          <li>Models: where the data object models are defined</li>
          <li>
            Controllers: where the controllers for Data objects are defined
          </li>
        </ul>
        The Mysql has two tables: Employees and Tasks, a third relational table
        was originally implemented but I opted to use serialization of and array
        to establish that relationhip instead as no complex operations would be
        ran on the database according to the scope of the project.
      </h3>
    </div>
  );
};

export default Analytics;
