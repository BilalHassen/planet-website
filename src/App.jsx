import { useState } from "react";
import "./App.scss";
import Nav from "./components/Nav/Nav";

function App() {
  return (
    <>
      <Nav />
      <div className="wrapper">
        <h1>VENUS</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, sint
          esse. Enim dignissimos quasi est molestias animi, ipsum veniam
          voluptatum tenetur amet placeat adipisci cupiditate, architecto sit
          iste debitis! Blanditiis?
        </p>
      </div>
    </>
  );
}

export default App;
