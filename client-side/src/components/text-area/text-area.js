import React, { useState } from 'react';
import CodeArea from '../code-area/code-area.component';
import Iframe from '../iframe/iframe.component';
import Switch from '@material-ui/core/Switch';
import SubmitButton from '../submit-button/submit-button.component';

const Text_Area = () => {
	const [ inputText, setInputText ] = useState({
		html: '',
		css: '',
		javascript: ''
	});

	const handleChange = (language, newValue) => {
		setInputText((prevValue) => {
			return {
				...prevValue,
				[language]: newValue
			};
		});
	};

	const [ theme, setTheme ] = useState(true);

	const handleTheme = () => {
		setTheme(!theme);
	};

	return (
		<div>
			{/* text areas */}
			<CodeArea func={handleChange} lang="html" inputText={inputText.html} theme={theme} />
			<CodeArea func={handleChange} lang="css" inputText={inputText.css} theme={theme} />
			<CodeArea func={handleChange} lang="javascript" inputText={inputText.javascript} theme={theme} />

			<p>
				Light<Switch onClick={handleTheme} /> Dark
			</p>
			<Iframe inputText={inputText} />

			<SubmitButton />
		</div>
	);
};

export default Text_Area;
