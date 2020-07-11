import React from 'react'
import Button from "@material-ui/core/Button";
import useStyles from "./useStyles";

const FormButton =({children}) =>{

  const classes = useStyles();

      return(
              <Button
                type='submit'
                fullWidth
                variant='contained'
                color='primary'
                className={classes.submit}
                
              >
               {children}
              </Button>
      )


}

export default FormButton