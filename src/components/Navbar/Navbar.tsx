import React, { useContext } from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { IUser } from "../../types/maintypes";
import axios, { AxiosResponse } from "axios";
import { myContext } from "../../Context";

export default function NavBar() {
  const userObject = useContext(myContext) as IUser;

  const logout = () => {
    axios
      .get("https://oauth2-0.herokuapp.com/logout", {
        withCredentials: true,
      })
      .then((res: AxiosResponse) => {
        if (res.data === "done") {
          window.location.href = "/login";
        }
      });
  };

  return (
    <div className={styles.navBarWrapper}>
      <ul className={styles.navBar}>
        <li>
          <Link to="/">Home</Link>
        </li>
        {userObject ? (
          <li onClick={logout}>Logout </li>
        ) : (
          <li>
            <Link to="/login">Login</Link>
          </li>
        )}
      </ul>
    </div>
  );
}
