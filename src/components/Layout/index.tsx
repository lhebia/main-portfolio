import React from 'react';

import Header from '../Header';
import Footer from '../Footer';

import "../../styles/main.scss";

interface LayoutProps {
	children: any,
	light?: boolean
}

const Layout: React.FC<LayoutProps> = ({ 
	children, 
	light
}) => {
	
	return (
		<>
			<Header light={light}/>
			<div>
				{children}
			</div>
			<Footer />
		</> 
	)
}

export default Layout;
