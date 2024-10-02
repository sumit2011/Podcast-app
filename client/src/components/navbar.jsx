import React from "react";
import styled from "styled-components";
import {Menu , PersonRounded} from "@mui/icons-material"; 
import { IconButton } from "@mui/material";

const NavbarDiv = styled.div`
    display: flex;
    justify-content: space-between;
    // width: 100%;
    padding: 16px 40px;
    align-items: center;
    color: ${({ theme }) => theme.text_primary};
    gap: 30px;
    background: ${({ theme }) => theme.bg};
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5.7px);
    -webkit-backdrop-filter: blur(5.7px);
    @media (max-width: 768px){
        padding: 16px;
    }
`;

const ButtonDiv = styled.div`
    font-size: 14px;
    cursor: pointer;
    text-decoration : none;
    max-width : 70px;
    display: flex;
    align-items : center;
    color: ${({ theme }) => theme.primary};
    border: 1px solid ${({ theme }) => theme.primary};
    border-radius: 6px;
    padding: 8px 10px;
    gap: 8px;

`;

const IconBtn = styled(IconButton)`
    color: ${({ theme }) => theme.text_secondary} !important;

`;

const NavBar = ({setMenuOpen , menuOpen}) => {
    return (
        <NavbarDiv>
            <IconBtn onClick={() => setMenuOpen(!menuOpen)}>
                <Menu/> 
            </IconBtn>
            <ButtonDiv>
                <PersonRounded />
                Login
            </ButtonDiv>
        </NavbarDiv>
    );
};

export default NavBar;
