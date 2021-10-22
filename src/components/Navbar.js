import React from 'react';
import cartIcon from './iconComponents/cartIcon.js';
// import { ReactComponent as Hamburger } from '../images/icon-menu.svg';
import { ReactComponent as Logo } from "../images/logo.svg"
import { ReactComponent as Cart } from "../images/icon-cart.svg"
import avatar from "../images/image-avatar.png"
import { Nav, NavbarContainer } from './NavbarElements';
import styled from 'styled-components';
import Hamburger from './iconComponents/HamburgerIcon.js';




const Navbar = () => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    {/* <Hamburger className="icon hamburger"/> */}
                    <Hamburger />
                    <Logo className="icon logo"/>
                    <Cart className="icon cart"/>
                    <img src={ avatar } alt="Sneakers Logo" className="icon avatar"/>

                    {/* <NavMenu>
                        <NavItem>Collections</NavItem>
                        <NavItem>Men</NavItem>
                        <NavItem>Women</NavItem>
                        <NavItem>About</NavItem>
                        <NavItem>Contact</NavItem>
                    </NavMenu> */}
                </NavbarContainer>
            </Nav>
        </>
    );
}

export default Navbar
