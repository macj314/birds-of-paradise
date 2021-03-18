import React from 'react';
import { Navbar, NavbarBrand, Nav, NavbarText } from 'reactstrap';

const Header = () => {

  return (
    <div>
      <Navbar color="secondary" light expand="md">
        <NavbarBrand className="text-white" href="/">Birds of Paradise</NavbarBrand>
        <Nav className="mr-auto" navbar></Nav>
        <NavbarText className="text-white">End of Header</NavbarText>
      </Navbar>
    </div>
  );
}

export default Header;