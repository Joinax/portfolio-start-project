import React from 'react';
import proj1 from "../../../../assets/images/proj-1.webp";
import {Btn} from "../../../../components/Button";
import styled from "styled-components";

type ProjectPropsType = {
    title: string
    text: string
    btnDisplay?: string
    toolkit?: string
}
export const Project = (props: ProjectPropsType) => {
    return (
        <StyledProject>
            <Photo src={proj1} alt=""/>
            <Toolkit>
                <ToolkitText>{props.toolkit}</ToolkitText>
            </Toolkit>
            <MainProject>
                <MainTitle>{props.title}</MainTitle>
                <MainText>{props.text}</MainText>
                <BtnSection>
                    <Btn btnType={"primary"} title={"Live <~>"}/>
                    <Btn btnType={"secondary"} title={"Cached >="}/>
                </BtnSection>
            </MainProject>
        </StyledProject>
    );
};

const StyledProject = styled.div`
    border: 1px solid #ABB2BF;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
`
const Photo = styled.img`
    object-fit: cover;
    border-bottom: 1px solid #ABB2BF;
`
const Toolkit = styled.div`
    border-bottom: 1px solid #ABB2BF;
    display: flex;
    padding: 8px;
    align-items: flex-start;
    gap: 8px;
    align-self: stretch;
    font-style: normal;
    line-height: normal;
`
const ToolkitText = styled.span`
    color: #ABB2BF;
    font-size: 16px;
    font-weight: 400;
`
const MainProject = styled.div`
    display: flex;
    padding: 16px;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    align-self: stretch;
    font-style: normal;
    line-height: normal;
`
const MainTitle = styled.h3`
    color: #FFF;
    font-size: 24px;
    font-weight: 500;
`
const MainText = styled.p`
    color: #ABB2BF;
    font-size: 16px;
    font-weight: 400;
`
const BtnSection= styled.div`
    display: flex;
    gap: 16px;
    flex-direction: row;
 
`