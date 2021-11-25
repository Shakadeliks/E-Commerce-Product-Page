import styled from "styled-components";

export const MainContentContainer = styled.div`
   @media screen and (min-width: 900px) {
       display: flex;
       justify-content: space-between;
       
        max-width: 70rem;
   }

   @media screen and (min-width: 1150px) {
       margin: 0 auto;
   }

   @media screen and (min-width: 1250px) {
        max-width: 80rem;
        margin: 0 auto;
   }

   @media screen and (min-width: 1350px) {
        max-width: 85rem;
        margin: 0 auto;
   }
`