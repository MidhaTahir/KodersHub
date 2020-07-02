import React from 'react';
import DashboardCard from '../../components/dashboard-cards/dashboard-cards.component';

const DashboardPage = () => {
	return (
		<div>
			<h1>This will be the dashboard from where you can select a language to work on!</h1>

			<p>TODO: Show total score</p>
			<p>TODO: Show 404 on other routes of dashboard/:language</p>
			<DashboardCard lang="html" symbol="< >" />
			<DashboardCard lang="css" symbol="{ }" />
			<DashboardCard lang="javascript" symbol="{ ; }" />
		</div>
	);
};

export default DashboardPage;
