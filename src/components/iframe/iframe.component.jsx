import React from 'react';

const Iframe = (props) => {
	return (
		<div>
			<iframe
				id="iFrame"
				srcDoc={
					props.inputText.html +
					'<style>' +
					props.inputText.css +
					'</style>' +
					'<script>' +
					props.inputText.js +
					'</script>'
				}
			/>
		</div>
	);
};

export default Iframe;
