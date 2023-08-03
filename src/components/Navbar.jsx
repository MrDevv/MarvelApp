import { NavLink, Link} from "react-router-dom";
import { hideContainerLinks, showContainerLinks } from "../utils/helpers/toggleMenu";

export const Navbar = () => {

  return (
    <div className="container-navbar">
      <div onClick={showContainerLinks} id="toogle-menu" className="toggle-menu">
        <img src="assets/menu.svg" alt="" />
      </div>
      <div className="container-title">
        <Link className="title-navbar">MARVELAPP</Link>   
      </div>
      <div onClick={hideContainerLinks} id="shadow-box"></div>
      <div id="container-links" className="container-links">
        <NavLink
          onClick={hideContainerLinks}
          id="link_personajes"
          className={({ isActive }) => `link  ${isActive ? "active" : ""}`}
          to={"/"}
        >
          Personajes
        </NavLink>
        <NavLink
          onClick={hideContainerLinks}
          id="link_comics"
          className={({ isActive }) => `link  ${isActive ? "active" : ""}`}
          to={"/series"}
        >
          comics
        </NavLink>
      </div>
    </div>
  );
};
