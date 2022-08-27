import styled from 'styled-components';
import media from "styled-media-query";
import Image from "next/image";

export const Container = styled.div`
  &&{
      width: 217px;
      height: 285px;
      display: flex;
      flex-direction: column;
      align-items: center;
      background: var(--background);
      margin: 0.6rem 0.8rem;
      padding-top: 1rem;
      border-radius: 8px;
      box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);

      ${media.lessThan("medium")`
         /* padding: 25px 20px; */
      `};

  }

`;

export const ImageStyled = styled(Image)`
  &&{
      object-fit: contain;
      margin-bottom: 5px;

  
  }

`;

export const ContentInfo = styled.div`
  &&{
      width: 100%;
      height: 104px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 0 10px 2px 10px;

      .description{
        font-size: 10px;
        font-weight: normal;
        font-family: 'Montserrat';
        color: var(--black);
        margin-bottom: 0.8rem;
      }

      ${media.lessThan("medium")`
         /* padding: 25px 20px; */
      `};

  }

`;

export const ContentRow = styled.div`
  &&{
      width: 100%;
      height: 40px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-start;
      /* padding: 10px; */

      p{
        font-size: 16px;
        font-weight: normal;
        font-family: 'Montserrat';
        color: var(--black);
      }
      
      span{
        width: auto;
        height: 26px;
        display: flex;
        align-items: center;
        background: var(--gray-dark);
        border-radius: 5px;
        padding: 5px;
        
        p{
          font-size: 15px;
          font-weight: 700;
          font-family: 'Montserrat';
          color: var(--white);
        }

      }

      ${media.lessThan("medium")`
         /* padding: 25px 20px; */
      `};

  }

`;


export const ButtonStyled = styled.button`
  &&{
      width: 100%;
      height: 31px;
      cursor: pointer;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      background: var(--primary);
      border-bottom-right-radius: 8px;
      border-bottom-left-radius: 8px;
      
      svg{
        width: 13px;
        height: 13px;
        color: var(--white);
      }
      p{
        font-size: 14px;
        color: var(--white);
        margin: 0 0.5rem;
      }

      ${media.lessThan("medium")`
         /* padding: 25px 20px; */
      `};

  }

`;

