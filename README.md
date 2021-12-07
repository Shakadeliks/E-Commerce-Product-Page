# E-commerce product page 

## Table of contents

- [Overview](#overview)
  - [Objectives](#objectives)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

### Objectives

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Open a lightbox gallery by clicking on the large product image
- Switch the large product image by clicking on the small thumbnail images
- Add items to the cart
- View the cart and remove items from it

### Screenshot

![./E-commerce-page-screenshot.png]

### Links

- Solution URL: [https://github.com/Shakadeliks/E-Commerce-Product-Page]

- Live Site URL: [https://shakadeliks.github.io/E-Commerce-Product-Page/]

### Built with

- ReactJS
- Styled Components
- CSS media queries
- React Icons
- Mobile-first workflow

### What I learned

Something major I learnt was creating a responive lightbox and carousel without custom dependencies and packages for react.

```js
const Lightbox = ({ productImg, thumbnails }) => {

    const [width] = useWindowSize();
    // state used as a counter for productImg array of product images
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

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

}
```

I got experience using Styled components which turned out to be very intuitive and complemented my workflow.

```js

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
}
