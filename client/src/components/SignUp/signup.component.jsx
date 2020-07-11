import React, { useState } from "react";
import Modal from "react-awesome-modal";
import Link from "@material-ui/core/Link";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import useStyles from "./useStyles";
import FormInput from './InputElement'
import FormButton from './Button'
import OuterBody from './OuterPart'


const SignUp = (props) => {
  
  const [visiblemodal, setvisiblemodal] = useState(true);
  const classes = useStyles();

  const closeModal = () => {

    setvisiblemodal(false)
    
  };
 
  
  const Changer =() =>{
    console.log("handling")
  }

  return (
    <section>
      <Modal
        visible={visiblemodal}
        effect='fadeInUp'
        onClickAway={closeModal}
      >  
       <Container style={{marginTop: '-10%',marginBottom: '4%'}}
       component='main' maxWidth='sm'>
          <CssBaseline />
          <OuterBody name= 'Sign Up' />
            <form className={classes.form} noValidate>
              <Grid container spacing={2}>
              <Grid item xs={12} sm={6}> 
              <FormInput
                    id='fName'
                    label='First Name'
                    name='first'
                    autoComplete='last name'
                    handleChange={Changer}
                />
              </Grid>

              <Grid item xs={12} sm={6}> 
              <FormInput  
                    id='lName'
                    label='Last Name'
                    name='last'
                    autoComplete='first name'
                    handleChange={Changer}
                />
                </Grid>

                <FormInput
                    id='email'
                    label='Email Address'
                    name='email'
                    autoComplete='email'
                    handleChange={Changer}
                />
                
                
                  <FormInput
                    name='password'
                    label='Password'
                    type='password'
                    id='password'
                    autoComplete='current-password'
                    handleChange={Changer}
                  />
                
                  <FormInput

                    name='password'
                    label='Confirm Password'
                    type='password'
                    id='conf_password'
                    autoComplete='current-password'
                    handleChange={Changer}
                  />
             
              </Grid>
              <br/>
              <FormButton>Sign Up</FormButton>
            
              <Grid container justify='flex-end'>
                <Grid item>
                  <Link variant='body2'>
                    <p
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        props.history.push("signin/");
                      }}
                    >
                      Already have an account? Signin
                    </p>
                  </Link>
                </Grid>
              </Grid>
            </form>
       
        </Container>
        </Modal>
    </section>
  );
};

export default SignUp;
