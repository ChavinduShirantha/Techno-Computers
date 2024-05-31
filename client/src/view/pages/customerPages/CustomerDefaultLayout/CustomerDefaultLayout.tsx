import {Component} from "react";
import {CustomerNavBar} from "../CustomerNavBar/CustomerNavBar";
import {CustomerFooter} from "../CustomerFooter/CustomerFooter";

export class CustomerDefaultLayout extends Component {
    render() {
        return (
            <>
                <CustomerNavBar/>
                <CustomerFooter/>
            </>
        );
    }
}
