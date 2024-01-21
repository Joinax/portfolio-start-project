import React from 'react';
import styled from "styled-components";

type SkillPropsType = {
    title: string
    text: string
}
export const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkill>
            <SkillTitle>{props.title}</SkillTitle>
            <SkillText>{props.text}</SkillText>
        </StyledSkill>
    );
};

const StyledSkill = styled.div`
    font-style: normal;
    line-height: normal;
    font-size: 16px;
    display: inline-flex;
    padding: 8px 0px;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    border: 1px solid #ABB2BF;
`

const SkillTitle = styled.div`
    color: #FFF;
    font-weight: 600;

`

const SkillText = styled.div`
    color: #ABB2BF;
    font-weight: 400;
    border-top: 1px solid #ABB2BF;
`