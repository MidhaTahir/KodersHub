import React, { useState } from 'react';
import AceEditor from 'react-ace';

import 'ace-builds/src-noconflict/mode-java';
import 'ace-builds/src-noconflict/theme-github';

const CodeArea = (props) => {
	return (
		<div>
			<textarea onChange={props.func} name={props.lang} />
		</div>
	);
};

export default CodeArea;
