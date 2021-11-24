import styled, { css } from "styled-components";
import SVG from "react-inlinesvg";

export const SliderContainer = styled.div`
    @media screen and (min-width: 900px) {
    
        margin-left: 6rem;
        padding-top: 4.6rem;
        padding-left: 3.063rem;
        padding-right: 0;
        display: inline-flex;
        flex-direction: column;
        

    }

    @media screen and (min-width: 1000px) {
        /* padding: 0 10rem; */
        padding-top: 4.6rem;
        /*padding-left: 3.063rem; */
        padding-left: 5%;
    }
`

export const Slider = styled.div`

    position: relative;
    
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 23.470rem;

    @media screen and (min-width: 370px) {
        margin: 0 auto;
        
    }

    @media screen and (min-width: 900px) {
        
        border-radius: 1rem;
        overflow: hidden;
        /* max-width: 100%; */
        height: 26rem;
        
    }
`

export const Slide = styled.div`
    @media screen and (min-width: 900px) {
        border-radius: 1rem;
        overflow: hidden;
    }
`

export const Image = styled.img`
    width: 375px;
    height: 315px;

    @media screen and (min-width: 900px) {
        width: 25rem;
        height: 26rem;
    }
    
`

export const LeftArrowIcon = styled.img`
    position: absolute;
    top: 50%;
    left: 1rem;
    background: white;
    border-radius: 1.5rem;
    padding: 0.6rem;
    cursor: pointer;
    /* z-index: 10; */
    user-select: none;

    @media screen and (min-width: 900px) {
        display: none;
    }
`

export const RightArrowIcon = styled.img`
    position: absolute;
    top: 50%;
    right: 1rem;
    background: white;
    border-radius: 1.5rem;
    padding: 0.6rem;
    cursor: pointer;
    z-index: 10;
    user-select: none;

    @media screen and (min-width: 900px) {
        display: none;
    }
`

export const ThumbnailsContainer = styled.div`
    
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    width: 23.125rem;
    padding-top: 1.2rem;
    

`

export const Thumbnail = styled.div`

    width: 5rem;
    cursor: pointer;
    position: relative;
    overflow: hidden;

    &::after {
        content: '';
        display:  ${({index, currentImageIndex}) => currentImageIndex === index ? "inline" : "none"};
        width: 100%;
        height: 100%;
        background-color: rgba(255, 255, 255, 0.65);
        position: absolute;
        top: 0;
        left: 0; 
    }

    img {
        width: 100%;
        border-radius: 1rem;

        ${ ({ index, currentImageIndex }) => currentImageIndex === index 
        ? css`
            border: solid 2px ${({ theme }) => theme.colors.orange};`
        : css`
            null`}
    }

    
`