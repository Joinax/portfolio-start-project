import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Project} from "./project/Project";
import {SectionTitle} from "../sectionTitle/SectionTitle";


export const Projects = () => {
    return (
        <StyledProjects>
            <SectionTitle title={"projects"}/>
            <FlexWrapper gap={"16px"}>
                <Project title={"ChertNodes"} text={"Minecraft servers hosting"}
                toolkit={"HTML CSS Python Flask"}/>
                <Project title={"ProtectX"} text={"Discord anti-crash bot"} toolkit={"React Express Discord.js Node.js HTML SCSS Python Flask"}/>
                <Project title={"Kahoot Answers Viewer"} text={"Get answers to your kahoot quiz"}/>
            </FlexWrapper>
        </StyledProjects>
    );
};

const StyledProjects = styled.section`
    
`

