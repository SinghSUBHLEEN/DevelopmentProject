import "./Sidebar.css";
import {
    Box,
    Flex,
    IconButton,
    PopoverContent,
    PopoverTrigger,
    Tooltip,
} from "@chakra-ui/react";
import { HiHome, HiOutlineMenuAlt2, HiUserGroup } from "react-icons/hi";
import { RiContactsFill } from "react-icons/ri";
import { BiSolidBuildings } from "react-icons/bi";
import { Popover } from "@chakra-ui/react";

export default function Header({ navSize, setNavSize }) {
    return (
        <>
            <Box
                pos="sticky"
                left="0"
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
                        <Box display="flex" m="1" mt="6">
                            <IconButton
                                bg="none"
                                _hover={{ background: "none" }}
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
                        <Box display="flex" m="1">
                            <IconButton
                                bg="none"
                                _hover={{ background: "none" }}
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
                        <Box display="flex" m="1">
                            <IconButton
                                bg="none"
                                _hover={{ background: "none" }}
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
                        <Box display="flex" m="1">
                            <IconButton
                                bg="none"
                                _hover={{ background: "none" }}
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
