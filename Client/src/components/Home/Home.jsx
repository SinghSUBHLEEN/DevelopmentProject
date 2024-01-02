import "./Home.css";
import Carousel from "react-bootstrap/Carousel";
import { Box } from "@chakra-ui/react";
import Images from "../../images/Images";

function Home() {
    return (
        <>
            <div
                style={{
                    flex: 1,
                    height: "fit-content",
                    display: "flex",
                    flexDirection: "column",
                    marginLeft: "auto",
                    marginRight: "auto",
                    // marginBottom: "600px",
                }}
            >
                <Carousel
                    style={{
                        width: "80%",
                        marginLeft: "auto",
                        marginRight: "auto",
                    }}
                >
                    <Carousel.Item interval={1000}>
                        <img src={Images.banner2} />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>
                                Nulla vitae elit libero, a pharetra augue mollis
                                interdum.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                        <img src={Images.banner1} />
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={Images.banner3} />
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque
                                nisl consectetur.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <div>makdmakmdkamd</div>
            </div>
        </>
    );
}

export default Home;
