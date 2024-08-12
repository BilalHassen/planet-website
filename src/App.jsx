import { useState } from "react";
import "./App.scss";
import Nav from "./components/Nav/Nav";
import PlanetsPage from "./pages/PlanetsPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Nav />
      <div className="wrapper">
        <Router>
          <Routes>
            <Route path="/" element={<PlanetsPage />} />
            <Route path="/planet/:name" element={<PlanetsPage />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
