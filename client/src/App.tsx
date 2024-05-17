import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Navbar} from "./view/common/Navbar/Navbar";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" Component={Navbar}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
