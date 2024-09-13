import Menu from "../components/Menu/Menu";
import { useParams } from "react-router-dom";
import planetsData from "../data/data.js";
import { useEffect, useState, useTransition } from "react";
import PlanetsInfo from "../components/PlanetsInfo/PlanetsInfo";
import "./PlanetsPage.scss";
import PlanetsMain from "../components/PlanetsMain/PlanetsMain";

export default function PlanetsPage() {
  let { index } = useParams();
  console.log(index);

  const [planetData, setPlanetData] = useState(planetsData[0][0]);
  const [infoArray, setInfoArray] = useState([]);
  const [selectedInfoState, setSelectedInfoState] = useState("");

  useEffect(() => {
    setPlanetData(planetsData[0][index] || planetsData[0][0]);
  }, [index]);

  useEffect(() => {
    // console.log(planetData);
    // console.log(index);
  }, [planetData]);

  // function to display the correct planet info in boxes
  //
  useEffect(() => {
    if (planetData) {
      const updatedInfoArray = planetsData[0].map((data) => ({
        name: data.name,
        revolution: data.revolution,
        radius: data.radius,
        temperature: data.temperature,
        rotation: data.rotation,
      }));
      setInfoArray(updatedInfoArray);
    }
  }, [planetData, index]);

  // function to display correct information based on user selected info tab
  const selectedInfo = (index) => {
    if (index === 1) {
      setSelectedInfoState({
        text: (
          <p className="planets__structure">{planetData.structure.content}</p>
        ),
        imgSrc: planetData.images.internal,
      });
      return index;
    } else if (index === 2) {
      setSelectedInfoState({
        text: (
          <p className="planets__overview">{planetData.overview.content}</p>
        ),
        imgSrc: planetData.images.geology,
      });
      return index;
    } else {
      setSelectedInfoState({
        text: <p className="planets__geology">{planetData.geology.content}</p>,
        imgSrc: planetData.images.planet,
      });
      return index;
    }
  };

  // call the selectedinfo function whenever planet data is changed
  // if non of the indexes match the function the last else block runs
  // and updates the ui with the default info about a selected planet
  useEffect(() => {
    selectedInfo(0);
  }, [planetData]);

  return (
    <>
      <PlanetsMain
        planetData={planetData}
        selectedInfoState={selectedInfoState}
        selectedInfo={selectedInfo}
        planetColor={planetData.color}
        index={index}
      />
      {(() => {
        const filteredData = infoArray
          .filter((data) => {
            return data.name === planetData.name;
          })
          .map((data) => <PlanetsInfo data={data} />);

        return filteredData;
      })()}
    </>
  );
}
