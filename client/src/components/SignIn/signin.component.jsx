import React, { useState } from "react";
import Modal from "react-awesome-modal";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import FormInput from "../SignUp/InputElement";
import FormButton from "../SignUp/Button";
import OuterBody from "../SignUp/OuterPart";
import useStyles from "../SignUp/useStyles";
import axios from "axios";
import close from "../../images/close.png";
import Messages from '../awesome-modal/awesome-modal.component';
import '../SignUp/signup.css';

const SignIn = (props) => {
  const [visiblemodal, setvisiblemodal] = useState(true);
  const classes = useStyles();

  const closeModal = () => {
    setvisiblemodal(true);
  };

  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [msg, setMsg] = useState("");
  const [nextRoute, setNextRoute] = useState("");
  const [submitted , setSubmitted] = useState(false);

  const login = (e) => {
    e.preventDefault();
    axios({
      method: "POST",
      data: {
        username: loginUsername,
        password: loginPassword,
      },
      withCredentials: true,
      url: "http://localhost:5000/login",
    })
    .then(({ data }) => {
      console.log(data);
      setMsg(data.msg);
      data.nextRoute ? setNextRoute(data.nextRoute) : setNextRoute("/signin");
    })
    .catch(console.log)
    .finally(() => setSubmitted(true))
  };

  return (
    <>
    <div className="bg-cover"></div>
    <section>
      <Modal visible={visiblemodal} effect='fadeInUp' onClickAway={closeModal}>
        <Container style={{ marginTop: "-10%", marginBottom: "4%" }}>
          <img
            style={{
              width: "3%",
              position: "absolute",
              right: "3%",
              top: "3%",
              cursor: "pointer",
            }}
            src={close}
            alt={"closeButton"}
            onClick={() => {
              props.history.push("/");
            }}
          />

          <CssBaseline />

          <OuterBody name='Sign In' />
          <form className={classes.form} onSubmit={login} noValidate>
            <Grid container spacing={2}>
              <FormInput
                id='uName'
                label='User Name'
                name='user'
                autoComplete='user name'
                onChange={(e) => setLoginUsername(e.target.value)}
              />

              <FormInput
                name='password'
                label='Password'
                type='password'
                id='password'
                autoComplete='current-password'
                onChange={(e) => setLoginPassword(e.target.value)}
              />
            </Grid>
            <br />
            <FormButton>Sign In</FormButton>
            {
              submitted
              ? <Messages status={msg} callback={() => props.history.push(nextRoute)} />
              : null
            }
          </form>
        </Container>
      </Modal>
    </section>
    </>
  );
};
export default SignIn;
