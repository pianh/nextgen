import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
function HeaderDefault() {

    return (
        <header className="header-wrapper">
            <div id="header-sticky" class="header__area header__transparent"></div>
        </header>
    );
}
export default HeaderDefault;
