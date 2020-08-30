import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';

import { Wrapper } from '../styles/globalStyles';

const Layout = ({ children }) => {
    return (
        <React.Fragment>
            <Header />
            <Wrapper>
                <div>
                    {children}
                </div>
                <Footer />
            </Wrapper>
        </React.Fragment>
    )
}

export default Layout;