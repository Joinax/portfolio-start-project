import React from 'react';
import photo from '../../../assets/images/foto-1.webp'
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Dots} from "../../../components/dots/Dots";
import {LogoOutline} from "../../../components/logo/LogoOutline";
import {Btn} from "../../../components/Button";


export const Main = () => {
    return (
        <StyledFirst>
            <FlexWrapper align={"center"} justify={"space-around"}>
                <MainBlock>
                    <MainTitle>
                        <Title>Elias is a <TitleColor>web designer</TitleColor>  and <TitleColor>front-end developer</TitleColor> </Title>
                    </MainTitle>
                    <StyledText>He crafts responsive websites where technologies meet creativity</StyledText>
                    <Btn btnType={"primary"} display={"inline-flex"} title={"Contact me!!"}/>
                </MainBlock>
                <StyledBlockPhoto>
                    <LogoOutline/>
                    <Photo src={photo} alt=""/>
                    <Dots/>
                    <StyledBlock>
                        <StyledRectangle/>
                        <StyledBlockText>Currently working on
                            <TextPortfolio> Portfolio</TextPortfolio>
                        </StyledBlockText>
                    </StyledBlock>
                </StyledBlockPhoto>
            </FlexWrapper>
        </StyledFirst>

    );
};

const StyledFirst = styled.section`
    //height: 423px;
`

const MainBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    //width: 537px;
    //height: 227px;

`

const MainTitle = styled.h1`
`
const Title = styled.p`
    color: #FFF;
    font-size: 32px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
`

const TitleColor = styled.span`
    color: #C778DD;
    font-size: 32px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
`

const StyledText = styled.p`
    color: #ABB2BF;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 25px;
`

const StyledBlock = styled.div`
    display: flex;
    //width: 402px;
    padding: 8px;
    align-items: center;
    gap: 10px;
    border: 1px solid #ABB2BF;
`

const StyledBlockText = styled.span`
    color: #ABB2BF;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`

const TextPortfolio = styled.span`
    color: #FFF;
    font-weight: 600;
`

const StyledRectangle = styled.div`
    width: 16px;
    height: 16px;
    border: 1px solid #C778DD;
    background: #C778DD;
`

const StyledBlockPhoto = styled.div`
    //width: 469px;
    //height: 386px;
    display: flex;
    flex-direction: column;
    position: relative;

`

const Photo = styled.img`
    //width: 457px;
    //height: 386px;
    object-fit: cover;
    position: absolute;
`
