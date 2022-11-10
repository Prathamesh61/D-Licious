import {
     Box,
     IconButton,
     Menu,
     MenuButton,
     MenuDivider,
     MenuItem,
     MenuList,
} from "@chakra-ui/react";
import React from "react";
import { MdOutlineAccountCircle } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Profile = () => {
     let navigate = useNavigate()
     let handleLogout = () => {
          localStorage.removeItem("token");
          return navigate("/login")
     };
     return (
          <Menu>
               <MenuButton
                    as={IconButton}
                    aria-label="Options"
                    icon={<MdOutlineAccountCircle size={"50px"} />}
                    variant=""
               />
               <MenuList>
                    <MenuItem icon={""}>
                         Profile
                    </MenuItem>
                    <MenuItem icon={""} >
                         App Support
                    </MenuItem>
                    <MenuDivider />
                    <MenuItem onClick={handleLogout} icon={""}>
                         Logout
                    </MenuItem>
               </MenuList>
          </Menu>
     );
};

export default Profile;
