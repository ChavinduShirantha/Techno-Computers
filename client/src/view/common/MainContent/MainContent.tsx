import {Component} from "react";
import {Route, Routes} from "react-router-dom";
import {Home} from "../../pages/Home/Home";
import {About} from "../../pages/About/About";
import {Contact} from "../../pages/Contact/Contact";
import {ShoppingCart} from "../../pages/ShoppingCart/ShoppingCart";

export class MainContent extends Component {
    render() {
        return (
            <div className="mx-auto">
                <Routes>
                    <Route path="/" Component={Home}></Route>
                    <Route path="/about" Component={About}></Route>
                    <Route path="/contact" Component={Contact}></Route>
                    <Route path="/cart" Component={ShoppingCart}></Route>
                </Routes>
            </div>
        );
    }
}
