import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Home from "./pages/Home";
import CategoryItemPage from "./components/CategoryItemsPage/CategoryItemPage";
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
