import React, { useState } from 'react';
import {Route ,Switch ,Link} from 'react-router-dom'
import Text_Area from './components/text-area/text-area'
import Homepage from './components/Homepage/homepage'
import Header from './components/Header/header'
import SignIn from './components/SignIn/signin'


const App = () => {
	
	return (
		<div className="App">
		<Header />	
		<Switch>
			
			<Route exact={true}  path ='/'  component={Homepage}/>
			<Route exact={true}  path ='/code/'  component={Text_Area}/>
			<Route exact={true}  path ='/signIn/'  component={SignIn}/>

		</Switch> 
			
		
		</div>
	);
};

export default App;
