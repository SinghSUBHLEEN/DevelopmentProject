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
                pos="sticky"
                left="0.5"
                h="107.47%"
                boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
                w={navSize === "small" ? "55px" : "130px"}
                flexDir="column"
                justifyContent="space-between"
            >
                <Flex
                    flexDir="column"
                    alignItems="flex-start"
                    as="nav"
                    bg="inherit"
                >
                    <Tooltip
                        label={navSize === "small" ? "Home" : ""}
                        placement="right"
                        hasArrow
                        ml="5px"
                        bg="blue.600"
                    >
                        <Box
                            display="flex"
                            m="1"
                            mt="6"
                            name="home"
                            onClick={handleClickHome}
                        >
                            <IconButton
                                bg={
                                    location.pathname === "/" ||
                                    location.pathname === "/home"
                                        ? "blue.100"
                                        : "none"
                                }
                                _hover={{
                                    background:
                                        location.pathname === "/" ||
                                        location.pathname === "/home"
                                            ? "blue.200"
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
                        label={navSize === "small" ? "Projects" : ""}
                        placement="right"
                        hasArrow
                        ml="5px"
                        bg="blue.600"
                    >
                        <Box
                            display="flex"
                            m="1"
                            name="projects"
                            onClick={handleClickProjects}
                        >
                            <IconButton
                                bg={
                                    location.pathname === "/projects"
                                        ? "blue.100"
                                        : "none"
                                }
                                _hover={{
                                    background:
                                        location.pathname === "/projects"
                                            ? "blue.200"
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
                        label={navSize === "small" ? "About us" : ""}
                        placement="right"
                        hasArrow
                        ml="5px"
                        bg="blue.600"
                    >
                        <Box
                            display="flex"
                            m="1"
                            name="aboutUs"
                            onClick={handleClickAboutUs}
                        >
                            <IconButton
                                bg={
                                    location.pathname === "/aboutUs"
                                        ? "blue.100"
                                        : "none"
                                }
                                _hover={{
                                    background:
                                        location.pathname === "/aboutUs"
                                            ? "blue.200"
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
                        label={navSize === "small" ? "Contact us" : ""}
                        placement="right"
                        hasArrow
                        ml="5px"
                        bg="blue.600"
                    >
                        <Box
                            display="flex"
                            m="1"
                            name="contactUs"
                            onClick={handleClickContactUs}
                        >
                            <IconButton
                                bg={
                                    location.pathname === "/contactUs"
                                        ? "blue.100"
                                        : "none"
                                }
                                _hover={{
                                    background:
                                        location.pathname === "/contactUs"
                                            ? "blue.200"
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
