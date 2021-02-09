import styled from '@emotion/styled';
import { siteVars } from '../../styles/globalStyles';

export const ProjectUl = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;
  @media (max-width: 1068px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 768px) {
    gap: 1rem;
  }
  @media (max-width: 650px) {
    grid-template-columns: 1fr;
  }
  li {
    // padding: 0 0 1rem 0;
    text-align: left;
    box-shadow: ${siteVars.boxShadow};
    border-radius: 5px 5px 5px 5px;
  }
  img {
    border-radius: 5px 5px 0px 0px;
    transition: all 0.6s;
    opacity: 1;
    &:hover,
    &:focus {
      transform: scale(1.1);
      opacity: 0.46;
    }
  }
  p {
    line-height: 1.4rem;
  }
  p:last-of-type {
    padding-top: 0.5rem;
  }
`

export const ProjectLink = styled.a`
  font-weight: bold;
  color: ${siteVars.mainHighlight};
  &:hover,
  &:focus {
    opacity: 0.4;
  }
`;

export const ProjectTitle = styled.p`
  font-family: "Poppins", sans-serif;
  letter-spacing: 0.05rem;
  font-size: 1.4rem;
  line-height: 2rem;
  padding: 1rem 0;
`;

export const TextCard = styled.div`
  padding: 1rem;
`;