import React from "react";
import Login from "./pages/Auth-page/Login";
import App from "./App";
import { Routes, Route} from "react-router-dom";

export default function Main(){
    return(
        <>
          <Routes>
            <Route path="/" element={<App/>}></Route>
            <Route Path="/Login" element={<Login />} />
            <Route path="/Sign-up" element={<Signup/>}/>
          </Routes>
        </>
    )
}