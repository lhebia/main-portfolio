import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import { Global } from '@emotion/core';

import dp36 from '../assets/dp36.png';
import setup from '../styles/setup';

const FlexedHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 0;
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
    li {
        padding: 0 0.5rem;
    }
`;

const Header = () => {
    return (
        <FlexedHeader>
            <Global
                styles={setup}
            />
            <FlexedDiv>
                <Link to="/">
                    <HeaderImg src={dp36} alt="Logo for LawrenceHebia.com" />
                </Link>
                <Link to="/">
                    <HeaderH1>Lawrence Hebia</HeaderH1>
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
        </FlexedHeader>
    )
}

export default Header;