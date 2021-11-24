import styled, { css } from "styled-components";
import SVG from "react-inlinesvg";


export const BackgroundOverlay = styled.div`
    ${({ openModalLightbox}) => openModalLightbox
    ? css`
        display: block;`
    : css`
        display: none;`}
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.75);

`

export const Slider = styled.div`
    ${({ openModalLightbox}) => openModalLightbox
    ? css`
        display: block;`
    : css`
        display: none;`}
    position: absolute;
    width: 29rem;
    border-radius: 1rem;
    height: 25rem;
    right: 50%;
    top: 9rem;
    transform: translateX(50%);
`

export const Slide = styled.div`

    border-radius: 1rem;
    overflow: hidden;
    
`

export const Image = styled.img`

    width: 29rem;
    height: 25rem;

    
`


export const ThumbnailsContainer = styled.div`

    ${({ openModalLightbox}) => openModalLightbox
    ? css`
        display: flex;`
    : css`
        display: none;`}
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    width: 23.125rem;
    padding-top: 1.2rem;
    overflow: hidden;
    position: absolute;
    left: 50%;
    transform: translate(-50%, 390%);
    transition: all ease 0.3s;
`

export const Thumbnail = styled.div`

    width: 5rem;
    height: 5rem;
    cursor: pointer;
    position: relative; 
    overflow: hidden !important;
    z-index: 98;
    

    &::after {
        content: '';
        display:  ${({index, currentImageIndex}) => currentImageIndex === index ? "inline" : "none"};
        width: 100%;
        height: 100%;
        background-color: rgba(255, 255, 255, 0.65);
        position: absolute;
        top: 0;
        left: 0;
        border-radius: 1rem;
        z-index: 97;
        
    }

    &:hover {
        ::after {
        
            content: '';
            display:  block;
            width: 100%;
            /* height: 100%; */
            background-color: rgba(255, 255, 255, 0.45);
            position: absolute;
            top: 0;
            left: 0;
            border-radius: 1rem;
            z-index: 97;
               
        }
    }

    img {
        width: 100%;
        border-radius: 1rem;
        overflow: hidden ;
        ${ ({ index, currentImageIndex }) => currentImageIndex === index 
        ? css`
            border: solid 2px ${({ theme }) => theme.colors.orange};`
        : css`
            null`}
            
    }

    
`

export const LeftArrowIcon = styled.svg`
    position: absolute;
    top: 50%;
    left: -1rem;
    cursor: pointer;
    background: white;
    border-radius: 2rem;


    path {
        transition: all ease 0.3s;
    }
   
    &:hover {

        path {
            stroke: ${ ({ theme }) => theme.colors.orange};
        }
    }
    
`

export const RightArrowIcon = styled.svg`

    position: absolute;
    top: 50%;
    cursor: pointer;
    background: white;
    border-radius: 2rem;
    right: -1rem;

    path {
        transition: all ease 0.3s;
    }

    &:hover {

    path {
        stroke: ${ ({ theme }) => theme.colors.orange};
    }
}
`

export const LightBoxCloseBtn = styled.svg`
    position: absolute;
    display: block;
    top: -8%;
    right: 0%;
    cursor: pointer;

    & path {
        transition: all ease 0.3s;
    }
    
    &:hover {
        path {
            fill: ${({ theme }) => theme.colors.orange}
        }
    }
`

