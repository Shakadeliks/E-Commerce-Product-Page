import React, { useState, useEffect } from 'react';
import { SliderContainer, 
    Slider, 
    Slide, 
    LeftArrowIcon, 
    RightArrowIcon, 
    Image, 
    ThumbnailsContainer, 
    Thumbnail } from './Lightbox.styles';
import LeftArrow from "../../images/icon-previous.svg";
import RightArrow from "../../images/icon-next.svg"
import ModalLightbox from '../ModalLightBox/Index';

// function to keep track of changes in window's width to add responsive functionality to lightbox Slider components, using size state as conditional statement for conitional rendering

const useWindowSize = () => {
    const [size, setSize] = useState([window.innerWidth]);
  
    useEffect(() => {
      const handleResize = () => {
        setSize([window.innerWidth]);
      }
  
      window.addEventListener("resize",handleResize);
    }, []);

    return size
}

const Lightbox = ({ productImg, thumbnails }) => {

    const [width] = useWindowSize();
    // state used as a counter for productImg array of product images
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // state to toggle open and close for desktop lightbox
    const [openModalLightbox, setOpenModalLightbox] = useState(false);

    const modalLightboxToggle = () => {
        setOpenModalLightbox(!openModalLightbox);
        
    }

    // function to start at 0 index in images array when displaying and resetting to 0 after final image

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => prevIndex === productImg.length - 1 ? 0 : prevIndex + 1);
    }

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) => prevIndex === 0 ? productImg.length - 1 : prevIndex - 1);
    }
    
    return (
        <SliderContainer>

            {width >= 900 ? 
                <Slider onClick={modalLightboxToggle} style={{ cursor: "pointer" }}>

                    <Slide>
                        <Image src={productImg[currentImageIndex]}  />
                    </Slide>
                    <LeftArrowIcon src={LeftArrow} alt="Previous Arrow" onClick={prevImage}/>
                    <RightArrowIcon src={RightArrow} alt="Next Arrow" onClick={nextImage}/>
                
                </Slider> :
                <Slider>

                    <Slide>
                        <Image src={productImg[currentImageIndex]}  />
                    </Slide>
                    <LeftArrowIcon src={LeftArrow} alt="Previous Arrow" onClick={prevImage}/>
                    <RightArrowIcon src={RightArrow} alt="Next Arrow" onClick={nextImage}/>
                
                </Slider>}
            
            { width >= 900 ?
                <ThumbnailsContainer>
                    {thumbnails.map( (image, index) => (
                        <Thumbnail key={index}  onClick={ () => { setCurrentImageIndex(index)}} index={index} currentImageIndex={currentImageIndex}>
                            <img src={image} alt="Shoe Image" />
                        </Thumbnail>
                    ))}
                </ThumbnailsContainer> :
                null}
            
            <ModalLightbox 
            openModalLightbox={openModalLightbox}
            modalLightboxToggle={modalLightboxToggle} 
            productImg={productImg} 
            currentImageIndex={currentImageIndex} 
            setCurrentImageIndex={setCurrentImageIndex} 
            thumbnails={thumbnails}
            nextImage={nextImage}
            prevImage={prevImage} 
            />
        </SliderContainer>
    )
}

export default Lightbox;
