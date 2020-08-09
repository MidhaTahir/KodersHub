import React, { useState } from "react";
import CodeArea from "../../components/code-area/code-area.component";
import Iframe from "../../components/iframe/iframe.component";
import Switch from "@material-ui/core/Switch";
import "./specific-codepage.styles.css";
import SubmitButton from "../../components/submit-button/submit-button.component";
import SubmitModal from "../../components/submitModal/submitModal.component";
import Footer from "../../components/footer/footer.component"

import axios from "axios";

const SpecificCodePage = (props) => {
  const incomingLanguage = props.match.params.language;

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

    setTestHasRun(true);
  };

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
};

export default SpecificCodePage;
