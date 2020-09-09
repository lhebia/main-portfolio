import React from 'react';
import { css } from '@emotion/core';

import { SectionHeader, PageSection } from '../styles/globalStyles';

const ContactForm = () => {
    return (
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
        <form
          css={css`
            display: flex;
            flex-direction: column;
          `}
        >
          <input type="text" name="name" id="name" value="Your name *" />
          <input type="text" name="email" id="email" value="Your email *" />
          <textarea id="message" name="message" rows="5" cols="33">
            Your message *
          </textarea>
          <input type="submit" value="Submit" />
        </form>
      </PageSection>
    )
}

export default ContactForm;