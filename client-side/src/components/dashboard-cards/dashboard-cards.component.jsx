import React from 'react';
import './dashboard-cards.styles.css';
import { Link } from 'react-router-dom';

const DashboardCard = (props) => {
	const linkStr = '/dashboard/' + props.lang;
	return (
		<div className="card-div">
			<Link to={linkStr} style={{ textDecoration: 'none' }}>
				<div className="dash-card">
					<h1>{props.symbol}</h1>
					<h2>{props.lang.toUpperCase()}</h2>
				</div>
			</Link>
		</div>
	);
};

export default DashboardCard;
