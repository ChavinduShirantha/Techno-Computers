import {Component} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faProductHunt} from "@fortawesome/free-brands-svg-icons";
import {faCartShopping, faUser} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

interface AdminDashboardState {
    data: any[]; // Define the correct type for your data
    userCount: number;
    productCount: number;
    inStockProductCount: number;
    outOfStockProductCount: number;
    newArrivalsProductCount: number;
    comingSoonProductCount: number;
}

export class AdminDashboard extends Component<{},AdminDashboardState> {

    private api:any;

    constructor(props:{} | Readonly<{}>) {
        super(props);
        this.api=axios.create({baseURL:`http://localhost:4000`})
        this.state={
            data:[],
            userCount: 0,
            productCount: 0,
            inStockProductCount: 0,
            outOfStockProductCount: 0,
            newArrivalsProductCount: 0,
            comingSoonProductCount: 0,
        }
    }

    componentDidMount() {
        this.fetchUserCountData();
        this.fetchProductCountData();
        this.fetchInStockProductCountData();
        this.fetchOutOfStockProductCountData();
        this.fetchNewArrivalsProductCountData();
        this.fetchComingSoonProductCountData();
    }

    fetchUserCountData = async () => {
        try {
            const response = await this.api.get('/users/userCount');
            const userCount: number = response.data; // Access userCount directly
            this.setState({ userCount });
        } catch (error) {
            console.log("Axios Error", error);
        }
    };

    fetchProductCountData = async () => {
        try {
            const response = await this.api.get('/products/productCount');
            const productCount: number = response.data; // Access userCount directly
            this.setState({ productCount });
        } catch (error) {
            console.log("Axios Error", error);
        }
    };

    fetchInStockProductCountData = async () => {
        try {
            const response = await this.api.get('/products/inStockProductCount');
            const inStockProductCount: number = response.data; // Access userCount directly
            this.setState({ inStockProductCount });
        } catch (error) {
            console.log("Axios Error", error);
        }
    };

    fetchOutOfStockProductCountData = async () => {
        try {
            const response = await this.api.get('/products/outOfStockProductCount');
            const outOfStockProductCount: number = response.data; // Access userCount directly
            this.setState({ outOfStockProductCount });
        } catch (error) {
            console.log("Axios Error", error);
        }
    };

    fetchNewArrivalsProductCountData = async () => {
        try {
            const response = await this.api.get('/products/newArrivalsProductCount');
            const newArrivalsProductCount: number = response.data; // Access userCount directly
            this.setState({ newArrivalsProductCount });
        } catch (error) {
            console.log("Axios Error", error);
        }
    };

    fetchComingSoonProductCountData = async () => {
        try {
            const response = await this.api.get('/products/comingSoonProductCount');
            const comingSoonProductCount: number = response.data; // Access userCount directly
            this.setState({ comingSoonProductCount });
        } catch (error) {
            console.log("Axios Error", error);
        }
    };

