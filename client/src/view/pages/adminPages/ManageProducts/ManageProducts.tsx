import {ChangeEvent, Component} from "react";
import axios from "axios";

interface ManageProductsProps {
    data: any;
}

interface ManageProductsState {
    id: string;
    description: string;
    name: string;
    price: string;
    currency: string;
    image: string;
    productState: string;
    data: [];
}

export class ManageProducts extends Component<ManageProductsProps,ManageProductsState> {

    private api: any;

    constructor(props: any) {
        super(props);
        this.api = axios.create({baseURL: `http://localhost:4000`});
        this.state = {
            id: '',
            description: '',
            name: '',
            price: '',
            currency: '',
            image: '',
            productState: 'COMING_SOON',
            data: [],
        }
        this.handleMessageInputOnChange = this.handleMessageInputOnChange.bind(this);
    }

    render() {
        return (
            <div className="flex flex-wrap justify-center min-h-screen w-full ">
                <div className="w-full p-10 m-auto bg-white rounded-xl shadow-[#000] shadow-2xl">
                    <h1 className="text-3xl font-semibold text-center text-[#2cc1fc] uppercase">
                        Manage Products
                    </h1>
                    <form className="mt-6">
                        <div className="flex justify-center gap-10">
                            <div className="mb-2 basis-1/2 ">
                                <label
                                    className="block text-sm font-semibold text-gray-800">
                                    Product ID
                                </label>
                                <input type="text"
                                       className="block w-full px-4 py-2 mt-2 bg-white border
                                                   rounded-md focus:border-[#2cc1fc] focus:ring-[#2cc1fc]
                                                   focus:outline-none focus:ring focus:ring-opacity-40"
                                       name="id"
                                       value={this.state.id}
                                       onChange={this.handleMessageInputOnChange}/>
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
                            <div className="mb-2 basis-1/2">
                                <label
                                    className="block text-sm font-semibold text-gray-800">
                                    Description
                                </label>
                                <input
                                    type="text"
                                    className="block w-full px-4 py-2 mt-2  bg-white border
                                                rounded-md focus:border-[#2cc1fc] focus:ring-[#2cc1fc]
                                                focus:outline-none focus:ring focus:ring-opacity-40"
                                    name="description"
                                    value={this.state.description}
                                    onChange={this.handleMessageInputOnChange}/>
                            </div>
                            <div className="mb-2 basis-1/2">
                                <label
                                    className="block text-sm font-semibold text-gray-800">
                                    Name
                                </label>
                                <input type="text"
                                       className="block w-full px-4 py-2 mt-2 bg-white border
                                                   rounded-md focus:border-[#2cc1fc] focus:ring-[#2cc1fc]
                                                   focus:outline-none focus:ring focus:ring-opacity-40"
                                       name="name"
                                       value={this.state.name}
                                       onChange={this.handleMessageInputOnChange}/>
                            </div>

                        </div>
                        <div className="flex flex-row gap-10">
                            <div className="mb-2 basis-1/2">
                                <label
                                    className="block text-sm font-semibold text-gray-800">
                                    Unit Price
                                </label>
                                <input
                                    type="text"
                                    className="block w-full px-4 py-2 mt-2  bg-white border
                                                rounded-md focus:border-[#2cc1fc] focus:ring-[#2cc1fc]
                                                focus:outline-none focus:ring focus:ring-opacity-40"
                                    name="price"
                                    value={this.state.price}
                                    onChange={this.handleMessageInputOnChange}/>
                            </div>
                            <div className="mb-2 basis-1/2">
                                <label
                                    className="block text-sm font-semibold text-gray-800">
                                    Currency
                                </label>
                                <input type="text"
                                       className="block w-full px-4 py-2 mt-2 bg-white border
                                                   rounded-md focus:border-[#2cc1fc] focus:ring-[#2cc1fc]
                                                   focus:outline-none focus:ring focus:ring-opacity-40"
                                       name="currency"
                                       value={this.state.currency}
                                       onChange={this.handleMessageInputOnChange}/>
                            </div>
                        </div>
                        <div className="flex flex-row gap-10">
                            <div className="mb-2 basis-1/2">
                                <label
                                    className="block text-sm font-semibold text-gray-800">
                                    Image
                                </label>
                                <input type="file" accept='image/*' id="image"
                                       className="block w-full px-4 py-2 mt-2 bg-white border
                                                   rounded-md focus:border-[#2cc1fc] focus:ring-[#2cc1fc]
                                                   focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Product Image"
                                       name="image" onChange={this.convertBase64} />
                            </div>
                            <div className="mb-2 basis-1/2">
                                <label
                                    className="block text-sm font-semibold text-gray-800">
                                    Product State
                                </label>
                                <select
                                    className="block w-full px-4 py-2 mt-2  bg-white border rounded-md focus:border-[#2cc1fc] focus:ring-[#2cc1fc] focus:outline-none focus:ring focus:ring-opacity-40"
                                    id="state_Type" name="state_Type" value={this.state.productState}
                                    onChange={this.handleStateChange}>
                                    <option value="AVAILABLE">AVAILABLE</option>
                                    <option value="UNAVAILABLE">UNAVAILABLE</option>
                                    <option value="NEW_ARRIVAL">NEW_ARRIVAL</option>
                                    <option value="COMING_SOON">COMING_SOON</option>
                                </select>
                                {/*<label
                                    className="block text-sm font-semibold text-gray-800">
                                    Product State
                                </label>
                                <input type="text"
                                       className="block w-full px-4 py-2 mt-2 bg-white border
                                                   rounded-md focus:border-[#2cc1fc] focus:ring-[#2cc1fc]
                                                   focus:outline-none focus:ring focus:ring-opacity-40"
                                       name="productState"/>*/}
                            </div>
                        </div>

                        <div className="mt-6 flex justify-center">
                            <button
                                className="w-52 font-bold m-2 text-[14px] px-4 py-2 uppercase
                                            tracking-wide text-[#e6f0e6] transition-colors duration-200
                                            transform bg-green-700 rounded-md hover:bg-white hover:text-green-700
                                            hover:border-green-700 border-[2px]" onClick={this.onSaveBtnClick}>
                                Save Product
                            </button>
                            <button
                                className="w-52 font-bold m-2 text-[14px] px-4 py-2 uppercase
                                            tracking-wide text-[#e6f0e6] transition-colors duration-200
                                            transform bg-yellow-400 rounded-md hover:bg-white hover:text-yellow-400
                                            hover:border-yellow-400 border-[2px]">
                                Update Product
                            </button>
                            <button
                                className="w-52 font-bold m-2 text-[14px] px-4 py-2 uppercase
                                            tracking-wide text-[#e6f0e6] transition-colors duration-200
                                            transform bg-red-600 rounded-md hover:bg-white hover:text-red-600
                                            hover:border-red-600 border-[2px]">
                                Delete Product
                            </button>
                            <button
                                className="w-52 font-bold m-2 text-[14px] px-4 py-2 uppercase
                                            tracking-wide text-[#e6f0e6] transition-colors duration-200
                                            transform bg-[#2cc1fc] rounded-md hover:bg-white hover:text-[#2cc1fc]
                                            hover:border-[#2cc1fc] border-[2px]">
                                Get All Products
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }

    convertBase64 = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.readAsDataURL(file);

            console.log(reader);

            reader.onload = () => {
                // @ts-ignore
                this.setState({
                    image: reader.result as string,
                });
            };

            reader.onerror = (error) => {
                console.log("Error:", error);
            };
        }
    }

    handleMessageInputOnChange(event: { target: { value: any; name: any; } }) {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        // @ts-ignore
        this.setState({
            [name]: value
        });
    }

    handleStateChange = (event: ChangeEvent<HTMLSelectElement>) => {
        this.setState({ productState: event.target.value });
    };

    private onSaveBtnClick = () => {
        try {
            this.api.post('/products/save',{
                id: this.state.id,
                description: this.state.description,
                name: this.state.name,
                price: this.state.price,
                currency: this.state.currency,
                image: this.state.image,
                productState: this.state.productState,
        }).then((res: { data: any }) => {
                const jsonData = res.data;
                alert(jsonData);
            }).catch((error: any) => {
                console.error('Axios Error', error);
            });
        }catch (error){
            console.error('Error submitting data:', error);
        }
    }

}
