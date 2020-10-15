import React, { useReducer } from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';

import { Wrapper, SectionHeader, PageSection, siteVars } from '../styles/globalStyles';

const PortfolioForm = styled.form`
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
`

const ContactForm = () => {

  const [loginInput, setLoginInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      name: "Name *",
      email: "Email *",
      message: "Message *",
    }
  )

  const handleLoginInput = event => {
    const name = event.target.name
    const value = event.target.value
    setLoginInput({ [name]: value })
  }

    return (
      <Wrapper>
        <PageSection
          css={css`
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            min-height: 25vh;
          `}
        >
          <SectionHeader>Contact Me</SectionHeader>
          <PortfolioForm action="https://formspree.io/f/xwkrrapw" method="POST">
            <input
              type="text"
              name="name"
              id="name"
              onChange={handleLoginInput}
              value={loginInput.name}
              // onFocus={console.log('** Focused **')}
            />
            <input
              type="text"
              name="email"
              id="email"
              onChange={handleLoginInput}
              value={loginInput.email}
            />
            <textarea
              id="message"
              name="message"
              rows="5"
              cols="33"
              onChange={handleLoginInput}
            >
              {loginInput.message}
            </textarea>
            <input
              type="submit"
              value="Submit"
              css={css`
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
              `}
            />
          </PortfolioForm>
        </PageSection>
      </Wrapper>
    )
}

export default ContactForm;