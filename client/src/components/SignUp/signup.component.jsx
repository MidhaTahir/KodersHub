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
import Messages from '../awesome-modal/awesome-modal.component';
import './signup.css'

const SignUp = (props) => {
	// for modal
  const [ visiblemodal, setvisiblemodal ] = useState(true);
  const [openMsg, handleOpenMsg] = useState(false);
	const classes = useStyles();

	const closeModal = () => {
		setvisiblemodal(true);
	};

  // for db and backend
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [nextRoute, setNextRoute] = useState("");
  const [submitted , setSubmitted] = useState(false)

  const register = (e) => {
    e.preventDefault();
    axios({
      method: "POST",
      data: {
        username: registerUsername,
        password: registerPassword,
        email: registerEmail,
      },
      withCredentials: true,
      url: "/register",
    })
    .then(({ data }) => {
      setMsg(data.msg);
      setNextRoute(data.nextRoute);
    })
    .catch(console.log)
    .finally(() =>{
      setSubmitted(true)
      handleOpenMsg(true);
    })
  };

	return (
    <>
    <div className="bg-cover"></div>
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
            <FormButton style={{backgroundColor:"#D4E8E4"}}> Sign Up</FormButton>
           
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
          {
            submitted 
            ? <Messages 
              status={msg}
              callback={() => props.history.push(nextRoute)}
              open={openMsg}
              handleOpen={handleOpenMsg}
              /> : null
          }
        </Container>
      </Modal>
    </section>
    </>
  );
};

export default SignUp;
