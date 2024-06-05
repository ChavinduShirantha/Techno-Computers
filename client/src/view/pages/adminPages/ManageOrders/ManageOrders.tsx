import {Component} from "react";
import OrdersTable from "../Tables/OrdersTable";
import axios from "axios";

interface ManageOrdersProps {
    data: any;
}

interface ManageOrdersState {
    id: number;
    data: [];
}

export class ManageOrders extends Component<ManageOrdersProps, ManageOrdersState> {

    private api: any;

    constructor(props: any) {
        super(props);
        this.api = axios.create({baseURL: `http://localhost:4000`});
        this.state = {
            id: 0,
            data: [],
        }
        this.handleMessageInputOnChange = this.handleMessageInputOnChange.bind(this);
    }

    componentDidMount() {
        this.fetchData().then(r => console.log("Data Fetch Completed!" + r));
    }

    fetchData = async () => {
        try {
            this.api.get(`/orders/all`).then((res: { data: any }) => {
                const jsonData = res.data;
                this.setState({
                    data: jsonData
                });
            }).catch((error: any) => {
                console.error('Axios Error', error)
            })
        } catch (error) {
            console.log('Error Fetching Data ', error);
        }
    }

    render() {
        const {data} = this.state;
        return (
            <div className="flex flex-wrap justify-center min-h-screen w-full ">
                <h1 className="text-3xl font-semibold text-center text-[#2cc1fc] uppercase mt-10">
                    Manage Orders
                </h1>
                <div className="w-full pr-10 pl-10 pt-10 mb-10 mx-auto">
                    <div
                        className="w-full p-10 mb-10 mx-auto bg-white rounded-xl shadow-[#000] shadow-2xl">
                        <h1 className="text-2xl font-semibold text-center bg-[#2cc1fc] text-white uppercase rounded">
                            Search Order
                        </h1>
                        <div className="flex flex-row gap-10 justify-content-center">
                            <div className="mb-2 w-1/2 ">
                                <label
                                    className="block text-sm font-semibold text-gray-800">
                                    Order ID
                                </label>
                                <input type="text"
                                       className="block w-full px-4 py-2 mt-2 bg-white border
                                                   rounded-md focus:border-[#2cc1fc] focus:ring-[#2cc1fc]
                                                   focus:outline-none focus:ring focus:ring-opacity-40"
                                       name="id"
                                       value={this.state.id}
                                       onChange={this.handleMessageInputOnChange}/>
                            </div>
                            <button type={"button"}
                                    className="w-1/6 font-bold mt-6 ml-2 text-[14px] h-12  uppercase
                                            tracking-wide text-[#e6f0e6] transition-colors duration-200 transform
                                            bg-[#8f8d91] rounded-md hover:bg-white hover:text-[#8f8d91]
                                            hover:border-[#8f8d91] border-[2px]" onClick={this.onSearchBtnClick}>
                                Search
                            </button>
                            <button
                                className="w-1/6 font-bold mt-6 ml-2 text-[14px] h-12  uppercase
                                            tracking-wide text-[#e6f0e6] transition-colors duration-200 transform
                                            bg-[#2cc1fc] rounded-md hover:bg-white hover:text-[#2cc1fc]
                                            hover:border-[#2cc1fc] border-[2px]" onClick={this.onGetAllBtnClick}>
                                Get All Orders
                            </button>
                        </div>
                    </div>
                    <div className="w-full p-10 bg-white rounded-xl shadow-[#000] shadow-2xl">
                        <h1 className="text-center ">Orders</h1>
                        <OrdersTable data={data}/>
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

    private onSearchBtnClick = () => {
        try {
            this.api.get(`/orders/find/${this.state.id}`).then((res: { data: any }) => {
                const jsonData = res.data;
                this.setState({
                    data: jsonData,
                });
            }).catch((error: any) => {
                console.error('Axios Error', error);
            });
        } catch (error) {
            console.error('Error submitting data:', error);
        }
    }

    private onGetAllBtnClick = () => {
        try {
            this.api.get(`/orders/all`).then((res: { data: any }) => {
                const jsonData = res.data;
                this.setState({
                    data: jsonData,
                });
            }).catch((error: any) => {
                console.error('Axios Error', error);
            });
        } catch (error) {
            console.error('Error submitting data:', error);
        }
    }
}
