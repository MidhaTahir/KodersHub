import React from 'react';
import AceEditor from "react-ace";
 
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";

const CodeArea = (props) => {

	 function onChange(newValue) {
  console.log("change", newValue);
}

	return (
		<div>

		<AceEditor
			mode="java"
			theme="github"
			onChange={onChange}
			name="UNIQUE_ID_OF_DIV"
			editorProps={{ $blockScrolling: true }}
		/>
			<textarea onChange={props.func} name={props.lang} />
		</div>
	);
};

export default CodeArea;
