import { Box, Card, Flex, Image } from "@chakra-ui/react";
import { Row, Col } from "react-bootstrap";
import "./ContactUs.css";
import ContactUsIcon from "../Icons/ContactUsIcon";
import IMAGES from "../../images/Images";
import { FaMapLocationDot } from "react-icons/fa6";
import { BiSolidPhoneCall } from "react-icons/bi";
import { MdEmail } from "react-icons/md";

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
                <Row style={{ marginLeft: "0", marginRight: "0" }}>
                    <Col sm>
                        <Card
                            overflow="hidden"
                            variant="outline"
                            minHeight="220px"
                            mt="5"
                            mx="auto"
                            borderWidth="2px"
                            borderColor="#338ac6"
                            borderRadius="2xl"
                            _hover={{
                                boxShadow:
                                    "rgb(38, 57, 77) 0px 20px 30px -10px",
                            }}
                            width="270px"
                            className="child bounce"
                        >
                            <Flex justifyContent="center">
                                <span
                                    className="about-heading"
                                    style={{
                                        fontSize: "1.4rem",
                                        fontWeight: "500",
                                        color: "rgb(74,85,104)",
                                        padding: "5px",
                                        textDecoration: "Highlight",
                                    }}
                                >
                                    <FaMapLocationDot
                                        style={{ fontSize: "2.6rem" }}
                                    />
                                </span>
                            </Flex>
                            <Flex justifyContent="center">
                                <span
                                    className="about-heading"
                                    style={{
                                        fontSize: "2rem",
                                        fontWeight: "500",
                                        color: "rgba(0,81,168,0.85)",
                                        padding: "5px",
                                        textDecoration: "Highlight",
                                    }}
                                >
                                    Location
                                </span>
                            </Flex>
                            <Flex justifyContent="center">
                                <span
                                    className="about-heading"
                                    style={{
                                        fontSize: "1.2rem",
                                        fontWeight: "500",
                                        color: "rgb(74,85,104)",
                                        padding: "10px",
                                        textDecoration: "Highlight",
                                    }}
                                >
                                    <div style={{ marginLeft: "1rem" }}>
                                        GT road, Auto Market, Ushagram, Asansol,
                                        West Bengal 713303
                                    </div>
                                </span>
                            </Flex>
                        </Card>
                    </Col>
                    <Col sm>
                        <Card
                            overflow="hidden"
                            variant="outline"
                            minHeight="220px"
                            mt="5"
                            mx="auto"
                            borderWidth="2px"
                            borderColor="#338ac6"
                            borderRadius="2xl"
                            _hover={{
                                boxShadow:
                                    "rgb(38, 57, 77) 0px 20px 30px -10px",
                            }}
                            width="270px"
                            className="child bounce"
                        >
                            <Flex justifyContent="center">
                                <span
                                    className="about-heading"
                                    style={{
                                        fontSize: "1.4rem",
                                        fontWeight: "500",
                                        color: "rgb(74,85,104)",
                                        padding: "5px",
                                        textDecoration: "Highlight",
                                    }}
                                >
                                    <BiSolidPhoneCall
                                        style={{ fontSize: "2.6rem" }}
                                    />
                                </span>
                            </Flex>
                            <Flex justifyContent="center">
                                <span
                                    className="about-heading"
                                    style={{
                                        fontSize: "2rem",
                                        fontWeight: "500",
                                        color: "rgba(0,81,168,0.85)",
                                        padding: "5px",
                                        textDecoration: "Highlight",
                                    }}
                                >
                                    Call us
                                </span>
                            </Flex>
                            <Flex justifyContent="center">
                                <span
                                    className="about-heading"
                                    style={{
                                        fontSize: "1.2rem",
                                        fontWeight: "500",
                                        color: "rgb(74,85,104)",
                                        padding: "10px",
                                        textDecoration: "Highlight",
                                    }}
                                >
                                    <div style={{ marginLeft: "1rem" }}>
                                        {"+91 9434360593"}
                                    </div>
                                    <div style={{ marginLeft: "1rem" }}>
                                        {"+91 7001406563"}
                                    </div>
                                    <div style={{ marginLeft: "1rem" }}>
                                        {"+91 8335050022"}
                                    </div>
                                </span>
                            </Flex>
                        </Card>
                    </Col>
                    <Col sm>
                        <Card
                            overflow="hidden"
                            variant="outline"
                            minHeight="220px"
                            mt="5"
                            mx="auto"
                            borderWidth="2px"
                            borderColor="#338ac6"
                            borderRadius="2xl"
                            _hover={{
                                boxShadow:
                                    "rgb(38, 57, 77) 0px 20px 30px -10px",
                            }}
                            width="270px"
                            className="child bounce"
                        >
                            <Flex justifyContent="center">
                                <span
                                    className="about-heading"
                                    style={{
                                        fontSize: "1.4rem",
                                        fontWeight: "500",
                                        color: "rgb(74,85,104)",
                                        padding: "5px",
                                        textDecoration: "Highlight",
                                    }}
                                >
                                    <MdEmail style={{ fontSize: "2.6rem" }} />
                                </span>
                            </Flex>
                            <Flex justifyContent="center">
                                <span
                                    className="about-heading"
                                    style={{
                                        fontSize: "2rem",
                                        fontWeight: "500",
                                        color: "rgba(0,81,168,0.85)",
                                        padding: "5px",
                                        textDecoration: "Highlight",
                                    }}
                                >
                                    E-mail us
                                </span>
                            </Flex>
                            <Flex justifyContent="center">
                                <span
                                    className="about-heading"
                                    style={{
                                        fontSize: "1.2rem",
                                        fontWeight: "500",
                                        color: "rgb(74,85,104)",
                                        padding: "10px",
                                        textDecoration: "Highlight",
                                    }}
                                >
                                    <div style={{ marginLeft: "1rem" }}>
                                        abc1@xys.com
                                    </div>
                                    <div style={{ marginLeft: "1rem" }}>
                                        abc2@xys.com
                                    </div>
                                </span>
                            </Flex>
                        </Card>
                    </Col>
                </Row>
            </Flex>
        </>
    );
}

export default ContactUs;
