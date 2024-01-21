import React from 'react';
import {Icon} from "../icon/Icon";
import styled from "styled-components";

export const Logo = () => {
    return (
            <StyledLogo>
                <Icon iconId={'Logo'} width={"16"} height={"17"} viewBox={"0 0 16 17"}/>
                <StyledSpan>Elias</StyledSpan>
            </StyledLogo>

    );
};

const StyledLogo = styled.div `
    display: flex;
    align-items: center;
    gap: 8px;
`

const StyledSpan = styled.span`
    color: #FFF;
    font-family: 'Fira Code', serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`