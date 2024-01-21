import styled from "styled-components";
import React from 'react';
import {StyledSymbol} from "../../../components/symbol/Symbol";

type SectionTitlePropsType = {
    title?: string
    symbol?: string
    fontSize?: string
    gap?: string
}
export const SectionTitle = (props: SectionTitlePropsType) => {
    return (
        <Section>
            <StyledSymbol fontSize={props.fontSize || "32px"}>{props.symbol || "#"}</StyledSymbol>
            <StyledSectionTitle>{props.title}</StyledSectionTitle>
        </Section>
    );
};

const Section = styled.div<SectionTitlePropsType>`
    display: flex;
`
const StyledSectionTitle = styled.h2<SectionTitlePropsType>`
    color: #FFF;
    font-size: 32px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`
