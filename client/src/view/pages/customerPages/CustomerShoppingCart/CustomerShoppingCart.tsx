import {Component} from "react";
import {CartItem} from "../../../../model/CartItem";
import axios from "axios";


interface CustomerShoppingCartProps {
    itemsList: CartItem[];
}

interface CustomerShoppingCartState {
    id: string;
    oDate: string;
    totalItems: number;
    lastTotal: number;
    cusId: string;
    cusName: string;
}

export class CustomerShoppingCart extends Component<CustomerShoppingCartProps, CustomerShoppingCartState> {
    private api: any;

    constructor(props: any) {
        super(props);
        this.api = axios.create({baseURL: `http://localhost:4000`});

        const today = new Date().toISOString().split('T')[0];

        const signUser = JSON.parse(localStorage.getItem('userName') || '{}');

        this.state = {
            id: '',
            oDate: today,
            totalItems: 0,
            lastTotal: 0,
            cusId: '',
            cusName: signUser
        }
        this.handleMessageInputOnChange = this.handleMessageInputOnChange.bind(this);
    }

    componentDidMount() {
        this.getLastId().then(r => console.log("Last ID!" + r));
        this.searchCusId().then(r => console.log("Customer ID!" + r));
    }

    async searchCusId() {
        const {cusName} = this.state;
        try {
            const response = await this.api.post('/users/getCusID', {userName: cusName});
            const {cusId} = response.data;
            this.setState({cusId});
        } catch (error) {
            console.error('Error searching cusId:', error);
        }
    }

