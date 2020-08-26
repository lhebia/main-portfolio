import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';

const FlexedHeader = styled.div`
    display: flex;
    justify-content: space-between;
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
            <div>
                <h1>Lawrence Hebia</h1>
            </div>
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