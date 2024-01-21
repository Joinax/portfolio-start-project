import React from 'react';
import styled from "styled-components";
import {Symbol} from "../symbol/Symbol";
import {Language} from "./Language";

export const Menu = () => {
    return (
        <StyledMenu>
            <ul>
                <li><a href=""><Symbol/>home</a></li>
                <li><a href=""><Symbol/>works</a></li>
                <li><a href=""><Symbol/>about-me</a></li>
                <li><a href=""><Symbol/>contacts</a></li>
            </ul>
            <Language/>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
    display: flex;
    color: #ABB2BF;
    ul {
        display: flex;
        gap: 30px;
    }
    a {
        &:hover{
            font-weight: 500;
        }
    }

`