import { NavLink } from "react-router";
import './Header.css';
export function Header() {
  return (
    <>
    <a href="#main-content" className="skip-link">Skip to main content</a>
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
            <NavLink to="#about">About</NavLink>
          </li>
        </ul>
      </nav>
    </header>
    </>
  );
}