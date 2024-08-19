import "./Menu.scss";
import { checkScreenSize, handleScreenResize } from "../../utils/screenSize"; // Import your utility functions
import { useState, useEffect } from "react";

export default function Menu({ selectedInfo, planetColor }) {
  const [screenSize, setScreenSize] = useState(checkScreenSize());
  const [activeButton, setActiveButton] = useState();
  const [active, setActive] = useState(false);

  console.log(planetColor);

  useEffect(() => {
    const cleanup = handleScreenResize(setScreenSize);

    return cleanup; // Cleanup the event listener on unmount
  }, []);

  // object for menu buttons
  const menuItems = [
    { text: "overview", number: "01" },
    { text: "structure", number: "02" },
    { text: "surface", number: "03" },
  ];

  function handleClick(index) {
    selectedInfo(index);
    const selectedIndex = selectedInfo(index);
    if (selectedIndex === index) {
      setActive(index);
    }
  }

  return (
    <>
      {/*map over the menuitems array give the class menu__item.text for both mobile and larger 
    then check if screen size !== mobile dont render the spam with the numbers
    */}
      <div className="menu">
        {menuItems.map((item, index) => (
          <div
            className="menu__button-container"
            style={{
              borderBottom:
                active === index ? `2px solid ${planetColor}` : null,
            }}
          >
            <button
              key={index}
              className={`menu__${item.text}`}
              onClick={() => handleClick(index)}
            >
              {screenSize !== "mobile" && <span>{item.number}</span>}{" "}
              {item.text}
            </button>
          </div>
        ))}
      </div>
      {screenSize === "mobile" ? <hr className="menu__line"></hr> : null}
    </>
  );
}
