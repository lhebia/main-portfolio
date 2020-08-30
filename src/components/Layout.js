import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';

import { Wrapper } from '../styles/globalStyles';

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