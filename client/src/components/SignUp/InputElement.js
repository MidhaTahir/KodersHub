import React from 'react'
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

const FormInput = ({ handleChange, ...otherProps }) => (

    <Grid item xs={12}>

      <TextField  variant='outlined'
                  required
                  fullWidth
                  onChange={handleChange} {...otherProps} />
      
    </Grid>
    
    
  );
  
  export default FormInput;