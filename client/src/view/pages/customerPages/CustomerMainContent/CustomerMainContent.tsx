import {Component} from "react";
import {Route, Routes} from "react-router-dom";
import {CustomerDashboard} from "../CustomerDashboard/CustomerDashboard";
import {CustomerShoppingCart} from "../CustomerShoppingCart/CustomerShoppingCart";
import {ModifyCart} from "../../../common/ModifyCart/ModifyCart";

export class CustomerMainContent extends Component {
    render() {
        return (
            <div className="mx-auto">
                <Routes>
                    <Route path="/" Component={CustomerDashboard}></Route>
                    <Route path="/cart" element={<CustomerShoppingCart itemsList={ModifyCart.itemsList}/>}></Route>
                </Routes>
            </div>
        );
    }
}
