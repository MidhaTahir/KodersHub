import React from 'react';
import AceEditor from 'react-ace';

import 'ace-builds/src-noconflict/mode-html';
import 'ace-builds/src-noconflict/mode-css';
import 'ace-builds/src-noconflict/mode-javascript';

import 'ace-builds/src-noconflict/theme-tomorrow_night';
import 'ace-builds/src-noconflict/theme-clouds';

import 'ace-builds/src-noconflict/ext-language_tools';

import './code-area.styles.css';

const CodeArea = (props) => {
	function onChange(newValue) {
		props.func(newValue);
	}

	return (
		<>
			<h3 className="lang-name">{props.lang.toUpperCase()}</h3>
			<div className="editor">
				<AceEditor
					mode={props.lang}
					theme={props.theme ? 'clouds' : 'tomorrow_night'}
					onChange={onChange}
					name="UNIQUE_ID_OF_DIV"
					value={props.inputText}
					fontSize={16}
					editorProps={{ $blockScrolling: true }}
					setOptions={{
						enableBasicAutocompletion: true,
						enableLiveAutocompletion: true,
						enableSnippets: true
					}}
					style={{ width: '600px', height: '500px', border: "1px solid #000" }}
				/>
			</div>
		</>
	);
};

export default CodeArea;
