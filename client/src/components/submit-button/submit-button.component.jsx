import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      backgroundColor: "#22aa33",
      "&:hover": {
        backgroundColor: "#22aa11",
      },
    },
  },
}));

const SubmitButton = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Button type='submit' variant='contained'>
        Submit Code
      </Button>
    </div>
  );
};

export default SubmitButton;
