import React from 'react';
import { css } from '@emotion/core';

import { SectionHeader } from '../styles/globalStyles';

const ContactForm = () => {
    return (
        <section css={css`
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            min-height: 25vh;
        `}>
            <SectionHeader>Contact Me</SectionHeader>
            <form>
                <input type="text" name="textField" id="textField"/>
                <input type="submit" value="Submit"/>
            </form>
        </section>
    )
}

export default ContactForm;