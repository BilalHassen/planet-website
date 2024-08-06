import "./NavMenu.scss";
import arrow from "../../assets/images/icon-chevron.svg";

export default function NavMenu({ data }) {
  console.log(typeof data.color);
  return (
    <>
      <div className="nav__menu">
        <div className="nav__icon-name">
          <div
            className="nav__planet-icon"
            style={{
              backgroundColor: data.color, // Set the background color here
            }}
          ></div>
          <h2 className="nav__planet-name">{data.name}</h2>
        </div>
        <img className="nav__arrow-icon" src={arrow} alt="arrow"></img>
      </div>
    </>
  );
}
