import React from 'react';
import {Icon} from "../icon/Icon";
import styled from "styled-components";

export const FrameDots = () => {
    return (
        <StyledFrame>
            <Icon iconId={'Circle'} width={"4"} height={"4"} viewBox={"0 0 4 4"}/>
            <Icon iconId={'Circle'} width={"4"} height={"4"} viewBox={"0 0 4 4"}/>
            <Icon iconId={'Circle'} width={"4"} height={"4"} viewBox={"0 0 4 4"}/>
            <Icon iconId={'Circle'} width={"4"} height={"4"} viewBox={"0 0 4 4"}/>
            <Icon iconId={'Circle'} width={"4"} height={"4"} viewBox={"0 0 4 4"}/>
        </StyledFrame>
    );
};

const StyledFrame = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    align-self: stretch;
`
