import {
    Box,
    Button,
    Card,
    Flex,
    Image,
    useDisclosure,
} from "@chakra-ui/react";
import "./Projects.css";
import { Carousel, Col, Row } from "react-bootstrap";
import { GrProjects } from "react-icons/gr";
import IMAGES from "../../images/Images";
import ProjectIcon from "../Icons/ProjectIcon";
import { IoLocationSharp } from "react-icons/io5";
import { TbTrees } from "react-icons/tb";
import { FaParking } from "react-icons/fa";
import SecurityIcon from "../Icons/SecurityIcon";
import {
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerHeader,
    DrawerOverlay,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { GiTap, GiFireExtinguisher, GiLift } from "react-icons/gi";

function Projects() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const [str, setStr] = useState("");

    const handleOpen = (e) => {
        setStr(e.target.id);
        onOpen();
    };

    const handleClose = () => {
        setStr("");
        onClose();
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
                        <span
                            style={{
                                alignSelf: "center",
                                marginBottom: "-7rem",
                            }}
                        >
                            <ProjectIcon width="300px" />
                        </span>
                    </Flex>
                    <Flex
                        style={{
                            display: "flex",
                            justifyContent: "center",
                        }}
                    >
                        <span className="fancy">Projects</span>
                    </Flex>
                </Flex>
            </Flex>
            <Flex
                minHeight="50vh"
                className="contact-first-parent home-parent2"
                pb="20"
            >
                <Row style={{ margin: "0", padding: "0", width: "100%" }}>
                    <Col sm>
                        <Card
                            overflow="hidden"
                            variant="outline"
                            minHeight="220px"
                            mt="5"
                            mx="auto"
                            borderRadius="3xl"
                            _hover={{
                                boxShadow:
                                    "rgb(38, 57, 77) 0px 20px 30px -10px",
                            }}
                            width="285px"
                            className="child bounce"
                        >
                            <Flex justifyContent="center">
                                <span
                                    className="about-heading"
                                    style={{
                                        fontSize: "1.7rem",
                                        color: "rgba(0,81,168,0.85)",
                                        padding: "5px",
                                        textDecoration: "Highlight",
                                    }}
                                >
                                    Ekam Residency
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
                                    <Image
                                        src={IMAGES.ekam}
                                        width="400px"
                                        borderRadius="lg"
                                    />
                                </span>
                            </Flex>
                            <Flex justifyContent="center">
                                <span
                                    className="about-heading"
                                    style={{
                                        fontSize: "1rem",
                                        color: "rgb(74,85,104)",
                                        padding: "10px",
                                        display: "flex",
                                        textDecoration: "Highlight",
                                    }}
                                >
                                    <IoLocationSharp
                                        style={{ fontSize: "1.5rem" }}
                                    />{" "}
                                    SP Mukherjee Road by lane Murgasol Asnasol -
                                    713303
                                </span>
                            </Flex>
                            <Flex justifyContent="center">
                                <span
                                    className="about-heading"
                                    style={{
                                        fontSize: "1rem",
                                        color: "rgb(74,85,104)",
                                        padding: "10px",
                                        display: "flex",
                                        textDecoration: "Highlight",
                                    }}
                                >
                                    Located in Asnasol, the Ekam Residency is
                                    thoughtfully planned, equipped with all
                                    amenities for a comfortable living and is
                                    designed by keeping the modern lifestyle in
                                    mind.
                                </span>
                            </Flex>
                            <Button
                                m="0"
                                p="0"
                                w="100%"
                                borderTopRadius="0"
                                colorScheme="red"
                                bg="rgb(172,48,17)"
                                fontSize="1.2rem"
                                id="ekam"
                                _hover={{ cursor: "pointer" }}
                                onClick={handleOpen}
                            >
                                View details
                            </Button>
                        </Card>
                    </Col>
                    <Col sm>
                        <Card
                            overflow="hidden"
                            variant="outline"
                            minHeight="220px"
                            mt="5"
                            mx="auto"
                            borderRadius="3xl"
                            _hover={{
                                boxShadow:
                                    "rgb(38, 57, 77) 0px 20px 30px -10px",
                            }}
                            width="285px"
                            className="child bounce"
                            key="onkar"
                        >
                            <Flex justifyContent="center">
                                <span
                                    className="about-heading"
                                    style={{
                                        fontSize: "1.7rem",
                                        fontWeight: "300",
                                        color: "rgba(0,81,168,0.85)",
                                        padding: "5px",
                                        textDecoration: "Highlight",
                                    }}
                                >
                                    Onkar Residency
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
                                    <Image
                                        src={IMAGES.onkar}
                                        width="400px"
                                        height="176px"
                                        borderRadius="lg"
                                    />
                                </span>
                            </Flex>
                            <Flex justifyContent="center">
                                <span
                                    className="about-heading"
                                    style={{
                                        fontSize: "1rem",
                                        color: "rgb(74,85,104)",
                                        padding: "10px",
                                        display: "flex",
                                        textDecoration: "Highlight",
                                    }}
                                >
                                    <IoLocationSharp
                                        style={{ fontSize: "1.5rem" }}
                                    />{" "}
                                    SP Mukherjee Road by lane Murgasol Asnasol -
                                    713303
                                </span>
                            </Flex>
                            <Flex justifyContent="center">
                                <span
                                    className="about-heading"
                                    style={{
                                        fontSize: "1rem",
                                        color: "rgb(74,85,104)",
                                        padding: "10px",
                                        display: "flex",
                                        textDecoration: "Highlight",
                                    }}
                                >
                                    Located in Asnasol, the Onkar Residency is
                                    thoughtfully planned, equipped with all
                                    amenities for a comfortable living and is
                                    designed by keeping the modern lifestyle in
                                    mind.
                                </span>
                            </Flex>
                            <Button
                                m="0"
                                p="0"
                                w="100%"
                                borderTopRadius="0"
                                colorScheme="red"
                                bg="rgb(172,48,17)"
                                fontSize="1.2rem"
                                id="onkar"
                                onClick={handleOpen}
                            >
                                View details
                            </Button>
                        </Card>
                    </Col>
                </Row>
            </Flex>
            <Drawer onClose={handleClose} isOpen={isOpen} size="xl">
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>
                        <Flex justifyContent="center">
                            <span
                                className="about-heading"
                                style={{
                                    fontSize: "1.7rem",
                                    color: "rgba(0,81,168,0.85)",
                                    padding: "5px",
                                    textDecoration: "Highlight",
                                }}
                            >
                                {str === "ekam"
                                    ? "Ekam Residency"
                                    : str === "onkar"
                                    ? "Onkar Residency"
                                    : ""}
                            </span>
                        </Flex>
                        <Flex justifyContent="center">
                            <span
                                className="about-heading"
                                style={{
                                    fontSize: "1rem",
                                    color: "rgb(74,85,104)",
                                    padding: "10px",
                                    display: "flex",
                                    textDecoration: "Highlight",
                                }}
                            >
                                <IoLocationSharp
                                    style={{ fontSize: "1.5rem" }}
                                />{" "}
                                SP Mukherjee Road by lane Murgasol Asnasol -
                                713303
                            </span>
                        </Flex>
                    </DrawerHeader>
                    <DrawerBody display="flex" p="0">
                        {str === "ekam" && (
                            <Flex width="100%" id="2" flexDir="column">
                                <Box
                                    mt="0"
                                    width="80%"
                                    display="block"
                                    p="5"
                                    borderRadius="2xl"
                                    borderWidth="2px"
                                    bg="rgb(190,227,248)"
                                    mx="auto"
                                >
                                    <div
                                        className="about-heading"
                                        style={{
                                            fontSize: "1.5rem",
                                            color: "rgb(74,85,104)",
                                        }}
                                    >
                                        Description
                                    </div>
                                    <div
                                        className="about-heading"
                                        style={{
                                            fontSize: "1rem",
                                            color: "rgb(74,85,104)",
                                        }}
                                    >
                                        Located in Asnasol, the Ekam Residency
                                        is thoughtfully planned, equipped with
                                        all amenities for a comfortable living
                                        and is designed by keeping the modern
                                        lifestyle in mind.
                                    </div>
                                </Box>
                                <Box
                                    width="80%"
                                    display="block"
                                    p="5"
                                    borderRadius="2xl"
                                    borderWidth="2px"
                                    bg="rgb(190,227,248)"
                                    mx="auto"
                                    my="6"
                                >
                                    <div
                                        className="about-heading"
                                        style={{
                                            fontSize: "1.5rem",
                                            color: "rgb(74,85,104)",
                                        }}
                                    >
                                        Amenities
                                    </div>
                                    <div
                                        className="about-heading"
                                        style={{
                                            fontSize: "1rem",
                                            color: "rgb(74,85,104)",
                                        }}
                                    >
                                        <Row>
                                            <Col sm>
                                                <Card
                                                    overflow="hidden"
                                                    variant="outline"
                                                    mt="2"
                                                    borderWidth="2px"
                                                    borderRadius="3xl"
                                                    width="170px"
                                                    mx="auto"
                                                >
                                                    <Flex justifyContent="center">
                                                        <span
                                                            className="about-heading"
                                                            style={{
                                                                fontSize:
                                                                    "1.4rem",
                                                                fontWeight:
                                                                    "500",
                                                                color: "rgb(74,85,104)",
                                                                padding: "5px",
                                                                textDecoration:
                                                                    "Highlight",
                                                            }}
                                                        >
                                                            <GiTap
                                                                style={{
                                                                    fontSize:
                                                                        "2.6rem",
                                                                }}
                                                            />
                                                        </span>
                                                    </Flex>
                                                    <Flex justifyContent="center">
                                                        <span
                                                            className="about-heading"
                                                            style={{
                                                                fontSize:
                                                                    "1.2rem",
                                                                fontWeight:
                                                                    "500",
                                                                color: "rgb(74,85,104)",
                                                                padding: "10px",
                                                                textDecoration:
                                                                    "Highlight",
                                                            }}
                                                        >
                                                            <div
                                                                style={{
                                                                    fontSize:
                                                                        "1rem",
                                                                }}
                                                            >
                                                                24 hrs. water
                                                                supply
                                                            </div>
                                                        </span>
                                                    </Flex>
                                                </Card>
                                            </Col>
                                            <Col sm>
                                                <Card
                                                    overflow="hidden"
                                                    variant="outline"
                                                    mt="2"
                                                    borderWidth="2px"
                                                    borderRadius="3xl"
                                                    width="170px"
                                                    mx="auto"
                                                >
                                                    <Flex justifyContent="center">
                                                        <span
                                                            className="about-heading"
                                                            style={{
                                                                fontSize:
                                                                    "1.4rem",
                                                                fontWeight:
                                                                    "500",
                                                                color: "rgb(74,85,104)",
                                                                padding: "5px",
                                                                textDecoration:
                                                                    "Highlight",
                                                            }}
                                                        >
                                                            <FaParking
                                                                style={{
                                                                    fontSize:
                                                                        "2.5rem",
                                                                }}
                                                            />
                                                        </span>
                                                    </Flex>
                                                    <Flex justifyContent="center">
                                                        <span
                                                            className="about-heading"
                                                            style={{
                                                                fontSize:
                                                                    "1.2rem",
                                                                fontWeight:
                                                                    "500",
                                                                color: "rgb(74,85,104)",
                                                                padding: "10px",
                                                                textDecoration:
                                                                    "Highlight",
                                                            }}
                                                        >
                                                            <div
                                                                style={{
                                                                    fontSize:
                                                                        "1rem",
                                                                }}
                                                            >
                                                                Car Parking
                                                            </div>
                                                        </span>
                                                    </Flex>
                                                </Card>
                                            </Col>
                                            <Col sm>
                                                <Card
                                                    overflow="hidden"
                                                    variant="outline"
                                                    mt="2"
                                                    borderWidth="2px"
                                                    borderRadius="3xl"
                                                    width="170px"
                                                    mx="auto"
                                                >
                                                    <Flex justifyContent="center">
                                                        <span
                                                            className="about-heading"
                                                            style={{
                                                                fontSize:
                                                                    "1.4rem",
                                                                fontWeight:
                                                                    "500",
                                                                color: "rgb(74,85,104)",
                                                                padding: "5px",
                                                                textDecoration:
                                                                    "Highlight",
                                                            }}
                                                        >
                                                            <GiFireExtinguisher
                                                                style={{
                                                                    fontSize:
                                                                        "2.5rem",
                                                                }}
                                                            />
                                                        </span>
                                                    </Flex>
                                                    <Flex justifyContent="center">
                                                        <span
                                                            className="about-heading"
                                                            style={{
                                                                fontSize:
                                                                    "1.2rem",
                                                                fontWeight:
                                                                    "500",
                                                                color: "rgb(74,85,104)",
                                                                padding: "10px",
                                                                textDecoration:
                                                                    "Highlight",
                                                            }}
                                                        >
                                                            <div
                                                                style={{
                                                                    fontSize:
                                                                        "1rem",
                                                                }}
                                                            >
                                                                Fire fighting
                                                                System
                                                            </div>
                                                        </span>
                                                    </Flex>
                                                </Card>
                                            </Col>
                                            <Col sm>
                                                <Card
                                                    overflow="hidden"
                                                    variant="outline"
                                                    mt="2"
                                                    borderWidth="2px"
                                                    borderRadius="3xl"
                                                    width="170px"
                                                    mx="auto"
                                                >
                                                    <Flex justifyContent="center">
                                                        <span
                                                            className="about-heading"
                                                            style={{
                                                                fontSize:
                                                                    "1.4rem",
                                                                fontWeight:
                                                                    "500",
                                                                color: "rgb(74,85,104)",
                                                                padding: "5px",
                                                                textDecoration:
                                                                    "Highlight",
                                                            }}
                                                        >
                                                            <GiLift
                                                                style={{
                                                                    fontSize:
                                                                        "2.5rem",
                                                                }}
                                                            />
                                                        </span>
                                                    </Flex>
                                                    <Flex justifyContent="center">
                                                        <span
                                                            className="about-heading"
                                                            style={{
                                                                fontSize:
                                                                    "1.2rem",
                                                                fontWeight:
                                                                    "500",
                                                                color: "rgb(74,85,104)",
                                                                padding: "10px",
                                                                textDecoration:
                                                                    "Highlight",
                                                            }}
                                                        >
                                                            <div
                                                                style={{
                                                                    fontSize:
                                                                        "1rem",
                                                                }}
                                                            >
                                                                Modern Lift
                                                            </div>
                                                        </span>
                                                    </Flex>
                                                </Card>
                                            </Col>
                                            <Col sm>
                                                <Card
                                                    overflow="hidden"
                                                    variant="outline"
                                                    mt="2"
                                                    borderWidth="2px"
                                                    borderRadius="3xl"
                                                    width="170px"
                                                    mx="auto"
                                                >
                                                    <Flex justifyContent="center">
                                                        <span
                                                            className="about-heading"
                                                            style={{
                                                                fontSize:
                                                                    "1.4rem",
                                                                fontWeight:
                                                                    "500",
                                                                color: "rgb(74,85,104)",
                                                                padding: "5px",
                                                                textDecoration:
                                                                    "Highlight",
                                                            }}
                                                        >
                                                            <TbTrees
                                                                style={{
                                                                    fontSize:
                                                                        "2.5rem",
                                                                }}
                                                            />
                                                        </span>
                                                    </Flex>
                                                    <Flex justifyContent="center">
                                                        <span
                                                            className="about-heading"
                                                            style={{
                                                                fontSize:
                                                                    "1.2rem",
                                                                fontWeight:
                                                                    "500",
                                                                color: "rgb(74,85,104)",
                                                                padding: "10px",
                                                                textDecoration:
                                                                    "Highlight",
                                                            }}
                                                        >
                                                            <div
                                                                style={{
                                                                    fontSize:
                                                                        "1rem",
                                                                }}
                                                            >
                                                                50% open space
                                                            </div>
                                                        </span>
                                                    </Flex>
                                                </Card>
                                            </Col>
                                            <Col sm>
                                                <Card
                                                    overflow="hidden"
                                                    variant="outline"
                                                    mt="2"
                                                    borderWidth="2px"
                                                    borderRadius="3xl"
                                                    width="170px"
                                                    mx="auto"
                                                >
                                                    <Flex justifyContent="center">
                                                        <span
                                                            className="about-heading"
                                                            style={{
                                                                fontSize:
                                                                    "1.4rem",
                                                                fontWeight:
                                                                    "500",
                                                                color: "rgb(74,85,104)",
                                                                padding: "5px",
                                                                textDecoration:
                                                                    "Highlight",
                                                            }}
                                                        >
                                                            <SecurityIcon width="43px" />
                                                        </span>
                                                    </Flex>
                                                    <Flex justifyContent="center">
                                                        <span
                                                            className="about-heading"
                                                            style={{
                                                                fontSize:
                                                                    "1.2rem",
                                                                fontWeight:
                                                                    "500",
                                                                color: "rgb(74,85,104)",
                                                                padding: "10px",
                                                                textDecoration:
                                                                    "Highlight",
                                                            }}
                                                        >
                                                            <div
                                                                style={{
                                                                    fontSize:
                                                                        "1rem",
                                                                }}
                                                            >
                                                                Security Guard
                                                            </div>
                                                        </span>
                                                    </Flex>
                                                </Card>
                                            </Col>
                                        </Row>
                                    </div>
                                </Box>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d228.37729674427956!2d86.98127830309079!3d23.6746437989568!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f71f3be3c8b883%3A0x52ea2155058725dc!2sSP%20Mukherjee!5e0!3m2!1sen!2sin!4v1706201648051!5m2!1sen!2sin"
                                    width="600"
                                    height="450"
                                    style={{
                                        border: "0",
                                        marginLeft: "auto",
                                        marginRight: "auto",
                                        borderRadius: "20px",
                                        width: "80%",
                                        minHeight: "250px",
                                    }}
                                    allowfullscreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                                <Row
                                    style={{
                                        width: "80%",
                                        marginLeft: "auto",
                                        marginRight: "auto",
                                    }}
                                >
                                    <Col lg>
                                        <Flex justifyContent="center" my="5">
                                            <span className="about-heading">
                                                <Image
                                                    src={IMAGES.era}
                                                    width="300px"
                                                ></Image>
                                            </span>
                                        </Flex>
                                    </Col>
                                    <Col lg>
                                        <Flex justifyContent="center" my="5">
                                            <span className="about-heading">
                                                <Image
                                                    src={IMAGES.erb}
                                                    width="300px"
                                                ></Image>
                                            </span>
                                        </Flex>
                                    </Col>
                                    <Col lg>
                                        <Flex justifyContent="center" my="5">
                                            <span className="about-heading">
                                                <Image
                                                    src={IMAGES.erc}
                                                    width="300px"
                                                ></Image>
                                            </span>
                                        </Flex>
                                    </Col>
                                    <Col lg>
                                        <Flex justifyContent="center" my="5">
                                            <span className="about-heading">
                                                <Image
                                                    src={IMAGES.erd}
                                                    width="300px"
                                                ></Image>
                                            </span>
                                        </Flex>
                                    </Col>
                                    <Col lg>
                                        <Flex justifyContent="center" my="5">
                                            <span className="about-heading">
                                                <Image
                                                    src={IMAGES.ere}
                                                    width="300px"
                                                ></Image>
                                            </span>
                                        </Flex>
                                    </Col>
                                </Row>
                            </Flex>
                        )}
                        {str === "onkar" && (
                            <Flex width="100%" id="2" flexDir="column">
                                <Box
                                    mt="0"
                                    width="80%"
                                    display="block"
                                    p="5"
                                    borderRadius="2xl"
                                    borderWidth="2px"
                                    bg="rgb(190,227,248)"
                                    mx="auto"
                                >
                                    <div
                                        className="about-heading"
                                        style={{
                                            fontSize: "1.5rem",
                                            color: "rgb(74,85,104)",
                                        }}
                                    >
                                        Description
                                    </div>
                                    <div
                                        className="about-heading"
                                        style={{
                                            fontSize: "1rem",
                                            color: "rgb(74,85,104)",
                                        }}
                                    >
                                        Located in Asnasol, the Onkar Residency
                                        is thoughtfully planned, equipped with
                                        all amenities for a comfortable living
                                        and is designed by keeping the modern
                                        lifestyle in mind.
                                    </div>
                                </Box>
                                <Box
                                    width="80%"
                                    display="block"
                                    p="5"
                                    borderRadius="2xl"
                                    borderWidth="2px"
                                    bg="rgb(190,227,248)"
                                    mx="auto"
                                    my="6"
                                >
                                    <div
                                        className="about-heading"
                                        style={{
                                            fontSize: "1.5rem",
                                            color: "rgb(74,85,104)",
                                        }}
                                    >
                                        Amenities
                                    </div>
                                    <div
                                        className="about-heading"
                                        style={{
                                            fontSize: "1rem",
                                            color: "rgb(74,85,104)",
                                        }}
                                    >
                                        <Row>
                                            <Col sm>
                                                <Card
                                                    overflow="hidden"
                                                    variant="outline"
                                                    mt="2"
                                                    borderWidth="2px"
                                                    borderRadius="3xl"
                                                    width="170px"
                                                    mx="auto"
                                                >
                                                    <Flex justifyContent="center">
                                                        <span
                                                            className="about-heading"
                                                            style={{
                                                                fontSize:
                                                                    "1.4rem",
                                                                fontWeight:
                                                                    "500",
                                                                color: "rgb(74,85,104)",
                                                                padding: "5px",
                                                                textDecoration:
                                                                    "Highlight",
                                                            }}
                                                        >
                                                            <GiTap
                                                                style={{
                                                                    fontSize:
                                                                        "2.6rem",
                                                                }}
                                                            />
                                                        </span>
                                                    </Flex>
                                                    <Flex justifyContent="center">
                                                        <span
                                                            className="about-heading"
                                                            style={{
                                                                fontSize:
                                                                    "1.2rem",
                                                                fontWeight:
                                                                    "500",
                                                                color: "rgb(74,85,104)",
                                                                padding: "10px",
                                                                textDecoration:
                                                                    "Highlight",
                                                            }}
                                                        >
                                                            <div
                                                                style={{
                                                                    fontSize:
                                                                        "1rem",
                                                                }}
                                                            >
                                                                24 hrs. water
                                                                supply
                                                            </div>
                                                        </span>
                                                    </Flex>
                                                </Card>
                                            </Col>
                                            <Col sm>
                                                <Card
                                                    overflow="hidden"
                                                    variant="outline"
                                                    mt="2"
                                                    borderWidth="2px"
                                                    borderRadius="3xl"
                                                    width="170px"
                                                    mx="auto"
                                                >
                                                    <Flex justifyContent="center">
                                                        <span
                                                            className="about-heading"
                                                            style={{
                                                                fontSize:
                                                                    "1.4rem",
                                                                fontWeight:
                                                                    "500",
                                                                color: "rgb(74,85,104)",
                                                                padding: "5px",
                                                                textDecoration:
                                                                    "Highlight",
                                                            }}
                                                        >
                                                            <FaParking
                                                                style={{
                                                                    fontSize:
                                                                        "2.5rem",
                                                                }}
                                                            />
                                                        </span>
                                                    </Flex>
                                                    <Flex justifyContent="center">
                                                        <span
                                                            className="about-heading"
                                                            style={{
                                                                fontSize:
                                                                    "1.2rem",
                                                                fontWeight:
                                                                    "500",
                                                                color: "rgb(74,85,104)",
                                                                padding: "10px",
                                                                textDecoration:
                                                                    "Highlight",
                                                            }}
                                                        >
                                                            <div
                                                                style={{
                                                                    fontSize:
                                                                        "1rem",
                                                                }}
                                                            >
                                                                Car Parking
                                                            </div>
                                                        </span>
                                                    </Flex>
                                                </Card>
                                            </Col>
                                            <Col sm>
                                                <Card
                                                    overflow="hidden"
                                                    variant="outline"
                                                    mt="2"
                                                    borderWidth="2px"
                                                    borderRadius="3xl"
                                                    width="170px"
                                                    mx="auto"
                                                >
                                                    <Flex justifyContent="center">
                                                        <span
                                                            className="about-heading"
                                                            style={{
                                                                fontSize:
                                                                    "1.4rem",
                                                                fontWeight:
                                                                    "500",
                                                                color: "rgb(74,85,104)",
                                                                padding: "5px",
                                                                textDecoration:
                                                                    "Highlight",
                                                            }}
                                                        >
                                                            <GiFireExtinguisher
                                                                style={{
                                                                    fontSize:
                                                                        "2.5rem",
                                                                }}
                                                            />
                                                        </span>
                                                    </Flex>
                                                    <Flex justifyContent="center">
                                                        <span
                                                            className="about-heading"
                                                            style={{
                                                                fontSize:
                                                                    "1.2rem",
                                                                fontWeight:
                                                                    "500",
                                                                color: "rgb(74,85,104)",
                                                                padding: "10px",
                                                                textDecoration:
                                                                    "Highlight",
                                                            }}
                                                        >
                                                            <div
                                                                style={{
                                                                    fontSize:
                                                                        "1rem",
                                                                }}
                                                            >
                                                                Fire fighting
                                                                System
                                                            </div>
                                                        </span>
                                                    </Flex>
                                                </Card>
                                            </Col>
                                            <Col sm>
                                                <Card
                                                    overflow="hidden"
                                                    variant="outline"
                                                    mt="2"
                                                    borderWidth="2px"
                                                    borderRadius="3xl"
                                                    width="170px"
                                                    mx="auto"
                                                >
                                                    <Flex justifyContent="center">
                                                        <span
                                                            className="about-heading"
                                                            style={{
                                                                fontSize:
                                                                    "1.4rem",
                                                                fontWeight:
                                                                    "500",
                                                                color: "rgb(74,85,104)",
                                                                padding: "5px",
                                                                textDecoration:
                                                                    "Highlight",
                                                            }}
                                                        >
                                                            <GiLift
                                                                style={{
                                                                    fontSize:
                                                                        "2.5rem",
                                                                }}
                                                            />
                                                        </span>
                                                    </Flex>
                                                    <Flex justifyContent="center">
                                                        <span
                                                            className="about-heading"
                                                            style={{
                                                                fontSize:
                                                                    "1.2rem",
                                                                fontWeight:
                                                                    "500",
                                                                color: "rgb(74,85,104)",
                                                                padding: "10px",
                                                                textDecoration:
                                                                    "Highlight",
                                                            }}
                                                        >
                                                            <div
                                                                style={{
                                                                    fontSize:
                                                                        "1rem",
                                                                }}
                                                            >
                                                                Modern Lift
                                                            </div>
                                                        </span>
                                                    </Flex>
                                                </Card>
                                            </Col>
                                            <Col sm>
                                                <Card
                                                    overflow="hidden"
                                                    variant="outline"
                                                    mt="2"
                                                    borderWidth="2px"
                                                    borderRadius="3xl"
                                                    width="170px"
                                                    mx="auto"
                                                >
                                                    <Flex justifyContent="center">
                                                        <span
                                                            className="about-heading"
                                                            style={{
                                                                fontSize:
                                                                    "1.4rem",
                                                                fontWeight:
                                                                    "500",
                                                                color: "rgb(74,85,104)",
                                                                padding: "5px",
                                                                textDecoration:
                                                                    "Highlight",
                                                            }}
                                                        >
                                                            <TbTrees
                                                                style={{
                                                                    fontSize:
                                                                        "2.5rem",
                                                                }}
                                                            />
                                                        </span>
                                                    </Flex>
                                                    <Flex justifyContent="center">
                                                        <span
                                                            className="about-heading"
                                                            style={{
                                                                fontSize:
                                                                    "1.2rem",
                                                                fontWeight:
                                                                    "500",
                                                                color: "rgb(74,85,104)",
                                                                padding: "10px",
                                                                textDecoration:
                                                                    "Highlight",
                                                            }}
                                                        >
                                                            <div
                                                                style={{
                                                                    fontSize:
                                                                        "1rem",
                                                                }}
                                                            >
                                                                50% open space
                                                            </div>
                                                        </span>
                                                    </Flex>
                                                </Card>
                                            </Col>
                                            <Col sm>
                                                <Card
                                                    overflow="hidden"
                                                    variant="outline"
                                                    mt="2"
                                                    borderWidth="2px"
                                                    borderRadius="3xl"
                                                    width="170px"
                                                    mx="auto"
                                                >
                                                    <Flex justifyContent="center">
                                                        <span
                                                            className="about-heading"
                                                            style={{
                                                                fontSize:
                                                                    "1.4rem",
                                                                fontWeight:
                                                                    "500",
                                                                color: "rgb(74,85,104)",
                                                                padding: "5px",
                                                                textDecoration:
                                                                    "Highlight",
                                                            }}
                                                        >
                                                            <SecurityIcon width="43px" />
                                                        </span>
                                                    </Flex>
                                                    <Flex justifyContent="center">
                                                        <span
                                                            className="about-heading"
                                                            style={{
                                                                fontSize:
                                                                    "1.2rem",
                                                                fontWeight:
                                                                    "500",
                                                                color: "rgb(74,85,104)",
                                                                padding: "10px",
                                                                textDecoration:
                                                                    "Highlight",
                                                            }}
                                                        >
                                                            <div
                                                                style={{
                                                                    fontSize:
                                                                        "1rem",
                                                                }}
                                                            >
                                                                Security Guard
                                                            </div>
                                                        </span>
                                                    </Flex>
                                                </Card>
                                            </Col>
                                        </Row>
                                    </div>
                                </Box>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d228.37729674427956!2d86.98127830309079!3d23.6746437989568!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f71f3be3c8b883%3A0x52ea2155058725dc!2sSP%20Mukherjee!5e0!3m2!1sen!2sin!4v1706201648051!5m2!1sen!2sin"
                                    width="600"
                                    height="450"
                                    style={{
                                        border: "0",
                                        marginLeft: "auto",
                                        marginRight: "auto",
                                        borderRadius: "20px",
                                        width: "80%",
                                        minHeight: "250px",
                                    }}
                                    allowfullscreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                                <Row
                                    style={{
                                        width: "80%",
                                        marginLeft: "auto",
                                        marginRight: "auto",
                                    }}
                                >
                                    <Col lg>
                                        <Flex justifyContent="center" my="5">
                                            <span className="about-heading">
                                                <Image
                                                    src={IMAGES.ora}
                                                    width="300px"
                                                ></Image>
                                            </span>
                                        </Flex>
                                    </Col>
                                    <Col lg>
                                        <Flex justifyContent="center" my="5">
                                            <span className="about-heading">
                                                <Image
                                                    src={IMAGES.orb}
                                                    width="300px"
                                                ></Image>
                                            </span>
                                        </Flex>
                                    </Col>
                                    <Col lg>
                                        <Flex justifyContent="center" my="5">
                                            <span className="about-heading">
                                                <Image
                                                    src={IMAGES.orc}
                                                    width="300px"
                                                ></Image>
                                            </span>
                                        </Flex>
                                    </Col>
                                    <Col lg>
                                        <Flex justifyContent="center" my="5">
                                            <span className="about-heading">
                                                <Image
                                                    src={IMAGES.ord}
                                                    width="300px"
                                                ></Image>
                                            </span>
                                        </Flex>
                                    </Col>
                                </Row>
                            </Flex>
                        )}
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    );
}

export default Projects;
