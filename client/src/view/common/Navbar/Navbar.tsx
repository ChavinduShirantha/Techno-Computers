import {Component} from "react";
import logo from '../../../images/logo.png'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faSignInAlt,
    faUserPlus,
    faShoppingCart,
    faHome,
    faInfoCircle,
    faContactBook
} from '@fortawesome/free-solid-svg-icons'

export class Navbar extends Component {
    render() {
        return (
            <div className="p-2 bg-[#444544] flex justify-between">

                <div className="flex">
                    <img className="h-16 ml-6 pt-1 hover:scale-110 hover:cursor-pointer" src={logo}
                         alt=""/>
                    <h1 className="ml-2 mt-5 uppercase text-[18px] text-[#0af] font-bold">Techno computers</h1>
                </div>


                <ul className="list-none flex mt-1">
                    <li className="mr-8 text-[16px] mt-3 text-[#e6f0e6] hover:text-[#2cc1fc] hover:scale-110 hover:cursor-pointer">
                        <FontAwesomeIcon icon={faHome}/> Home
                    </li>
                    <li className="mr-8 text-[16px] mt-3 text-[#e6f0e6] hover:text-[#2cc1fc] hover:scale-110 hover:cursor-pointer">
                        <FontAwesomeIcon icon={faInfoCircle}/> About Us
                    </li>
                    <li className="mr-8 text-[16px] mt-3 text-[#e6f0e6] hover:text-[#2cc1fc] hover:scale-110 hover:cursor-pointer">
                        <FontAwesomeIcon icon={faContactBook}/> Contact Us
                    </li>
                    <li className="mr-8 text-[16px] mt-3 text-[#e6f0e6] hover:text-[#2cc1fc] hover:scale-110 hover:cursor-pointer">
                        <FontAwesomeIcon icon={faShoppingCart}/> My Cart
                    </li>
                </ul>

                <div>

                    <button className="text-[14px] font-bold text-[#e6f0e6]
                                   bg-[#2cc1fc] pl-3 pr-3 h-10 mt-3
                                   hover:text-tertiary rounded mr-5 hover:scale-110">
                        <FontAwesomeIcon icon={faSignInAlt}/> Sign In
                    </button>


                    <button className="text-[14px] font-bold text-[#e6f0e6]
                                   bg-[#36C64C] pl-3 pr-3 h-10 mt-3
                                   hover:text-tertiary rounded hover:scale-110">
                        <FontAwesomeIcon icon={faUserPlus}/> Sign Up
                    </button>

                </div>
            </div>
        );
    }
}
