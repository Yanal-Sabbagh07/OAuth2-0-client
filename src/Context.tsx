import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import { AxiosResponse } from "axios";

export const myContext = createContext({});
export default function Context(props: any) {
  const [userObject, setUserObject] = useState<any>();

  useEffect(() => {
    axios
      .get("https://oauth2-0.herokuapp.com/getuser", {
        withCredentials: true,
      })
      .then((res: AxiosResponse) => {
        console.log(res.data);
        if (res.data) {
          setUserObject(res.data);
        }
      });
  }, []);
  return (
    <myContext.Provider value={userObject}>{props.children}</myContext.Provider>
  );
}
