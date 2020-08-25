import React from 'react';
import styled from '@emotion/styled';

import Header from '../components/Header';
import Footer from '../components/Footer';

const Wrapper = styled.div`
    width: 80%;
    max-width: 1200px;
    margin: 0 auto;
`;

const Layout = ({ children }) => {
    return (
        <Wrapper>
            <div>
                <Header />
                {children}
            </div>
            <Footer />
        </Wrapper>
    )
}

export default Layout;