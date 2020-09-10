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
};

export const PageSection = styled.section`
  padding: 4rem 0;
`;

export const SectionHeader = styled.h4`
  font-size: 2.6rem;
  line-height: 3.2rem;
  padding-bottom: 2rem;
  text-align: center;
`;

export const ButtonStyle = styled.button`
  padding: 1rem 1.2rem;
  margin-top: 1rem;
  border-radius: 5px;
  background-color: ${siteVars.mainHighlight};
  color: ${siteVars.offWhite};
  border: 1px solid ${siteVars.mainHighlight};
  // background-color: ${siteVars.offWhite};
  // border: 1px solid ${siteVars.mainHighlight};
  // color: ${siteVars.mainHighlight};
  opacity: 0.86;
  transition: all 0.2s;
  &:hover,
  &:focus {
    background-color: ${siteVars.offWhite};
    border: 1px solid ${siteVars.mainHighlight};
    color: ${siteVars.mainHighlight};
    // background-color: ${siteVars.mainHighlight};
    // color: ${siteVars.offWhite};
    // border: 1px solid ${siteVars.mainHighlight};
  }
`;