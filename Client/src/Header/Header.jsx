import "./Header.css";
import {Box} from "@chakra-ui/react"
import { BiSolidBuildings } from "react-icons/bi";
import { HiUserGroup } from "react-icons/hi";
import { HiHome } from "react-icons/hi2";

export default function Header() {
  return <>
    <Box className="Sidebar">
        <Box className="Sidebar-element">
          <Box display="flex" style={{width:"100%"}}>
              <span style={{alignSelf:"center", marginRight:"3px", fontSize:"22px"}}><HiHome /></span> 
              <span>Home</span>
          </Box>
        </Box>
        <Box className="Sidebar-element">
          <Box display="flex" style={{width:"100%"}}>
              <span style={{alignSelf:"center", marginRight:"3px", fontSize:"22px"}}><BiSolidBuildings /></span> 
              <span>Projects</span>
          </Box>
        </Box>
        <Box className="Sidebar-element">
          <Box display="flex" style={{width:"100%"}}>
              <span style={{alignSelf:"center", marginRight:"3px", fontSize:"22px"}}><HiUserGroup /></span> 
              <span>About us</span>
          </Box>
        </Box>
        <Box className="Sidebar-element">
          <Box display="flex" style={{width:"100%"}}>
              <span style={{alignSelf:"center", marginRight:"3px", fontSize:"22px"}}><HiHome /></span> 
              <span>Contact us</span>
          </Box>
        </Box>
    </Box>
  </>
}
