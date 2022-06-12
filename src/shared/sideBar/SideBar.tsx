import { NavLink } from "react-router-dom";
import * as FaIcons from "react-icons/fa";

const SideBar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <NavLink to="/" exact className="text-dark round py-3 w-100 d-inline-block px-4" activeClassName="active">
            <FaIcons.FaHome className="me-2" />
            Inicio
          </NavLink>
        </li>
        <li>
          <NavLink to="/permissions" exact className="text-dark round py-3 w-100 d-inline-block px-4" activeClassName="active">
            <FaIcons.FaLock className="me-2" />
            Permisos
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
