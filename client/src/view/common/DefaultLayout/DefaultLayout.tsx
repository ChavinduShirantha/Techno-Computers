import {Component} from "react";
import {Navbar} from "../Navbar/Navbar";
import {Footer} from "../Footer/Footer";

export class DefaultLayout extends Component {
    render() {
        return (
            <>
                <Navbar/>
                <Footer/>
            </>
        );
    }
}
