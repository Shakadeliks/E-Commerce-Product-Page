import React from 'react'
import { AddBtn, 
    AddToCartContainer, 
    AmountAdded, 
    CartFeaturesContainer, 
    CartIcon, 
    Discount, 
    InfoContainer, 
    Mainheading, 
    MinusSign, 
    OriginalPrice, 
    PlusSign, 
    Price, 
    PricingContainer, 
    ProductDesc,
    SmallHeading } from './ProductInfo.styles'



const ProductInfo = ({ addProduct, qtyToCart, addQtyToCart, minusQtyToCart, product }) => {
    return (
        <InfoContainer>
            <SmallHeading>
                SNEAKER COMPANY
            </SmallHeading>
            <Mainheading>
                Fall Limited Edition Sneakers
            </Mainheading>
            <ProductDesc>
                These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.
            </ProductDesc>
            <PricingContainer>

                <Price>
                    $125.00
                </Price>
                <Discount>
                    50%
                </Discount>
                <OriginalPrice>
                    <s>
                        $250.00
                    </s>    
                </OriginalPrice>
            </PricingContainer>

            <CartFeaturesContainer>
                <AddToCartContainer>
                    <MinusSign onClick={minusQtyToCart}/>
                    <AmountAdded>
                        {qtyToCart}    
                    </AmountAdded>
                    <PlusSign onClick={addQtyToCart}/>
                </AddToCartContainer>

                <AddBtn onClick={() => addProduct(product)}>
                    <CartIcon />    
                    Add to cart
                </AddBtn>
            </CartFeaturesContainer>
            
        </InfoContainer>
    )
}

export default ProductInfo
