import {Component} from "react";
import {Route, Routes} from "react-router-dom";
import {CustomerDashboard} from "../CustomerDashboard/CustomerDashboard";

export class CustomerMainContent extends Component {
    render() {
        return (
            <div className="mx-auto">
                <Routes>
                    <Route path="/" Component={CustomerDashboard}></Route>
                </Routes>
            </div>
        );
    }
}
