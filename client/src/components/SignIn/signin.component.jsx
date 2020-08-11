import React, { useState, useContext } from "react";
import Modal from "react-awesome-modal";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import FormInput from "../SignUp/InputElement";
import FormButton from "../SignUp/Button";
import OuterBody from "../SignUp/OuterPart";
import useStyles from "../SignUp/useStyles";
import UserContext from "../../context/userContext";
import axios from "axios";
import close from '../../images/close.png'

const SignIn = (props) => {
  const [visiblemodal, setvisiblemodal] = useState(true);
  const classes = useStyles();

  const closeModal = () => {
    setvisiblemodal(false);
  };

  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [,setUser] = useContext(UserContext);

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
    }).then((res) => {
      console.log(res);
      getUser();
    });
  };

  const getUser = () => {
    console.log("get user req is served");
    axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:5000/user",
    }).then((res) => {
      setUser(res.data);
    });
  };

  return (
    <section>
      <Modal visible={visiblemodal} effect='fadeInUp' onClickAway={closeModal}>
        <Container style={{ marginTop: "-10%", marginBottom: "4%" }}>

        <img style={{width: "7%", position: "absolute" , right:"3%", top:"2%" ,
         cursor:"pointer"}} src={close} onClick={() => { props.history.push("/")}} alt="close icon" />

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
          </form>
        </Container>
      </Modal>
    </section>
  );
};
export default SignIn;
