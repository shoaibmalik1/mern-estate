// import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";


import Home from "./Pages/Home";
import Signin from "./Pages/Signin";
import About from "./Pages/About";
import Profile from "./Pages/Profile";
import SignUP from "./Pages/SignUP";


export default function App() {
  return (
    <div>
      {/* <Home/> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="Sign-In" element={<Signin/>}></Route>
          <Route path="/Sign-UP" element={<SignUP/>}></Route>
          <Route path="/About" element={<About/>}></Route>
          <Route path="/Profile" element={<Profile/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
