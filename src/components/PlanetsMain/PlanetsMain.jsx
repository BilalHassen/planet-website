import Menu from "../Menu/Menu";
import { checkScreenSize, handleScreenResize } from "../../utils/screenSize";
import { useEffect, useState } from "react";
import "./PlanetsMain.scss";
export default function PlanetsMain({
  planetData,
  selectedInfoState,
  selectedInfo,
  planetColor,
  index,
}) {
  const [screenSize, setScreenSize] = useState(checkScreenSize());
  const [Index, setIndex] = useState();
  useEffect(() => {
    const cleanup = handleScreenResize(setScreenSize);

    return cleanup; // Cleanup the event listener on unmount
  }, []);

  // useEffect(() => {
  //   console.log(planetData);
  //   console.log(selectedInfoState);
  // }, [planetData]);

  return (
    <>
      <div className="planets">
        {screenSize === "mobile" ? (
          <Menu
            selectedInfo={selectedInfo}
            planetColor={planetData.color}
            paramsIndex={index}
          />
        ) : null}

        <img
          className="planets__img"
          src={
            !selectedInfoState.imgSrc
              ? planetData.images.planet
              : selectedInfoState.imgSrc
          }
        ></img>
        <div className="planets__container">
          <div className="planets__text-container">
            <h1 className="planets__name">{planetData.name}</h1>
            {!selectedInfoState.text ? (
              <p className="planets__geology">{planetData.geology.content}</p>
            ) : (
              selectedInfoState.text
            )}
            <p className="planets__link">
              Source:
              <a
                href="https://en.wikipedia.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Wikipedia
              </a>
            </p>
          </div>
          {screenSize === "tablet" || screenSize === "desktop" ? (
            <Menu
              selectedInfo={selectedInfo}
              planetColor={planetData.color}
              paramsIndex={index}
            />
          ) : null}
        </div>
      </div>
    </>
  );
}
