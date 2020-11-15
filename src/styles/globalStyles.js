import styled from '@emotion/styled';

export const Wrapper = styled.div`
    width: 80%;
    max-width: 1200px;
    margin: 0 auto;
`;

export const siteVars = {
  mainText: "#100b00",
  mainHighlight: "#145c9e",
  offWhite: "#fafafa",
  lightGrey: "#fafafa",
  boxShadow: "0px 10px 20px 0px rgba(0,0,0,0.05)",
  borderRadius: "5px",
};

export const PageSection = styled.section`
  padding: 3rem 0;
`;

export const BlogPageSection = styled.section`
  padding: 2rem 0;
  width: 80%;
  margin: 0 auto;
  h1 {
    font-size: 2rem;
    line-height: 2.5rem;
    padding-bottom: 0.5rem;
  }
  h2, h3, h4, h5, h6 {
    font-size: 1.5rem;
    line-height: 2rem;
    padding: 0.5rem 0;
  }
  p:first-of-type {
    font-size: 0.9rem;
    line-height: 1rem;
    padding: 0.5rem 0;
  }
  ol {
    padding: 1rem 0 1rem 2rem;
  }
  p {
    line-height: 1.5rem;
    padding: 1rem 0;
    i {
      font-style: italic;
      font-size: 0.9rem;
    }
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
    background-color: ${siteVars.offWhite};
    line-height: 1.7rem;
  }
  img {
    margin-top: 1rem;
    border-radius: 5px;
  }
  blockquote {
    padding: 1rem 0;
  }
  blockquote p:first-of-type {
    font-size: 1.20112rem;
    line-height: 1.75rem;
    color: hsla(0,0%,0%,0.59);
    padding: 0 0.5rem;
    font-style: italic;
    border-left: 0.32813rem solid hsla(0,0%,0%,0.9);
  }
  @media (max-width: 550px) {
    width: 100%;
  }
`;

export const SectionHeader = styled.h4`
  font-size: 2.6rem;
  line-height: 3.2rem;
  padding-bottom: 0.5rem;
  text-align: center;
`;

export const SectionSubHeader = styled.p`
  font-size: 1rem;
  line-height: 1.2rem;
  padding-bottom: 2rem;
  text-align: center;
`

export const ButtonStyle = styled.button`
  padding: 1rem 1.2rem;
  margin-top: 1rem;
  border-radius: 5px;
  background-color: ${siteVars.mainHighlight};
  color: ${siteVars.offWhite};
  border: 1px solid ${siteVars.mainHighlight};
  opacity: 0.86;
  transition: all 0.2s;
  &:hover,
  &:focus {
    background-color: ${siteVars.offWhite};
    border: 1px solid ${siteVars.mainHighlight};
    color: ${siteVars.mainHighlight};
  }
`;

export const LinkLikeButton = styled.a`
  padding: 0.5rem 0.7rem;
  margin-top: 1rem;
  border-radius: 5px;
  background-color: ${siteVars.mainHighlight};
  color: ${siteVars.offWhite};
  border: 1px solid ${siteVars.mainHighlight};
  opacity: 0.86;
  transition: all 0.2s;
  &:hover,
  &:focus {
    background-color: ${siteVars.offWhite};
    border: 1px solid ${siteVars.mainHighlight};
    color: ${siteVars.mainHighlight};
  }
`;

export const TechStack = styled.p`
    font-family: 'Ubuntu', sans-serif;
    line-height: 1.6rem;
    letter-spacing: 0.09rem;
`;

export const SplashSection = styled.section`
    min-height: 86vh;
    background-color: ${siteVars.lightGrey};
    background-position: center;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 10%;
    position: relative;
`;

export const SplashTitle = styled.p`
  font-size: 7rem;
  color: white;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 5rem;
  }
  @media (max-width: 450px) {
    font-size: 3rem;
  }
`