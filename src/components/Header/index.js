import React, { useState, useEffect } from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { Global, css } from '@emotion/core';

import dp36 from '../../assets/dp36.png';
import setup from '../../styles/setup';
import { Wrapper, siteVars } from '../../styles/globalStyles';
import FlexedHeader, { HeaderTitle, HeaderImg, FlexedDiv, FlexedUl } from './FlexedHeader';

const Header = ({ headerPosition, colorA, colorB }) => {

  const [shadow, setShadow] = useState(`none`);
  const [opacity, setOpacity] = useState(0);
  const [color, setColor] = useState(colorA);

  const listenScrollEvent = e => {
    if (window.scrollY > 0) {
      setShadow(`${siteVars.boxShadow}`);
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

    const data = useStaticQuery(graphql`
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
          a {
            color: ${color};
          }
          a:hover {
            color: ${siteVars.mainHighlight};
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
                <Link to="/">Portfolio</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <a
                  css={css`
                    padding: 0.4rem 0.6rem;
                    margin-top: 1rem;
                    border-radius: 5px;
                    background-color: ${siteVars.mainHighlight};
                    color: ${siteVars.offWhite} !important;
                    border: 1px solid ${siteVars.mainHighlight};
                    opacity: 0.86;
                    transition: all 0.2s;
                    &:hover,
                    &:focus {
                      background-color: ${siteVars.offWhite};
                      border: 1px solid ${siteVars.mainHighlight};
                      color: ${siteVars.mainHighlight} !important;
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