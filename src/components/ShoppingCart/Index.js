import React from 'react'
import { Basket, CartItemContainer, EmptyCart, NameAndPriceContainer, CartProductImg, DeleteItemIcon } from './ShoppingCart.style';
import { product, productImg, thumbnails } from "../Data"


function ShoppingCart({ cartItems, removeProduct, showCart }) {
    return (
        <Basket showCart={showCart}>
            <heading>
                <h3>Cart</h3>
            </heading>
            
            { cartItems.length === 0 ? <EmptyCart>Your cart is empty.</EmptyCart>
                :<CartItemContainer>
                    <CartProductImg />
                    <NameAndPriceContainer>

                    </NameAndPriceContainer>
                    <DeleteItemIcon />
                </CartItemContainer>  }
        </Basket>
    )
}

export default ShoppingCart; 