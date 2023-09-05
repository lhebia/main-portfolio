import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import { SocialNavProps } from './types';

const SocialNav: FunctionComponent<SocialNavProps> = ({ 
  flexJustification 
}) => {

  const FooterUl = styled.ul`
      display: flex;
      justify-content: ${flexJustification};
      padding: 0.5rem;
      li {
          padding: 0.75rem;
          font-size: 1.5rem;
      }
      li:first-of-type {
        padding-left: 0rem;
      }
      li:hover {
        transform: scale(1.1);
        transition: 0.1s ease;
      }
  `;

  return (
    <FooterUl>
      <li>
        <a
          href="https://github.com/lhebia"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </li>
      <li>
        <a
          href="https://linkedin.com/in/lhebia"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </li>
      <li>
        <a
          href="mailto:lawrencehebia@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </li>
    </FooterUl>
  )
}

export default SocialNav;
