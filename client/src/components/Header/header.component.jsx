import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import './header.styles.css';
import { Link } from 'react-router-dom';
import ImageAvatars from '../avatar/avatar.component'
import UserContext from "../../context/userContext"

const Header = props => {

	const { user, LogoutUser } = useContext(UserContext);
	const history = useHistory();

	function handleClick() {
		LogoutUser();
		history.push("/");
	}

	return (
		<>
			<div className="headerBody">
				{
					user.loggedIn
					? <button onClick={handleClick} className="linkText">LOGOUT</button>
					: <Link to="/signUp" className="linkText">SIGNUP</Link>
				}
				<Link to="/dashboard" className="linkText">DASHBOARD</Link>
				<ImageAvatars />
			</div>
		</>
	);
};

export default Header;
