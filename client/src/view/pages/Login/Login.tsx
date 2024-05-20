import {Component} from "react";
import {Link} from "react-router-dom";

export class Login extends Component {
    render() {
        return (
            <div className="flex flex-wrap justify-center min-h-screen bg-[#444544]">
                <div className="w-96 p-8 m-auto bg-white rounded-md shadow-[#000] shadow-2xl">
                    <h1 className="text-3xl font-semibold text-center text-[#2cc1fc] uppercase">
                        Sign in
                    </h1>
                    <form className="mt-6">
                        <div className="mb-2">
                            <label
                                className="block text-sm font-semibold text-gray-800">
                                User Name
                            </label>
                            <input type="text"
                                   className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:border-[#2cc1fc]
                                    focus:ring-[#2cc1fc] focus:outline-none focus:ring focus:ring-opacity-40"
                                   name="uname"/>
                        </div>
                        <div className="mb-2">
                            <label
                                className="block text-sm font-semibold text-gray-800">
                                Password
                            </label>
                            <input
                                type="password"
                                className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:border-[#2cc1fc]
                                 focus:ring-[#2cc1fc] focus:outline-none focus:ring focus:ring-opacity-40"
                                name="password"/>
                        </div>
                        <a href="#"
                           className="text-xs text-[#2cc1fc] hover:underline hover:font-bold">
                            Forget Password?
                        </a>
                        <div className="mt-6">
                            <button
                                className="w-full px-4 py-2 tracking-wide text-[#e6f0e6] transition-colors duration-200 transform
                                bg-[#2cc1fc] rounded-md hover:bg-white hover:text-black hover:border-black border-[1px]"
                            >Login
                            </button>
                        </div>
                    </form>

                    <div className="relative flex items-center justify-center w-full mt-6 border border-t"></div>

                    <p className="mt-6 text-xs font-light text-center text-gray-700">
                        Don't have an account? <br/> Sign up for a free account at our store. Registration is quick and
                        easy. It allows you to be able to order from our shop. To start shopping click register.
                    </p>

                    <Link to="/signup">
                        <button
                            className="mt-6 w-full px-4 py-2 tracking-wide text-[#e6f0e6] transition-colors duration-200 transform bg-[#2cc1fc] rounded-md hover:bg-white hover:text-black hover:border-black border-[1px]">
                            Create an Account
                        </button>
                    </Link>

                    <h1 className="mt-2 text-xs text-center text-gray-700 uppercase font-bold">
                        or
                    </h1>

                    <div className="mt-2 flex items-center justify-between">
                        <span className="border border-b w-1/5 md:w-4/12"></span>
                        <Link to="/" className="text-decoration-none">
                            <small
                               className="text-xs text-[#2cc1fc] hover:underline hover:font-bold">
                                View Home
                            </small>
                        </Link>
                        <span className="border border-b w-1/5 md:w-4/12"></span>
                    </div>
                </div>
            </div>
        );
    }
}
