import React, { useState, useEffect, useContext } from 'react';
import CodeArea from '../../components/code-area/code-area.component';
import Iframe from '../../components/iframe/iframe.component';
import Switch from '@material-ui/core/Switch';
import './specific-codepage.styles.css';
import SubmitButton from '../../components/submit-button/submit-button.component';
import SubmitModal from '../../components/submitModal/submitModal.component';
import Footer from '../../components/footer/footer.component';
import { ReactComponent as Blob1 } from '../../images/blob1.svg';
import { ReactComponent as Blob2 } from '../../images/blob2.svg';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import UserContext from "../../context/userContext";

const SpecificCodePage = (props) => {
	const { user } = useContext(UserContext);

	const incomingLanguage = props.match.params.language;
	const availableLanguages = [ 'html', 'css', 'javascript' ];

	const [ valueOfLang, setValueOfLang ] = useState('');

	const handleChange = (newValue) => {
		setValueOfLang(newValue);
	};

	const [ theme, setTheme ] = useState(true);

	const handleTheme = () => {
		setTheme(!theme);
	};

	const [ solution, setSolution ] = useState(false);
	const [ testHasRun, setTestHasRun ] = useState(false);
	// ------------------------------------------------------------------------------

	const [ taskJson, setTaskJson ] = useState('');
	const [ taskHtml, setTaskHtml ] = useState('');

	// getting question info from database
	useEffect(
		() => {
			async function fetchData() {
				try {
					let taskRes = await fetch(`http://localhost:5000/dashboard/${incomingLanguage}`, {
						mode: 'cors',
						credentials: 'include'
					});
					let taskJsonRes = await taskRes.json();
					console.log(taskJsonRes);
					setTaskJson(taskJsonRes.taskStatement);
					setTaskHtml(taskJsonRes.defaultHtml);
				} catch (err) {
					console.log(err);
				}
			}

			fetchData();
		}
	);

	const handleSubmit = async (e) => {
		e.preventDefault();

		axios
			.post(`/test/${incomingLanguage}`, { dataToTest: valueOfLang })
			.then((res) => res.data)
			.then((resData) => setSolution(resData.sol))
			.catch((err) => console.log(err))
			.finally(() => setTestHasRun(true));
		
	};

	if (availableLanguages.indexOf(incomingLanguage) === -1) {
		return <Redirect to={'/dashboard'} />;
	} else {
		return (
			<div>
				<Blob2 />
				<div className="code-area">
					{/* text areas */}

					<form onSubmit={handleSubmit}>
						<div className="code-task-iframe">
							<div>
								<p>
									Light
									<Switch onClick={handleTheme} /> Dark
								</p>
								<CodeArea
									func={handleChange}
									lang={incomingLanguage}
									inputText={valueOfLang}
									theme={theme}
								/>
							</div>
							<div className="task-iframe">
								<h4>{taskJson}</h4>
								<Iframe lang={incomingLanguage} inputText={valueOfLang} htmlForCss={taskHtml} />
								<SubmitButton />
							</div>
						</div>
						{/* ensuring that test is run before passing the solution */}
						{testHasRun && <SubmitModal solution={solution} lang={incomingLanguage} close={() => setTestHasRun(false)}/>}
					</form>
					<Blob1 />
				</div>
				<Footer />
			</div>
		);
	}
};
export default SpecificCodePage;
