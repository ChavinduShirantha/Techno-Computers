import {Component} from "react";
import {AdminNavBar} from "../AdminNavBar/AdminNavBar";
import {AdminFooter} from "../AdminFooter/AdminFooter";
import {AdminMainContent} from "../AdminMainContent/AdminMainContent";
import {AdminSideBar} from "../AdminSideBar/AdminSideBar";
import {AdminDashboard} from "../AdminDashboard/AdminDashboard";

export class AdminDefaultLayout extends Component {
    render() {
        return (
            <>
                <AdminNavBar/>
                <div className="mx-auto">
                    <div className="flex flex-row">
                        <div className="flex basis-1/6 bg-[#444544]">
                            <AdminSideBar/>
                        </div>
                        <div className="flex basis-5/6 ">
                            <AdminMainContent/>
                        </div>
                    </div>
                </div>
                <AdminFooter/>
            </>
        );
    }
}
