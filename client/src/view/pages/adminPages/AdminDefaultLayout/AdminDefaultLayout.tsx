import {Component} from "react";
import {AdminNavBar} from "../AdminNavBar/AdminNavBar";
import {AdminFooter} from "../AdminFooter/AdminFooter";

export class AdminDefaultLayout extends Component {
    render() {
        return (
            <>
                <AdminNavBar/>
                <AdminFooter/>
            </>
        );
    }
}
