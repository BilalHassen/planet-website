import "./NavMenu.scss";
import arrow from "/images/icon-chevron.svg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function NavMenu({ index, data, isActive }) {
  // console.log(typeof data.color);

  const isClicked = (e) => {
    isActive();
  };

  return (
    <>
      <div className="nav__menu">
        <div className="nav__icon-name">
          <div
            className="nav__planet-icon"
            style={{
              backgroundColor: data.color, // Set the background color here
            }}
          ></div>
          <h2 className="nav__planet-name">{data.name}</h2>
        </div>

        <Link to={`planet/${index}`} onClick={isClicked}>
          <img className="nav__arrow-icon" src={arrow} alt="arrow"></img>
        </Link>
      </div>
    </>
  );
}
