import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Footer from "./components/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import { Box, IconButton } from "@chakra-ui/react";
import { useState } from "react";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import Logo from "./components/Icons/Logo";
import Home from "./components/Home/Home";
import AboutUs from "./components/AboutUs/AboutUs";
import ContactUs from "./components/ContactUs/ContactUs";
import Projects from "./components/Projects/Projects";
import { Container } from "react-bootstrap";

function App() {
    const [navSize, setNavSize] = useState("small");

    return (
        <>
            <div className="App">
                <Box>
                    <Box
                        display="flex"
                        boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
                    >
                        <IconButton
                            bg="none"
                            display="inline"
                            mt="2"
                            ml="3"
                            mb="2"
                            _hover={{ background: "none" }}
                            icon={<HiOutlineMenuAlt2 fontSize="1.6rem" />}
                            onClick={() => {
                                if (navSize === "small") setNavSize("large");
                                else setNavSize("small");
                            }}
                        />
                        <span
                            style={{ margin: "0px 7px", alignSelf: "center" }}
                        >
                            <Logo width="40px" height="40px" />
                        </span>
                        <Box
                            className="name"
                            style={{
                                alignSelf: "center",
                                fontWeight: "normal",
                                // fontFamily: "",
                                fontSize: "1.2rem",
                            }}
                            _hover={{
                                cursor: "pointer",
                            }}
                        >
                            Onkar Developers
                        </Box>
                    </Box>
                </Box>
                <Box display="flex" width="100%">
                    <Sidebar navSize={navSize} setNavSize={setNavSize} />
                    <Box style={{ display: "block", width: "100%" }}>
                        <Routes>
                            <Route path="/home" Component={Home} />
                            <Route path="/" Component={Home} />
                            <Route path="/aboutUs" Component={AboutUs} />
                            <Route path="/contactUs" Component={ContactUs} />
                            <Route path="/projects" Component={Projects} />
                        </Routes>
                    </Box>
                </Box>
            </div>
            <Footer />
        </>
    );
}

export default App;
