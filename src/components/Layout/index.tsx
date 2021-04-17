import React from 'react';

import Header from '../Header';
import Footer from '../Footer';

import "../../styles/main.scss";

interface LayoutProps {
	children: any,
}

const Layout: React.FC<LayoutProps> = ({ 
	children, 
}) => {
	
	return (
		<>
			<Header />
			<div>
				{children}
			</div>
			<Footer />
		</>
	)
}

export default Layout;
