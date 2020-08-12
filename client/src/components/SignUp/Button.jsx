import React from "react";
import Button from "@material-ui/core/Button";
import useStyles from "./useStyles";
// import { green } from '@material-ui/core/colors';
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";

const FormButton = ({ children }) => {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#04786B",
      },
    },
  });

  const classes = useStyles();

  return (
    <MuiThemeProvider theme={theme}>
      <Button
        type='submit'
        fullWidth
        variant='contained'
        color='primary'
        className={classes.submit}
      >
        {children}
      </Button>
    </MuiThemeProvider>
  );
};

export default FormButton;
