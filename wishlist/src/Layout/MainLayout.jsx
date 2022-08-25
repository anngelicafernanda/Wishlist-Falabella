//ange
import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Copyright } from '../components/Copyright';
import { Alert } from '../components/Alert';

export function MainLayout({ children }) {
	return (
		<>
			<Header />
			{children}
			<Footer />
			<Copyright />
			<Alert />
		</>
	);
}
