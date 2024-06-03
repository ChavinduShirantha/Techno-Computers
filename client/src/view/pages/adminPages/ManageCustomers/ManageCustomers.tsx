import {Component} from "react";
import axios, {AxiosInstance, AxiosResponse} from "axios";
import CustomerTable from "../Tables/CustomerTable";

interface ManageCustomersProps {}

interface Customer {
    id: string;
    firstName: string;
    lastName: string;
    contact: string;
    dateOfBirth: string;
    address: string;
    nic: string;
    country: string;
    email: string;
    userName: string;
    password: string;
}

interface ManageCustomersState extends Customer {
    data: Customer[];
}

export class ManageCustomers extends Component<ManageCustomersProps, ManageCustomersState> {

    private api: AxiosInstance;

    constructor(props: any) {
        super(props);
        this.api = axios.create({baseURL: `http://localhost:4000`});
        this.state = {
            id: '',
            firstName: '',
            lastName: '',
            contact: '',
            dateOfBirth: '',
            address: '',
            nic: '',
            country: '',
            email: '',
            userName: '',
            password: '',
            data: [],
        }
        this.handleMessageInputOnChange = this.handleMessageInputOnChange.bind(this);
    }

    componentDidMount() {
        this.fetchData().then(r => console.log("Data Fetch Completed!" + r));
        this.getLastId().then(r => console.log("Last ID!" + r));
    }

