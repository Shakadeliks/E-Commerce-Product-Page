import React, { useState } from 'react';
import Hamburger from '../../images/icon-menu.svg';
import Logo from "../../images/logo.svg";
import Basket from "../../images/icon-cart.svg";
import Avatar from "../../images/image-avatar.png"
import Close from "../../images/icon-close.svg"
import { Nav, 
    NavbarContainer, 
    MobileHamIcon, 
    LogoIcon, 
    BasketIcon, 
    AvatarIcon, 
    NavMenu, 
    NavItem, 
    CloseIcon,
    NavMenuBackgroundOverlay } from "./Navbar.styles";

const Navbar = ({ handleShowCart, showCart }) => {
    // state and function to enable toggle between mobile nav open an close
    const [isNavOpen, setisNavOpen] = useState(false);

    const navMenuToggle = () => {
        setisNavOpen(!isNavOpen);  
    }

    

    return (
        <>
            <Nav>
                <NavbarContainer>

                    <MobileHamIcon src={Hamburger} alt="Menu Icon" onClick={navMenuToggle} isNavOpen={isNavOpen}/>
                    <LogoIcon src={Logo} alt="Sneakers Logo" />
                    <BasketIcon src={Basket} alt="Basket" onClick={handleShowCart} showCart={showCart}/>
                    <AvatarIcon src={Avatar} alt="Avatar" />
                    <NavMenuBackgroundOverlay isNavOpen={isNavOpen}/>
                    <NavMenu isNavOpen={isNavOpen}>
                        <CloseIcon src={Close} alt="Exit menu" onClick={navMenuToggle} isNavOpen={isNavOpen}/>
                        <NavItem>Collections</NavItem>
                        <NavItem>Men</NavItem>
                        <NavItem>Women</NavItem>
                        <NavItem>About</NavItem>
                        <NavItem>Contact</NavItem>
                    </NavMenu>
                    
                </NavbarContainer>
            </Nav>
        </>
    );
}

export default Navbar
