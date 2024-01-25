import "./Footer.css";
import { Box, Flex } from "@chakra-ui/react";
import { Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

// import GitHubIcon from '@mui/icons-material/GitHub';
// import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

export default function Footer() {
    const navigate = useNavigate();

    const handleHome = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        navigate("/");
        return;
    };

    const handleAbout = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        navigate("/aboutUs");
        return;
    };

    const handleProjetcs = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        navigate("/projects");
        return;
    };

    const handleContact = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        navigate("/contactUs");
        return;
    };

    const date = new Date();

    return (
        <>
            <footer className="custom-footer bg-dark text-center text-white">
                <Flex
                    width="100%"
                    padding={3}
                    height="100%"
                    bg="white"
                    justifyContent="space-evenly"
                >
                    <Row style={{ padding: "2%" }}>
                        <Col sm>
                            <Flex
                                color="#262d33"
                                flexDirection="column"
                                fontWeight="500"
                            >
                                <span
                                    style={{
                                        fontSize: "1.1rem",
                                        color: "black",
                                        fontWeight: "650",
                                    }}
                                >
                                    QUICK LINKS
                                </span>
                                <Box
                                    mt="10px"
                                    fontSize="1rem"
                                    _hover={{ cursor: "pointer" }}
                                    onClick={handleHome}
                                    color="#262d33"
                                >
                                    Home
                                </Box>
                                <Box
                                    mt="10px"
                                    fontSize="1rem"
                                    _hover={{ cursor: "pointer" }}
                                    onClick={handleAbout}
                                >
                                    About us
                                </Box>
                                <Box
                                    mt="10px"
                                    fontSize="1rem"
                                    _hover={{ cursor: "pointer" }}
                                    onClick={handleProjetcs}
                                >
                                    Projects
                                </Box>
                                <Box
                                    mt="10px"
                                    fontSize="1rem"
                                    _hover={{ cursor: "pointer" }}
                                    onClick={handleContact}
                                    mb="7"
                                >
                                    Contact us
                                </Box>
                            </Flex>
                        </Col>
                        <Col sm>
                            <Box color="#262d33" fontWeight="500">
                                <span
                                    style={{
                                        fontSize: "1.1rem",
                                        color: "black",
                                        fontWeight: "650",
                                    }}
                                >
                                    CONNECT WITH US
                                </span>
                                <Flex
                                    mt="10px"
                                    minW="210px"
                                    fontSize="0.9rem"
                                    justifyContent="center"
                                >
                                    GT road, Auto Market, Ushagram, Asansol,
                                    West Bengal 713303
                                </Flex>
                                <Box mt="10px" fontSize="1rem">
                                    +919434360593
                                </Box>
                                <Box mt="1" fontSize="1rem">
                                    +917699991516
                                </Box>
                            </Box>
                        </Col>
                    </Row>
                </Flex>
                <Box
                    display="flex"
                    width="100%"
                    fontSize={"lg"}
                    pt={10}
                    justifyContent="center"
                    padding={3}
                    height="100%"
                    bg="#262d33"
                >
                    <span
                        style={{
                            marginTop: "5px",
                            marginBottom: "5px",
                            fontSize: "13.5px",
                        }}
                    >
                        © {date.getFullYear()} ONKAR DEVELOPERS ALL RIGHTS
                        RESERVED. Designed by{" "}
                        <a
                            href="https://github.com/SinghSUBHLEEN"
                            target="_blank"
                            style={{ textDecoration: "none", color: "#3391d0" }}
                        >
                            Subhleen Singh
                        </a>
                    </span>
                </Box>
            </footer>
        </>
    );
}