    async fetchData() {
        try {
            const res: AxiosResponse<Customer[]> = await this.api.get(`/users/all`);
            this.setState({ data: res.data });
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    handleRowClick = (customer: Customer) => {
        this.setState({ ...customer });
    };

    render() {
        const {data} = this.state;
        return (
            <div className="flex flex-wrap justify-center min-h-screen w-full mt-20 pl-10 pr-10">
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
                                       name="id"
                                       value={this.state.id}
                                       onChange={this.handleMessageInputOnChange}/>
                            </div>
                            <button type={"button"}
                                className="w-1/6 font-bold mt-6 ml-2 text-[14px] h-12  uppercase
                                            tracking-wide text-[#e6f0e6] transition-colors duration-200 transform
                                            bg-[#2cc1fc] rounded-md hover:bg-white hover:text-[#2cc1fc]
                                            hover:border-[#2cc1fc] border-[2px]" onClick={this.onSearchBtnClick}>
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
                                       name="firstName"
                                       value={this.state.firstName}
                                       onChange={this.handleMessageInputOnChange}/>
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
                                    name="lastName"
                                    value={this.state.lastName}
                                    onChange={this.handleMessageInputOnChange}/>
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
                                       name="contact"
                                       value={this.state.contact}
                                       onChange={this.handleMessageInputOnChange}/>
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
                                    name="dateOfBirth"
                                    value={this.state.dateOfBirth}
                                    onChange={this.handleMessageInputOnChange}/>
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
                                       name="address"
                                       value={this.state.address}
                                       onChange={this.handleMessageInputOnChange}/>
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
                                    name="nic"
                                    value={this.state.nic}
                                    onChange={this.handleMessageInputOnChange}/>
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
                                       name="country"
                                       value={this.state.country}
                                       onChange={this.handleMessageInputOnChange}/>
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
                                    name="email"
                                    value={this.state.email}
                                    onChange={this.handleMessageInputOnChange}/>
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
                                       name="userName"
                                       value={this.state.userName}
                                       onChange={this.handleMessageInputOnChange}/>
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
                                    name="password"
                                    value={this.state.password}
                                    onChange={this.handleMessageInputOnChange}/>
                            </div>
                        </div>
                        <div className="mt-6 flex justify-center">
                            <button
                                className="w-52 font-bold m-1 text-[14px] px-4 py-2 uppercase
                                            tracking-wide text-[#e6f0e6] transition-colors duration-200 transform
                                            bg-green-700 rounded-md hover:bg-white hover:text-green-700
                                            hover:border-green-700 border-[2px]"
                                onClick={() => {
                                    this.onSaveCustomerBtnClick();
                                    this.onClickClearData();
                                }}>
                                Save Customer
                            </button>
                            <button
                                className="w-52 font-bold m-1 text-[14px] px-4 py-2 uppercase
                                            tracking-wide text-[#e6f0e6] transition-colors duration-200 transform
                                            bg-yellow-400 rounded-md hover:bg-white hover:text-yellow-400
                                            hover:border-yellow-400 border-[2px]" onClick={() => {
                                this.onUpdateBtnClick();
                                this.onGetAllBtnClick();
                                this.onClickClearData();
                            }}>
                                Update Customer
                            </button>
                            <button
                                className="w-52 font-bold m-1 text-[14px] px-4 py-2 uppercase
                                            tracking-wide text-[#e6f0e6] transition-colors duration-200 transform
                                            bg-red-600 rounded-md hover:bg-white hover:text-red-600
                                            hover:border-red-600 border-[2px]" onClick={this.onDeleteBtnClick}>
                                Delete Customer
                            </button>
                            <button
                                className="w-52 font-bold m-1 text-[14px] px-4 py-2 uppercase
                                            tracking-wide text-[#e6f0e6] transition-colors duration-200 transform
                                            bg-[#2cc1fc] rounded-md hover:bg-white hover:text-[#2cc1fc]
                                            hover:border-[#2cc1fc] border-[2px]" onClick={this.onGetAllBtnClick}>
                                Get All Customers
                            </button>
                        </div>
                    </form>
                </div>
                <CustomerTable data={data} onRowClick={this.handleRowClick}/>
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

    private onClickClearData = () => {
        this.setState({
            id: '',
            firstName: '',
            lastName: '',
            contact: '',
            dateOfBirth: '',
            address: '',
            nic: '',
            country: '',
            email: '',
            userName: '',
            password: ''
        })
    }

    private getLastId = async () => {
        try {
            const response = await this.api.get('/users/getLastId');
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


    private onSaveCustomerBtnClick = () => {
        try {
            this.api.post('/users/save', {
                id: this.state.id,
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                contact: this.state.contact,
                dateOfBirth: this.state.dateOfBirth,
                address: this.state.address,
                nic: this.state.nic,
                country: this.state.country,
                email: this.state.email,
                userName: this.state.userName,
                password: this.state.password
            }).then((res: { data: any }) => {
                const jsonData = res.data;
                alert(jsonData);
                this.getLastId().then(r =>{});
            }).catch((error: any) => {
                console.error('Axios Error', error);
            });
        } catch (error) {
            console.error('Error submitting data:', error);
        }
    }

    private onGetAllBtnClick = () => {
        try {
            this.api.get(`/users/all`).then((res: { data: any }) => {
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

    private onSearchBtnClick = () => {
        try {
            this.api.get(`/users/find/${this.state.id}`).then((res: { data: any }) => {
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

    private onDeleteBtnClick = (e: any) => {
        try {
            this.api.delete(`/users/delete/${this.state.id}`)
                .then((res: { data: any }) => {
                    const jsonData = res.data;
                    alert(jsonData);
                }).catch((error: any) => {
                console.error('Axios Error', error);
            });
        } catch (error) {
            console.error('Error submitting data:', error);
        }
    }

    private onUpdateBtnClick = () => {
        try {
            this.api.put(`/users/update/${this.state.id}`, {
                id: this.state.id,
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                contact: this.state.contact,
                dateOfBirth: this.state.dateOfBirth,
                address: this.state.address,
                nic: this.state.nic,
                country: this.state.country,
                email: this.state.email,
                userName: this.state.userName,
                password: this.state.password
            }).then((res: { data: any }) => {
                const jsonData = res.data;
                alert(jsonData);
            }).catch((error: any) => {
                console.error('Axios Error', error);
            });
        } catch (error) {
            console.error('Error submitting data:', error);
        }
    }

}
