import "./Nav.scss";
import { slide as Menu } from "react-burger-menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-free/css/all.min.css";
import NavMenu from "../NavMenu/NavMenu";
import planetData from "../../data/data";
import { useState, useEffect } from "react";
import { checkScreenSize, handleScreenResize } from "../../utils/screenSize"; // Import your utility functions
import { Link } from "react-router-dom";

export default function Nav() {
  const [screenSize, setScreenSize] = useState(checkScreenSize());

  useEffect(() => {
    const cleanup = handleScreenResize(setScreenSize);

    return cleanup; // Cleanup the event listener on unmount
  }, []);

  // useEffect(() => {
  //   console.log(screenSize);
  // }, [screenSize]);

  const [isActive, setIsActive] = useState(false);

  const handleNav = () => {
    setIsActive(!isActive);
  };

  // useEffect(() => {
  //   console.log(isActive);
  // }, [isActive]);

  return (
    <>
      {screenSize === "mobile" ? (
        <nav className="nav">
          <h1 className="nav__title">the planets</h1>
          <div className="nav__burger" onClick={handleNav}>
            <FontAwesomeIcon
              icon={faBars}
              className={`nav__burger-icon ${isActive ? "nav__rotate" : null}`}
            />
          </div>
        </nav>
      ) : (
        <div className="nav__larger-wrapper">
          <h1 className="nav__title">the planets</h1>
          <nav className="nav">
            <ul className="nav__list">
              {planetData[0].map((data, index) => {
                console.log(index);
                return (
                  <Link to={`/planet/${index}`}>
                    <li key={data.name} className="nav__list-item">
                      {data.name}
                    </li>
                  </Link>
                );
              })}
            </ul>
          </nav>
        </div>
      )}

      <div className={`nav__menu-wrapper ${isActive ? "open" : "close"}`}>
        {isActive
          ? planetData[0].map((data, index) => {
              return (
                <NavMenu
                  index={index}
                  key={data.name}
                  images={data.images}
                  data={data}
                  isActive={handleNav}
                />
              );
            })
          : null}
      </div>
    </>
  );
}
