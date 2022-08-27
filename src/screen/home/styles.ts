import styled from 'styled-components';
import media from "styled-media-query";

export const Container = styled.div`
  &&{
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 3rem 6rem;
      
      ${media.lessThan("medium")`
        padding: 1rem;
      `};

  }

`;

