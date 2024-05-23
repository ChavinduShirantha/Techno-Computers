import {Component} from "react";
import {Carousel} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

export class Home extends Component {
    render() {
        return (
            <div className="flex">
                <div
                    className="flex flex-wrap justify-start items-center mx-auto bg-[url(images/main_bg.jpg)] bg-cover">
                    <div className="mb-16">
                        <div className="flex flex-wrap xl:container mx-auto">
                            <div style={{display: 'block'}}>
                                <Carousel>
                                    <Carousel.Item interval={4000}>
                                        <img
                                            className="d-block w-100"
                                            src="/images/home_banner1.jpg"
                                            alt="Image One"
                                        />
                                    </Carousel.Item>
                                    <Carousel.Item interval={4000}>
                                        <img
                                            className="d-block w-100"
                                            src="/images/home_banner2.jpg"
                                            alt="Image Two"
                                        />
                                    </Carousel.Item>
                                    <Carousel.Item interval={4000}>
                                        <img
                                            className="d-block w-100"
                                            src="/images/home_banner3.jpg"
                                            alt="Image Three"
                                        />
                                    </Carousel.Item>
                                    <Carousel.Item interval={4000}>
                                        <img
                                            className="d-block w-100"
                                            src="/images/home_banner4.jpg"
                                            alt="Image Four"
                                        />
                                    </Carousel.Item>
                                    <Carousel.Item interval={4000}>
                                        <img
                                            className="d-block w-100"
                                            src="/images/home_banner5.jpg"
                                            alt="Image Five"
                                        />
                                    </Carousel.Item>
                                    <Carousel.Item interval={4000}>
                                        <img
                                            className="d-block w-100"
                                            src="/images/home_banner6.jpg"
                                            alt="Image Six"
                                        />
                                    </Carousel.Item>
                                </Carousel>
                            </div>
                            <div className="pl-16 pr-16 xl:container xl:block hidden mx-auto mt-16 mb-16">
                                <div style={{display: 'block'}}>
                                    <Carousel className="" controls={false} indicators={false} fade={false}
                                              slide={true}>
                                        <Carousel.Item interval={6000}>
                                            <div className="d-flex">
                                                <img
                                                    className=" pr-16"
                                                    src="/images/manufactor_logo_1.png"
                                                    alt="Image One"
                                                />
                                                <img
                                                    className=" pr-16"
                                                    src="/images/manufactor_logo_2.png"
                                                    alt="Image One"
                                                />
                                                <img
                                                    className=" pr-16"
                                                    src="/images/manufactor_logo_3.png"
                                                    alt="Image One"
                                                />
                                                <img
                                                    className=" pr-16"
                                                    src="/images/manufactor_logo_4.png"
                                                    alt="Image One"
                                                />
                                                <img
                                                    className=" pr-16"
                                                    src="/images/manufactor_logo_5.png"
                                                    alt="Image One"
                                                />
                                                <img
                                                    className=" pr-16"
                                                    src="/images/manufactor_logo_6.png"
                                                    alt="Image One"
                                                />
                                                <img
                                                    className=" pr-16"
                                                    src="/images/manufactor_logo_7.png"
                                                    alt="Image One"
                                                />
                                            </div>
                                        </Carousel.Item>
                                        <Carousel.Item interval={6000}>
                                            <div className="d-flex">
                                                <img
                                                    className=" pr-16"
                                                    src="/images/manufactor_logo_8.png"
                                                    alt="Image One"
                                                />
                                                <img
                                                    className=" pr-16"
                                                    src="/images/manufactor_logo_9.png"
                                                    alt="Image One"
                                                />
                                                <img
                                                    className=" pr-16"
                                                    src="/images/manufactor_logo_10.png"
                                                    alt="Image One"
                                                />
                                                <img
                                                    className=" pr-16"
                                                    src="/images/manufactor_logo_11.png"
                                                    alt="Image One"
                                                />
                                                <img
                                                    className=" pr-16"
                                                    src="/images/manufactor_logo_12.png"
                                                    alt="Image One"
                                                />
                                                <img
                                                    className=" pr-16"
                                                    src="/images/manufactor_logo_13.png"
                                                    alt="Image One"
                                                />
                                                <img
                                                    className=" pr-16"
                                                    src="/images/manufactor_logo_14.png"
                                                    alt="Image One"
                                                />
                                            </div>
                                        </Carousel.Item>
                                        <Carousel.Item interval={6000}>
                                            <div className="d-flex">
                                                <img
                                                    className=" pr-16"
                                                    src="/images/manufactor_logo_15.png"
                                                    alt="Image One"
                                                />
                                                <img
                                                    className=" pr-16"
                                                    src="/images/manufactor_logo_16.png"
                                                    alt="Image One"
                                                />
                                                <img
                                                    className=" pr-16"
                                                    src="/images/manufactor_logo_17.png"
                                                    alt="Image One"
                                                />
                                                <img
                                                    className=" pr-16"
                                                    src="/images/manufactor_logo_18.png"
                                                    alt="Image One"
                                                />
                                                <img
                                                    className=" pr-16"
                                                    src="/images/manufactor_logo_5.png"
                                                    alt="Image One"
                                                />
                                                <img
                                                    className=" pr-16"
                                                    src="/images/manufactor_logo_7.png"
                                                    alt="Image One"
                                                />
                                                <img
                                                    className=" pr-16"
                                                    src="/images/manufactor_logo_11.png"
                                                    alt="Image One"
                                                />
                                            </div>
                                        </Carousel.Item>
                                    </Carousel>
                                </div>
                            </div>
                            <div
                                className="ml-16 w-72 mr-2 mb-16 justify-center items-center rounded-2xl hover:shadow-[#2cc1fc] hover:shadow-2xl">
                                <div>
                                    <img className="h-16 absolute mt-[-6px]" src={require('../../../images/product-state/in_stock.png')} alt=""/>
                                </div>
                                <div className="h-60 pt-4 bg-white rounded-t-2xl">
                                    <img className="h-full mx-auto" src={require('../../../images/products/product1.jpg')} alt=""/>
                                </div>
                                <div className="justify-center bg-[#4646469c] h-32">
                                    <div>
                                        <h3 className="text-white pt-2 font-bold text-center text-[16px] pl-2">Havit KB500L RGB Backlit Gaming Keyboard</h3>
                                        <p className="uppercase text-[12px] text-center text-[#cfd4da] mt-4 mb-2">- Keyboard & Mouse -</p>
                                    </div>
                                    <div className="ml-1 pb-2 p-[0.3px] pr-2">
                                        <h3 className="text-[16px] font-bold text-center text-white pl-2">3800
                                            <small className="text-[16px]">.00 LKR</small></h3>
                                    </div>
                                </div>
                                <div className=" justify-center">
                                    <button
                                        className="w-full h-10 p-[2.5px] bg-[#2cc1fc] text-white text-[14px] rounded-b-2xl">Add to Cart
                                    </button>
                                </div>
                            </div>
                            <div
                                className="ml-16 w-72 mr-2 mb-16 justify-center items-center rounded-2xl hover:shadow-[#2cc1fc] hover:shadow-2xl">
                                <div>
                                    <img className="h-16 absolute mt-[-6px]" src={require('../../../images/product-state/new_arrivals.png')} alt=""/>
                                </div>
                                <div className="h-60 pt-4 bg-white rounded-t-2xl">
                                    <img className="h-full mx-auto" src={require('../../../images/products/product2.jpg')} alt=""/>
                                </div>
                                <div className="justify-center bg-[#4646469c] h-32">
                                    <div>
                                        <h3 className="text-white pt-2 font-bold text-center text-[16px] pl-2">Havit KB500L RGB Backlit Gaming Keyboard</h3>
                                        <p className="uppercase text-[12px] text-center text-[#cfd4da] mt-4 mb-2">- Keyboard & Mouse -</p>
                                    </div>
                                    <div className="ml-1 pb-2 p-[0.3px] pr-2">
                                        <h3 className="text-[16px] font-bold text-center text-white pl-2">3800
                                            <small className="text-[16px]">.00 LKR</small></h3>
                                    </div>
                                </div>
                                <div className=" justify-center">
                                    <button
                                        className="w-full h-10 p-[2.5px] bg-[#2cc1fc] text-white text-[14px] rounded-b-2xl">Add to Cart
                                    </button>
                                </div>
                            </div>
                            <div
                                className="ml-16 w-72 mr-2 mb-16 justify-center items-center rounded-2xl hover:shadow-[#2cc1fc] hover:shadow-2xl">
                                <div>
                                    <img className="h-16 absolute mt-[-6px]" src={require('../../../images/product-state/coming_soon.png')} alt=""/>
                                </div>
                                <div className="h-60 pt-4 bg-white rounded-t-2xl">
                                    <img className="h-full mx-auto" src={require('../../../images/products/product3.jpg')} alt=""/>
                                </div>
                                <div className="justify-center bg-[#4646469c] h-32">
                                    <div>
                                        <h3 className="text-white pt-2 font-bold text-center text-[16px] pl-2">Havit KB500L RGB Backlit Gaming Keyboard</h3>
                                        <p className="uppercase text-[12px] text-center text-[#cfd4da] mt-4 mb-2">- Keyboard & Mouse -</p>
                                    </div>
                                    <div className="ml-1 pb-2 p-[0.3px] pr-2">
                                        <h3 className="text-[16px] font-bold text-center text-white pl-2">3800
                                            <small className="text-[16px]">.00 LKR</small></h3>
                                    </div>
                                </div>
                                <div className=" justify-center">
                                    <button
                                        className="w-full h-10 p-[2.5px] bg-[#2cc1fc] text-white text-[14px] rounded-b-2xl">Add to Cart
                                    </button>
                                </div>
                            </div>
                            <div
                                className="ml-16 w-72 mr-2 mb-16 justify-center items-center rounded-2xl hover:shadow-[#2cc1fc] hover:shadow-2xl">
                                <div>
                                    <img className="h-16 absolute mt-[-6px]" src={require('../../../images/product-state/in_stock.png')} alt=""/>
                                </div>
                                <div className="h-60 pt-4 bg-white rounded-t-2xl">
                                    <img className="h-full mx-auto" src={require('../../../images/products/product4.jpg')} alt=""/>
                                </div>
                                <div className="justify-center bg-[#4646469c] h-32">
                                    <div>
                                        <h3 className="text-white pt-2 font-bold text-center text-[16px] pl-2">Havit KB500L RGB Backlit Gaming Keyboard</h3>
                                        <p className="uppercase text-[12px] text-center text-[#cfd4da] mt-4 mb-2">- Keyboard & Mouse -</p>
                                    </div>
                                    <div className="ml-1 pb-2 p-[0.3px] pr-2">
                                        <h3 className="text-[16px] font-bold text-center text-white pl-2">3800
                                            <small className="text-[16px]">.00 LKR</small></h3>
                                    </div>
                                </div>
                                <div className=" justify-center">
                                    <button
                                        className="w-full h-10 p-[2.5px] bg-[#2cc1fc] text-white text-[14px] rounded-b-2xl">Add to Cart
                                    </button>
                                </div>
                            </div>
                            <div
                                className="ml-16 w-72 mr-2 mb-16 justify-center items-center rounded-2xl hover:shadow-[#2cc1fc] hover:shadow-2xl">
                                <div>
                                    <img className="h-16 absolute mt-[-6px]" src={require('../../../images/product-state/in_stock.png')} alt=""/>
                                </div>
                                <div className="h-60 pt-4 bg-white rounded-t-2xl">
                                    <img className="h-full mx-auto" src={require('../../../images/products/product5.jpg')} alt=""/>
                                </div>
                                <div className="justify-center bg-[#4646469c] h-32">
                                    <div>
                                        <h3 className="text-white pt-2 font-bold text-center text-[16px] pl-2">Havit KB500L RGB Backlit Gaming Keyboard</h3>
                                        <p className="uppercase text-[12px] text-center text-[#cfd4da] mt-4 mb-2">- Keyboard & Mouse -</p>
                                    </div>
                                    <div className="ml-1 pb-2 p-[0.3px] pr-2">
                                        <h3 className="text-[16px] font-bold text-center text-white pl-2">3800
                                            <small className="text-[16px]">.00 LKR</small></h3>
                                    </div>
                                </div>
                                <div className=" justify-center">
                                    <button
                                        className="w-full h-10 p-[2.5px] bg-[#2cc1fc] text-white text-[14px] rounded-b-2xl">Add to Cart
                                    </button>
                                </div>
                            </div>
                            <div
                                className="ml-16 w-72 mr-2 mb-16 justify-center items-center rounded-2xl hover:shadow-[#2cc1fc] hover:shadow-2xl">
                                <div>
                                    <img className="h-16 absolute mt-[-6px]" src={require('../../../images/product-state/coming_soon.png')} alt=""/>
                                </div>
                                <div className="h-60 pt-4 bg-white rounded-t-2xl">
                                    <img className="h-full mx-auto" src={require('../../../images/products/product6.jpg')} alt=""/>
                                </div>
                                <div className="justify-center bg-[#4646469c] h-32">
                                    <div>
                                        <h3 className="text-white pt-2 font-bold text-center text-[16px] pl-2">Havit KB500L RGB Backlit Gaming Keyboard</h3>
                                        <p className="uppercase text-[12px] text-center text-[#cfd4da] mt-4 mb-2">- Keyboard & Mouse -</p>
                                    </div>
                                    <div className="ml-1 pb-2 p-[0.3px] pr-2">
                                        <h3 className="text-[16px] font-bold text-center text-white pl-2">3800
                                            <small className="text-[16px]">.00 LKR</small></h3>
                                    </div>
                                </div>
                                <div className=" justify-center">
                                    <button
                                        className="w-full h-10 p-[2.5px] bg-[#2cc1fc] text-white text-[14px] rounded-b-2xl">Add to Cart
                                    </button>
                                </div>
                            </div>
                            <div
                                className="ml-16 w-72 mr-2 mb-16 justify-center items-center rounded-2xl hover:shadow-[#2cc1fc] hover:shadow-2xl">
                                <div>
                                    <img className="h-16 absolute mt-[-6px]" src={require('../../../images/product-state/out_of_stock.png')} alt=""/>
                                </div>
                                <div className="h-60 pt-4 bg-white rounded-t-2xl">
                                    <img className="h-full mx-auto" src={require('../../../images/products/product7.jpg')} alt=""/>
                                </div>
                                <div className="justify-center bg-[#4646469c] h-32">
                                    <div>
                                        <h3 className="text-white pt-2 font-bold text-center text-[16px] pl-2">Havit KB500L RGB Backlit Gaming Keyboard</h3>
                                        <p className="uppercase text-[12px] text-center text-[#cfd4da] mt-4 mb-2">- Keyboard & Mouse -</p>
                                    </div>
                                    <div className="ml-1 pb-2 p-[0.3px] pr-2">
                                        <h3 className="text-[16px] font-bold text-center text-white pl-2">3800
                                            <small className="text-[16px]">.00 LKR</small></h3>
                                    </div>
                                </div>
                                <div className=" justify-center">
                                    <button
                                        className="w-full h-10 p-[2.5px] bg-[#2cc1fc] text-white text-[14px] rounded-b-2xl">Add to Cart
                                    </button>
                                </div>
                            </div>
                            <div
                                className="ml-16 w-72 mr-2 mb-16 justify-center items-center rounded-2xl hover:shadow-[#2cc1fc] hover:shadow-2xl">
                                <div>
                                    <img className="h-16 absolute mt-[-6px]" src={require('../../../images/product-state/in_stock.png')} alt=""/>
                                </div>
                                <div className="h-60 pt-4 bg-white rounded-t-2xl">
                                    <img className="h-full mx-auto" src={require('../../../images/products/product8.jpg')} alt=""/>
                                </div>
                                <div className="justify-center bg-[#4646469c] h-32">
                                    <div>
                                        <h3 className="text-white pt-2 font-bold text-center text-[16px] pl-2">Havit KB500L RGB Backlit Gaming Keyboard</h3>
                                        <p className="uppercase text-[12px] text-center text-[#cfd4da] mt-4 mb-2">- Keyboard & Mouse -</p>
                                    </div>
                                    <div className="ml-1 pb-2 p-[0.3px] pr-2">
                                        <h3 className="text-[16px] font-bold text-center text-white pl-2">3800
                                            <small className="text-[16px]">.00 LKR</small></h3>
                                    </div>
                                </div>
                                <div className=" justify-center">
                                    <button
                                        className="w-full h-10 p-[2.5px] bg-[#2cc1fc] text-white text-[14px] rounded-b-2xl">Add to Cart
                                    </button>
                                </div>
                            </div>
                            <div
                                className="ml-16 w-72 mr-2 mb-16 justify-center items-center rounded-2xl hover:shadow-[#2cc1fc] hover:shadow-2xl">
                                <div>
                                    <img className="h-16 absolute mt-[-6px]" src={require('../../../images/product-state/new_arrivals.png')} alt=""/>
                                </div>
                                <div className="h-60 pt-4 bg-white rounded-t-2xl">
                                    <img className="h-full mx-auto" src={require('../../../images/products/product9.jpg')} alt=""/>
                                </div>
                                <div className="justify-center bg-[#4646469c] h-32">
                                    <div>
                                        <h3 className="text-white pt-2 font-bold text-center text-[16px] pl-2">Havit KB500L RGB Backlit Gaming Keyboard</h3>
                                        <p className="uppercase text-[12px] text-center text-[#cfd4da] mt-4 mb-2">- Keyboard & Mouse -</p>
                                    </div>
                                    <div className="ml-1 pb-2 p-[0.3px] pr-2">
                                        <h3 className="text-[16px] font-bold text-center text-white pl-2">3800
                                            <small className="text-[16px]">.00 LKR</small></h3>
                                    </div>
                                </div>
                                <div className=" justify-center">
                                    <button
                                        className="w-full h-10 p-[2.5px] bg-[#2cc1fc] text-white text-[14px] rounded-b-2xl">Add to Cart
                                    </button>
                                </div>
                            </div>
                            <div
                                className="ml-16 w-72 mr-2 mb-16 justify-center items-center rounded-2xl hover:shadow-[#2cc1fc] hover:shadow-2xl">
                                <div>
                                    <img className="h-16 absolute mt-[-6px]" src={require('../../../images/product-state/coming_soon.png')} alt=""/>
                                </div>
                                <div className="h-60 pt-4 bg-white rounded-t-2xl">
                                    <img className="h-full mx-auto" src={require('../../../images/products/product10.jpg')} alt=""/>
                                </div>
                                <div className="justify-center bg-[#4646469c] h-32">
                                    <div>
                                        <h3 className="text-white pt-2 font-bold text-center text-[16px] pl-2">Havit KB500L RGB Backlit Gaming Keyboard</h3>
                                        <p className="uppercase text-[12px] text-center text-[#cfd4da] mt-4 mb-2">- Keyboard & Mouse -</p>
                                    </div>
                                    <div className="ml-1 pb-2 p-[0.3px] pr-2">
                                        <h3 className="text-[16px] font-bold text-center text-white pl-2">3800
                                            <small className="text-[16px]">.00 LKR</small></h3>
                                    </div>
                                </div>
                                <div className=" justify-center">
                                    <button
                                        className="w-full h-10 p-[2.5px] bg-[#2cc1fc] text-white text-[14px] rounded-b-2xl">Add to Cart
                                    </button>
                                </div>
                            </div>
                            <div
                                className="ml-16 w-72 mr-2 mb-16 justify-center items-center rounded-2xl hover:shadow-[#2cc1fc] hover:shadow-2xl">
                                <div>
                                    <img className="h-16 absolute mt-[-6px]" src={require('../../../images/product-state/in_stock.png')} alt=""/>
                                </div>
                                <div className="h-60 pt-4 bg-white rounded-t-2xl">
                                    <img className="h-full mx-auto" src={require('../../../images/products/product1.jpg')} alt=""/>
                                </div>
                                <div className="justify-center bg-[#4646469c] h-32">
                                    <div>
                                        <h3 className="text-white pt-2 font-bold text-center text-[16px] pl-2">Havit KB500L RGB Backlit Gaming Keyboard</h3>
                                        <p className="uppercase text-[12px] text-center text-[#cfd4da] mt-4 mb-2">- Keyboard & Mouse -</p>
                                    </div>
                                    <div className="ml-1 pb-2 p-[0.3px] pr-2">
                                        <h3 className="text-[16px] font-bold text-center text-white pl-2">3800
                                            <small className="text-[16px]">.00 LKR</small></h3>
                                    </div>
                                </div>
                                <div className=" justify-center">
                                    <button
                                        className="w-full h-10 p-[2.5px] bg-[#2cc1fc] text-white text-[14px] rounded-b-2xl">Add to Cart
                                    </button>
                                </div>
                            </div>
                            <div
                                className="ml-16 w-72 mr-2 mb-16 justify-center items-center rounded-2xl hover:shadow-[#2cc1fc] hover:shadow-2xl">
                                <div>
                                    <img className="h-16 absolute mt-[-6px]" src={require('../../../images/product-state/out_of_stock.png')} alt=""/>
                                </div>
                                <div className="h-60 pt-4 bg-white rounded-t-2xl">
                                    <img className="h-full mx-auto" src={require('../../../images/products/product11.jpg')} alt=""/>
                                </div>
                                <div className="justify-center bg-[#4646469c] h-32">
                                    <div>
                                        <h3 className="text-white pt-2 font-bold text-center text-[16px] pl-2">Havit KB500L RGB Backlit Gaming Keyboard</h3>
                                        <p className="uppercase text-[12px] text-center text-[#cfd4da] mt-4 mb-2">- Keyboard & Mouse -</p>
                                    </div>
                                    <div className="ml-1 pb-2 p-[0.3px] pr-2">
                                        <h3 className="text-[16px] font-bold text-center text-white pl-2">3800
                                            <small className="text-[16px]">.00 LKR</small></h3>
                                    </div>
                                </div>
                                <div className=" justify-center">
                                    <button
                                        className="w-full h-10 p-[2.5px] bg-[#2cc1fc] text-white text-[14px] rounded-b-2xl">Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
