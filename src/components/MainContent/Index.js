import React from 'react';
import { MainContentContainer } from './MainContent.styles';
import Lightbox from "../Lightbox/Index";
import ProductInfo from "../ProductInfo/Index";

//Made this component to allow the Lightbox and ProductInfo components to be flex items for responsiveness between mobile and desktop views

const MainContent = ({ productImg, thumbnails, addProduct, qtyToCart, addQtyToCart, minusQtyToCart, product}) => {
    return (
        <MainContentContainer>
            <Lightbox productImg={productImg} thumbnails={thumbnails}/>
            <ProductInfo 
            addProduct={addProduct} 
            qtyToCart={qtyToCart}
            addQtyToCart={addQtyToCart}
            minusQtyToCart={minusQtyToCart}
            product={product}
            />
        </MainContentContainer>
    )
}

export default MainContent
