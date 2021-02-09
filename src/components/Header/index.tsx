import React, { useState, useEffect } from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { Global, css } from '@emotion/core';

import dp36 from '../../assets/dp36.png';
import setup from '../../styles/setup';
import { Wrapper, siteVars as S } from '../../styles/globalStyles';
import {
  FlexedHeader,
  HeaderTitle, 
  HeaderImg, 
  FlexedDiv, 
  FlexedUl 
} from './styles';

import { HeaderProps } from './types';

const Header = ({ 

  headerPosition, 
  colorA, 
  colorB 

}: HeaderProps) => {

  const [shadow, setShadow] = useState(`none`);
  const [opacity, setOpacity] = useState(0);
  const [color, setColor] = useState(colorA);

  const activeStyle = {
    opacity: 0.6,
    fontWeight: 'bold',
    pointerEvents: 'none',
  };

  const listenScrollEvent = (): void => {
    if (window.scrollY > 0) {
      setShadow(`${S.boxShadow}`);
      setOpacity(0.88);
      setColor(colorB);
    } else {
      setShadow(`none`);
      setOpacity(0);
      setColor(colorA);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent)
    return () => {
      window.removeEventListener("scroll", listenScrollEvent)
    }
  })

  const data: object = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <FlexedHeader
      css={css`
        position: ${headerPosition};
        box-shadow: ${shadow};
        background-color: rgba(250, 250, 250, ${opacity});
        backdrop-filter: ${ opacity ? 'saturate(180%) blur(24px)' : null };
        border-bottom: ${ opacity ? S.border : null };
        a {
          color: ${color};
        }
        a:hover {
          color: ${S.mainHighlight};
        }
      `}
    >
      <Global styles={setup} />
      <Wrapper
        css={css`
          display: flex;
          justify-content: space-between;
          align-items: center;
        `}
      >
        <FlexedDiv>
          <Link to="/">
            <HeaderImg src={dp36} alt="Logo for LawrenceHebia.com" />
          </Link>
          <Link to="/">
            <HeaderTitle>{data.site.siteMetadata.title}</HeaderTitle>
          </Link>
        </FlexedDiv>
        <nav>
          <FlexedUl>
            <li>
              <Link 
                to="/"
                activeStyle={activeStyle}
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link 
                to="/blog"
                activeStyle={activeStyle}
              >
                Blog
              </Link>
            </li>
            <li>
              <a
                css={css`
                  padding: 0.4rem 0.6rem;
                  margin-top: 1rem;
                  border-radius: 5px;
                  background-color: ${S.mainHighlight};
                  color: ${S.offWhite} !important;
                  border: 1px solid ${S.mainHighlight};
                  opacity: 0.86;
                  transition: all 0.2s;
                  &:hover,
                  &:focus {
                    background-color: ${S.offWhite};
                    border: 1px solid ${S.mainHighlight};
                    color: ${S.mainHighlight} !important;
                  }
                  &:hover::after {
                    opacity: 0;
                  }
                `}
                href="mailto:lawrencehebia@gmail.com"
                target="_blank"
                rel="noreferrer noopener"
              >
                Contact
              </a>
            </li>
          </FlexedUl>
        </nav>
      </Wrapper>
    </FlexedHeader>
  )
}

export default Header;
