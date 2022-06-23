import React, { useContext } from "react";
import { myContext } from "../../Context";
import { IUser } from "../../types/maintypes";
import styles from "./Home.module.css";

const Home = () => {
  const userObject = useContext(myContext) as IUser;

  return (
    <div className={styles.homePage}>
      {userObject && userObject.googleId ? (
        <h1>
          Welcome back <span>{userObject.username.split(" ", 1)}</span>
        </h1>
      ) : userObject && userObject.githubId ? (
        <h1>
          Welcome back <span>{userObject.username.split("-", 1)}</span>
        </h1>
      ) : (
        <div>
          <h1>Welcome To MY Website</h1>
          <p>please login to your account to continue </p>
        </div>
      )}
    </div>
  );
};

export default Home;
