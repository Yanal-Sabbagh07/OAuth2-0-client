import React from "react";
import googleLogo from "../../assets/imgs/google-logo.png";
import githubLogo from "../../assets/imgs/github-logo.png";
import styles from "./Login.module.css";
const Login = () => {
  const googleLogin = () => {
    window.open("https://oauth2-0.herokuapp.com/auth/google", "_self");
  };
  const githubLogin = () => {
    window.open("https://oauth2-0.herokuapp.com/auth/github", "_self");
  };
  return (
    <div className={styles.loginPage}>
      <div className={styles.loginForm}>
        <h1>Login to your account</h1>
        <div className={styles.googleContainer} onClick={googleLogin}>
          <img src={googleLogo} alt="google-logo" />
          <p>Google</p>
        </div>
        <div className={styles.googleContainer} onClick={githubLogin}>
          <img src={githubLogo} alt="github-logo" />
          <p>Github</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
