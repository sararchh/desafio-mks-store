import styled from 'styled-components';
import media from "styled-media-query";

export const Container = styled.div`
  &&{
      width: 100vw;
      height: auto;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      background: var(--shape);

      ${media.lessThan("medium")`
         /* padding: 25px 20px; */
      `};

  }



`;
export const Footer = styled.div`
  &&{
      width: 100%;
      height: 34px;
      position: fixed;
      bottom: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background: var(--gray-300);

      p{
        font-size: 12px;
        font-family: 'Montserrat';
      }

      ${media.lessThan("medium")`
         /* padding: 25px 20px; */
      `};

  }

`;


