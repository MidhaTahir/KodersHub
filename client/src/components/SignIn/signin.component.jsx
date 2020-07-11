import React, { useState } from "react";
import Modal from "react-awesome-modal";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import FormInput from '../SignUp/InputElement'
import FormButton from '../SignUp/Button'
import OuterBody from '../SignUp/OuterPart'
import useStyles from '../SignUp/useStyles'

  
const SignIn =() => {

  const [visiblemodal, setvisiblemodal] = useState(true);
  const classes = useStyles();

  const closeModal = () => {
    setvisiblemodal(false);
  };
 
  

  return (
    <section>
    <Modal
        visible={visiblemodal}
        effect='fadeInUp'
        onClickAway={closeModal}
      >  
   <Container style={{marginTop: '-10%',marginBottom: '4%'}}>
      <CssBaseline />
     
        <OuterBody name="Sign In" />
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
           
              <FormInput
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            
           
              <FormInput
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              
          </Grid>
          <br/>
         <FormButton>Sign In</FormButton>
        

        </form>
     
    </Container>
    </Modal>
    </section>
    
  )
}
export default SignIn
