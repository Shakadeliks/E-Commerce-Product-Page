import styled from "styled-components";
import { GoPlus, GoDash } from "react-icons/go"
import { BsCart3 } from "react-icons/bs"

export const InfoContainer = styled.div`
    padding: 1rem 1rem;
    margin: 0 auto;

    @media screen and (min-width: 700px) {
        max-width: 43.75rem;
    }

    @media screen and (min-width: 900px) {
        margin-right: 6rem;
        display: inline;
        margin-top: 6.5rem;

    }


    @media screen and (min-width: 1054px) {
        padding-left: 5%;
        padding-right: 5%;
    }

    @media screen and (min-width: 1100px) {
        padding-left: 8%;
    }

`

export const SmallHeading = styled.h2`
    color: ${({ theme }) => theme.colors.orange};
    font-size: 0.80rem;
    margin-bottom: 0.65rem;
`

export const Mainheading = styled.h1`
    
    font-size: 2.3rem;
    margin-bottom: 0.80rem;

`

export const ProductDesc = styled.p`
    color: ${({ theme }) => theme.colors.darkGrayishBlue};
    font-size: 0.95rem;
    line-height: 150%;
    margin-bottom: 1rem;
`

export const PricingContainer = styled.div`
    display: flex;
    align-items: center;

    @media screen and (min-width: 900px) {
        flex-wrap: wrap;
    }
`

export const Price = styled.h1`
    font-size: 1.6rem;
    margin-right: 1rem;
`

export const Discount = styled.span`
    color: ${({ theme }) => theme.colors.orange};
    font-weight: 700;
    background-color: ${({ theme }) => theme.colors.paleOrange};
    padding: 2px;
    border-radius: 6px;
`

export const OriginalPrice = styled.span`
    font-weight: 700;
    color: ${({ theme }) => theme.colors.grayishBlue};
    margin-left: auto;

    @media screen and (min-width: 900px) {
        flex-basis: 100%;
        margin-top: 0.6rem;
    }

`

export const CartFeaturesContainer = styled.div`
    margin-top: 1.5rem;
`

export const AddToCartContainer = styled.div`

    background-color: ${({ theme }) => theme.colors.lightGrayishBlue};
    height: 3rem;
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem;
    margin-bottom: 1rem;
    max-width: 375px;
    margin-left: auto;
    margin-right: auto;
`

export const AmountAdded = styled.span`
    font-weight: 700;
`

export const PlusSign = styled(GoPlus)`
    cursor: pointer;
    color: ${({ theme }) => theme.colors.orange};
    font-size: 1.5rem;
    transition: opacity 0.3s;

    &:hover {
        opacity: 0.5;
    }
`

export const MinusSign = styled(GoDash)`
    cursor: pointer;
    color: ${({ theme }) => theme.colors.orange};
    font-size: 1.5rem;
    transition: opacity 0.3s;

    &:hover {
        opacity: 0.5;
    }
`

export const AddBtn = styled.button`
    text-decoration: none;
    border: none;
    width: 100%;
    height: 3rem;
    background-color: ${({ theme }) => theme.colors.orange};
    color: white;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.6rem;
    cursor: pointer;
    max-width: 375px;
    margin: 0 auto;
    transition: opacity 0.3s;
    &:hover {
        opacity: 0.5;
    }
`

export const CartIcon = styled(BsCart3)`
    & path {
        stroke-width: 0.5px;
    }

    margin-right: 0.8rem;
`