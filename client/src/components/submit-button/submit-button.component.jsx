import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      backgroundColor: "#96CEB4",
      "&:hover": {
        backgroundColor: "#04786B",
      },
    },
  },
}));

const SubmitButton = ({ disabled }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Button type='submit' variant='contained' disabled={disabled}>
        Submit Code
      </Button>
    </div>
  );
};

export default SubmitButton;
