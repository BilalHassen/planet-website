import "./Menu.scss";
import { checkScreenSize, handleScreenResize } from "../../utils/screenSize"; // Import your utility functions
import { useState, useEffect } from "react";

export default function Menu({ selectedInfo }) {
  const [screenSize, setScreenSize] = useState(checkScreenSize());

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

  const handleClick = (index) => {
    console.log(index);
    selectedInfo(index);
  };

  return (
    <>
      {/*map over the menuitems array give the class menu__item.text for both mobile and larger 
    then check if screen size !== mobile dont render the spam with the numbers
    */}
      <div className="menu">
        {menuItems.map((item, index) => (
          <button
            key={index}
            className={`menu__${item.text}`}
            onClick={() => handleClick(index)}
          >
            {screenSize !== "mobile" && <span>{item.number}</span>} {item.text}
          </button>
        ))}
      </div>
      {screenSize === "mobile" ? <hr className="menu__line"></hr> : null}
    </>
  );
}
