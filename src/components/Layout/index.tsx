import React from 'react';

import Header from '../Header';
import Footer from '../Footer';

interface LayoutProps {
	children: any,
	headerPosition: string,
	colorA: string,
	colorB: string,
}

const Layout = ({ children, headerPosition, colorA, colorB }: LayoutProps ) => {
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
