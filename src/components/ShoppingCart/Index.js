import React from 'react'
import { Basket, 
        CartItemContainer, 
        EmptyCart, 
        NameAndPriceContainer, 
        CartProductImg,
        DeleteItemIcon,
        Name,
        Price,
        CombinedPrice,
        CheckoutBtn,
        PricesContainer } from './ShoppingCart.style';
import { product, 
    productImg, 
    thumbnails } from "../Data"


function ShoppingCart({ cartItems, removeProduct, showCart, thumbnails }) {
    return (
        <Basket showCart={showCart}>
            <heading>
                <h3>Cart</h3>
            </heading>
            
            {cartItems.length === 0 ? <EmptyCart>Your cart is empty.</EmptyCart>
                :cartItems.map( (item,index) => {
                    return <CartItemContainer key={index}>
                                <CartProductImg src={thumbnails[0]}/>
                                <NameAndPriceContainer>
                                    <Name>
                                        {item.name}
                                    </Name>
                                    <PricesContainer>
                                        <Price>
                                            ${item.price}.00 x {item.qty}
                                        </Price>
                                        <CombinedPrice>
                                            ${item.totalPrice}.00
                                        </CombinedPrice>
                                    </PricesContainer>
                                </NameAndPriceContainer>
                                <DeleteItemIcon onClick={removeProduct}/>
                                
                            </CartItemContainer> })}

            {cartItems.length === 0 ? null
                :<CheckoutBtn>Checkout</CheckoutBtn>
            }           
                
        </Basket>
    )
}

export default ShoppingCart; 