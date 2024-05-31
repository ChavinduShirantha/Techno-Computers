import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {DefaultLayout} from "./view/common/DefaultLayout/DefaultLayout";
import {SignUp} from "./view/pages/SignUp/SignUp";
import {Login} from "./view/pages/Login/Login";
import {AdminDefaultLayout} from "./view/pages/adminPages/AdminDefaultLayout/AdminDefaultLayout";
import {CustomerDefaultLayout} from "./view/pages/customerPages/CustomerDefaultLayout/CustomerDefaultLayout";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/*" Component={DefaultLayout}></Route>
                <Route path="/signup" Component={SignUp}></Route>
                <Route path="/login" Component={Login}></Route>

                <Route path="/admin/*"
                       Component={AdminDefaultLayout}>
                </Route>

                <Route path="/customer/*"
                       Component={CustomerDefaultLayout}>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
