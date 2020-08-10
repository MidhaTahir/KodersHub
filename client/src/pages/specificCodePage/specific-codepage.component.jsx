import React, { useState } from "react";
import CodeArea from "../../components/code-area/code-area.component";
import Iframe from "../../components/iframe/iframe.component";
import Switch from "@material-ui/core/Switch";
import "./specific-codepage.styles.css";
import SubmitButton from "../../components/submit-button/submit-button.component";
import SubmitModal from "../../components/submitModal/submitModal.component";
import Footer from "../../components/footer/footer.component"
import { Redirect } from 'react-router-dom'

import axios from "axios";

const SpecificCodePage = (props) => {
  const incomingLanguage = props.match.params.language;
  const availableLanguages = ["html", "css", "javascript"];
  console.log(availableLanguages.indexOf(incomingLanguage))
  
  const [valueOfLang, setValueOfLang] = useState("");

  const handleChange = (newValue) => {
    setValueOfLang(newValue);
  };

  const [theme, setTheme] = useState(true);

  const handleTheme = () => {
    setTheme(!theme);
  };

  const [solution, setSolution] = useState(false);
  const [testHasRun, setTestHasRun] = useState(false);
  // ------------------------------------------------------------------------------

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (incomingLanguage !== 'javascript') {
    // post to /test/lang to compute the solution
    await axios
      .post(`/test/${incomingLanguage}`, { dataToTest: valueOfLang })
      .then((res) => {
        // console.log(res);
      })
      .catch((err) => {
        console.log(err.response);
      });

    // handling testing right after post request
    const res = await fetch(`http://localhost:5000/test/${incomingLanguage}`);
    const jsonRes = await res.json();
    setSolution(jsonRes.sol);
    } else {
      axios
        .post(`/test/js/1`, { dataToTest: valueOfLang })
        .then(res => res.data)
        .then(resData => setSolution(resData.sol))
        .catch(err => console.log(err));
    }

    setTestHasRun(true);
  };

  if (availableLanguages.indexOf(incomingLanguage) === -1) {
    return <Redirect to={"/dashboard"}/>
  } else {
    return (
      <>
      <div className='code-area'>
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
              <h4>{"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti ratione dolore atque doloribus asperiores. Ipsum!"}</h4>
              <Iframe lang={incomingLanguage} inputText={valueOfLang} />
              <SubmitButton />
            </div>
          </div>
            {/* ensuring that test is run before passing the solution */}
          {testHasRun && <SubmitModal solution={solution} />}
        </form>
      </div>
      <Footer />
      </>
    );
  }
};

export default SpecificCodePage;
