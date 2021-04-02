import React, { useReducer } from 'react';
import { css } from '@emotion/core';

import { SectionHeader, PageSection, siteVars, SectionSubHeader } from '../../styles/globalStyles';
import { PortfolioForm } from './styles';


const ContactForm: React.FC<any> = () => {

  const [loginInput, setLoginInput] = useReducer(
    (state: any, newState: any) => ({ ...state, ...newState }),
    {
      namePlaceholder: "Name *",
      name: "",
      emailPlaceholder: "Email *",
      email: "",
      messagePlaceholder: "Message *",
      message: "",
    }
  )

  const handleLoginInput = (event:any) => {
    const name = event.target.name
    const value = event.target.value
    setLoginInput({ [name]: value })
  }

    return (
      <div className="wrapper">
        <PageSection
          id="Contact"
          css={css`
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            min-height: 25vh;
          `}
        >
          <SectionHeader>Contact Me</SectionHeader>
          <SectionSubHeader>Let's chat, feel free to drop a line to discuss a project or even to have a coffee.</SectionSubHeader>
          <PortfolioForm action="https://formspree.io/f/xwkrrapw" method="POST">
            <input
              type="text"
              name="name"
              id="name"
              onChange={handleLoginInput}
              value={loginInput.name}
              placeholder={loginInput.namePlaceholder}
            />
            <input
              type="text"
              name="email"
              id="email"
              onChange={handleLoginInput}
              value={loginInput.email}
              placeholder={loginInput.emailPlaceholder}
            />
            <textarea
              id="message"
              name="message"
              rows="5"
              cols="33"
              onChange={handleLoginInput}
              placeholder={loginInput.messagePlaceholder}
              value={loginInput.message}
            />
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
      </div>
    )
}

export default ContactForm;
