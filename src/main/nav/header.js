import React from "react";
import Nav from "react-bootstrap/Nav";
import Logo from "../../images/esmetoLogo.png";

const Header = () => {
  return (
    <div className="mainHeader">
      <div className="logoDiv">
        <img className="logoImg" src={Logo} alt={Logo} />
      </div>
      <Nav className="navBar" activeKey="/">
        <div className="navItems">
          <div className="nav-Item">
            <a href="/">Home</a>
          </div>
          <div className="nav-Item">
            <a href="/about">About</a>
          </div>
          <div className="nav-Item">
            <a href="/contact">Contact Us</a>
          </div>
          {/* <Nav.Item className="nav-Item">
            <Nav.Link href="/">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item className="nav-Item">
            <Nav.Link href="/about">About</Nav.Link>
          </Nav.Item>
          <Nav.Item className="nav-Item">
            <Nav.Link href="/contact">Contact Us</Nav.Link>
          </Nav.Item> */}
        </div>
      </Nav>
    </div>
  );
};

export default Header;
