import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

import dp from '../assets/dp.png';

const FlexedHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const FlexedDiv = styled.div`
    display: flex;
    align-items: center;
`;

const FlexedUl = styled.ul`
    display: flex;
    list-style-type: none;
    li {
        padding: 0 0.5rem;
    }
`;

const Header = () => {
    return (
        <FlexedHeader>
            <FlexedDiv>
                <img css={css`
                    width: 3rem;
                    height: 3rem;
                    padding-right: 1rem;
                `} src={dp} alt="Logo for LawrenceHebia.com" />
                <h1>Lawrence Hebia</h1>
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