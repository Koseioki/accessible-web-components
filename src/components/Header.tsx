import { NavLink } from "react-router";
import './Header.css';
export function Header() {
  return (
    <header>
      <NavLink to="/">
        Accessible Web Components
      </NavLink>
      <nav>
        <ul>
          <li>
            <NavLink to="#components">Components</NavLink>
          </li>
          <li>
            <NavLink to="/">About</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}