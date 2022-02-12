import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Form from './Form';
import { Container } from 'semantic-ui-react';

const Layout = (props) => {
	return (
		<Container>
			<Header />
			<Form />
			{props.children}
			<Footer />
		</Container>
	);
}

export default Layout;