import { Box, Card, Flex, Image } from "@chakra-ui/react";
import "./AboutUs.css";
import { Col, Container, Row } from "react-bootstrap";
import IMAGES from "../../images/Images";

function AboutUs() {
    return (
        <>
            <Flex minHeight="92vh" className="about-first-parent">
                <Flex
                    flexDir="column"
                    mt="10"
                    mb="10"
                    alignSelf="center"
                    className="about-first"
                    color="gray.600"
                    py="12"
                >
                    <Row>
                        <Col sm style={{ marginBottom: "30px" }}>
                            <Image
                                src={IMAGES.p4}
                                height="300px"
                                ml="auto"
                                mr="auto"
                                borderRadius="2xl"
                                boxShadow="rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px"
                            />
                        </Col>
                        <Col sm>
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "left",
                                }}
                            >
                                <span className="fancy">About Us</span>
                            </div>
                            <p className="about-para">
                                Onkar Developers epitomizes “passion at work” in
                                totality. For us it is not only a catch phrase
                                which sounds just right, rather we all strive to
                                live it daily. It serves as our compass which
                                guides us towards creating world class quality
                                products and workmanship. It guides us to be
                                transparent in all our dealings and adhere to
                                delivery on time, each time. We changed the
                                skyline in Asansol, created landmark
                                developments in the same and many more to
                                follow. Onkar Developers is one of the finest
                                real estate development companies in India - A
                                trusted builder based out of Asansol.
                            </p>
                        </Col>
                    </Row>
                </Flex>
            </Flex>
            <Flex className="junction">
                <Image
                    src={IMAGES.plane}
                    height="230px"
                    mx="auto"
                    className="flip"
                />
            </Flex>
            <Flex minHeight="102vh" className="mission-parent">
                <Flex
                    flexDir="column"
                    mt="10"
                    mb="10"
                    alignSelf="center"
                    className="about-first"
                    color="gray.600"
                    py="12"
                >
                    <Row>
                        <Col sm>
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "left",
                                }}
                            >
                                <span className="fancy">Our Mission</span>
                            </div>
                            <p className="about-para">
                                We create spaces that enable Everyday Joys; one
                                community, one family, and one home at a time.
                                The joy we bring to neighbourhoods, to families
                                and our customers is what drives our purpose
                                forward. It has always been at the forefront of
                                everything we do, and every business decision we
                                make. We constantly strive to work in harmony
                                with all our stakeholders to achieve this shared
                                goal of 'Creating Customer Joy'.
                            </p>
                        </Col>
                        <Col sm style={{ marginBottom: "30px" }}>
                            <Image
                                src={IMAGES.p5}
                                height="300px"
                                ml="auto"
                                mr="auto"
                                borderRadius="2xl"
                                boxShadow="rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px"
                            />
                        </Col>
                    </Row>
                </Flex>
            </Flex>
        </>
    );
}

export default AboutUs;
