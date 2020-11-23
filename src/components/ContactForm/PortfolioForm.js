import styled from '@emotion/styled';

export const PortfolioForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 60%;
  input,
  textarea {
    margin: 0.5rem 0;
    padding: 1rem;
    border-radius: 5px;
    border: 1px solid ${siteVars.mainText};
    font-family: -apple-system, "Roboto", sans-serif;
  }
  @media (max-width:768px) {
    width: 100%;
  }
`;
