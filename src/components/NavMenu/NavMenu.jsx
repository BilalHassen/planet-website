import "./NavMenu.scss";

export default function NavMenu({ images }) {
  console.log(images.geology);
  return (
    <>
      <div className="nav__menu">
        <img
          className="nav__planet-icon"
          src={images.geology}
          alt="planet-icon"
        ></img>
      </div>
    </>
  );
}
