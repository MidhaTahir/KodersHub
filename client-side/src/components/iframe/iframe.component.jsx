import React from "react";
import "./iframe.styles.css";

const Iframe = (props) => {
  return (
    <div>
      <iframe
        id='iFrame'
        srcDoc={
          props.inputText.html +
          "<style>" +
          props.inputText.css +
          "</style>" +
          "<script>" +
          props.inputText.javascript +
          "</script>"
        }
      />
    </div>
  );
};

export default Iframe;
