import {Component} from "react";
import {CustomerNavBar} from "../CustomerNavBar/CustomerNavBar";
import {CustomerFooter} from "../CustomerFooter/CustomerFooter";
import {CustomerMainContent} from "../CustomerMainContent/CustomerMainContent";

export class CustomerDefaultLayout extends Component {
    render() {
        return (
            <>
                <CustomerNavBar/>
                <CustomerMainContent/>
                <CustomerFooter/>
            </>
        );
    }
}
