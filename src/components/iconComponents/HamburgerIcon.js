import React from 'react';
import HamburgerIcon from "..../images/icon-menu.svg";
import { Colors } from ".../designsComponents";

export const StyledHamburgerIcon = styled(HamburgerIcon)`
    height: ${ ({ height }) => height};

    width: ${ ({ width }) => width};

    &:hover path {
        fill: ${({ hoverColor}) => hoverColor}
    }

    @media screen and (min-width: 900px) {
        display: none;
    }
        
`

function Hamburger() {
    
    return (
        <StyledHamburgerIcon hoverColor="${Colors.Orange}" height="16" width="16" />
    )
}

export default Hamburger;

