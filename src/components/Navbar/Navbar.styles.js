import styled from 'styled-components';
import SVG from "react-inlinesvg";

export const Nav = styled.nav`

    height: 4rem;
    z-index: 10;

    @media screen and (min-width: 900px) {
        height: 7rem;
        padding: 0 6rem;
    } 
    
    @media screen and (min-width: 1000px) {
        height: 7rem;
        padding: 0 9%;
    } 
`

export const NavbarContainer = styled.div`
    background: white;
    display: flex;
    justify-content: space-between;
    height: 100%;
    padding: 1.375rem;
    align-items: center;

    @media screen and (min-width: 900px) {
        border-bottom: solid 0.050rem ${({ theme }) => theme.colors.grayishBlue};
        max-width: 70rem;
    }

    @media screen and (min-width: 1250px) {
        max-width: 80rem;
        
   } 

   @media screen and (min-width: 1350px) {
        max-width: 85rem;
        
   }
`



export const NavMenu = styled.ul`
    background: white;
    position: fixed;
    top: 0;
    left: ${({ isNavOpen }) => isNavOpen ? "0" : "-100%"};
    align-items: center;
    list-style: none;
    text-align: left;
    height: 100vh;
    width: 15rem;
    z-index: 99;
    font-weight: 700;
    padding: 1.6rem 1.25rem;
    transform: ${ ({ isNavOpen }) => isNavOpen ? 'translateX(0)' : 'translateX(-100%)'}; 
    transition: all 0.3s;

    @media screen and (min-width:900px) {
        z-index: auto;
        top: auto;
        left: auto;
        height: auto;
        width: auto;
        display: flex;
        flex-direction: row;
        transform: none;
        position: relative;
        order: 1;
        padding: 0;
        position: static;
        height: 100%;
        margin-bottom: -2.8rem;
    }

    @media screen and (min-width: 1200px) {
        position: relative;
        right: 5.4rem;
    }

`

export const NavItem = styled.li`
    padding-bottom: 1.875rem;
    cursor: pointer;
    transition: 0.3s;

    @media screen and (min-width: 900px) {
        padding: 0 0.5rem ;
        font-weight: 400;
        color: ${({ theme }) => theme.colors.darkGrayishBlue};
        height: 100%;

        &:hover {

        border-bottom: 3px solid ${ ({ theme }) => theme.colors.orange};
        color: black;

        }

    }
`

export const NavMenuBackgroundOverlay = styled.div`
    display: ${({ isNavOpen }) => isNavOpen ? "block" : "none"};
    z-index: 98;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.75);
    transition: all 0.3s ;
`

export const MobileHamIcon = styled.img`
   
    
    cursor: pointer;
    position: relative;
    top: 1.5px;
    @media screen and (min-width: 900px) {
        display: none;
    }
    
    
       
`

export const LogoIcon = styled.img`

    cursor: pointer;
    position: relative;
    right: 1.4rem;

    @media screen and (min-width: 900px) {
        order: 0;
    }
`;

export const BasketIcon = styled(SVG)`
    cursor: pointer;
    position: relative;
    left: 1.4rem;
    
    & path {
        fill: ${({ showCart }) => showCart && "black"}
    }

    &:hover {
        & path {
                fill: black; 
                transition: 0.3s all ease ;
        }
    }
        

    @media screen and (min-width: 900px) {
        order: 2;
    }

    @media screen and (min-width: 1200px) {
        position: relative;
        left: 5.4rem;
    }
`;

export const AvatarIcon = styled.img`

    width: 25px;
    height: 25px;
    cursor: pointer;
    

    &:hover {
        border: solid 2px ${({ theme }) => theme.colors.orange};
        border-radius: 50px;
        transition: border 0.3s ease-in-out;
    }

    @media screen and (min-width: 900px) {

        width: 45px;
        height: 45px;
        order: 2;
        position: relative;
        left: 1.3rem;

    }
`;

export const CloseIcon = styled.img`
    cursor: pointer;
    margin-bottom: 3.4rem;


    @media screen and (min-width: 900px) {
        display: none;
    }
`