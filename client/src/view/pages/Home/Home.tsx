import {Component} from "react";
import {Carousel} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

export class Home extends Component {
    render() {
        return (
            <div style={{display: 'block'}}>
                <Carousel>
                    <Carousel.Item interval={2000}>
                        <img
                            className="d-block w-100"
                            src="/images/home_banner1.jpg"
                            alt="Image One"
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={2000}>
                        <img
                            className="d-block w-100"
                            src="/images/home_banner2.jpg"
                            alt="Image Two"
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={2000}>
                        <img
                            className="d-block w-100"
                            src="/images/home_banner3.jpg"
                            alt="Image Three"
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={2000}>
                        <img
                            className="d-block w-100"
                            src="/images/home_banner4.jpg"
                            alt="Image Four"
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={2000}>
                        <img
                            className="d-block w-100"
                            src="/images/home_banner5.jpg"
                            alt="Image Five"
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={2000}>
                        <img
                            className="d-block w-100"
                            src="/images/home_banner6.jpg"
                            alt="Image Six"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
        );
    }
}
