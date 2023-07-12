import "./header.css";
import { NavLink } from "react-router-dom";
import DropdownMenu from "../dropdownMenu/DropdownMenu";
import { useState} from "react"

const Header = () => {

  const [openMenu, setOpenMenu] = useState(false)

  return (
    <div className="header-container">
      <section className="logo-container">
        <NavLink to="/" className="nav-links"><img
          src="https://avatars3.githubusercontent.com/u/37439169?s=200&v=4"
          alt="StartDeliver Logo"
        />
        </NavLink>
        <p className="logo-text">DEV APP</p>
      </section>
      <section className="link-container">
        <NavLink to="/" className="nav-links">HOME</NavLink>
        <NavLink to="/customers" className="nav-links">CUSTOMERS</NavLink>
      </section>
      <section className="profile-container" onClick={()=>(setOpenMenu(!openMenu))}>
        <article>
          <img
            src="https://files.startdeliver.com/accid-aa909493a6679e232a361e2a501179b4/611d57c1d8af8f2671ed9c25fb38331b"
            alt="avatar"
          />
        </article>
        <article>
          <p id="username-text">
            <b>Robert Lockett</b>
          </p>
          <p id="role-text">Startdeliver developer:)</p>
        </article>
        <DropdownMenu active={openMenu}/>
      </section>
    </div>
  );
};
export default Header;
