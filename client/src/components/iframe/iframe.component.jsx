import React from 'react';
import './iframe.styles.css';

const Iframe = (props) => {
	let html,
		css,
		javascript = false;

	// condition to check the language
	if (props.lang === 'html') {
		html = true;
	} else if (props.lang === 'css') {
		css = true;
	} else if (props.lang === 'javascript') {
		javascript = true;
	}
	console.log(props.htmlForCss);
	const myHTML = props.htmlForCss;

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
					) : javascript ? (
						myHTML + '<script>' + props.inputText + '</script>'
					) : null
				}
			/>
		</div>
	);
};

export default Iframe;
