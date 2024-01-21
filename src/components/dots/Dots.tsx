import React from 'react';
import styled from "styled-components";
import {FrameDots} from "./FrameDots";

export const Dots = () => {
    return (
        <StyledDots>
            <FrameDots/>
            <FrameDots/>
            <FrameDots/>
            <FrameDots/>
            <FrameDots/>
        </StyledDots>

    );
};

const StyledDots = styled.div`
    display: flex;
    width: 84px;
    height: 84px;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    flex-shrink: 0;
`

