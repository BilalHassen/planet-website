import Menu from "../components/Menu/Menu";
import { useParams } from "react-router-dom";
export default function PlanetsPage() {
  const { name } = useParams();
  console.log(name);
  return (
    <>
      <Menu />
    </>
  );
}
