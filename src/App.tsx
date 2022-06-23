import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Homepage/Home";
import Login from "./components/Loginpage/Login";
import Navbar from "./components/Navbar/Navbar";
import { myContext } from "./Context";
function App() {
  const userObject = useContext(myContext);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {userObject ? null : <Route path="/login" element={<Login />} />}
      </Routes>
    </>
  );
}

export default App;
