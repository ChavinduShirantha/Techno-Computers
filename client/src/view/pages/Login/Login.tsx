import {Component} from "react";
import {Link} from "react-router-dom";
import axios from "axios";

interface LoginProps {
    data: any;
}

interface LoginState {
    userName: string,
    password: string
    errorMessage: string | null;
    isLoading: boolean;
}

export class Login extends Component<LoginProps, LoginState> {

    private api: any;

    constructor(props: any) {
        super(props);
        this.api = axios.create({baseURL: `http://localhost:4000`});
        this.state = {
            userName: '',
            password: '',
            errorMessage: null,
            isLoading: false
        }
        this.handleMessageInputOnChange = this.handleMessageInputOnChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        return (
            <div className="flex flex-wrap justify-center min-h-screen bg-[#444544]">
                <div className="w-96 p-8 m-auto bg-white rounded-md shadow-[#000] shadow-2xl">
                    <h1 className="text-3xl font-semibold text-center text-[#2cc1fc] uppercase">
                        Sign in
                    </h1>
                    <form className="mt-6" onSubmit={this.handleSubmit}>
                        <div className="mb-2">
                            <label
                                className="block text-sm font-semibold text-gray-800">
                                User Name
                            </label>
                            <input type="text"
                                   className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:border-[#2cc1fc]
                                    focus:ring-[#2cc1fc] focus:outline-none focus:ring focus:ring-opacity-40"
                                   name="userName"
                                   value={this.state.userName}
                                   onChange={this.handleMessageInputOnChange}/>
                        </div>
                        <div className="mb-2">
                            <label
                                className="block text-sm font-semibold text-gray-800">
                                Password
                            </label>
                            <input
                                type="password"
                                className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:border-[#2cc1fc]
                                 focus:ring-[#2cc1fc] focus:outline-none focus:ring focus:ring-opacity-40"
                                name="password"
                                value={this.state.password}
                                onChange={this.handleMessageInputOnChange}/>
                        </div>
                        <a href="#"
                           className="text-xs text-[#2cc1fc] hover:underline hover:font-bold">
                            Forget Password?
                        </a>
                        <div className="mt-6">
                            <button type='submit'
                                    className="w-full px-4 py-2 tracking-wide text-[#e6f0e6] transition-colors duration-200 transform
                                bg-[#2cc1fc] rounded-md hover:bg-white hover:text-black hover:border-black border-[1px]"
                                    disabled={this.state.isLoading}>
                                {this.state.isLoading ? 'Loading...' : 'Login'}
                            </button>
                        </div>
                    </form>
                    {this.state.errorMessage &&
                        <div className="mt-4 text-red-600 text-center">{this.state.errorMessage}</div>}
                    <div className="relative flex items-center justify-center w-full mt-6 border border-t"></div>

                    <p className="mt-6 text-xs font-light text-center text-gray-700">
                        Don't have an account? <br/> Sign up for a free account at our store. Registration is quick and
                        easy. It allows you to be able to order from our shop. To start shopping click register.
                    </p>

                    <Link to="/signup">
                        <button
                            className="mt-6 w-full px-4 py-2 tracking-wide text-[#e6f0e6] transition-colors duration-200 transform bg-[#2cc1fc] rounded-md hover:bg-white hover:text-black hover:border-black border-[1px]">
                            Create an Account
                        </button>
                    </Link>

                    <h1 className="mt-2 text-xs text-center text-gray-700 uppercase font-bold">
                        or
                    </h1>

                    <div className="mt-2 flex items-center justify-between">
                        <span className="border border-b w-1/5 md:w-4/12"></span>
                        <Link to="/" className="text-decoration-none">
                            <small
                                className="text-xs text-[#2cc1fc] hover:underline hover:font-bold">
                                View Home
                            </small>
                        </Link>
                        <span className="border border-b w-1/5 md:w-4/12"></span>
                    </div>
                </div>
            </div>
        );
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

    async handleSubmit(event: React.FormEvent) {
        event.preventDefault();
        const userName = this.state.userName;
        const password = this.state.password;

        // Basic form validation
        if (!userName.trim() || !password.trim()) {
            this.setState({errorMessage: "Please enter both username and password."});
            return;
        }

        this.setState({isLoading: true, errorMessage: null});

        try {
            const response = await this.api.post("/sign/logUser", {
                userName: this.state.userName,
                password: this.state.password,
            });

            localStorage.setItem('userName', JSON.stringify(this.state.userName));

            let redirectUrl = this.state.userName === 'admin' && this.state.password === 'admin' ? "/admin" : "/customer";

            window.location.href = redirectUrl;

            console.log("Login successful", response.data);
        } catch (error) {
            // @ts-ignore
            if (error.response) {
                this.setState({errorMessage: "Invalid username or password."});
            } else {
                this.setState({errorMessage: "An error occurred. Please try again later."});
            }
        } finally {
            this.setState({isLoading: false});
        }
    }

}
