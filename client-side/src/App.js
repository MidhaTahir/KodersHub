import React, { useState } from 'react';
import './App.css'
import {Route ,Switch ,Link} from 'react-router-dom'
import Text_Area from './components/text-area/text-area'
import Homepage from './components/Homepage/homepage'
import Header from './components/Header/header'
import SignUp from './components/SignUp/signup'
import SignIn from './components/SignIn/signin'

const App = () => {

	return (
		<div>
		<Header />	
		
		<Switch>
			
			<Route exact={true}  path ='/'  component={Homepage}/>
			<Route exact={true}  path ='/code/'  component={Text_Area}/>
			<Route exact={true}  path ='/signUp/'  component={SignUp}/>
			<Route exact={true}  path ='/signin/'  component={SignIn}/>

		</Switch> 
			
		
		</div>
	);
};

export default App;
