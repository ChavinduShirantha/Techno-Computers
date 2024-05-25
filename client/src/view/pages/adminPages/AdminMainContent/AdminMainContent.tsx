import {Component} from "react";
import {Route, Routes} from "react-router-dom";
import {AdminDashboard} from "../AdminDashboard/AdminDashboard";
import {ManageCustomers} from "../ManageCustomers/ManageCustomers";

export class AdminMainContent extends Component {
    render() {
        return (
            <div className="mx-auto">
                <Routes>
                    <Route path="/" Component={AdminDashboard}></Route>
                    <Route path="/manageCustomers" Component={ManageCustomers}></Route>
                </Routes>
            </div>
        );
    }
}
