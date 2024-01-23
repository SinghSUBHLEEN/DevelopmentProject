import "./Home.css";
import Carousel from "react-bootstrap/Carousel";
import Images from "../../images/Images";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import {
    Box,
    Button,
    ButtonGroup,
    Card,
    CardBody,
    CardFooter,
    Divider,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
} from "@chakra-ui/react";
import HomeIcon1 from "../Icons/HomeIcon1";
import HomeIcon2 from "../Icons/HomeIcon2";
import HomeIcon3 from "../Icons/HomeIcon3";
import HomeIcon4 from "../Icons/HomeIcon4";
import { FaLongArrowAltRight } from "react-icons/fa";

function Home() {
    const navigate = useNavigate();

    const handleNavigate = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        navigate("/aboutUs");
        return;
    };

    return (
        <>
            <div className="home-parent">
                <div
                    style={{
                        height: "fit-content",
                        display: "flex",
                        flexDirection: "column",
                        marginLeft: "auto",
                        marginRight: "auto",
                    }}
                >
                    <Carousel
                        style={{
                            width: "80%",
                            marginLeft: "auto",
                            marginRight: "auto",
                            marginTop: "8px",
                            boxShadow: "rgba(0, 0, 0, 0.5) 0px 4px 12px",
                        }}
                    >
                        <Carousel.Item interval={1300}>
                            <img src={Images.banner2} />
                            <Carousel.Caption>
                                <h3 className="caption">
                                    Find the home of your Dreams
                                </h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={1300}>
                            <img src={Images.banner1} />
                            <Carousel.Caption>
                                <h3 className="caption">
                                    Find the home of your Dreams
                                </h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={1300}>
                            <img src={Images.banner3} />
                            <Carousel.Caption>
                                <h3 className="caption">
                                    Find the home of your Dreams
                                </h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
                <Flex minHeight="100vh" mt="10">
                    <Box
                        flexDir="column"
                        // mt="1"
                        // mb="10"
                        height="auto"
                        alignSelf="center"
                        className="about-container"
                        borderRadius="xl"
                        boxShadow="rgba(0, 0, 0, 0.2) 0px 4px 12px"
                        color="gray.600"
                        py="12"
                    >
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "center",
                            }}
                        >
                            <span
                                className="about-heading"
                                style={{
                                    fontSize: "1.9rem",
                                    fontWeight: "500",
                                    marginLeft: "-5px",
                                }}
                            >
                                About Our Company
                            </span>
                        </div>
                        <p className="about-para">
                            Onkar Developers epitomizes “passion at work” in
                            totality. For us it is not only a catch phrase which
                            sounds just right, rather we all strive to live it
                            daily. It serves as our compass which guides us
                            towards creating world class quality products and
                            workmanship. It guides us to be transparent in all
                            our dealings and adhere to delivery on time, each
                            time. We changed the skyline in Asansol, created
                            landmark developments in the same and many more to
                            follow. Onkar Developers is one of the finest real
                            estate development companies in India - A trusted
                            builder based out of Asansol.
                        </p>
                        <button
                            color="gray.200"
                            className="btn-grad"
                            width="fit-content"
                            onClick={handleNavigate}
                            style={{ borderWidth: "0px", borderRadius: "50px" }}
                        >
                            <Flex>
                                <span>Read more</span>
                                <FaLongArrowAltRight
                                    style={{
                                        alignSelf: "center",
                                        marginLeft: "8px",
                                    }}
                                />
                            </Flex>
                        </button>
                    </Box>
                </Flex>
                <Flex minHeight="100vh">
                    <Flex
                        flexDir="column"
                        width="100%"
                        height="fit-content"
                        alignSelf="center"
                        borderRadius="xl"
                        color="gray.100"
                        className="project-container"
                        boxShadow="rgba(0, 0, 0, 0.233) 0px 4px 12px"
                        py="12"
                        mb="6"
                    >
                        <Flex
                            style={{
                                // display: "flex",
                                justifyContent: "center",
                                marginBottom: "18px",
                            }}
                            color="gray.100"
                        >
                            <span
                                className="about-heading"
                                style={{
                                    fontSize: "1.9rem",
                                    fontWeight: "500",
                                    marginLeft: "-5px",
                                }}
                            >
                                Our Projects
                            </span>
                        </Flex>
                        {/* <Flex justifyContent="space-evenly"> */}

                        <Row style={{ padding: "0 10%" }}>
                            <Col>
                                <Card
                                    overflow="hidden"
                                    variant="outline"
                                    mt="5"
                                    borderRadius="3xl"
                                    boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"
                                    width="fit-content"
                                    mx="auto"
                                    _hover={{
                                        boxShadow:
                                            "rgb(38, 57, 77) 0px 20px 30px -10px",
                                        cursor: "pointer",
                                        borderWidth: "2px",
                                        borderColor: "#338ac6",
                                    }}
                                    className="child bounce"
                                >
                                    <Flex justifyContent="center">
                                        <span
                                            className="about-heading"
                                            style={{
                                                fontSize: "1.4rem",
                                                fontWeight: "500",
                                                color: "#4a5568",
                                                padding: "5px",
                                                textDecoration: "Highlight",
                                            }}
                                        >
                                            Completed Projects
                                        </span>
                                    </Flex>

                                    <Image
                                        objectFit="cover"
                                        maxW={{ base: "100%", sm: "300px" }}
                                        src={Images.prjUpcoming}
                                    />
                                </Card>
                            </Col>
                            <Col>
                                <Card
                                    overflow="hidden"
                                    variant="outline"
                                    mt="5"
                                    mx="auto"
                                    borderRadius="3xl"
                                    boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"
                                    _hover={{
                                        boxShadow:
                                            "rgb(38, 57, 77) 0px 20px 30px -10px",
                                        cursor: "pointer",
                                        borderWidth: "2px",
                                        borderColor: "#338ac6",
                                    }}
                                    width="fit-content"
                                    className="child bounce"
                                >
                                    <Flex justifyContent="center">
                                        <span
                                            className="about-heading"
                                            style={{
                                                fontSize: "1.4rem",
                                                fontWeight: "500",
                                                color: "#4a5568",
                                                padding: "5px",
                                                textDecoration: "Highlight",
                                            }}
                                        >
                                            Ongoing Projects
                                        </span>
                                    </Flex>

                                    <Image
                                        objectFit="cover"
                                        maxW={{ base: "100%", sm: "300px" }}
                                        src={Images.prjCompleted}
                                    />
                                </Card>
                            </Col>
                        </Row>
                    </Flex>
                </Flex>
            </div>
        </>
    );
}

export default Home;
