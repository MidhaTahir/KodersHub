import React, { useState } from 'react';
import CodeArea from './components/code-area/code-area.component';


 
const App = () => {
	const [ inputText, setInputText ] = useState({
		html: '',
		css: '',
		js: ''
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setInputText((prevValue) => {
			return {
				...prevValue,
				[name]: value
			};
		});
	};

	return (
		<div className="App">
			<h3>Code Playground</h3>

			{/* text areas */}
			<CodeArea func={handleChange} lang="html" />
			<CodeArea func={handleChange} lang="css" />
			<CodeArea func={handleChange} lang="js" />

			<div>
				<iframe
					id="iFrame"
					srcDoc={
						inputText.html +
						'<style>' +
						inputText.css +
						'</style>' +
						'<script>' +
						inputText.js +
						'</script>'
					}
				/>
			</div>
		</div>
	);
};

export default App;
