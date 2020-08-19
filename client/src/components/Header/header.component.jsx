import React, { useContext } from 'react';
import './header.styles.css';
import { Link } from 'react-router-dom';
import ImageAvatars from '../avatar/avatar.component'
import UserContext from "../../context/userContext"

const Header = () => {

	const { user, LogoutUser } = useContext(UserContext);
	console.log(user.username);

	return (
		<>
			<div className="headerBody">
				{
					user.loggedIn
					? <button onClick={LogoutUser} className="linkText">LOGOUT</button>
					: <Link to="/signUp" className="linkText">SIGNUP</Link>
				}
				<Link to="/dashboard" className="linkText">DASHBOARD</Link>
				<ImageAvatars />
			</div>
		</>
	);
};

export default Header;
