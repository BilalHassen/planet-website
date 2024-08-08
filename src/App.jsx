import { useState } from "react";
import "./App.scss";
import Nav from "./components/Nav/Nav";
import PlanetsPage from "./pages/PlanetsPage";

function App() {
  return (
    <>
      <Nav />
      <div className="wrapper">
        <h1>VENUS</h1>
        <PlanetsPage />
      </div>
    </>
  );
}

export default App;
