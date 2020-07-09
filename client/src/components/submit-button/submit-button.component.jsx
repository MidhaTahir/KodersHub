import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const StyledButton = withStyles({
  root: {
    background: "linear-gradient(45deg, #d86181 30%, #9f5fa1 90%)",
    borderRadius: 3,
    border: 0,
    color: "white",
    height: 48,
    padding: "0 30px",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  },
  label: {
    textTransform: "capitalize",
    fontFamily: "'Delius Swash Caps', cursive" ,
  },
})(Button);

const SubmitButton = () => {
  return (
    <div>
      <StyledButton type='submit' variant='contained'>Submit Code</StyledButton>
    </div>
  );
};

export default SubmitButton;
