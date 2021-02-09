import styled from '@emotion/styled';

export const AboutArticle = styled.article`
  text-align: center;
  width: 50%;
  max-width: 1200px;
  padding: 6rem 0 3rem;
  @media (max-width: 1000px) {
    width: 75%;
    padding: 4rem 1rem;
  }
  @media (max-width: 500px) {
    width: 100%;
    padding: 4rem 1rem;
  }
`;

export const AboutH3 = styled.h3`
  font-size: 2.6rem;
  line-height: 3.2rem;
  padding: 0.5rem 0;
`;

export const AboutP = styled.p`
  font-size: 1.2rem;
  line-height: 1.8rem;
  padding: 0.5rem;
  letter-spacing: 0.04rem;
  @media (max-width: 500px) {
    padding: 0.2rem;
    font-size: 1rem;
  }
`;