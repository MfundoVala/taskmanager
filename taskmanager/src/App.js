import logo from "./logo.svg";
import { Routes, Route, useLocation } from "react-router-dom";
import Layout from "./ui/components/Layout/Layout";
import Dashboard from "./ui/pages/Dashboard/Dashboard";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          {/* <Route path="movies">
            <Route index element={<Movies />} />
            <Route path=":date" element={<SearchResults />} />
          </Route>
          <Route path="series">
            <Route index element={<Series />} />
            <Route path=":date" element={<SearchResults />} />
          </Route>
          <Route path="*" element={<h1>404</h1>} /> */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
