import {Component} from "react";

export class ShoppingCart extends Component {
    render() {
        return (
            <div className="flex justify-center items-start pt-10 pb-10 bg-[url(images/main_bg.jpg)] h-auto">
                <div className="bg-[#232323] w-full mx-16 justify-center pr-10 pl-10 rounded-4">
                    <div className="pb-2 pt-10 flex">
                        <label className="text-[20px] pt-3 text-white font-bold px-2 pr-5 uppercase">Order ID :</label>
                        <input type="text"
                               className="block w-1/6 px-4 py-2 mt-2 bg-[#444544] text-white border
                                       rounded-md focus:border-[#2cc1fc] focus:ring-[#2cc1fc] focus:outline-none
                                       focus:ring focus:ring-opacity-40" placeholder="ORD-0001"
                               name="oid"
                        />
                    </div>

                    <table className="w-full border mt-10 border-gray-500">
                        <thead className="h-20 border border-gray-500">
                        <tr className="text-white text-center">
                            <th className="text-[14px] font-bold px-1 uppercase border border-gray-500">Id</th>
                            <th className="text-[14px] font-bold px-1 uppercase border border-gray-500">Image</th>
                            <th className="text-[14px] font-bold px-1 uppercase border border-gray-500">Product Name
                            </th>
                            <th className="text-[14px] font-bold px-1 uppercase border border-gray-500">Unit Price</th>
                            <th className="text-[14px] font-bold px-1 uppercase border border-gray-500">Qty</th>
                            <th className="text-[14px] font-bold px-1 uppercase border border-gray-500">Action</th>
                            <th className="text-[14px] font-bold px-1 uppercase border border-gray-500">Total Price</th>
                        </tr>
                        </thead>
                        <tbody>

                        <tr>
                            <td colSpan={6} className="h-36 px-1">
                                <p className="text-center text-[30px] text-white font-bold">You Have No Items In
                                    Your Shopping Cart.</p>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <div>
                        <h1 className="float-left text-[20px] mt-10 font-bold px-1 uppercase text-white">Total : <span
                            className="text-[20px] mt-10 font-bold px-1 uppercase text-white">{0 + ".00 LKR"}</span>
                        </h1>
                        <button className="float-right mt-10 mb-10 pl-6 pr-6 pt-2 pb-2 bg-[#2cc1fc] text-[16px]
                    font-bold text-[#e6f0e6] rounded uppercase border-[2px] border-[#2cc1fc]
                    hover:bg-[#444544] hover:text-[#2cc1fc] hover:border-[2px]
                    hover:border-[#2cc1fc] hover:scale-110 ">Purchase
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}
