import React, { useState } from 'react';
import Modal from 'react-awesome-modal';
import Link from '@material-ui/core/Link';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import useStyles from './useStyles';
import FormInput from './InputElement';
import FormButton from './Button';
import OuterBody from './OuterPart';
import axios from 'axios';
import close from '../../images/close.png';


const SignUp = (props) => {
	// for modal
	const [ visiblemodal, setvisiblemodal ] = useState(true);
	const classes = useStyles();

	const closeModal = () => {
		setvisiblemodal(true);
	};

  // for db and backend
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [data , setdata] = useState(null);
  const [submitted , setSubmitted] = useState(false)

  const register = (e) => {
    console.log("start");
    e.preventDefault();
    console.log("end");
    axios({
      method: "POST",
      data: {
        username: registerUsername,
        password: registerPassword,
        email: registerEmail,
      },
      withCredentials: true,
      url: "http://localhost:5000/register",
    }).then((res) => {console.log(res.data);
    
      setdata(res.data);
    }).catch(console.log).finally(() =>{setSubmitted(true)})
  };

	return (
		<section>
			<Modal visible={visiblemodal} effect="fadeInUp" onClickAway={closeModal}>
				<Container style={{ marginTop: '-10%', marginBottom: '4%' }} component="main" maxWidth="sm">
					<img
						style={{
							width: '3%',
							position: 'absolute',
							right: '3%',
							top: '3%',
							cursor: 'pointer'
						}}
						src={close}
						alt={'closeButton'}
						onClick={() => {
							props.history.push('/');
						}}
					/>

					<CssBaseline />
					<OuterBody name="Sign Up" />
					<form className={classes.form} onSubmit={register} noValidate>
						<Grid container spacing={2}>
							<FormInput
								id="uName"
								label="User Name"
								name="user"
								autoComplete="user name"
								// handleChange={Changer}
								onChange={(e) => setRegisterUsername(e.target.value)}
							/>

							<FormInput
								id="email"
								label="Email Address"
								name="email"
								autoComplete="email"
								// handleChange={Changer}
								onChange={(e) => setRegisterEmail(e.target.value)}
							/>

              <FormInput
                name='password'
                label='Password'
                type='password'
                id='password'
                autoComplete='current-password'
                // handleChange={Changer}
                onChange={(e) => setRegisterPassword(e.target.value)}
              />
            </Grid>
            <br />
            <div>
            <FormButton> Sign Up</FormButton>
          
            {submitted ? (data ? console.log("Submitted") : console.log("Not Submitted")) : null}
            </div>
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
