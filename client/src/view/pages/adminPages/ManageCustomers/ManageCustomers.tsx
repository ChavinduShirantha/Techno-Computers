import {Component} from "react";

export class ManageCustomers extends Component {
    render() {
        return (
            <div className="flex flex-wrap justify-center min-h-screen w-full mt-20">
                <div className="w-full p-10 m-auto bg-white rounded-xl shadow-[#000] shadow-2xl">
                    <h1 className="text-3xl font-semibold text-center text-[#2cc1fc] uppercase">
                        Manage Customers
                    </h1>
                    <form className="mt-6">
                        <div className="flex justify-center">
                            <div className="mb-2 w-1/2 ">
                                <label
                                    className="block text-sm font-semibold text-gray-800">
                                    User ID
                                </label>
                                <input type="text"
                                       className="block w-full px-4 py-2 mt-2 bg-white border
                                                   rounded-md focus:border-[#2cc1fc] focus:ring-[#2cc1fc]
                                                   focus:outline-none focus:ring focus:ring-opacity-40"
                                       name="id"/>
                            </div>
                            <button
                                className="w-1/6 font-bold mt-6 ml-2 text-[14px] h-12  uppercase
                                            tracking-wide text-[#e6f0e6] transition-colors duration-200 transform
                                            bg-[#2cc1fc] rounded-md hover:bg-white hover:text-[#2cc1fc]
                                            hover:border-[#2cc1fc] border-[2px]">
                                Search
                            </button>
                        </div>
                        <div className="flex flex-row gap-10">
                            <div className="mb-2 basis-1/2 ">
                                <label
                                    className="block text-sm font-semibold text-gray-800">
                                    First Name
                                </label>
                                <input type="text"
                                       className="block w-full px-4 py-2 mt-2 bg-white border
                                                   rounded-md focus:border-[#2cc1fc] focus:ring-[#2cc1fc]
                                                   focus:outline-none focus:ring focus:ring-opacity-40"
                                       name="firstName"/>
                            </div>
                            <div className="mb-2 basis-1/2">
                                <label
                                    className="block text-sm font-semibold text-gray-800">
                                    Last Name
                                </label>
                                <input
                                    type="text"
                                    className="block w-full px-4 py-2 mt-2  bg-white border
                                                rounded-md focus:border-[#2cc1fc] focus:ring-[#2cc1fc]
                                                focus:outline-none focus:ring focus:ring-opacity-40"
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
                                       className="block w-full px-4 py-2 mt-2 bg-white border
                                                   rounded-md focus:border-[#2cc1fc] focus:ring-[#2cc1fc]
                                                   focus:outline-none focus:ring focus:ring-opacity-40"
                                       name="contact"/>
                            </div>
                            <div className="mb-2 basis-1/2">
                                <label
                                    className="block text-sm font-semibold text-gray-800">
                                    Date Of Birth
                                </label>
                                <input
                                    type="date"
                                    className="block w-full px-4 py-2 mt-2  bg-white border
                                                rounded-md focus:border-[#2cc1fc] focus:ring-[#2cc1fc]
                                                focus:outline-none focus:ring focus:ring-opacity-40"
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
                                       className="block w-full px-4 py-2 mt-2 bg-white border
                                                   rounded-md focus:border-[#2cc1fc] focus:ring-[#2cc1fc]
                                                   focus:outline-none focus:ring focus:ring-opacity-40"
                                       name="address"/>
                            </div>
                            <div className="mb-2 basis-1/2">
                                <label
                                    className="block text-sm font-semibold text-gray-800">
                                    NIC
                                </label>
                                <input
                                    type="text"
                                    className="block w-full px-4 py-2 mt-2  bg-white border
                                                rounded-md focus:border-[#2cc1fc] focus:ring-[#2cc1fc]
                                                focus:outline-none focus:ring focus:ring-opacity-40"
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
                                       className="block w-full px-4 py-2 mt-2 bg-white border
                                                   rounded-md focus:border-[#2cc1fc] focus:ring-[#2cc1fc]
                                                   focus:outline-none focus:ring focus:ring-opacity-40"
                                       name="country"/>
                            </div>
                            <div className="mb-2 basis-1/2">
                                <label
                                    className="block text-sm font-semibold text-gray-800">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    className="block w-full px-4 py-2 mt-2  bg-white border
                                                rounded-md focus:border-[#2cc1fc] focus:ring-[#2cc1fc]
                                                focus:outline-none focus:ring focus:ring-opacity-40"
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
                                       className="block w-full px-4 py-2 mt-2 bg-white border
                                                   rounded-md focus:border-[#2cc1fc] focus:ring-[#2cc1fc]
                                                   focus:outline-none focus:ring focus:ring-opacity-40"
                                       name="userName"/>
                            </div>
                            <div className="mb-2 basis-1/2">
                                <label
                                    className="block text-sm font-semibold text-gray-800">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    className="block w-full px-4 py-2 mt-2  bg-white border
                                                rounded-md focus:border-[#2cc1fc] focus:ring-[#2cc1fc]
                                                focus:outline-none focus:ring focus:ring-opacity-40"
                                    name="password"/>
                            </div>
                        </div>
                        <div className="mt-6 flex justify-center">
                            <button
                                className="w-52 font-bold m-1 text-[14px] px-4 py-2 uppercase
                                            tracking-wide text-[#e6f0e6] transition-colors duration-200 transform
                                            bg-green-700 rounded-md hover:bg-white hover:text-green-700
                                            hover:border-green-700 border-[2px]">
                                Save Customer
                            </button>
                            <button
                                className="w-52 font-bold m-1 text-[14px] px-4 py-2 uppercase
                                            tracking-wide text-[#e6f0e6] transition-colors duration-200 transform
                                            bg-yellow-400 rounded-md hover:bg-white hover:text-yellow-400
                                            hover:border-yellow-400 border-[2px]">
                                Update Customer
                            </button>
                            <button
                                className="w-52 font-bold m-1 text-[14px] px-4 py-2 uppercase
                                            tracking-wide text-[#e6f0e6] transition-colors duration-200 transform
                                            bg-red-600 rounded-md hover:bg-white hover:text-red-600
                                            hover:border-red-600 border-[2px]">
                                Delete Customer
                            </button>
                            <button
                                className="w-52 font-bold m-1 text-[14px] px-4 py-2 uppercase
                                            tracking-wide text-[#e6f0e6] transition-colors duration-200 transform
                                            bg-[#2cc1fc] rounded-md hover:bg-white hover:text-[#2cc1fc]
                                            hover:border-[#2cc1fc] border-[2px]" >
                                 Get All Customers
                            </button>
                        </div>
                    </form>
                </div>
            </div>

        );
    }
}
