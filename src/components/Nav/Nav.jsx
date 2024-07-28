import "./Nav.scss";
import { slide as Menu } from "react-burger-menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useState, useEffect } from "react";

export default function Nav() {
  const [isActive, setIsActive] = useState(false);

  const handleNav = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    console.log(isActive);
  }, [isActive]);

  return (
    <>
      <nav className="nav">
        <h1 className="nav__title">the planets</h1>
        <div className="nav__burger" onClick={handleNav}>
          <FontAwesomeIcon
            icon={faBars}
            className={`nav__burger-icon ${isActive ? "nav__rotate" : null}`}
          />
        </div>
      </nav>
    </>
  );
}
