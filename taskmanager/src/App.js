import logo from "./logo.svg";
import { Routes, Route, useLocation } from "react-router-dom";
import Layout from "./ui/components/Layout/Layout";
import Dashboard from "./ui/pages/Dashboard/Dashboard";
import Analytics from "./ui/pages/Analytics/Analytics";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="analytics">
            <Route index element={<Analytics />} />
            {/* <Route path=":id" element={<SearchResults />} /> */}
          </Route>
          {/* <Route path="employees">
            <Route index element={<Employess />} />
            <Route path=":id" element={<EmployeeProfile />} />
          </Route> */}
          <Route path="*" element={<h1>404</h1>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
