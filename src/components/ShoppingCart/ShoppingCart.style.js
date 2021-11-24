import styled from "styled-components";
import { RiDeleteBin5Fill } from "react-icons/ri"

export const Basket = styled.div`
    background-color: white;
    z-index: 98;
    position: absolute;
    width: 22rem;
    min-height: 16rem;
    /* width: 50%; */
    /* margin: 0 auto; */
    top: 5.5%;
    right: 3%;
    border-radius: 0.5rem;
    filter: drop-shadow(0 1.1rem 0.8rem rgba(0, 0, 0, 0.3 ));
    display: ${ ({ showCart }) => showCart ? "block" : "none"};

    @media screen and (min-width: 900px) {
        top: 7%;
    }

    heading {
        height: 4rem;
        padding: 1.438rem 1.5rem;
        display: block;
        border-bottom: solid 1px ${({ theme }) => theme.colors.lightGrayishBlue};

        h3 {
            font-weight: 700;
            font-size: 1rem;
        }

        
    }

    div {
            height: 12rem;
    }
`

export const EmptyCart = styled.div`
    color: ${ ({ theme }) => theme.colors.darkGrayishBlue};
    
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
    
`

export const CartItemContainer = styled.div`

`

export const CartProductImg = styled.img`

`
export const NameAndPriceContainer = styled.div`

`
export const DeleteItemIcon = styled(RiDeleteBin5Fill)`
    color: ${({ theme }) => theme.colors.orange};
`

