import React from 'react';
import styled from "styled-components";
import {Skill} from "./skill/Skill";
import {SectionTitle} from "../sectionTitle/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";

export const Skills = () => {
    return (
        <StyledSkills>
            <SectionTitle title={"skills"}/>
            <FlexWrapper gap={"8px"}>
                <Skill title={"Languages"} text={"TypeScript Lua Python JavaScript"}/>
                <Skill title={"Databases"} text={"TypeScript Lua Python JavaScript"}/>
                <Skill title={"Tools"} text={"TypeScript Lua Python JavaScript"}/>
                <Skill title={"Tools"} text={"TypeScript Lua Python JavaScript"}/>
                <Skill title={"Tools"} text={"TypeScript Lua Python JavaScript"}/>
            </FlexWrapper>


        </StyledSkills>
    );
};

const StyledSkills = styled.section`

`
