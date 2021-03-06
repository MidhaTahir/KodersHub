import React from 'react';
import './iframe.styles.css';

const Iframe = (props) => {
	let html = false,
		css = false;

	// condition to check the language
	if (props.lang === 'html') {
		html = true;
	} else if (props.lang === 'css') {
		css = true;
	}
	const myHTML = props.htmlForCss;

/* javascript ? (myHTML + '<script>' + props.inputText + '</script>') : */
	return (
		<div>
			<iframe
				title="Coding iframe"
				id="iFrame"
				srcDoc={
					html ? (
						props.inputText
					) : css ? (
						myHTML + '<style>' + props.inputText + '</style>'
					) : null
				}
			/>
		</div>
	);
};

export default Iframe;
