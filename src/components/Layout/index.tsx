import React from 'react';

import Header from '../Header';
import Footer from '../Footer';

interface LayoutProps {
	children: any,
	headerPosition: string,
	colorA: string,
	colorB: string,
}

const Layout: React.FC<LayoutProps> = ({ 
	children, 
	headerPosition, 
	colorA, 
	colorB 
}) => {
	
	return (
		<>
			<Header headerPosition={headerPosition} colorA={colorA} colorB={colorB} />
			<div>
				{children}
			</div>
			<Footer />
		</>
	)
}

export default Layout;
