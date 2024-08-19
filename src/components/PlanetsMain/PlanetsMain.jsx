export default function PlanetsMain({ planetData, selectedInfoState }) {
  // console.log(selectedInfoState.text);
  return (
    <>
      <div className="planets">
        <img
          className="planets__img"
          src={
            !selectedInfoState.imgSrc
              ? planetData.images.planet
              : selectedInfoState.imgSrc
          }
        ></img>
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
    </>
  );
}