    render() {
        let total = 0;
        let totCount = 0;

        this.props.itemsList.forEach(item => {
            total += item.product.price * item.itemCount;
            totCount += item.itemCount;
        });

        if (this.state.lastTotal !== total) {
            this.setState({lastTotal: total});
        }

        if (this.state.totalItems !== totCount) {
            this.setState({totalItems: totCount});
        }

        return (
            <div className="flex justify-center items-start pt-10 pb-10 bg-[url(images/main_bg.jpg)] h-auto">
                <div className="bg-[#232323] w-full mx-16 justify-center pr-10 pl-10 rounded-4">
                    <div className="flex flex-wrap w-full ">
                        <div className="pb-2 pt-10 flex w-1/2 justify-content-around">
                            <label className="text-[18px] pt-3 text-white font-bold px-2 pr-5 uppercase">Order ID
                                :</label>
                            <input type="text"
                                   className="block w-1/4 px-4 py-2 mt-2 bg-[#444544] text-white border
                                       rounded-md focus:border-[#2cc1fc] focus:ring-[#2cc1fc] focus:outline-none
                                       focus:ring focus:ring-opacity-40 text-right" placeholder="1"
                                   name="id" id="id" value={this.state.id}
                            />
                            <label className="text-[18px] pt-3 text-white font-bold px-2 uppercase">Order Date
                                :</label>
                            <input type="date"
                                   className="block w-1/4 px-4 py-2 mt-2 bg-[#444544] text-white border
                                       rounded-md focus:border-[#2cc1fc] focus:ring-[#2cc1fc] focus:outline-none
                                       focus:ring focus:ring-opacity-40 disabled"
                                   name="oDate" id="oDate" value={this.state.oDate}
                            />
                        </div>
                        <div className="pb-2 pt-10 flex w-1/2 justify-content-around">
                            <label className="text-[18px] pt-3 text-white font-bold px-2 pr-5 uppercase">Customer ID
                                :</label>
                            <input type="text"
                                   className="block w-1/4 px-4 py-2 mt-2 bg-[#444544] text-white border text-right
                                       rounded-md focus:border-[#2cc1fc] focus:ring-[#2cc1fc] focus:outline-none
                                       focus:ring focus:ring-opacity-40 disabled"
                                   name="cusId" id="cusId" value={this.state.cusId}
                            />
                            <label className="text-[18px] pt-3 text-white font-bold px-2 pr-5 uppercase">Customer Name
                                :</label>
                            <input type="text"
                                   className="block w-1/4 px-4 py-2 mt-2 bg-[#444544] text-white border text-right
                                       rounded-md focus:border-[#2cc1fc] focus:ring-[#2cc1fc] focus:outline-none
                                       focus:ring focus:ring-opacity-40 disabled"
                                   name="cusName" id="cusName" value={this.state.cusName}
                            />
                        </div>
                    </div>

                    <table className="w-full border mt-10 border-gray-500">
                        <thead className="h-20 border border-gray-500">
                        <tr className="text-white text-center">
                            <th className="text-[14px] font-bold px-1 uppercase border border-gray-500">Id</th>
                            <th className="text-[14px] font-bold px-1 uppercase border border-gray-500">Image</th>
                            <th className="text-[14px] font-bold px-1 uppercase border border-gray-500">Product Name
                            </th>
                            <th className="text-[14px] font-bold px-1 uppercase border border-gray-500">Unit Price
                            </th>
                            <th className="text-[14px] font-bold px-1 uppercase border border-gray-500">Qty</th>
                            <th className="text-[14px] font-bold px-1 uppercase border border-gray-500">Total
                                Price
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.props.itemsList.length === 0 ?
                                <tr>
                                    <td colSpan={6} className="h-36 px-1">
                                        <p className="text-center text-[30px] text-white font-bold">You Have No
                                            Items In
                                            Your Shopping
                                            Cart.</p>
                                    </td>
                                </tr>
                                : this.props.itemsList.map((item) =>
                                    <tr className="text-white text-center px-1 h-20 border border-gray-500">
                                        <td className="px-1 border border-gray-500">{item.product.id}</td>
                                        <td className="p-5 border border-gray-500"><img
                                            className="h-24 mx-auto rounded-lg"
                                            src={item.product.image}
                                            alt=""/>
                                        </td>
                                        <td className="px-1 border border-gray-500">{item.product.description}</td>
                                        <td className="px-1 border border-gray-500">{item.product.price + item.product.currency}</td>
                                        <td className="px-1 border border-gray-500">{item.itemCount}</td>
                                        <td className="px-1 border
                                        border-gray-500">{(item.product.price * item.itemCount) + item.product.currency}</td>
                                    </tr>
                                )
                        }
                        </tbody>
                    </table>
                    <div className="w-full flex flex-wrap">
                        <label className="flex float-left text-[20px] mt-10 font-bold px-4 uppercase text-white">Total
                            : </label>
                        <input type="text"
                               className="block mt-10 w-1/5 px-4 py-2 h-10  bg-[#444544] text-white border
                                       rounded-md focus:border-[#2cc1fc] focus:ring-[#2cc1fc] focus:outline-none
                                       focus:ring focus:ring-opacity-40 disabled text-right"
                               name="total" id="total" value={this.state.lastTotal + ".00 LKR"}
                        />
                        <label className="float-left text-[20px] mt-10 ml-36 font-bold px-4 uppercase text-white">Total
                            Items
                            : </label>
                        <input type="text"
                               className="block mt-10 w-1/5 px-4 py-2 h-10 bg-[#444544] text-white border
                                       rounded-md focus:border-[#2cc1fc] focus:ring-[#2cc1fc] focus:outline-none
                                       focus:ring focus:ring-opacity-40 disabled text-right"
                               name="totalItems" id="totalItems" value={this.state.totalItems}
                        />
                        <button className="ml-40 mt-24 mb-10 pl-6 pr-6 pt-2 pb-2 bg-[#2cc1fc] text-[16px]
                    font-bold text-[#e6f0e6] rounded uppercase border-[2px] border-[#2cc1fc]
                    hover:bg-[#444544] hover:text-[#2cc1fc] hover:border-[2px]
                    hover:border-[#2cc1fc] hover:scale-110 " onClick={this.onPurchaseBtnClick}> Purchase
                        </button>
                    </div>
                </div>
            </div>
        );

    }

    handleMessageInputOnChange(event: {
        target: {
            value: any;
            name: any;
        }
    }) {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        // @ts-ignore
        this.setState({
            [name]: value
        });
    }

    private onPurchaseBtnClick = () => {
        try {
            this.api.post('/orders/save', {
                id: this.state.id,
                oDate: this.state.oDate,
                totalItems: this.state.totalItems,
                lastTotal: this.state.lastTotal,
                cusId: this.state.cusId,
                cusName: this.state.cusName,
            }).then((res: { data: any }) => {
                const jsonData = res.data;
                alert(jsonData);
                this.getLastId();
            }).catch((error: any) => {
                console.error('Axios Error', error);
            });
        } catch (error) {
            console.error('Error submitting data:', error);
        }
    }

    private getLastId = async () => {
        try {
            const response = await this.api.get('/orders/getLastId');
            const jsonData = response.data;

            if (jsonData && jsonData.id !== undefined) {
                this.setState({id: jsonData.id});
            } else {
                console.error("Invalid response format:", jsonData);
            }
        } catch (error) {
            console.error("Axios Error", error);
        }
    }

}
