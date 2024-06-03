import {Component} from "react";
import {Link} from "react-router-dom";
import logo from "../../../../images/logo.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faBorderAll,
    faShoppingCart,
    faSignOutAlt,
    faUser
} from "@fortawesome/free-solid-svg-icons";

export class CustomerNavBar extends Component {
    render() {
        const signUser = JSON.parse(localStorage.getItem('userName') || '{}');
        return (
            <div className="p-2 bg-[#444544] flex justify-between">

                <Link to="/" className="text-decoration-none">
                    <div className="flex">
                        <img className="h-16 ml-6 pt-1 hover:scale-110" src={logo}
                             alt=""/>
                        <h1 className="ml-2 mt-4 uppercase text-[18px] text-[#0af] font-bold">Techno computers</h1>
                    </div>
                </Link>

                <ul className="list-inline flex mt-1">
                    <Link to="/customer" className="text-decoration-none">
                        <li className="mr-8 text-[16px] mt-3 text-[#e6f0e6] hover:text-[#2cc1fc] hover:scale-110 hover:cursor-pointer">
                            <FontAwesomeIcon icon={faBorderAll}/> Dashboard
                        </li>
                    </Link>
                    <Link to="/customer/cart" className="text-decoration-none">
                        <li className="mr-8 text-[16px] mt-3 text-[#e6f0e6] hover:text-[#2cc1fc] hover:scale-110 hover:cursor-pointer">
                            <FontAwesomeIcon icon={faShoppingCart}/> My Cart
                        </li>
                    </Link>
                </ul>

                <div>
                    <label className="text-[24px] text-[#e6f0e6] pr-3"><FontAwesomeIcon
                        icon={faUser}/></label>
                    <label className="text-[18px] text-[#e6f0e6] pr-3" id="cusName">{signUser}</label>
                    <Link to="/">
                        <button className="text-[14px] font-bold text-[#e6f0e6]
                                   bg-[#2cc1fc] pl-3 pr-3 h-10 mt-3
                                   hover:text-tertiary rounded mr-5 hover:scale-110">
                            <FontAwesomeIcon icon={faSignOutAlt}/> Log Out
                        </button>
                    </Link>
                </div>
            </div>
        );
    }
}
