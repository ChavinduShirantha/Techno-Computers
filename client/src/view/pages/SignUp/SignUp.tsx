import {Component} from "react";
import {Link} from "react-router-dom";

export class SignUp extends Component {
    render() {
        return (
            <div className="flex flex-wrap justify-center min-h-screen bg-[#444544] ">
                <div className="w-1/2 p-8 m-auto bg-white rounded-md shadow-[#000] shadow-2xl">
                    <h1 className="text-3xl font-semibold text-center text-[#2cc1fc] uppercase">
                        Create Account
                    </h1>
                    <form className="mt-6">
                        <div className="flex flex-row gap-10 ">
                            <div className="mb-2 basis-1/2 ">
                                <label
                                    className="block text-sm font-semibold text-gray-800">
                                    First Name
                                </label>
                                <input type="text"
                                       className="block w-full px-4 py-2 mt-2 bg-white border rounded-md
                                       focus:border-[#2cc1fc] focus:ring-[#2cc1fc] focus:outline-none
                                       focus:ring focus:ring-opacity-40"
                                       name="firstName"/>
                            </div>
                            <div className="mb-2 basis-1/2">
                                <label
                                    className="block text-sm font-semibold text-gray-800">
                                    Last Name
                                </label>
                                <input
                                    type="text"
                                    className="block w-full px-4 py-2 mt-2  bg-white border rounded-md
                                    focus:border-[#2cc1fc] focus:ring-[#2cc1fc] focus:outline-none
                                    focus:ring focus:ring-opacity-40"
                                    name="lastName"/>
                            </div>
                        </div>
                        <div className="flex flex-row gap-10">
                            <div className="mb-2 basis-1/2">
                                <label
                                    className="block text-sm font-semibold text-gray-800">
                                    Contact
                                </label>
                                <input type="tel"
                                       className="block w-full px-4 py-2 mt-2 bg-white border rounded-md
                                       focus:border-[#2cc1fc] focus:ring-[#2cc1fc] focus:outline-none
                                       focus:ring focus:ring-opacity-40"
                                       name="contact"/>
                            </div>
                            <div className="mb-2 basis-1/2">
                                <label
                                    className="block text-sm font-semibold text-gray-800">
                                    Date Of Birth
                                </label>
                                <input
                                    type="date"
                                    className="block w-full px-4 py-2 mt-2  bg-white border rounded-md
                                    focus:border-[#2cc1fc] focus:ring-[#2cc1fc] focus:outline-none
                                    focus:ring focus:ring-opacity-40"
                                    name="dateOfBirth"/>
                            </div>
                        </div>
                        <div className="flex flex-row gap-10">
                            <div className="mb-2 basis-1/2">
                                <label
                                    className="block text-sm font-semibold text-gray-800">
                                    Address
                                </label>
                                <input type="text"
                                       className="block w-full px-4 py-2 mt-2 bg-white border rounded-md
                                       focus:border-[#2cc1fc] focus:ring-[#2cc1fc] focus:outline-none
                                       focus:ring focus:ring-opacity-40"
                                       name="address"/>
                            </div>
                            <div className="mb-2 basis-1/2">
                                <label
                                    className="block text-sm font-semibold text-gray-800">
                                    NIC
                                </label>
                                <input
                                    type="text"
                                    className="block w-full px-4 py-2 mt-2  bg-white border rounded-md
                                    focus:border-[#2cc1fc] focus:ring-[#2cc1fc] focus:outline-none
                                    focus:ring focus:ring-opacity-40"
                                    name="nic"/>
                            </div>
                        </div>
                        <div className="flex flex-row gap-10">
                            <div className="mb-2 basis-1/2">
                                <label
                                    className="block text-sm font-semibold text-gray-800">
                                    Country
                                </label>
                                <input type="text"
                                       className="block w-full px-4 py-2 mt-2 bg-white border rounded-md
                                       focus:border-[#2cc1fc] focus:ring-[#2cc1fc] focus:outline-none
                                       focus:ring focus:ring-opacity-40"
                                       name="country"/>
                            </div>
                            <div className="mb-2 basis-1/2">
                                <label
                                    className="block text-sm font-semibold text-gray-800">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    className="block w-full px-4 py-2 mt-2  bg-white border rounded-md
                                    focus:border-[#2cc1fc] focus:ring-[#2cc1fc] focus:outline-none
                                    focus:ring focus:ring-opacity-40"
                                    name="email"/>
                            </div>
                        </div>
                        <div className="flex flex-row gap-10">
                            <div className="mb-2 basis-1/2">
                                <label
                                    className="block text-sm font-semibold text-gray-800">
                                    User Name
                                </label>
                                <input type="text"
                                       className="block w-full px-4 py-2 mt-2 bg-white border rounded-md
                                       focus:border-[#2cc1fc] focus:ring-[#2cc1fc] focus:outline-none
                                       focus:ring focus:ring-opacity-40"
                                       name="userName"/>
                            </div>
                            <div className="mb-2 basis-1/2">
                                <label
                                    className="block text-sm font-semibold text-gray-800">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    className="block w-full px-4 py-2 mt-2  bg-white border rounded-md
                                    focus:border-[#2cc1fc] focus:ring-[#2cc1fc] focus:outline-none
                                    focus:ring focus:ring-opacity-40"
                                    name="password"/>
                            </div>
                        </div>
                        <div className="mt-6 flex justify-center">
                            <Link to="/">
                                <button
                                    className="w-52 font-bold px-4 py-2 uppercase tracking-wide text-white
                                transition-colors duration-200 transform bg-[#2cc1fc] rounded-md
                                hover:bg-white hover:text-black hover:border-black border-[1px]"
                                >Create Account
                                </button>
                            </Link>
                        </div>
                    </form>
                    <div className="mt-6 flex items-center justify-between">
                        <span className="border border-b w-1/5 md:w-5/12"></span>
                        <Link to="/" className="text-decoration-none">
                            <small
                               className="text-sm text-[#2cc1fc] hover:underline hover:font-bold">
                                View Home
                            </small>
                        </Link>
                        <span className="border border-b w-1/5 md:w-5/12"></span>
                    </div>
                </div>
            </div>
        );
    }
}
