import React from 'react';
import {Icon} from "../icon/Icon";
import styled from "styled-components";

export const LogoOutline = () => {
    return (

            <StyledLogoOutline>
                <Icon iconId={'LogoOutline'} width={"155"} height={"155"} viewBox={"0 0 156 156"}/>
            </StyledLogoOutline>

    );
};

const StyledLogoOutline = styled.div `
    flex-shrink: 0;
`

