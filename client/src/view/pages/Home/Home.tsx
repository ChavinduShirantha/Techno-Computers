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
                        <div className="xl:container mx-auto">
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
                                    <Carousel className="" controls={false} indicators={false} fade={false} slide={true}>
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
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
