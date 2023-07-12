import './dropdownMenu.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const DropdownMenu = (props:{active:boolean}) => {
  return(
    <div className={`dropdown-menu-container ${props.active? 'active' : 'inactive'}`}>
      <div className='dropdown-menu'>
        <ul>
          <li>
            <NavLink to="/signout" className="nav-links" >
              <FontAwesomeIcon icon={faRightFromBracket} className="icon" />
              Sign Out
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  )
}
export default DropdownMenu