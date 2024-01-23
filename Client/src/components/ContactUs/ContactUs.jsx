import { Box, Card, Flex, Image } from "@chakra-ui/react";
import { Row, Col } from "react-bootstrap";
import "./ContactUs.css";
import ContactUsIcon from "../Icons/ContactUsIcon";
import IMAGES from "../../images/Images";
import { FaMapLocationDot } from "react-icons/fa6";

function ContactUs() {
    return (
        <>
            <Flex
                minHeight="50vh"
                className="contact-first-parent home-parent1"
            >
                <Flex
                    flexDir="column"
                    justifyContent="center"
                    color="gray.600"
                    mt="0"
                >
                    <Flex alignSelf="center" justifySelf="center" mx="auto">
                        <span>
                            <ContactUsIcon width="180px" height="180px" />
                        </span>
                    </Flex>
                    <Flex
                        style={{
                            display: "flex",
                            justifyContent: "center",
                        }}
                    >
                        <span className="fancy">Contact Us</span>
                    </Flex>
                </Flex>
            </Flex>
            <Flex
                minHeight="50vh"
                className="contact-first-parent home-parent2"
            >
                <Row style={{ padding: "6.2%" }}>
                    <Col sm></Col>
                    <Col sm>
                        <Card
                            overflow="hidden"
                            variant="outline"
                            borderWidth="2px"
                            borderColor="#338ac6"
                            mt="5"
                            borderRadius="3xl"
                            boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"
                            width="fit-content"
                            mx="auto"
                            _hover={{
                                boxShadow:
                                    "rgb(38, 57, 77) 0px 20px 30px -10px",
                                cursor: "pointer",
                                borderWidth: "3px",
                                borderColor: "#338ac6",
                            }}
                            className="child bounce"
                        >
                            <Flex justifyContent="center">
                                {/* <span
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
                                </span> */}
                            </Flex>

                            <Image
                                objectFit="cover"
                                maxW={{ base: "100%", sm: "300px" }}
                                src={IMAGES.prjUpcoming}
                            />
                        </Card>
                    </Col>
                    <Col sm>
                        <Card
                            overflow="hidden"
                            variant="outline"
                            borderWidth="2px"
                            borderColor="#338ac6"
                            mt="5"
                            borderRadius="3xl"
                            boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"
                            width="fit-content"
                            mx="auto"
                            _hover={{
                                boxShadow:
                                    "rgb(38, 57, 77) 0px 20px 30px -10px",
                                cursor: "pointer",
                                borderWidth: "3px",
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
                                src={IMAGES.prjUpcoming}
                            />
                        </Card>
                    </Col>
                </Row>
            </Flex>
            {/* <Flex
                minHeight="70vh"
                className="contact-first-parent home-parent2"
            ></Flex> */}
        </>
    );
}

export default ContactUs;
