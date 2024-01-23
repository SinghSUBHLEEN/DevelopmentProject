import { Box, Flex, Image } from "@chakra-ui/react";
import { Row, Col } from "react-bootstrap";
import "./ContactUs.css";
import ContactUsIcon from "../Icons/ContactUsIcon";
import IMAGES from "../../images/Images";

function ContactUs() {
    return (
        <>
            <Flex minHeight="70vh" className="contact-first-parent">
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

                    <Row>
                        <Col></Col>
                        <Col></Col>
                        <Col></Col>
                    </Row>
                </Flex>
            </Flex>
        </>
    );
}

export default ContactUs;
