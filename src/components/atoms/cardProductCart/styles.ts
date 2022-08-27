import styled from 'styled-components';
import media from "styled-media-query";
import Image from "next/image";

export const Container = styled.div`
  &&{
      width: 379px;
      height: 95px;
      display: flex;
      flex-direction: column;
      align-items: center;
      background: var(--background);
      margin: 0.6rem 0.8rem;
      padding: 1rem 0;
      border-radius: 8px;
      box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);

      ${media.lessThan("medium")`
         width: 329px;
      `};

  }

`;


export const ContentButtonRemove = styled.div`
  &&{
    width: 379px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    position: relative;
    margin-top: -15px;
    .x-close{
      /* position: absolute;
      top: 0;
      right: 0; */
      width: 18px;
      height: 18px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      background: var(--black);
      border-radius: 25em;
      margin-top: -8px;
      margin-right: -5px;

        svg{
          width: 13px;
          height: 13px;
          color: var(--white);
        }

      }


      ${media.lessThan("medium")`
         width: 329px;
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
      flex-direction: row;
      justify-content: space-between;
      padding: 0 10px 2px 10px;

      ${media.lessThan("medium")`
         /* padding: 25px 20px; */
      `};

  }

`;

export const ContentRow = styled.div`
  &&{
      width: 100%;
      height: 60px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      padding: 0 10px;

      .title{
        width: 115px;
        font-size: 12px;
        font-weight: 400;
        font-family: 'Montserrat';
        color: var(--black);
      }
      
      span{
        width: 70px;
        
        p{
          height: 10px;
          font-size: 15px;
          font-weight: 700;
          font-family: 'Montserrat';
          color: var(--black);
        }

      }

      ${media.lessThan("medium")`
      .title{
        width: 80px;
        margin-top: 10px;
      }
      `};

  }

`;



export const ContentQuantity = styled.div`
  &&{
      width: 65px;
      height: 50px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      
      
      .caption{
        font-size: 5px;
        font-weight: 400;
        font-family: 'Montserrat';
        color: var(--black);
        margin: 3px 0;
      }
      
      
      .box{
        width: 65px;
        height: 25px;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
        border: 0.3px solid var(--borders);
        border-radius: 4px;
        
        i{
          height: 15px;
          border: 0.3px solid var(--borders);
          margin: 0 3px;
        }
        
        p{
          font-size: 8px;
          font-family: 'Montserrat';
        }
        button{
          width: 15px;
          height: 13px;
          
          svg{
            width: 8px;
            height: 12px;
          }
        }


      }

      ${media.lessThan("medium")`
         /* padding: 25px 20px; */
      `};

  }

`;

