import React from 'react';

import {
  Navbar,
  NavbarBrand,
  NavbarText,
  NavLink,
  Button
} from 'reactstrap';
import { Link } from 'react-router-dom';

function MyNavBar(args) {
  return (
    <div>
      <Navbar {...args} color="info">
        <NavbarBrand>
          <Link style={{ color: 'yellow', textDecoration: 'none' }} to="/">

            Find

          </Link>
        </NavbarBrand>

        <Link style={{ color: 'yellow', textDecoration: 'none' }} to="/liked">LIKED</Link>

        <Link style={{ color: 'yellow', textDecoration: 'none' }} to="/all">ALL CHARACTERS</Link>

        <NavbarText>RICK & MORTY</NavbarText>
      </Navbar>
    </div>
  );
}

export default MyNavBar;
