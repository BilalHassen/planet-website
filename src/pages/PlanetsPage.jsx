import Menu from "../components/Menu/Menu";
import { useParams } from "react-router-dom";
import planetsData from "../data/data.js";
import { useEffect, useState, useTransition } from "react";
import PlanetsInfo from "../components/PlanetsInfo/PlanetsInfo";

export default function PlanetsPage() {
  let { index } = useParams();
  console.log(index);

  const [planetData, setPlanetData] = useState(planetsData[0][0]);
  const [infoArray, setInfoArray] = useState([]);

  useEffect(() => {
    if (index === undefined) {
      setPlanetData(planetsData[0][0]);
    } else {
      setPlanetData(planetsData[0][index]);
    }
  }, [index]);

  useEffect(() => {
    console.log(planetData);
    console.log(index);
  }, []);

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
  }, [planetData]);

  return (
    <>
      <Menu />
      <div className="planets">
        <img className="planets__img" src={planetData.images.planet}></img>
        <h1 className="planets__name">{planetData.name}</h1>
        <p className="planet__geology">{planetData.geology.content}</p>
      </div>
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
