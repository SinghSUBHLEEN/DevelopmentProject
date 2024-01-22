import "./Footer.css";
import { Box } from "@chakra-ui/react";

// import GitHubIcon from '@mui/icons-material/GitHub';
// import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

export default function Footer() {
    const handleGit = () => {};

    const date = new Date();

    return (
        <>
            <footer className="custom-footer bg-dark text-center text-white">
                <Box
                    display="flex"
                    width="100%"
                    padding={3}
                    height="100%"
                    bg="rgba(15,15,15)"
                    justifyContent="center"
                ></Box>
                <Box
                    display="flex"
                    width="100%"
                    fontSize={"lg"}
                    pt={10}
                    justifyContent="center"
                    padding={3}
                    height="100%"
                    bg="rgba(15,15,15,0.5)"
                >
                    <span
                        style={{
                            marginTop: "5px",
                            marginBottom: "5px",
                            fontSize: "13.5px",
                        }}
                    >
                        © {date.getFullYear()} ONKAR DEVELOPERS ALL RIGHTS
                        RESERVED.
                    </span>
                </Box>
            </footer>
        </>
    );
}
