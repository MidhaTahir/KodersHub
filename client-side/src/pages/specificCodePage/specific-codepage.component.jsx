import React, { useState } from 'react';
import CodeArea from '../../components/code-area/code-area.component';
import Iframe from '../../components/iframe/iframe.component';
import Switch from '@material-ui/core/Switch';
import './specific-codepage.styles.css';
import SubmitButton from '../../components/submit-button/submit-button.component';

const SpecificCodePage = (props) => {
	const incomingLanguage = props.match.params.language;

	const [ valueOfLang, setValueOfLang ] = useState('');

	const handleChange = (newValue) => {
		setValueOfLang(newValue);
	};

	const [ theme, setTheme ] = useState(true);

	const handleTheme = () => {
		setTheme(!theme);
	};

	return (
		<div className="code-area">
			{/* text areas */}
			<CodeArea func={handleChange} lang={incomingLanguage} inputText={valueOfLang} theme={theme} />
			<p>
				Light<Switch onClick={handleTheme} /> Dark
			</p>
			<Iframe lang={incomingLanguage} inputText={valueOfLang} />
			<SubmitButton />
		</div>
	);
};

export default SpecificCodePage;
