import {Component} from "react";
import {Product} from "../../../common/Product/Product";
import axios from "axios";

export class CustomerDashboard extends Component {
    private api: any;

    constructor(props: {} | Readonly<{}>) {
        super(props);
        this.api = axios.create({baseURL: `http://localhost:4000`});
        this.state = {
            data: [],
        }
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData = async ()=> {
        try {
            this.api.get('/products/all').then((res:{data:any})=>{
                const jsonData = res.data;
                this.setState({data: jsonData});
            }).catch((error:any)=>{
                console.error('Axios Error', error)
            })
        } catch (error) {
            console.log('Error fetching data: ',
                error)
        }
    }
    render() {
        // @ts-ignore
        const {data}=this.state;
        return (
            <div className="flex">
                <div
                    className="flex flex-wrap justify-start items-center mx-auto bg-[url(images/main_bg.jpg)] bg-cover">
                    <div className="mb-16 mt-16">
                        <div className="flex flex-wrap xl:container mx-auto">
                            {
                                data.map((product:any)=>(
                                    <Product key={product.id} data={product}/>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
