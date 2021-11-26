import styled from "styled-components";
import { RiDeleteBin5Fill } from "react-icons/ri"

export const Basket = styled.div`
    background-color: white;
    z-index: 98;
    position: absolute;
    width: 22rem;
    top: 5.5%;
    right: 3%;
    border-radius: 0.5rem;
    filter: drop-shadow(0 1.1rem 0.8rem rgba(0, 0, 0, 0.3 ));
    display: ${ ({ showCart }) => showCart ? "block" : "none"};

    @media screen and (min-width: 900px) {
        top: 12%;
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
    display: inline-flex;
    padding: 1.2rem 1.2rem;
    height: fit-content;

`

export const CartProductImg = styled.img`
    height: 50px;
    width: 50px;
    border-radius: 0.3rem;
`
export const NameAndPriceContainer = styled.div`
    height: fit-content;
    display: flex;
    flex-direction: column;
    padding: 0 1rem;
`

export const PricesContainer = styled.div`
    margin-top: 0.5rem;
`
export const Name = styled.span`
    color: ${({ theme }) => theme.colors.darkGrayishBlue};
`

export const Price = styled.span`

    color: ${({ theme }) => theme.colors.darkGrayishBlue};
    margin-right: 0.3rem;
`

export const CombinedPrice = styled.span`
    font-weight: 700;
`

export const CheckoutBtn = styled.button`
    text-decoration: none;
    border: none;
    width: 80%; 
    display: block;
    height: 3rem;
    background-color: ${({ theme }) => theme.colors.orange};
    color: white;
    font-weight: 700;
    align-items: center;
    border-radius: 0.6rem;
    cursor: pointer;
    margin: 1.2rem auto;
    transition: opacity 0.3s;
    &:hover {
        opacity: 0.5;
    }
`

export const DeleteItemIcon = styled(RiDeleteBin5Fill)`
    color: ${({ theme }) => theme.colors.darkGrayishBlue};
    cursor: pointer;
    transition: all 0.3s;
    position: relative;
    top: 0.9rem;

    &:hover {
        color: ${({ theme }) => theme.colors.orange};;
    }


`

