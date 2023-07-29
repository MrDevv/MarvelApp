import { NavLink, Link} from "react-router-dom";

export const Navbar = () => {



  const showContainerLinks = () => {
    const toggleMenuElement = document.getElementById('toggle-menu');
    const containerLinksElement = document.getElementById('container-links');

    containerLinksElement.classList.toggle('container-links--show')
  }

  return (
    <div className="container-navbar">
      <div onClick={showContainerLinks} id="toogle-menu" className="toggle-menu">
        <img src="assets/menu.svg" alt="" />
      </div>
      <div className="container-title">
        <Link className="title-navbar">MARVELAPP</Link>   
      </div>
      <div id="container-links" className="container-links">
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
  );
};
