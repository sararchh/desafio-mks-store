import styled, {keyframes} from 'styled-components';
import media from "styled-media-query";
import Image from "next/image";


const animMenu = keyframes`
  0% { width: 0 }
  /* 40% { width: 40% }
  70% { width: 70% } */
  100% { width: 486px }
`;

export const Container = styled.div`
  &&{
      width: 486px;
      max-width: 486px;
      height: 100vh;
      position: absolute;
      z-index: 9;
      right: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      background: var(--primary);
      animation: ${animMenu} 0.3s ease-in-out;
      box-shadow: -5px 0px 6px rgba(0, 0, 0, 0.13);
      overflow-y: hidden;
      overflow-x: hidden;

      ${media.lessThan("medium")`
        width: 90vw;
        max-width: 90vw;
      `};

  }

`;


export const ContentHeader = styled.div`
  &&{
      width: 100%;
      height: 150px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      padding: 0 3rem;

      p{
        width: 200px;
        font-size: 27px;
        font-weight: 700;
        font-family: 'Montserrat';
        color: var(--white);
      }
      button{
        width: 38px;
        height: 38px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        background: var(--black);
        border-radius: 25em;


        svg{
          width: 20px;
          height: 20px;
          color: var(--white);
        }

      }

      ${media.lessThan("medium")`
         /* padding: 25px 20px; */
      `};

  }

`;



export const ContentList = styled.div`
  &&{
      width: auto;
      height: auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      padding: 0 3rem;
      padding-bottom: 200px;
      overflow-y: scroll;
      overflow-x: hidden;

      ::-webkit-scrollbar{
        display: none;
      }

      .empty-cart{
        font-size: 14px;
        font-family: "montserrat";
        color: var(--white);
        
      }

     
      ${media.lessThan("medium")`
         /* padding: 25px 20px; */
      `};

  }

`;


export const ContentFooter = styled.div`
  &&{
      width: 100%;
      height: 170px;
      display: flex;
      position: absolute;
      bottom: 0;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      background: var(--primary);

      button{
        width: 100%;
        height: 80px;
        background: var(--black);
        color: var(--white);
        font-size: 28px;
        font-weight: 700;
        font-family: 'Montserrat';

      }

     
      ${media.lessThan("medium")`
         /* padding: 25px 20px; */
      `};

  }

`;

export const ContentSubTotal = styled.div`
  &&{
      width: 100%;
      height: 80px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      padding: 0 3rem;

      p{
        font-size: 28px;
        font-weight: 700;
        font-family: 'Montserrat';
        color: var(--white);
      }
     
     
      ${media.lessThan("medium")`
         /* padding: 25px 20px; */
      `};

  }

`;


