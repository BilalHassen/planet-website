export default function PlanetsInfo({ data, index }) {
  console.log(data);

  return (
    <div className="planets__info-conatiner">
      <div className="planets__rotation-box">
        <p className="planets__rotation-text">rotation time</p>
        <h3 className="planet__roation">{data.rotation}</h3>
      </div>
      <div className="planets__revolution-box">
        <p className="planets__revolution-text">revolution time</p>
        <h3 className="planet__revolution">{data.revolution}</h3>
      </div>
      <div className="planets__revolution-radius">
        <p className="planets__radius-text">radius</p>
        <h3 className="planet__radius">{data.radius}</h3>
      </div>
      <div className="planets__average-temp">
        <p className="planets__average-temp-text">average temperature</p>
        <h3 className="planet__average-temp">{data.temperature}</h3>
      </div>
    </div>
  );
}
