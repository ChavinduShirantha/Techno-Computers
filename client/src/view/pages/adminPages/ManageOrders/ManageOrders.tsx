import {Component} from "react";
import OrdersTable from "../Tables/OrdersTable";
import axios from "axios";

interface ManageOrdersProps {
    data: any;
}

interface ManageOrdersState {
    data: [];
}

export class ManageOrders extends Component<ManageOrdersProps, ManageOrdersState> {

    private api: any;

    constructor(props: any) {
        super(props);
        this.api = axios.create({baseURL: `http://localhost:4000`});
        this.state = {
            data: [],
        }
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
                <div className="w-full pr-10 pl-10 pt-10 m-auto bg-white rounded-xl shadow-[#000] shadow-2xl">
                    <h1 className="text-center ">Orders</h1>
                    <OrdersTable data={data}/>
                </div>
            </div>
        );
    }
}
