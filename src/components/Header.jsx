import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/Header.css';

const Header = () => {
	return (
		<header className='Header'>
			<h1 className='Header-title'>
				<Link to='/'>Conf Merch</Link>
			</h1>
			<div className='Header-checkout'>
				<Link
					to='/checkout'
					className='Header-link'>
					Checkout
				</Link>
			</div>
		</header>
	);
};

export default Header;
