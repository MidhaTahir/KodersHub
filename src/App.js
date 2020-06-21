import React, { useState } from 'react';
import CodeArea from './components/code-area/code-area.component';
import Iframe from './components/iframe/iframe.component';
import Switch from '@material-ui/core/Switch';

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

	const [ theme, setTheme ] = useState(false);

	const handleTheme = () => {
		setTheme(!theme);
	};

	return (
		<div className="App">
			{/* text areas */}
			<CodeArea func={handleChange} lang="html" inputText={inputText.html} theme={theme} />
			<CodeArea func={handleChange} lang="css" inputText={inputText.css} theme={theme} />
			<CodeArea func={handleChange} lang="js" inputText={inputText.js} theme={theme} />

			<p>
				Light<Switch onClick={handleTheme} /> Dark
			</p>
			<Iframe inputText={inputText} />
		</div>
	);
};

export default App;
