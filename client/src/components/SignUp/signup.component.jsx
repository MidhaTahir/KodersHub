import React, { useState } from "react";
import Modal from "react-awesome-modal";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import useStyles from "./style";
import axios from "axios";

const SignIn = (props) => {
  const [visiblemodal, setvisiblemodal] = useState(true);
  const classes = useStyles();

  const closeModal = () => {
    setvisiblemodal(false);
  };

  //TODO change newUser according to user form submission
  const postData = (e) => {
    let user = {
      newUser: {
        fname: "Fi",
        lname: "Willi",
        email: "hash@yahoo.com",
        pwd: "sfdsdfsd",
        gender: "M",
      },
    };
    e.preventDefault();
    console.log("Fetching started");
    console.log(user);
    axios
      .post("/adduser", user)
      .then((res) => res.data)
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  return (
    <section>
      <Modal
        visible={visiblemodal}
        width='45%'
        height='90%'
        effect='fadeInUp'
        onClickAway={closeModal}
      >
        <Container component='main' maxWidth='xs'>
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component='h1' variant='h5'>
              Sign up
            </Typography>
            <form className={classes.form} noValidate>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete='fname'
                    name='firstName'
                    variant='outlined'
                    required
                    fullWidth
                    id='firstName'
                    label='First Name'
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant='outlined'
                    required
                    fullWidth
                    id='lastName'
                    label='Last Name'
                    name='lastName'
                    autoComplete='lname'
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant='outlined'
                    required
                    fullWidth
                    id='email'
                    label='Email Address'
                    name='email'
                    autoComplete='email'
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant='outlined'
                    required
                    fullWidth
                    name='password'
                    label='Password'
                    type='password'
                    id='password'
                    autoComplete='current-password'
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant='outlined'
                    required
                    fullWidth
                    name='password'
                    label='Confirm Password'
                    type='password'
                    id='conf_password'
                    autoComplete='current-password'
                  />
                </Grid>
              </Grid>
              <Button
                type='submit'
                fullWidth
                variant='contained'
                color='primary'
                className={classes.submit}
                onClick={(e) => postData(e)}
              >
                Sign Up
              </Button>
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
          </div>
        </Container>
      </Modal>
    </section>
  );
};

export default SignIn;
