import Menu from "../components/Menu/Menu";
import { useParams } from "react-router-dom";
import planetData from "../data/data.js";
export default function PlanetsPage() {
  const { index } = useParams();
  console.log(index);
  console.log(planetData[0][index].images.planet);

  return (
    <>
      <Menu />
      <img src={planetData[0][index].images.planet}></img>
    </>
  );
}
