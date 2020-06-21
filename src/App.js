import React, { useState } from 'react';
import CodeArea from './components/code-area/code-area.component';
import Iframe from './components/iframe/iframe.component';

const App = () => {
	const [ inputText, setInputText ] = useState({
		html: '',
		css: '',
		js: ''
	});

	const handleChange = (language, newValue) => {
		setInputText((prevValue) => {
			return {
				...prevValue,
				[language]: newValue
			};
		});
	};

	return (
		<div className="App">
			{/* text areas */}
			<CodeArea func={handleChange} lang="html" inputText={inputText.html} />
			<CodeArea func={handleChange} lang="css" inputText={inputText.css} />
			<CodeArea func={handleChange} lang="js" inputText={inputText.js} />

			<Iframe inputText={inputText} />
		</div>
	);
};

export default App;
