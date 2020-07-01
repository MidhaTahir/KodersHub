// getting dom elements
const button = document.querySelector('#test');
const html = document.querySelector('#html');

button.addEventListener('click', checkCode);
function checkCode() {
	let str = html.value;

	let tag = 'input';
	let attribute = 'type';
	let value = 'text';
	let selfClosing = true;
	// /<([a-z]+)\s?[a-z="\s?]*?\/?>(\n?.*\n?<\/\1>)?/gi

	// var regex = new RegExp(`<${shouldBeDiv}>\n<\\s?/${shouldBeDiv}>`, 'g');

	// var regex2 = new RegExp(`<(${tag})\\s?[a-z="\\s?]*?\\/?>(\n?.*\n?<\\/\(${tag})>)?`, 'g');   //without attributes and values(working fine)
	if (selfClosing) {
		// issue: should not let us enter a closing tag!

		var regex2 = new RegExp(`^<(${tag})\\s?((${attribute})\\s?=?"?${value}"?\\s?)\\/?>\\s?\n?$`, 'g');
	} else {
		var regex2 = new RegExp(
			`<(${tag})\\s?((${attribute})\\s?=?"?${value}"?\\s?)\\/?>(\n?.*\n?<\\/\(${tag})>)`,
			'g'
		);
	}

	// Resolved: LOOK FOR SELF-CLOSING OR NOT!!
	let result = str.match(regex2);

	// --------------------------------------------------------------------------

	//

	// ---------------------------------------------------------------------------

	if (result == null) {
		alert("INCORRECT HTML! didn't match");
	} else {
		alert('Correct HTML');
	}
}
