import React, { useState } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Homepage from './pages/Homepage/homepage.component';
import Header from './components/Header/header.component';
import SignUp from './components/SignUp/signup.component';
import SignIn from './components/SignIn/signin.component';
import DashboardPage from './pages/DashboardPage/dashboard-page.component';
import SpecificCodePage from './pages/specificCodePage/specific-codepage.component';
import UserContext from './context/userContext';
import NotFound from "./pages/NotFound/notfound-page.component"

const App = () => {
	const defaultUser = useState({});

	return (
		<div>
			<UserContext.Provider value={defaultUser}>
				<Header />
				<Switch>
					<Route exact path="/" component={Homepage} />
					<Route exact path="/signUp/" component={SignUp} />
					<Route exact path="/signin/" component={SignIn} />
					<Route exact path="/dashboard/" component={DashboardPage} />
					<Route exact path="/dashboard/:language" component={SpecificCodePage} />
					<Route path="*" component={NotFound} />
				</Switch>
			</UserContext.Provider>
		</div>
	);
};

export default App;
