import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';

const Layout = ({ children, headerPosition }) => {
    return (
        <React.Fragment>
            <Header headerPosition={headerPosition} />
            <div>
                {children}
            </div>
            <Footer />
        </React.Fragment>
    )
}

export default Layout;