import React from "react";
import styled from "styled-components";
import {MenuIcon} from "@mui/icons-material";
const NavbarDiv = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 16px 40px;
    align-items: center;
    color: ${({theme}) => theme.text_primary};
    gap: 30px;
    background: ${({theme}) => theme.bg};
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0 , 0, 0, 0.1);
    backdrop-filter: blur(5.7px);
    -webkit-backdrop-filter: blur(5.7px);
`;

const ButtonDiv = styled.div`

`;

const NavBar = () => {
    return(
        <NavbarDiv>
            {/* <MenuIcon/> */}
            <ButtonDiv>
                Login
            </ButtonDiv>
        </NavbarDiv>
    );
};

export default NavBar;