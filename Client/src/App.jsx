import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Footer from "./components/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import { Box, IconButton } from "@chakra-ui/react";
import { useState } from "react";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import Logo from "./components/Icons/Logo";
import Home from "./components/Home/Home";

function App() {
    const [navSize, setNavSize] = useState("small");

    return (
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
                    <span style={{ margin: "0px 7px", alignSelf: "center" }}>
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
                    >
                        Onkar Developers
                    </Box>
                </Box>
            </Box>
            <Box
                display="flex"
                // justifyContent="space-between"
                className="upper"
            >
                <Sidebar navSize={navSize} setNavSize={setNavSize} />
                <div style={{ display: "block" }}>
                    <Routes>
                        <Route path="/home" Component={Home}></Route>
                        <Route path="/" Component={Home}></Route>
                    </Routes>
                </div>
            </Box>
            <Footer></Footer>
        </div>
    );
}

export default App;
