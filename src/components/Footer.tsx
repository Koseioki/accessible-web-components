import { NavLink } from "react-router";
import "./Footer.css";

export function Footer() {
  return (
    <footer>
      <p>
        &copy; 2025 <NavLink to="/">Accessible Web Components</NavLink> - Created by Kosei
        Oki
      </p>
    </footer>
  );
}
