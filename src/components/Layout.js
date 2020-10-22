import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';

const Layout = ({ children, headerPosition, colorA, colorB }) => {
    return (
        <React.Fragment>
            <Header headerPosition={headerPosition} colorA={colorA} colorB={colorB} />
            <div>
                {children}
            </div>
            <Footer />
        </React.Fragment>
    )
}

export default Layout;