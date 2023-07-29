import { NavLink, Link} from "react-router-dom";

export const Navbar = () => {

  return (
    <div className="container-navbar">
      <div className="title-links">
        <Link className="title-navbar">MARVELAPP</Link>
        <div className="container-links">
          <NavLink
            id="link_personajes"
            className={({ isActive }) => `link  ${isActive ? "active" : ""}`}
            to={"/"}
          >
            Personajes
          </NavLink>
          <NavLink
            id="link_comics"
            className={({ isActive }) => `link  ${isActive ? "active" : ""}`}
            to={"/series"}
          >
            comics
          </NavLink>
        </div>
      </div>
    </div>
  );
};
