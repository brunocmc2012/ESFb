import React, { useContext } from "react";
import FacebookLogin from "react-facebook-login";
import { SiFacebook } from "react-icons/si";
import { AuthContext } from "../../contexts/auth";
import GlobalStyles from "../../styles/global";
import * as C from "./styles";

const Login = () => {
  const { signInWithFacebook, signInWithGoogle } = useContext(AuthContext);

  return (
    <>
      <C.Container>
        <SiFacebook />
        {/* <FacebookLogin
          appId="731167498839826"
          fields="name,email,picture"
          callback={signInWithFacebook}
        /> */}
        <C.ButtonLogin onClick={signInWithGoogle}>
          Login with Google
        </C.ButtonLogin>
      </C.Container>
      <GlobalStyles />
    </>
  );
};

export default Login;
