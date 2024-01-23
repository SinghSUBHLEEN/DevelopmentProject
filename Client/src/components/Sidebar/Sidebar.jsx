import "./Sidebar.css";
import { Box, Flex, IconButton, Tooltip } from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";
import { HiHome, HiUserGroup } from "react-icons/hi";
import { RiContactsFill } from "react-icons/ri";
import { BiSolidBuildings } from "react-icons/bi";

export default function Header({ navSize, setNavSize }) {
    const location = useLocation();
    const navigate = useNavigate();

    const handleClickHome = () => {
        navigate("/");
    };

    const handleClickProjects = () => {
        navigate("/projects");
    };

    const handleClickAboutUs = () => {
        navigate("/aboutUs");
    };

    const handleClickContactUs = () => {
        navigate("/contactUs");
    };

    return (
        <>
            <Box
                display="block"
                ml={navSize === "small" ? "-10px" : "0px"}
                height="100vh"
                boxShadow="0 0 12px 0 rgba(0, 0, 0, 0.05)"
                w={navSize === "small" ? "60px" : "150px"}
            >
                <Flex
                    flexDir="column"
                    alignItems="flex-start"
                    as="nav"
                    bg="inherit"
                >
                    <Tooltip
                        label={navSize === "small" ? "Home" : ""}
                        // label="Home"
                        placement="right"
                        ml="3px"
                        py="4px"
                        px="3"
                        hasArrow
                        backgroundImage="linear-gradient(to right, #2c3e50 0%, #3498db 51%, #2c3e50 100%)"
                    >
                        <Box
                            display="flex"
                            ml="2"
                            mt="6"
                            name="home"
                            borderRadius="2xl"
                            p="2"
                            onClick={handleClickHome}
                            bg={
                                (location.pathname === "/" ||
                                    location.pathname === "/home") &&
                                navSize === "large"
                                    ? "blue.100"
                                    : "none"
                            }
                            // _hover={{
                            //     background:
                            //         location.pathname === "/" ||
                            //         location.pathname === "/home"
                            //             ? "blue.200"
                            //             : "none",
                            // }}
                        >
                            <IconButton
                                bg={
                                    location.pathname === "/" ||
                                    location.pathname === "/home"
                                        ? "blue.100"
                                        : "none"
                                }
                                pr="0"
                                mr="1"
                                borderRadius="xl"
                                _hover={{
                                    background:
                                        location.pathname === "/" ||
                                        location.pathname === "/home"
                                            ? "blue.100"
                                            : "none",
                                }}
                                icon={<HiHome fontSize="1.5rem" />}
                            />
                            <Box
                                display={navSize === "small" ? "none" : "flex"}
                                style={{ alignSelf: "center" }}
                                _hover={{ cursor: "pointer" }}
                            >
                                Home
                            </Box>
                        </Box>
                    </Tooltip>
                    <Tooltip
                        label={navSize === "small" ? "About us" : ""}
                        placement="right"
                        hasArrow
                        ml="5px"
                        py="4px"
                        px="3"
                        backgroundImage="linear-gradient(to right, #2c3e50 0%, #3498db 51%, #2c3e50 100%)"
                    >
                        <Box
                            display="flex"
                            m="1"
                            ml="2"
                            borderRadius="2xl"
                            p="2"
                            name="aboutUs"
                            onClick={handleClickAboutUs}
                            bg={
                                location.pathname === "/aboutUs" &&
                                navSize === "large"
                                    ? "blue.100"
                                    : "none"
                            }
                        >
                            <IconButton
                                bg={
                                    location.pathname === "/aboutUs"
                                        ? "blue.100"
                                        : "none"
                                }
                                mr="1"
                                borderRadius="xl"
                                _hover={{
                                    background:
                                        location.pathname === "/aboutUs"
                                            ? "blue.100"
                                            : "none",
                                }}
                                icon={<HiUserGroup fontSize="1.5rem" />}
                            />
                            <Box
                                display={navSize === "small" ? "none" : "flex"}
                                style={{ alignSelf: "center" }}
                                _hover={{ cursor: "pointer" }}
                            >
                                About us
                            </Box>
                        </Box>
                    </Tooltip>
                    <Tooltip
                        label={navSize === "small" ? "Projects" : ""}
                        // label="Projects"
                        placement="right"
                        hasArrow
                        ml="5px"
                        py="4px"
                        px="3"
                        backgroundImage="linear-gradient(to right, #2c3e50 0%, #3498db 51%, #2c3e50 100%)"
                    >
                        <Box
                            display="flex"
                            m="1"
                            ml="2"
                            borderRadius="2xl"
                            p="2"
                            name="projects"
                            onClick={handleClickProjects}
                            bg={
                                location.pathname === "/projects" &&
                                navSize === "large"
                                    ? "blue.100"
                                    : "none"
                            }
                            _hover={{
                                background:
                                    location.pathname === "/projects" &&
                                    navSize === "large"
                                        ? "blue.100"
                                        : "none",
                            }}
                        >
                            <IconButton
                                bg={
                                    location.pathname === "/projects"
                                        ? "blue.100"
                                        : "none"
                                }
                                mr="1"
                                borderRadius="xl"
                                _hover={{
                                    background:
                                        location.pathname === "/projects"
                                            ? "blue.100"
                                            : "none",
                                }}
                                icon={<BiSolidBuildings fontSize="1.5rem" />}
                            />
                            <Box
                                display={navSize === "small" ? "none" : "flex"}
                                style={{ alignSelf: "center" }}
                                _hover={{ cursor: "pointer" }}
                            >
                                Projects
                            </Box>
                        </Box>
                    </Tooltip>
                    <Tooltip
                        label={navSize === "small" ? "Contact us" : ""}
                        placement="right"
                        hasArrow
                        ml="5px"
                        py="4px"
                        px="3"
                        backgroundImage="linear-gradient(to right, #2c3e50 0%, #3498db 51%, #2c3e50 100%)"
                    >
                        <Box
                            display="flex"
                            m="1"
                            ml="2"
                            borderRadius="2xl"
                            p="2"
                            name="contactUs"
                            onClick={handleClickContactUs}
                            bg={
                                location.pathname === "/contactUs" &&
                                navSize === "large"
                                    ? "blue.100"
                                    : "none"
                            }
                        >
                            <IconButton
                                bg={
                                    location.pathname === "/contactUs"
                                        ? "blue.100"
                                        : "none"
                                }
                                mr="1"
                                borderRadius="xl"
                                _hover={{
                                    background:
                                        location.pathname === "/contactUs"
                                            ? "blue.100"
                                            : "none",
                                }}
                                icon={<RiContactsFill fontSize="1.5rem" />}
                            />
                            <Box
                                display={navSize === "small" ? "none" : "flex"}
                                style={{ alignSelf: "center" }}
                                _hover={{ cursor: "pointer" }}
                            >
                                Contact us
                            </Box>
                        </Box>
                    </Tooltip>
                </Flex>
                <Flex></Flex>
            </Box>
        </>
    );
}
