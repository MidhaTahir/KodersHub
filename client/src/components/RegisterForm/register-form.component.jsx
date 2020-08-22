import React, { useState } from 'react';
import axios from 'axios';

const RegisterForm = () => {
	const [ username, setuserName ] = useState('hellod hbef');
	const [ password, setPassword ] = useState('defpass');

	const handleRegisterForm = async (e) => {
		e.preventDefault();

		const userData = {
			userDataName: username,
			userDataPassword: password
		};

		await axios
			.post('/register', { userData: userData })
			.then((res) => {})
			.catch((err) => {
				console.log(err.response);
			});
	};

	return (
		<div>
			<form onSubmit={handleRegisterForm}>
				<br />
				<input type="text" name="username" placeholder="username" />
				<br /> <br />
				<br />
				<input type="password" name="password" placeholder="password" />
				<br />
				<br />
				<button type="submit">Submit</button>
				<br />
			</form>
		</div>
	);
};

export default RegisterForm;
