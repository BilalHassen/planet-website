import "./Nav.scss";
import { slide as Menu } from "react-burger-menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-free/css/all.min.css";
import NavMenu from "../NavMenu/NavMenu";
import planetData from "../../data/data";
import { useState, useEffect } from "react";

export default function Nav() {
  const [screenSize, setScreenSize] = useState(checkScreenSize());

  console.log(screenSize);
  function checkScreenSize() {
    if (window.innerWidth >= 768 && window.innerWidth < 1366) {
      return "tablet";
    } else if (window.innerWidth >= 1366) {
      return "desktop";
    }

    return "mobile";
  }

  useEffect(() => {
    const handleScreenSize = () => {
      setScreenSize(checkScreenSize());
    };

    window.addEventListener("resize", handleScreenSize);

    return () => {
      window.removeEventListener("resize", handleScreenSize);
    };
  }, [window.innerWidth]);

  useEffect(() => {
    console.log(screenSize);
  }, [screenSize]);

  console.log(planetData);
  const [isActive, setIsActive] = useState(false);

  const handleNav = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    console.log(isActive);
  }, [isActive]);

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
              {planetData[0].map((data) => {
                return <li className="nav__list-item">{data.name}</li>;
              })}
            </ul>
          </nav>
        </div>
      )}

      <div className={`nav__menu-wrapper ${isActive ? "open" : "close"}`}>
        {isActive
          ? planetData[0].map((data) => {
              return (
                <NavMenu key={data.index} images={data.images} data={data} />
              );
            })
          : null}
      </div>
    </>
  );
}
