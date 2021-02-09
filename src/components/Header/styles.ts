import styled, { StyledComponent } from '@emotion/styled';
import { siteVars as S } from '../../styles/globalStyles';

export const FlexedHeader = styled.header`
  padding: 1.2rem 0;
  width: 100%;
  top: 0;
  z-index: 1000;
  background-color: ${S.offWhite};
  transition: .2s ease;
`;

export const HeaderTitle = styled.p`
  text-transform: lowercase;
  font-size: 1.5rem;
  font-weight: 100;
  @media (max-width: 650px) {
    font-size: 0;
  }
`;

export const HeaderImg = styled.img`
  padding-right: 1rem;
  padding-bottom: 0.2rem;
  transition: all .2s;
  &:hover {
      opacity: 0.6;
  }
`

export const FlexedDiv = styled.div`
    display: flex;
    align-items: center;
`;

export const FlexedUl = styled.ul`
  display: flex;
  list-style-type: none;
  font-size: 1.2rem;
  align-items: center;
  li {
    padding: 0 0.5rem;
    position: relative;
  }
  a:nth-of-type(3):hover::after {
    opacity: 0;
  }
  @media (max-width: 450px) {
    a {
      font-size: 1.2rem;
    }
  }
`;
