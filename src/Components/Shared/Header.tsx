import { Nav, NavLink } from "./Nav";

const Header = () => {
  return (
    <h1 className="sticky">
      <Nav>
        <NavLink to="/menu">Menu</NavLink>
        <NavLink to="/service">Service</NavLink>
        <NavLink to="/gallery">Gallery</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </Nav>
    </h1>
  );
};

export default Header;