    render() {
        const { userCount } = this.state;
        const { productCount } = this.state;
        const { inStockProductCount } = this.state;
        const { outOfStockProductCount } = this.state;
        const { newArrivalsProductCount } = this.state;
        const { comingSoonProductCount } = this.state;
        return (
            <div className="flex">
                <div className="h-auto p-10 flex flex-wrap">
                    <div
                        className="ml-16 w-72 mr-2 mb-16 justify-center items-center rounded-2xl drop-shadow-2xl
                                    hover:shadow-[#2cc1fc] hover:shadow-2xl hover:cursor-pointer">
                        <div className="h-60 pt-4 bg-white rounded-2xl">
                            <div className="h-60 p-4 bg-white rounded-2xl">
                                <div className="flex">
                                    <FontAwesomeIcon className="h-20 pt-4 rounded-lg pl-5 pr-5"
                                                     icon={faUser}/>
                                    <h1 className="text-[26px] pt-4 font-serif">Customers Count</h1>
                                </div>
                                <h1 className="text-[36px] text-center pt-10 font-bold">{userCount}</h1>
                            </div>
                        </div>

                    </div>
                    <div
                        className="ml-16 w-72 mr-2 mb-16 justify-center items-center rounded-2xl drop-shadow-2xl
                                    hover:shadow-[#2cc1fc] hover:shadow-2xl hover:cursor-pointer">
                        <div className="h-60 pt-4 bg-white rounded-2xl">
                            <div className="h-60 p-4 bg-white rounded-2xl">
                                <div className="flex">
                                    <FontAwesomeIcon className="h-20 pt-4 rounded-lg pl-5 pr-5"
                                                     icon={faCartShopping}/>
                                    <h1 className="text-[26px] pt-4 font-serif">Orders Count</h1>
                                </div>
                                <h1 className="text-[36px] text-center pt-10 font-bold">00</h1>
                            </div>
                        </div>
                    </div>
                    <div
                        className="ml-16 w-72 mr-2 mb-16 justify-center items-center rounded-2xl drop-shadow-2xl
                                    hover:shadow-[#2cc1fc] hover:shadow-2xl hover:cursor-pointer">
                        <div className="h-60 pt-4 bg-white rounded-2xl">
                            <div className="h-60 p-4 bg-white rounded-2xl">
                                <div className="flex">
                                    <FontAwesomeIcon className="h-20 pt-4 rounded-lg pl-5 pr-5"
                                                     icon={faProductHunt}/>
                                    <h1 className="text-[26px] pt-4 font-serif">All Products Count</h1>
                                </div>
                                <h1 className="text-[36px] text-center pt-3 font-bold">{productCount}</h1>
                            </div>
                        </div>
                    </div>
                    <div
                        className="ml-16 w-72 mr-2 mb-16 justify-center items-center rounded-2xl drop-shadow-2xl
                                    hover:shadow-[#2cc1fc] hover:shadow-2xl hover:cursor-pointer">
                        <div className="h-60 p-4 bg-white rounded-2xl">
                            <div className="flex">
                                <img className="h-24 pt-4 rounded-lg"
                                     src={require("../../../../images/product-state/in_stock.png")}
                                     alt=""/>
                                <h1 className="text-[26px] pt-4 font-serif">Products Count</h1>
                            </div>
                            <h1 className="text-[36px] text-center pt-10 font-bold">{inStockProductCount+newArrivalsProductCount}</h1>
                        </div>
                    </div>
                    <div
                        className="ml-16 w-72 mr-2 mb-16 justify-center items-center rounded-2xl drop-shadow-2xl
                                    hover:shadow-[#2cc1fc] hover:shadow-2xl hover:cursor-pointer">
                        <div className="h-60 p-4 bg-white rounded-2xl">
                            <div className="flex">
                                <img className="h-24 pt-4 rounded-lg"
                                     src={require("../../../../images/product-state/out_of_stock.png")}
                                     alt=""/>
                                <h1 className="text-[26px] pt-4 font-serif">Products Count</h1>
                            </div>
                            <h1 className="text-[36px] text-center pt-10 font-bold">{outOfStockProductCount}</h1>
                        </div>
                    </div>
                    <div
                        className="ml-16 w-72 mr-2 mb-16 justify-center items-center rounded-2xl drop-shadow-2xl
                                    hover:shadow-[#2cc1fc] hover:shadow-2xl hover:cursor-pointer">
                        <div className="h-60 p-4 bg-white rounded-2xl">
                            <div className="flex">
                                <img className="h-24 pt-4 rounded-lg"
                                     src={require("../../../../images/product-state/new_arrivals.png")}
                                     alt=""/>
                                <h1 className="text-[26px] pt-4 font-serif">Products Count</h1>
                            </div>
                            <h1 className="text-[36px] text-center pt-10 font-bold">{newArrivalsProductCount}</h1>
                        </div>
                    </div>
                    <div
                        className="ml-16 w-72 mr-2 mb-16 justify-center items-center rounded-2xl drop-shadow-2xl
                                    hover:shadow-[#2cc1fc] hover:shadow-2xl hover:cursor-pointer">
                        <div className="h-60 p-4 bg-white rounded-2xl">
                            <div className="flex">
                                <img className="h-24 pt-4 rounded-lg"
                                     src={require("../../../../images/product-state/coming_soon.png")}
                                     alt=""/>
                                <h1 className="text-[26px] pt-4 font-serif">Products Count</h1>
                            </div>
                            <h1 className="text-[36px] text-center pt-10 font-bold">{comingSoonProductCount}</h1>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
