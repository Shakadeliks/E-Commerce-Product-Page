import React from 'react';
import { BackgroundOverlay, 
    ThumbnailsContainer, 
    Thumbnail, 
    LeftArrowIcon, 
    RightArrowIcon, 
    Slider, 
    Slide, 
    Image, 
    LightBoxCloseBtn } from './ModalLightbox.style';
import LeftArrow from "../../images/icon-previous.svg"
import RightArrow from "../../images/icon-next.svg"


const ModalLightbox = ({ productImg, currentImageIndex, thumbnails, setCurrentImageIndex, modalLightboxToggle, nextImage, prevImage, openModalLightbox }) => {
    return (
        <>
            <BackgroundOverlay openModalLightbox={openModalLightbox}/>
            
            <Slider openModalLightbox={openModalLightbox}>

                <Slide>
                    <Image src={productImg[currentImageIndex]}  />
                </Slide>

                <LeftArrowIcon width="45" height="40" viewBox="-3 0 25 18" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 1 3 9l8 8" stroke="#1D2026" strokeWidth="3" fill="none" fillRule="evenodd"/>
                </LeftArrowIcon>
                <RightArrowIcon width="45" height="40" xmlns="http://www.w3.org/2000/svg" viewBox="3 0 11 20">
                    <path d="m2 1 8 8-8 8" stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd"/>
                </RightArrowIcon>
                <LightBoxCloseBtn width="20" height="20" xmlns="http://www.w3.org/2000/svg" onClick={modalLightboxToggle}>
                    <path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="white" fill-rule="evenodd"/>
                </LightBoxCloseBtn>
                

            </Slider>
            <ThumbnailsContainer>
                {thumbnails.map( (image, index) => (
                    <Thumbnail key={index}  onClick={ () => { setCurrentImageIndex(index)}} index={index} currentImageIndex={currentImageIndex}>
                        <img src={image} alt="Shoe Image" />
                    </Thumbnail>
                ))}
            </ThumbnailsContainer>
            
        </>
    )
}

export default ModalLightbox
