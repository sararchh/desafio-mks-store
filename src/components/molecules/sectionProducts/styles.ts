import styled from 'styled-components';
import media from "styled-media-query";

export const ContentProducts = styled.div`
  &&{
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      padding: 0 5rem;
      
      ${media.lessThan("medium")`
        padding: 0 0.8rem;
      `};

  }

`;

