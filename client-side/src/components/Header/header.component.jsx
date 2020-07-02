import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<div>
			<Link to="/code/">CHALLENGES</Link>
			<br />
			<Link to="/signUp">SIGN UP</Link>
			<br />
			<Link to="/dashboard">DASHBOARD</Link>
		</div>
	);
};

export default Header;
