import "./Menu.scss";
import { checkScreenSize, handleScreenResize } from "../../utils/screenSize"; // Import your utility functions
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Menu({ selectedInfo, planetColor, paramsIndex }) {
  const [screenSize, setScreenSize] = useState(checkScreenSize());
  const [activeButton, setActiveButton] = useState();
  const [active, setActive] = useState("");

  console.log(screenSize);
  console.log("paramsIndex from menu:", paramsIndex);

  useEffect(() => {
    const cleanup = handleScreenResize(setScreenSize);

    return cleanup; // Cleanup the event listener on unmount
  }, []);

  // object for menu buttons
  const menuItems = [
    {
      text: "overview",
      mobileText: "overview",
      number: "01",
      class: "overview",
    },
    {
      text: "internal structure",
      mobileText: "structure",
      number: "02",
      class: "internal-structure",
    },
    {
      text: "surface geology",
      mobileText: "surface",
      number: "03",
      class: "surface-geology",
    },
  ];

  function handleClick(index) {
    selectedInfo(index);
    // selected index is the index returned from selectedInfo function
    const selectedIndex = selectedInfo(index);
    // check if the index of the button is equal to the index returned
    if (selectedIndex === index) {
      setActive(index);
    }
  }

  useEffect(() => {
    setActive(null);
  }, [paramsIndex]);

  return (
    <>
      {/*map over the menuitems array give the class menu__item.text for both mobile and larger 
    then check if screen size !== mobile dont render the span with the numbers
    */}
      <div className="menu">
        {menuItems.map((item, index) => {
          return (
            <div
              className="menu__button-container"
              style={{
                // check if the active state is === to the index of the button clicked
                borderBottom:
                  (active === index && screenSize === "mobile") ||
                  (active === null && screenSize === "mobile" && index === 0)
                    ? `2px solid ${planetColor}`
                    : null,

                backgroundColor:
                  (active === index && screenSize === "tablet") ||
                  (active === index && screenSize === "desktop") ||
                  (active === null && screenSize === "tablet" && index === 0)
                    ? `${planetColor}`
                    : "transparent",

                border:
                  screenSize !== "mobile" && active !== index
                    ? "1px solid grey"
                    : "none", // No border for mobile, only border-bottom
              }}
            >
              <button
                key={index}
                className={`menu__${item.class}`}
                onClick={() => handleClick(index)}
              >
                {screenSize !== "mobile" && <span>{item.number}</span>}{" "}
                {screenSize !== "mobile" ? item.text : item.mobileText}
              </button>
            </div>
          );
        })}
      </div>
      {screenSize === "mobile" ? <hr className="menu__line"></hr> : null}
    </>
  );
}
