import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";
import Nav from "./components/Nav/Nav";
import PlanetsPage from "./pages/PlanetsPage";

function App() {
  return (
    <Router>
      <Nav />
      <div className="wrapper">
        <Routes>
          <Route path="/" element={<PlanetsPage />} />
          <Route path="/planet/:name" element={<PlanetsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
