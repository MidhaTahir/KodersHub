import React, { useState } from 'react';
import './App.css';
import { Route, Switch, Link } from 'react-router-dom';
import Text_Area from './components/text-area/text-area';
import Homepage from './pages/Homepage/homepage';
import Header from './components/Header/header';
import SignUp from './components/SignUp/signup';
import SignIn from './components/SignIn/signin';
import DashboardPage from './pages/DashboardPage/dashboard-page.component';

const App = () => {
	return (
		<div>
			<Header />

			<Switch>
				<Route exact path="/" component={Homepage} />
				<Route exact path="/code/" component={Text_Area} />
				<Route exact path="/signUp/" component={SignUp} />
				<Route exact path="/signin/" component={SignIn} />
				<Route exact path="/dashboard/" component={DashboardPage} />
			</Switch>
		</div>
	);
};

export default App;
