import React from 'react';
import './header.styles.css';
import { Link } from 'react-router-dom';
import ImageAvatars from '../avatar/avatar.component'
const Header = () => {
	return (
			<div className="headerBody">
				<Link to="/signUp" className="linkText">SIGNUP</Link>
				<Link to="/dashboard" className="linkText">DASHBOARD</Link>
				<ImageAvatars />
			</div>
	);
};

export default Header;
