import React, { useState, useEffect } from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import styled from '@emotion/styled';
import { Global, css } from '@emotion/core';

import dp36 from '../assets/dp36.png';
import setup from '../styles/setup';
import { Wrapper, siteVars } from '../styles/globalStyles';

const FlexedHeader = styled.header`
    padding: 1.2rem 0;
    width: 100%;
    top: 0;
    z-index: 1000;
    background-color: ${siteVars.offWhite};
    transition: .2s ease;
`;

const HeaderH1 = styled.h1`
  text-transform: lowercase;
  font-size: 1.5rem;
  @media (max-width: 500px) {
    font-size: 0;
  }
`;

const HeaderImg = styled.img`
  padding-right: 1rem;
  padding-bottom: 0.2rem;
  transition: all .2s;
  &:hover {
      opacity: 0.6;
  }
`

const FlexedDiv = styled.div`
    display: flex;
    align-items: center;
`;

const FlexedUl = styled.ul`
  display: flex;
  list-style-type: none;
  font-size: 1.2rem;
  align-items: center;
  li {
    padding: 0 0.5rem;
    position: relative;
  }
  // a::after {
  //   content: "";
  //   position: absolute;
  //   top: 1.5rem;
  //   left: 50%;
  //   width: 10%;
  //   z-index: -1;
  //   height: 0.2rem;
  //   background-color: ${siteVars.mainHighlight};
  //   opacity: 0;
  //   transition: 0.2s ease;
  // }
  // a:hover::after {
  //   left: 10%;
  //   opacity: 1;
  //   width: 80%;
  // }
  a:nth-child(3):hover::after {
    opacity: 0;
  }
  @media (max-width: 450px) {
    a {
      font-size: 1.2rem;
    }
  }
`

const Header = ({ headerPosition, colorA, colorB }) => {

  const [shadow, setShadow] = useState(`none`);
  const [opacity, setOpacity] = useState(0);
  const [color, setColor] = useState(colorA);

  const listenScrollEvent = e => {
    if (window.scrollY > 0) {
      setShadow(`${siteVars.boxShadow}`);
      setOpacity(1);
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
              <HeaderH1>{data.site.siteMetadata.title}</HeaderH1>
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