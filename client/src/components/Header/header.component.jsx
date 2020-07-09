import React from 'react';
import './header.styles.css';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<div className="headerBody">
			<Link to="/signUp" className="linkText">SIGN-UP &nbsp;</Link>
			
			<Link to="/dashboard" className="linkText">DASHBOARD</Link>
		</div>
	);
};

export default Header;
