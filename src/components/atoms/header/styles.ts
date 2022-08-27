import styled from 'styled-components';
import media from "styled-media-query";

export const Container = styled.div`
  &&{
      width: 100%;
      height: 101px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      background: var(--primary);
      padding: 1rem 3rem;

      ${media.lessThan("medium")`
         /* padding: 25px 20px; */
      `};

  }

`;


export const ContentLeft = styled.div`
  &&{
      width: 40%;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;

      
      p{
        color: var(--white);
        font-size: 40px;
        font-weight: 600;
        font-family: 'Montserrat';
        
        span{
          font-size: 20px;
          font-weight: 300;

        }
      }
      /* ${media.lessThan("medium")`
        
      `}; */

  }

`;


export const ContentRight = styled.div`
  &&{
      width: 60%;
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      align-items: center;
      
      button{
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
        width: 90px;
        height: 45px;
        background: var(--background);
        border-radius: 8px;

        span{
          color: var(--black);
          font-weight: bold;
          font-size: 18px;
        }
      }

      svg{
        color: var(--black);
        width: 19px;
        height: 19px;
      }

      ${media.lessThan("medium")`
         /* padding: 25px 20px; */
      `};

  }

`;


