import React, { useState, useEffect } from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import styled from '@emotion/styled';
import { Global, css } from '@emotion/core';

import dp36 from '../assets/dp36.png';
import setup from '../styles/setup';
import { Wrapper, siteVars } from '../styles/globalStyles';

const FlexedHeader = styled.header`
    padding: 1.2rem 0;
    position: sticky;
    top: 0;
    z-index: 1000;
    background-color: ${siteVars.offWhite};
    transition: .2s ease;
    border-bottom: 1px solid ${siteVars.lightGrey};
    // -webkit-box-shadow: 0px 10px 20px 0px rgba(0,0,0,0.05);
    // -moz-box-shadow: 0px 10px 20px 0px rgba(0,0,0,0.05);
    // box-shadow: 0px 10px 20px 0px rgba(0,0,0,0.05);
`;

const HeaderH1 = styled.h1`
  text-transform: lowercase;
  font-size: 1.5rem;
  @media (max-width: 500px) {
    font-size: 0;
  }
`;

const HeaderImg = styled.img`
//   width: 3rem;
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
  a::after {
    content: "";
    position: absolute;
    top: 2rem;
    left: 0px;
    width: 10%;
    z-index: -1;
    height: 0.2rem;
    background-color: ${siteVars.mainHighlight};
    opacity: 0;
    transition: .2s ease;
  }
  a:hover::after {
    opacity: 1;
    width: 100%;
  }
`

const Header = () => {

  const [shadow, setShadow] = useState(`${siteVars.boxShadow}`)

  const listenScrollEvent = e => {
    if (window.scrollY > 0) {
      setShadow(`${siteVars.boxShadow}`)
    } else {
      setShadow(`none`)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent)
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
        <FlexedHeader css={css`
          box-shadow: ${shadow};
        `}>
            <Global
                styles={setup}
            />
            <Wrapper css={css`
                display: flex;
                justify-content: space-between;
                align-items: center;
            `}>
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
                    </FlexedUl>
                </nav>
            </Wrapper>
        </FlexedHeader>
    )
}

export default Header;