import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./header.css";
import { faBed, faCar, faPlane, faTaxi } from "@fortawesome/free-solid-svg-icons";

export const Header = () => {
  return (
    <div className="header">
      <div className="headerContainer">
        <div className="headerList">
          <div className="headerListItem">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>
          <div className="headerListItem Active">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faCar} />
            <span>Stays</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faBed} />
            <span>Attractions</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport taxis</span>
          </div>
        </div>
        <h1 className="headerTitle">
        A lifetime of discounts? It's Genius.</h1>
         <p className="headerDesc">
         Get rewarded for your travels - unlock instant 
         savings of 10% or more with a free Lamabooking account
         </p>
         <button className="headerBtn">Sign in / Register</button>
      </div>
    </div>
  );
};
