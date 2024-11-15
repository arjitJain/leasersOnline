import { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./Pages/Home";
import CategoryItemPage from "./Components/CategoryItemsPage/CategoryItemPage";
import "./App.css";
import "./index.css";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:categoryId" element={<CategoryItemPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
