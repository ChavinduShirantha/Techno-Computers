import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {DefaultLayout} from "./view/common/DefaultLayout/DefaultLayout";
import {SignUp} from "./view/pages/SignUp/SignUp";
import {Login} from "./view/pages/Login/Login";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/*" Component={DefaultLayout}></Route>
                <Route path="/signup" Component={SignUp}></Route>
                <Route path="/login" Component={Login}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
