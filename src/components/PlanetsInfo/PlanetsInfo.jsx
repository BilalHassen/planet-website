import "./PlanetsInfo.scss";

export default function PlanetsInfo({ data, index }) {
  console.log(data);

  return (
    <div className="planets__info-container">
      <div className="planets__rotation-box">
        <p className="planets__rotation-text">rotation time</p>
        <h3 className="planets__rotation">{data.rotation}</h3>
      </div>
      <div className="planets__revolution-box">
        <p className="planets__revolution-text">revolution time</p>
        <h3 className="planets__revolution">{data.revolution}</h3>
      </div>
      <div className="planets__radius-box">
        <p className="planets__radius-text">radius</p>
        <h3 className="planets__radius">{data.radius}</h3>
      </div>
      <div className="planets__temp-box">
        <p className="planets__temp-text">average temperature</p>
        <h3 className="planets__average-temp">{data.temperature}</h3>
      </div>
    </div>
  );
}
