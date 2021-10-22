import styled from 'styled-components';
import { Colors } from './designsComponents';

export const Nav = styled.nav`

    height: 4rem;
    z-index: 10;

    @media screen and (min-width: 900px) {
        height: 7rem;
        padding: 0 10rem;
    }
    
`

export const NavbarContainer = styled.div`
    background: red;
    display: flex;
    justify-content: space-between;
    height: 100%;
    padding: 1.375rem;
    align-items: center;

    @media screen and (min-width: 900px) {
        border-bottom: solid 0.050rem ${Colors.DarkGrayishBlue};
        max-width: 70rem;
    }
`

export const MobileHamIcon = styled.div`
    cursor: pointer;
`