import React from 'react';

const OrdersTable = ({ data }) => {
    return (
        <table className="w-full border mt-2 mb-10 border-gray-500">
            <thead className="h-20 border border-gray-500">
            <tr className="text-black text-center">
                <th className="text-[14px] font-bold px-1 uppercase border border-gray-500">Order
                    ID
                </th>
                <th className="text-[14px] font-bold px-1 uppercase border border-gray-500">Order Date
                </th>
                <th className="text-[14px] font-bold px-1 uppercase border border-gray-500">Total Items
                </th>
                <th className="text-[14px] font-bold px-1 uppercase border border-gray-500">Total</th>
                <th className="text-[14px] font-bold px-1 uppercase border border-gray-500">Customer ID
                </th>
                <th className="text-[14px] font-bold px-1 uppercase border border-gray-500">Customer Name</th>
            </tr>
            </thead>
            <tbody>
            {data.map((data) => (
                <tr key={data.id} className="text-black text-center px-1 h-20 border border-gray-500">
                    <td className="px-1 border border-gray-500">{data.id}</td>
                    <td className="px-1 border border-gray-500">{data.oDate}</td>
                    <td className="px-1 border border-gray-500">{data.totalItems}</td>
                    <td className="px-1 border border-gray-500">{data.total + ".00 LKR"}</td>
                    <td className="px-1 border border-gray-500">{data.cusId}</td>
                    <td className="px-1 border border-gray-500">{data.cusName}</td>
                </tr>
            ))}
            </tbody>
        </table>
    );
};

export default OrdersTable;
