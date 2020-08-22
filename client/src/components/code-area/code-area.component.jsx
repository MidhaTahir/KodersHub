import React from 'react';
import AceEditor from 'react-ace';
import Media from "react-media"
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

	const jsStarterCode = `
	module.exports = function() { 
	// write your code here !!
	// Please! don't remove the default code 
	}`
	return (
		<>
			<h3 className="lang-name">{props.lang.toUpperCase()}</h3>
			<Media query="(max-width: 600px)">
        	{ isSmall => (
			<div className="editor">
				<AceEditor
					mode={props.lang}
					theme={props.theme ? 'clouds' : 'tomorrow_night'}
					onChange={onChange}
					name="UNIQUE_ID_OF_DIV"
					value={props.lang === "javascript" ? (props.inputText ? props.inputText : jsStarterCode ) : props.inputText}
					fontSize={16}
					editorProps={{ $blockScrolling: true }}
					setOptions={{
						enableBasicAutocompletion: true,
						enableLiveAutocompletion: true,
						enableSnippets: true
					}}
					style={{height: '500px', border: "1px solid #000" }}
					width={ isSmall ? '430px' : '600px' }
				/>
			</div>)}
			</Media>
			
		</>
	);
};

export default CodeArea;
