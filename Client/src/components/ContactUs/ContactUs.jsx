import {
    Box,
    Card,
    Flex,
    Image,
    Input,
    InputGroup,
    FormControl,
    FormLabel,
    Textarea,
    Button,
} from "@chakra-ui/react";
import { Row, Col } from "react-bootstrap";
import "./ContactUs.css";
import ContactUsIcon from "../Icons/ContactUsIcon";
import IMAGES from "../../images/Images";
import { FaMapLocationDot } from "react-icons/fa6";
import { BiSolidPhoneCall } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { useToast } from "@chakra-ui/react";

function ContactUs() {
    const toast = useToast();

    const handleSubmit = (e) => {
        toast({
            title: "Message sent!",
            description: "We will get back to you soon",
            status: "success",
            duration: 4000,
            isClosable: true,
        });
    };

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
                    className=""
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
                            borderRadius="3xl"
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
                            borderRadius="3xl"
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
                            borderRadius="3xl"
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
                                        abc1@xyz.com
                                    </div>
                                    <div style={{ marginLeft: "1rem" }}>
                                        abc2@xyz.com
                                    </div>
                                </span>
                            </Flex>
                        </Card>
                    </Col>
                </Row>
            </Flex>
            <Flex py="20" className="home-parent1">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d543.1458616004787!2d86.9875812443001!3d23.681848507635795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f719a1736d8a15%3A0xd80e497de25909ab!2sSUKHMANI%20PLAZA!5e0!3m2!1sen!2sin!4v1706117811857!5m2!1sen!2sin"
                    width="90%"
                    height="450"
                    style={{
                        border: 0,
                        marginLeft: "auto",
                        marginRight: "auto",
                        borderRadius: "20px",
                    }}
                    allowfullscreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </Flex>
            <Flex
                minHeight="80vh"
                className="home-parent2"
                justifyContent="center"
                alignItems="center"
            >
                <Box width="80%" borderRadius="3xl" pt="7" px="10" pb="16">
                    <Flex
                        className="fancy"
                        justifyContent="center"
                        color="#4a5568"
                    >
                        Get in touch
                    </Flex>
                    <form
                        action="https://formspree.io/f/mgegoykb"
                        method="post"
                    >
                        <FormControl isRequired>
                            <FormLabel fontSize="lg" color="#4a5568">
                                Name
                            </FormLabel>
                            <Input
                                type="text"
                                bg="white"
                                size="lg"
                                placeholder="Enter your name"
                                borderWidth="2px"
                                borderColor="rgb(38,107,183)"
                                autoComplete="off"
                                name="Name"
                            />
                        </FormControl>
                        <FormControl isRequired mt="3">
                            <FormLabel fontSize="lg" color="#4a5568">
                                Email
                            </FormLabel>
                            <Input
                                type="email"
                                bg="white"
                                size="lg"
                                placeholder="Enter your email"
                                borderWidth="2px"
                                borderColor="rgb(38,107,183)"
                                name="email"
                            />
                        </FormControl>
                        <FormControl isRequired mt="3">
                            <FormLabel fontSize="lg" color="#4a5568">
                                Phone
                            </FormLabel>
                            <Input
                                type="number"
                                bg="white"
                                size="lg"
                                placeholder="Enter your phone number"
                                borderWidth="2px"
                                borderColor="rgb(38,107,183)"
                                name="phone number"
                            />
                        </FormControl>
                        <FormControl isRequired mt="5">
                            <Textarea
                                bg="white"
                                size="lg"
                                borderWidth="2px"
                                borderColor="rgb(38,107,183)"
                                placeholder="Enter your Message"
                                height="130px"
                                name="message"
                            />
                        </FormControl>
                        <FormControl>
                            <Button
                                mt="5"
                                colorScheme="blue"
                                type="submit"
                                onClick={handleSubmit}
                            >
                                Submit
                            </Button>
                        </FormControl>
                    </form>
                </Box>
            </Flex>
        </>
    );
}

export default ContactUs;
