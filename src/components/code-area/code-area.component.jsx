import React from 'react';
import AceEditor from 'react-ace';

import 'ace-builds/src-noconflict/mode-html';
import 'ace-builds/src-noconflict/mode-css';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-twilight';

import 'ace-builds/src-noconflict/theme-github';
import 'ace-builds/src-noconflict/ext-language_tools';

import './code-area.styles.css';

const CodeArea = (props) => {
	function onChange(newValue) {
		props.func(props.lang, newValue);
	}

	return (
		<div className="editor">
			<h3>{props.lang.toUpperCase()}</h3>

			<AceEditor
				mode={props.lang}
				theme={props.theme ? 'twilight' : 'github'}
				onChange={onChange}
				name="UNIQUE_ID_OF_DIV"
				value={props.inputText}
				editorProps={{ $blockScrolling: true }}
				setOptions={{
					enableBasicAutocompletion: true,
					enableLiveAutocompletion: true,
					enableSnippets: true
				}}
				style={{ width: '400px', height: '400px', margin: '10px' }}
			/>
		</div>
	);
};

export default CodeArea;
